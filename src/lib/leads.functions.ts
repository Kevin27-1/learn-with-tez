import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const leadSchema = z.object({
  name: z.string().trim().min(1).max(100),
  email: z.string().trim().email().max(255),
  country: z.string().min(1).max(60),
  grade: z.string().min(1).max(40),
  curriculum: z.string().min(1).max(60),
  timezone: z.string().trim().min(1).max(60),
  message: z.string().trim().max(1000).optional().default(""),
});

export const submitTrialLead = createServerFn({ method: "POST" })
  .inputValidator((data: unknown) => leadSchema.parse(data))
  .handler(async ({ data }) => {
    const lovableApiKey = process.env.LOVABLE_API_KEY;
    const connectionKey = process.env.GOOGLE_SHEETS_API_KEY;
    const sheetId = process.env.LEADS_SHEET_ID;

    if (!lovableApiKey || !connectionKey) {
      throw new Error("Google Sheets connection is not configured.");
    }
    if (!sheetId) {
      throw new Error("LEADS_SHEET_ID is not set.");
    }

    const row = [
      new Date().toISOString(),
      data.name,
      data.email,
      data.country,
      data.grade,
      data.curriculum,
      data.timezone,
      data.message ?? "",
    ];

    const url = `https://connector-gateway.lovable.dev/google_sheets/v4/spreadsheets/${sheetId}/values/Sheet1!A:H:append?valueInputOption=USER_ENTERED&insertDataOption=INSERT_ROWS`;

    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${lovableApiKey}`,
        "X-Connection-Api-Key": connectionKey,
      },
      body: JSON.stringify({ values: [row] }),
    });

    if (!res.ok) {
      const text = await res.text();
      console.error("Google Sheets append failed", res.status, text);
      throw new Error("Could not save your request. Please try again.");
    }

    return { ok: true as const };
  });