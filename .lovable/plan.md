## Why you don't see a table

The Airtable connector only gives our server permission to read/write — it can't create bases or tables for you. You need to set those up once in Airtable, then we point the code at them via the Base ID.

## Steps for you (in Airtable, ~3 minutes)

1. Go to https://airtable.com and click **Add a base → Start from scratch**. Name it **Learn with Tez**.
2. Rename the default `Table 1` to **Trial Requests** (exact spelling, capital T and R, one space).
3. Set up these fields (delete the default Notes/Status/Attachments columns):

   | Field name      | Field type            |
   | --------------- | --------------------- |
   | Name            | Single line text (this is the primary field, just rename it) |
   | Email           | Email                 |
   | Country         | Single line text      |
   | Grade           | Single line text      |
   | Curriculum      | Single line text      |
   | Timezone        | Single line text      |
   | Message         | Long text             |
   | Submitted At    | Date (toggle "Include a time field") |
   | Source          | Single line text      |

4. Get the Base ID: open https://airtable.com/api, click the **Learn with Tez** base, and copy the ID shown at the top (looks like `appXXXXXXXXXXXXXX`).

## Steps I'll do (after you confirm the base exists)

1. Prompt you to update the `AIRTABLE_BASE_ID` secret with the new Base ID.
2. You submit the form on /contact → I check the Airtable table to confirm the row appears.
3. If anything 404s or errors, I'll surface the exact field-name mismatch and fix the code.

No code changes are needed — the server function already targets `Trial Requests` in whatever base `AIRTABLE_BASE_ID` points to.
