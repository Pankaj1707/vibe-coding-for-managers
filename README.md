# Vibe Coding for Managers

Version 1 of a signup-first personal website for managers learning to build software products with AI.

## Stack

- Next.js App Router
- TypeScript
- Tailwind CSS
- Google Sheets email capture through a free Google Apps Script webhook

## Local Development

This project requires Node.js `20.9.0` or newer, matching the current Next.js installation requirements.

```bash
npm install
npm run dev
```

## Email Capture

The signup form posts to `app/api/subscribe/route.ts`. The API route validates the email, adds a timestamp, and appends the signup to Google Sheets through Google Apps Script.

Setup instructions are in `docs/google-sheets-setup.md`.

## Future Kit Integration

Kit can still be added behind `app/api/subscribe/route.ts` later. The frontend already posts normalized email data to this route, so the page components do not need to change.
