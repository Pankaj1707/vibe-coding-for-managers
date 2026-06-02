import { NextResponse } from "next/server";

export const runtime = "nodejs";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const sheetsWebhookUrl = process.env.GOOGLE_SHEETS_WEBHOOK_URL;
const sheetsWebhookSecret = process.env.GOOGLE_SHEETS_WEBHOOK_SECRET;
const configuredTimeoutMs = Number(process.env.GOOGLE_SHEETS_TIMEOUT_MS ?? 8000);
const sheetsTimeoutMs = Number.isFinite(configuredTimeoutMs) ? configuredTimeoutMs : 8000;

type SheetsPayload = {
  timestamp: string;
  email: string;
  source: string;
};

async function appendSignupToSheet(payload: SheetsPayload) {
  if (!sheetsWebhookUrl || !sheetsWebhookSecret) {
    throw new Error("Google Sheets signup storage is not configured.");
  }

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), sheetsTimeoutMs);

  try {
    const response = await fetch(sheetsWebhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        secret: sheetsWebhookSecret,
        ...payload,
      }),
      signal: controller.signal,
    });

    const result = (await response.json().catch(() => null)) as { ok?: boolean; error?: string } | null;

    if (!response.ok || result?.ok !== true) {
      throw new Error(result?.error ?? "Google Sheets append failed.");
    }
  } finally {
    clearTimeout(timeout);
  }
}

export async function POST(request: Request) {
  const body = (await request.json().catch(() => null)) as { email?: unknown; source?: unknown } | null;
  const email = typeof body?.email === "string" ? body.email.trim().toLowerCase() : "";
  const source = typeof body?.source === "string" && body.source.trim() ? body.source.trim() : "unknown";

  if (!emailPattern.test(email)) {
    return NextResponse.json({ error: "Enter a valid email address." }, { status: 400 });
  }

  const signup = {
    timestamp: new Date().toISOString(),
    email,
    source,
  };

  // Design decision: keep this route as the stable integration point. The frontend can
  // stay unchanged now, and Kit can still be added later behind this same API contract.
  try {
    await appendSignupToSheet(signup);
  } catch (error) {
    console.error("Signup storage failed", error);

    return NextResponse.json(
      { error: "We could not save your email. Please try again." },
      { status: 500 },
    );
  }

  return NextResponse.json({
    ok: true,
    message: "You're on the list.",
  });
}
