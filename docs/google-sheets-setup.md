# Google Sheets Signup Storage

This site stores signups for free by sending validated emails from the Next.js API route to a Google Apps Script web app. Apps Script appends each signup to the existing Google Sheet.

Destination Sheet ID:

```text
1cGuw7Fdb9BBqP77l6zK9NJgc14nhGw3jwwJJeletWcA
```

The Sheet ID is configuration, not application code. It belongs in Apps Script project properties, not in the Next.js route or browser bundle.

## Architecture

1. The existing signup form posts `{ email, source }` to `/api/subscribe`.
2. `/api/subscribe` validates the email, adds a server timestamp, and sends the row to Google Apps Script.
3. Google Apps Script checks a shared secret stored in script properties.
4. Apps Script appends `timestamp`, `email`, and `source` to the configured Sheet.
5. The frontend receives the same API response shape it already expects.

This is free to operate within Google's normal consumer quotas and does not require a paid database.

## Google Sheet Setup

1. Open the existing Google Sheet:

```text
https://docs.google.com/spreadsheets/d/1cGuw7Fdb9BBqP77l6zK9NJgc14nhGw3jwwJJeletWcA/edit
```

2. Confirm there is a tab named `Signups`.
3. Add this header row if you want to set it manually:

```text
timestamp | email | source
```

The Apps Script will also create the headers automatically if they are missing.

## Apps Script Setup

1. In the Google Sheet, open `Extensions` -> `Apps Script`.
2. Replace the default code with the contents of `docs/google-sheets-apps-script.js`.
3. Open `Project Settings` -> `Script properties`.
4. Add these properties:

```text
SPREADSHEET_ID=1cGuw7Fdb9BBqP77l6zK9NJgc14nhGw3jwwJJeletWcA
SHEET_NAME=Signups
WEBHOOK_SECRET=a_long_random_secret_value
```

5. Click `Deploy` -> `New deployment`.
6. Select `Web app`.
7. Set `Execute as` to `Me`.
8. Set `Who has access` to `Anyone`.
9. Deploy and authorize the script.
10. Copy the Web App URL.

The script is protected by `WEBHOOK_SECRET`, so the web app URL can be public while writes still require the shared secret. Use a long random value and keep it out of source control.

## Next.js Environment Variables

Create `.env.local` in the project root for local development:

```bash
GOOGLE_SHEETS_WEBHOOK_URL=https://script.google.com/macros/s/your_deployment_id/exec
GOOGLE_SHEETS_WEBHOOK_SECRET=a_long_random_secret_value
GOOGLE_SHEETS_TIMEOUT_MS=8000
```

Use the same value for `GOOGLE_SHEETS_WEBHOOK_SECRET` and the Apps Script `WEBHOOK_SECRET` property.

The exact Next.js environment variables are:

- `GOOGLE_SHEETS_WEBHOOK_URL`: The Apps Script Web App URL copied after deployment. Configure in `.env.local` locally and in Vercel Project Settings.
- `GOOGLE_SHEETS_WEBHOOK_SECRET`: The shared secret. Configure the same value in `.env.local`, Vercel, and Apps Script `WEBHOOK_SECRET`.
- `GOOGLE_SHEETS_TIMEOUT_MS`: Optional timeout for the server-to-script request. `8000` is a reasonable default.

The exact Apps Script project properties are:

- `SPREADSHEET_ID`: `1cGuw7Fdb9BBqP77l6zK9NJgc14nhGw3jwwJJeletWcA`
- `SHEET_NAME`: `Signups`
- `WEBHOOK_SECRET`: The same value used by `GOOGLE_SHEETS_WEBHOOK_SECRET`

## Local Testing

1. Restart the Next.js dev server after adding `.env.local`.
2. Submit an email from the homepage or about page.
3. Confirm a new row appears in the Google Sheet with:
   - timestamp
   - email
   - source

You can also test the route directly:

```bash
curl -X POST http://localhost:3000/api/subscribe \
  -H "Content-Type: application/json" \
  -d "{\"email\":\"manager@example.com\",\"source\":\"local-test\"}"
```

Expected success response:

```json
{
  "ok": true,
  "message": "You're on the list."
}
```

Expected invalid email response:

```json
{
  "error": "Enter a valid email address."
}
```

## Vercel Deployment

1. Open the Vercel project.
2. Go to `Settings` -> `Environment Variables`.
3. Add:

```text
GOOGLE_SHEETS_WEBHOOK_URL=https://script.google.com/macros/s/your_deployment_id/exec
GOOGLE_SHEETS_WEBHOOK_SECRET=a_long_random_secret_value
GOOGLE_SHEETS_TIMEOUT_MS=8000
```

4. Add the variables to `Production`, `Preview`, and `Development` if you want all Vercel environments to write to the same Sheet.
5. Redeploy the project after adding or changing environment variables.
6. Submit a signup on the deployed site and confirm the row appears in the Sheet.

## Example Request and Response Flow

Browser to Next.js:

```http
POST /api/subscribe
Content-Type: application/json

{
  "email": "manager@example.com",
  "source": "home-hero"
}
```

Next.js to Apps Script:

```json
{
  "secret": "shared_secret_value",
  "timestamp": "2026-06-02T10:30:00.000Z",
  "email": "manager@example.com",
  "source": "home-hero"
}
```

Apps Script appends this row:

```text
2026-06-02T10:30:00.000Z | manager@example.com | home-hero
```

Next.js returns to the browser:

```json
{
  "ok": true,
  "message": "You're on the list."
}
```

## Verification Checklist

- Submit from the homepage hero form and confirm `source` is `home-hero`.
- Submit from the homepage final CTA and confirm `source` is `home-final`.
- Submit from the about page final CTA and confirm `source` is `about-final`.
- Confirm the timestamp is present and uses ISO format.
- Confirm the email is stored lowercase.
- Confirm no secret appears in browser dev tools or frontend source.

If the form returns an error, check:

- The Apps Script deployment is a Web App.
- The deployment access is `Anyone`.
- The Sheet ID is correct.
- The secret values match exactly.
- The Apps Script has been authorized.
