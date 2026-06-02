import { after, NextResponse } from "next/server";

export const runtime = "nodejs";
export const maxDuration = 15;

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const sheetsWebhookUrl = process.env.GOOGLE_SHEETS_WEBHOOK_URL;
const sheetsWebhookSecret = process.env.GOOGLE_SHEETS_WEBHOOK_SECRET;
const configuredTimeoutMs = Number(process.env.GOOGLE_SHEETS_TIMEOUT_MS ?? 15000);
const sheetsTimeoutMs = Number.isFinite(configuredTimeoutMs) ? configuredTimeoutMs : 15000;

type SheetsPayload = {
  timestamp: string;
  email: string;
  source: string;
};

type SheetsResponse = {
  ok?: boolean;
  error?: string;
  timings?: {
    totalMs?: number;
    lockMs?: number;
    parseMs?: number;
    configMs?: number;
    validationMs?: number;
    openSpreadsheetMs?: number;
    getSheetMs?: number;
    ensureHeadersMs?: number;
    appendRowMs?: number;
  };
};

async function appendSignupToSheet(payload: SheetsPayload, webhookUrl: string, webhookSecret: string) {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), sheetsTimeoutMs);
  const startedAt = performance.now();

  try {
    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        secret: webhookSecret,
        ...payload,
      }),
      signal: controller.signal,
    });

    const result = (await response.json().catch(() => null)) as SheetsResponse | null;
    const durationMs = Math.round(performance.now() - startedAt);

    console.info("[signup timing] api_to_apps_script_ms", {
      durationMs,
      status: response.status,
      source: payload.source,
      appsScriptTimings: result?.timings,
    });

    if (!response.ok || result?.ok !== true) {
      throw new Error(result?.error ?? "Google Sheets append failed.");
    }
  } finally {
    clearTimeout(timeout);
  }
}

export async function POST(request: Request) {
  const requestStartedAt = performance.now();
  const body = (await request.json().catch(() => null)) as { email?: unknown; source?: unknown } | null;
  const email = typeof body?.email === "string" ? body.email.trim().toLowerCase() : "";
  const source = typeof body?.source === "string" && body.source.trim() ? body.source.trim() : "unknown";

  if (!emailPattern.test(email)) {
    return NextResponse.json({ error: "Enter a valid email address." }, { status: 400 });
  }

  if (!sheetsWebhookUrl || !sheetsWebhookSecret) {
    console.error("Signup storage is not configured.");

    return NextResponse.json(
      { error: "We could not save your email. Please try again." },
      { status: 500 },
    );
  }

  const signup = {
    timestamp: new Date().toISOString(),
    email,
    source,
  };

  // Design decision: validate synchronously, then write to Sheets after the response.
  // This keeps the signup UX fast while preserving the existing Google Apps Script path.
  after(async () => {
    try {
      await appendSignupToSheet(signup, sheetsWebhookUrl, sheetsWebhookSecret);
    } catch (error) {
      console.error("Background signup storage failed", { source, error });
    }
  });

  console.info("[signup timing] api_total_ms", {
    durationMs: Math.round(performance.now() - requestStartedAt),
    source,
    storageMode: "background",
  });

  return NextResponse.json({
    ok: true,
    message: "You're on the list.",
  });
}
