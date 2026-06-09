import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const AIRTABLE_TABLE_NAME = "Trial Requests";

const fieldCandidates = {
  name: ["Name", "Full Name", "Student Name", "Student"],
  email: ["Email", "Email Address", "Parent Email"],
  country: ["Country", "Country / Region", "Location"],
  grade: ["Grade", "Grade Level", "Year Level", "Class", "Year"],
  curriculum: ["Curriculum", "Program", "Syllabus"],
  timezone: ["Preferred time zone", "Preferred Time Zone", "Timezone", "Time Zone"],
  message: ["Message", "Notes", "Details", "Enquiry"],
  submittedAt: ["Submitted At", "Submitted", "Created At"],
  source: ["Source", "Page", "Form Source"],
} as const;

type AirtableFieldKey = keyof typeof fieldCandidates;
type FieldSelection = Record<AirtableFieldKey, number | null>;

const requiredFieldKeys = new Set<AirtableFieldKey>(["name", "email"]);

function getUnknownFieldName(errorText: string) {
  const match = errorText.match(/Unknown field name: \"([^\"]+)\"/);
  return match?.[1] ?? null;
}

function getInitialSelection(): FieldSelection {
  return {
    name: 0,
    email: 0,
    country: 0,
    grade: null,
    curriculum: 0,
    timezone: 0,
    message: null,
    submittedAt: null,
    source: null,
  };
}

function getSelectedFieldName(key: AirtableFieldKey, selection: FieldSelection) {
  const index = selection[key];
  return index === null ? null : fieldCandidates[key][index] ?? null;
}

function buildFields(data: z.infer<typeof schema>, selection: FieldSelection) {
  const fields: Record<string, string> = {};
  const values: Record<AirtableFieldKey, string> = {
    name: data.name,
    email: data.email,
    country: data.country,
    grade: data.grade,
    curriculum: data.curriculum,
    timezone: data.timezone,
    message: data.message,
    submittedAt: new Date().toISOString(),
    source: data.source,
  };

  (Object.keys(values) as AirtableFieldKey[]).forEach((key) => {
    const fieldName = getSelectedFieldName(key, selection);
    const value = values[key];
    if (!fieldName || !value) return;
    fields[fieldName] = value;
  });

  return fields;
}

async function createAirtableRecord(params: {
  airtableKey: string;
  baseId: string;
  data: z.infer<typeof schema>;
  lovableKey: string;
}) {
  const { lovableKey, airtableKey, baseId, data } = params;
  const url = `https://connector-gateway.lovable.dev/airtable/v0/${baseId}/${encodeURIComponent(AIRTABLE_TABLE_NAME)}`;
  const selection = getInitialSelection();
  let lastErrorText = "";

  for (let attempt = 0; attempt < 20; attempt += 1) {
    const res = await fetch(url, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${lovableKey}`,
        "X-Connection-Api-Key": airtableKey,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        typecast: true,
        records: [{ fields: buildFields(data, selection) }],
      }),
    });

    if (res.ok) {
      return;
    }

    const text = await res.text();
    lastErrorText = text;
    console.error("Airtable error", res.status, text);

    if (res.status !== 422 || !text.includes("UNKNOWN_FIELD_NAME")) {
      throw new Error(`Airtable ${res.status}: ${text.slice(0, 300)}`);
    }

    const unknownField = getUnknownFieldName(text);
    if (!unknownField) {
      throw new Error(`Airtable ${res.status}: ${text.slice(0, 300)}`);
    }

    const logicalKey = (Object.keys(selection) as AirtableFieldKey[]).find(
      (key) => getSelectedFieldName(key, selection) === unknownField,
    );

    if (!logicalKey) {
      throw new Error(`Airtable field mapping failed on \"${unknownField}\".`);
    }

    const currentIndex = selection[logicalKey];
    const nextIndex = currentIndex === null ? null : currentIndex + 1;

    if (nextIndex !== null && nextIndex < fieldCandidates[logicalKey].length) {
      selection[logicalKey] = nextIndex;
      console.warn(`Retrying Airtable submission with alternate field name for ${logicalKey}.`);
      continue;
    }

    if (requiredFieldKeys.has(logicalKey)) {
      throw new Error(
        `Airtable is missing a usable column for ${logicalKey}. Last rejected field: \"${unknownField}\".`,
      );
    }

    selection[logicalKey] = null;
    console.warn(`Retrying Airtable submission without optional field ${logicalKey}.`);
  }

  throw new Error(`Airtable field mapping failed after multiple retries: ${lastErrorText.slice(0, 300)}`);
}

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

    await createAirtableRecord({ lovableKey, airtableKey, baseId, data });
    return { ok: true };
  });