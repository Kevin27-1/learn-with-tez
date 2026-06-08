## Goal
Save every "Book Your Free Trial" submission to a new Airtable base/table so Tez can see them in Airtable.

## Setup (you do this in Airtable)
Create a base called **Learn with Tez** with a table **Trial Requests** and these fields (names must match exactly):

- `Name` — Single line text
- `Email` — Email
- `Country` — Single line text
- `Grade` — Single line text
- `Curriculum` — Single line text
- `Timezone` — Single line text
- `Message` — Long text
- `Submitted At` — Date (include time)
- `Source` — Single line text

Then share the **Base ID** (looks like `appXXXXXXXXXXXXXX`) — found in the Airtable API docs page for the base.

## What I'll build

1. **Connect Airtable** via the Lovable connector (`standard_connectors--connect` with `airtable`). This stores your Airtable token securely as `AIRTABLE_API_KEY` and exposes `LOVABLE_API_KEY` for the gateway.
2. **Add the Base ID** as a runtime secret `AIRTABLE_BASE_ID` (you paste it once).
3. **New server function** `src/lib/trial-requests.functions.ts` with `createServerFn({ method: "POST" })`:
   - Zod-validates the form payload (same schema as the client).
   - POSTs to `https://connector-gateway.lovable.dev/airtable/v0/{AIRTABLE_BASE_ID}/Trial%20Requests` with headers `Authorization: Bearer ${LOVABLE_API_KEY}` and `X-Connection-Api-Key: ${AIRTABLE_API_KEY}`.
   - Body: `{ records: [{ fields: { Name, Email, Country, Grade, Curriculum, Timezone, Message, "Submitted At": new Date().toISOString(), Source: "/contact" } }] }`.
   - Returns `{ ok: true }` or throws with the Airtable error body for debugging.
4. **Wire up `src/components/ContactForm.tsx`**:
   - Remove the Formspree placeholder branch.
   - On submit, call the server function via `useServerFn`.
   - Keep current toast success / error UX. Reset form on success.

## Notes
- No DB / Lovable Cloud needed — Airtable is the store.
- The Airtable token never reaches the browser; it lives in the gateway secret read only inside the server function.
- If the gateway returns a 4xx, the server function surfaces the message so we can fix field-name mismatches quickly.

After you approve, I'll trigger the Airtable connect prompt and the `AIRTABLE_BASE_ID` secret prompt as the first steps.