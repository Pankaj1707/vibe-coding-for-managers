"use client";

import { FormEvent, useState } from "react";
import { cn } from "@/lib/cn";

type SignupFormProps = {
  source: string;
  compact?: boolean;
};

export function SignupForm({ source, compact = false }: SignupFormProps) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    setMessage("");

    const response = await fetch("/api/subscribe", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, source }),
    });

    const payload = (await response.json().catch(() => ({}))) as { message?: string; error?: string };

    if (!response.ok) {
      setStatus("error");
      setMessage(payload.error ?? "Something went wrong. Try again.");
      return;
    }

    setStatus("success");
    setEmail("");
    setMessage(payload.message ?? "You're on the list.");
  }

  return (
    <form onSubmit={onSubmit} className={cn("w-full", compact ? "max-w-2xl" : "max-w-3xl")}>
      <div className="flex flex-col border-2 border-black bg-background sm:flex-row">
        <label htmlFor={`email-${source}`} className="sr-only">
          Email address
        </label>
        <input
          id={`email-${source}`}
          type="email"
          required
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder="Your email"
          autoComplete="email"
          className="min-h-16 flex-1 border-b-2 border-black px-5 text-lg outline-none placeholder:text-black/45 focus:bg-muted sm:border-b-0 sm:border-r-2"
        />
        <button
          type="submit"
          disabled={status === "loading"}
          className="min-h-16 bg-black px-6 text-base font-bold uppercase text-white transition-colors hover:bg-accent disabled:cursor-wait disabled:bg-black/70 md:px-8"
        >
          {status === "loading" ? "Joining" : "Join the list"}
        </button>
      </div>
      <div className="mt-3 min-h-6 text-sm font-medium" aria-live="polite">
        {message ? <p className={status === "error" ? "text-accent" : "text-black/70"}>{message}</p> : null}
      </div>
    </form>
  );
}
