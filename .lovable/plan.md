# Save Trial Bookings to Google Sheets

Every "Book Your Free Trial" submission will append a new row to a Google Sheet you own, so you can track leads like a CRM.

## How it will work

1. You connect your Google account (one click) and share/own a Google Sheet for leads.
2. The contact form posts to a small server endpoint in the app.
3. The server appends a row to your sheet with: timestamp, name, email, country, grade, curriculum, time zone, message.
4. User sees the existing success toast. Failures show a friendly error and the data is also emailed to you as a fallback (optional — see below).

## What I need from you before building

1. **Connect Google Sheets** — I'll trigger the connector; you sign in with the Google account that should own the leads.
2. **Sheet ID** — Create a Google Sheet (e.g. "Learn with Tez — Leads"), add a header row:
   `Timestamp | Name | Email | Country | Grade | Curriculum | Time zone | Message`
   Then paste the sheet URL or ID. Default tab name assumed: `Sheet1` (tell me if different).

## Changes I'll make

- **New server function** `src/lib/leads.functions.ts` — `submitTrialLead` with Zod validation; calls Google Sheets API `values:append` through the Lovable connector gateway using `SHEET_ID` (stored as a runtime secret).
- **Update `src/components/ContactForm.tsx`** — replace the Formspree placeholder with a `useServerFn` call to `submitTrialLead`. Keep the existing toast UX and field validation. Remove the dead Formspree code.
- **Add secret** `LEADS_SHEET_ID` via the secrets tool once you give me the sheet ID.

## Technical notes

- Uses the Google Sheets connector gateway (`https://connector-gateway.lovable.dev/google_sheets/v4/...`) — no API keys for you to manage, OAuth refresh is automatic.
- Endpoint: `POST /spreadsheets/{SHEET_ID}/values/Sheet1!A:H:append?valueInputOption=USER_ENTERED`.
- Server function validates input with Zod (same schema as today) before calling the gateway, and returns `{ ok: true }` or a typed error.
- No data stored in Lovable Cloud — sheet is the single source of truth.

## Out of scope (ask if you want these)

- Email notification on each new lead (would need a Resend/email connector).
- Admin dashboard inside the app (the sheet is the dashboard).
- Slack/WhatsApp notifications.
