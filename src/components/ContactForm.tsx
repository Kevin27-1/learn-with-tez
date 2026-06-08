import { useState } from "react";
import { z } from "zod";
import { toast } from "sonner";
import { useServerFn } from "@tanstack/react-start";
import { CTAButton } from "./CTAButton";
import { submitTrialRequest } from "@/lib/trial-requests.functions";

const schema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Invalid email").max(255),
  country: z.string().min(1, "Please select a country").max(60),
  grade: z.string().min(1, "Please select a grade").max(40),
  curriculum: z.string().min(1, "Please select a curriculum").max(60),
  timezone: z.string().trim().min(1, "Preferred time zone is required").max(60),
  message: z.string().trim().max(1000).optional().default(""),
});

export function ContactForm() {
  const [loading, setLoading] = useState(false);
  const submit = useServerFn(submitTrialRequest);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);
    const data = Object.fromEntries(fd.entries());
    const result = schema.safeParse(data);
    if (!result.success) {
      toast.error(result.error.issues[0]?.message ?? "Please check the form.");
      return;
    }
    setLoading(true);
    try {
      await submit({ data: { ...result.data, source: "/contact" } });
      toast.success("Thanks! Tez will reach out shortly.");
      form.reset();
    } catch (err) {
      console.error(err);
      toast.error("Something went wrong. Please email tezlinejoseph@gmail.com directly.");
    } finally {
      setLoading(false);
    }
  }

  const input =
    "w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition focus:border-accent focus:ring-2 focus:ring-accent/30";
  const label = "block text-sm font-medium text-foreground/80";

  return (
    <form onSubmit={onSubmit} className="grid gap-5 rounded-3xl border border-border bg-card p-8 shadow-[0_4px_24px_rgba(11,31,58,0.10)]">
      <div className="grid gap-5 md:grid-cols-2">
        <div>
          <label className={label} htmlFor="name">Full name</label>
          <input id="name" name="name" className={input + " mt-2"} placeholder="Your name" required maxLength={100} />
        </div>
        <div>
          <label className={label} htmlFor="email">Email</label>
          <input id="email" name="email" type="email" className={input + " mt-2"} placeholder="you@example.com" required maxLength={255} />
        </div>
        <div>
          <label className={label} htmlFor="country">Country</label>
          <select id="country" name="country" className={input + " mt-2"} required defaultValue="">
            <option value="" disabled>Select country</option>
            <option>Canada</option>
            <option>Australia</option>
            <option>Ireland</option>
            <option>Other</option>
          </select>
        </div>
        <div>
          <label className={label} htmlFor="grade">Grade level</label>
          <select id="grade" name="grade" className={input + " mt-2"} required defaultValue="">
            <option value="" disabled>Select grade</option>
            <option>Grade 10</option>
            <option>Grade 11</option>
            <option>Grade 12 / Year 12</option>
            <option>Undergraduate</option>
          </select>
        </div>
        <div>
          <label className={label} htmlFor="curriculum">Curriculum</label>
          <select id="curriculum" name="curriculum" className={input + " mt-2"} required defaultValue="">
            <option value="" disabled>Select curriculum</option>
            <option>Canadian Provincial</option>
            <option>Australian Curriculum</option>
            <option>Irish Leaving Certificate</option>
            <option>IGCSE</option>
            <option>IB (SL / HL)</option>
            <option>CBSE</option>
            <option>Other</option>
          </select>
        </div>
        <div>
          <label className={label} htmlFor="timezone">Preferred time zone</label>
          <input id="timezone" name="timezone" className={input + " mt-2"} placeholder="e.g. AEST, EST, GMT" required maxLength={60} />
        </div>
      </div>
      <div>
        <label className={label} htmlFor="message">Message (optional)</label>
        <textarea id="message" name="message" rows={4} maxLength={1000} className={input + " mt-2"} placeholder="Tell Tez a little about your goals or current Physics struggles." />
      </div>
      <div className="flex items-center justify-between gap-4">
        <p className="text-xs text-muted-foreground">First session is free — no payment required.</p>
        <CTAButton type="submit" variant="teal">
          {loading ? "Sending…" : "Book My Free Trial"}
        </CTAButton>
      </div>
    </form>
  );
}