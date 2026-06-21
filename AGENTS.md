# Vibe Coding for Managers

## Product Purpose

This is a signup-first personal website for non-technical managers learning to build software products with AI. The primary conversion is email signup. Do not change the website design, positioning, or copy unless the user explicitly asks for it.

Core positioning:

- "It's not too late to build."
- AI has made software building accessible to managers.
- The founder is learning in public, not claiming to be an AI guru.

## Technology

- Next.js 16 App Router
- React 19
- TypeScript
- Tailwind CSS 4
- Node.js 22 recommended through `.nvmrc`
- Vercel deployment
- Google Sheets storage through a Google Apps Script web app

Common verification commands:

```bash
npm run lint
npm run typecheck
npm run build
```

All three commands passed after the background signup implementation was added.

## Important Files

- `app/page.tsx`: Home page.
- `app/about/page.tsx`: About page.
- `components/marketing/signup-form.tsx`: Existing signup UI. Keep its public behavior and request contract stable.
- `app/api/subscribe/route.ts`: Signup validation and storage integration.
- `components/data/site-copy.ts`: Marketing and course copy.
- `docs/google-sheets-apps-script.js`: Source to deploy in Google Apps Script.
- `docs/google-sheets-setup.md`: Full Google Sheets, local, and Vercel setup instructions.
- `.env.example`: Required server environment variable names.
- `vercel.json`: Vercel framework, install, and build configuration.

## Signup Contract

The browser sends:

```http
POST /api/subscribe
Content-Type: application/json

{
  "email": "manager@example.com",
  "source": "home-hero"
}
```

Valid success response:

```json
{
  "ok": true,
  "message": "You're on the list."
}
```

Invalid email response:

```json
{
  "error": "Enter a valid email address."
}
```

Do not change this frontend/API contract without coordinating the form and any external consumers.

## Signup Architecture

Current flow:

```text
Browser
  -> POST /api/subscribe
  -> server-side email validation and environment checks
  -> immediate success response
  -> Next.js after() background task
  -> Google Apps Script webhook
  -> Google Sheet
```

The API uses Next.js `after()` so users no longer wait for the Google Apps Script and Sheets write. A local production test returned in approximately 986 ms instead of more than 8 seconds.

Important reliability tradeoff:

- Success confirms that validation passed and the background write was scheduled.
- Success does not prove that Google Sheets accepted the row.
- Background failures are logged as `Background signup storage failed` in Vercel Function logs.
- There is currently no retry queue. This is an accepted simplicity tradeoff for a waitlist expecting fewer than 1,000 subscribers.

The route checks that webhook configuration exists before returning success. Keep secrets server-side and never introduce `NEXT_PUBLIC_` variants for them.

## Stored Data

Each Google Sheet row contains:

```text
timestamp | email | source
```

- `timestamp`: ISO timestamp created by the Next.js API.
- `email`: trimmed and converted to lowercase.
- `source`: signup-form location such as `home-hero`, `home-final`, or `about-final`.

## Environment Variables

Required locally in `.env.local` and in Vercel Project Settings:

```text
GOOGLE_SHEETS_WEBHOOK_URL=https://script.google.com/macros/s/DEPLOYMENT_ID/exec
GOOGLE_SHEETS_WEBHOOK_SECRET=long_random_shared_secret
GOOGLE_SHEETS_TIMEOUT_MS=15000
```

Configuration locations:

- Local development: root `.env.local`.
- Vercel: Project Settings -> Environment Variables.
- Set variables for Production and any Preview/Development environments that should write signups.
- Redeploy Vercel after changing environment variables.

Never commit `.env.local`. It is covered by `.env*.local` in `.gitignore`.

## Google Sheets And Apps Script

Destination Sheet ID:

```text
1cGuw7Fdb9BBqP77l6zK9NJgc14nhGw3jwwJJeletWcA
```

The Sheet ID is configuration, not an application secret. It is stored as an Apps Script project property, not hardcoded in the Next.js route.

Required Apps Script project properties:

```text
SPREADSHEET_ID=1cGuw7Fdb9BBqP77l6zK9NJgc14nhGw3jwwJJeletWcA
SHEET_NAME=Signups
WEBHOOK_SECRET=same_value_as_GOOGLE_SHEETS_WEBHOOK_SECRET
```

Apps Script deployment settings:

- Deployment type: Web app.
- Execute as: Me.
- Who has access: Anyone.
- Use the Web app URL for `GOOGLE_SHEETS_WEBHOOK_URL`.
- The deployment ID is not the webhook secret.
- After changing Apps Script code, deploy a new version through Deploy -> Manage deployments.

The deployable script is `docs/google-sheets-apps-script.js`. It validates the secret and email, uses a script lock, creates the `Signups` tab and headers when needed, appends the row, and returns optional timing details.

## Testing

Start locally:

```bash
npm install
npm run dev
```

Test the Next.js endpoint from PowerShell:

```powershell
$body = @{ email = "localhost-test@example.com"; source = "localhost-test" } | ConvertTo-Json
Invoke-RestMethod -Uri "http://localhost:3000/api/subscribe" -Method Post -ContentType "application/json" -Body $body
```

After a successful API response, allow time for the background task and verify the row in the `Signups` sheet. Check local server output or Vercel Function logs if no row appears.

For independent Apps Script testing, POST JSON containing `secret`, `timestamp`, `email`, and `source` directly to the Web app URL. Do not print or commit the real secret.

## Deployment

Before deploying:

1. Run lint, typecheck, and build.
2. Confirm `.env.local` is ignored and no secrets are staged.
3. Confirm the three environment variables exist in Vercel.
4. Confirm the Apps Script deployment is active and accessible to `Anyone`.
5. Deploy to Vercel.
6. Submit one production signup and verify its row in Google Sheets.
7. Review Vercel Function logs for background storage errors.

## Git Notes

Git is installed at `C:\Program Files\Git\cmd\git.exe` but may not be present on the shell PATH. Use the full path in PowerShell when necessary:

```powershell
& "C:\Program Files\Git\cmd\git.exe" status
```

The background signup change was committed as:

```text
fe72f1c Improve signup response performance
```

Do not commit `.env.local`, `.next`, `node_modules`, `.vercel`, or `*.tsbuildinfo`.

## Future Improvements

For the current scale, keep Google Apps Script and background writes. If signup loss becomes unacceptable, add durable storage or a retry queue. A direct Google Sheets API integration can tie success to persistence but introduces Google Cloud service-account credentials and more maintenance while still making the user wait for the Sheet write.
