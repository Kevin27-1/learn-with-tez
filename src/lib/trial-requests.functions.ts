import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const schema = z.object({
  name: z.string().trim().min(1).max(100),
  email: z.string().trim().email().max(255),
  country: z.string().min(1).max(60),
  grade: z.string().min(1).max(40),
  curriculum: z.string().min(1).max(60),
  timezone: z.string().trim().min(1).max(60),
  message: z.string().trim().max(1000).optional().default(""),
  source: z.string().max(120).optional().default("/contact"),
});

export const submitTrialRequest = createServerFn({ method: "POST" })
  .inputValidator((data: unknown) => schema.parse(data))
  .handler(async ({ data }) => {
    const lovableKey = process.env.LOVABLE_API_KEY;
    const airtableKey = process.env.AIRTABLE_API_KEY;
    const baseId = process.env.AIRTABLE_BASE_ID;
    if (!lovableKey || !airtableKey || !baseId) {
      throw new Error("Airtable is not configured (missing keys).");
    }

    const url = `https://connector-gateway.lovable.dev/airtable/v0/${baseId}/${encodeURIComponent("Trial Requests")}`;
    const res = await fetch(url, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${lovableKey}`,
        "X-Connection-Api-Key": airtableKey,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        records: [
          {
            fields: {
              Name: data.name,
              Email: data.email,
              Country: data.country,
              Grade: data.grade,
              Curriculum: data.curriculum,
              Timezone: data.timezone,
              Message: data.message,
              "Submitted At": new Date().toISOString(),
              Source: data.source,
            },
          },
        ],
      }),
    });

    if (!res.ok) {
      const text = await res.text();
      console.error("Airtable error", res.status, text);
      throw new Error(`Airtable ${res.status}: ${text.slice(0, 300)}`);
    }
    return { ok: true };
  });