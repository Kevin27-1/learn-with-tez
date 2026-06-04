# Learn with Tez — Build Plan

A premium, personal-feel Physics tutoring site for Tezline Joseph, targeting Grades 10–12 students in Canada, Australia, and Ireland. Content, palette, and typography come straight from your brief.

## Design System
Set up tokens in `src/styles.css` (Tailwind v4 `@theme`) using OKLCH equivalents of the brand hexes:
- `--color-primary` Deep navy `#0B1F3A`
- `--color-accent` Electric teal `#00C2A8`
- `--color-gold` `#F5C842`
- `--color-background` Warm white `#F9F7F4`
- `--color-foreground` `#1A1A2E`
- Dark-surface foreground `#F0F0F0`
- Card radius 16px, soft navy shadow
- Fonts via Google Fonts in `__root.tsx` head: Playfair Display (headings) + DM Sans (body)
- Subtle scroll fade-in, hover lift on cards, smooth accordion (shadcn already provides)

## Route Structure
Each major section gets its own route (better SEO + per-page metadata) with a shared Navbar/Footer layout in `__root.tsx`:
- `/` Home — Hero, Stats Strip, About preview, Subjects preview, How It Works, Testimonials, Pricing preview, CTA Banner
- `/about` — Full About Tez + credentials
- `/how-it-works` — 3-step flow expanded
- `/pricing` — Full 3-tier pricing + notes
- `/faq` — Full FAQ accordion
- `/contact` — Booking form (Name, Email, Country, Grade Level, Curriculum, Time Zone, Message)

Each route file sets its own `head()` with unique title/description/og tags. Root sets sitewide defaults + Org JSON-LD.

## Components (under `src/components/`)
- `Navbar.tsx` — sticky, blur backdrop, "Tez" in teal, mobile hamburger (Sheet), gold "Book a Free Trial" CTA → `/contact`
- `Footer.tsx` — links, contact, socials, regions
- `CTAButton.tsx` — shared variant-driven button (teal / gold / outline)
- `Hero.tsx` — split layout, headline, sub-headline, dual CTA, trust micro-copy, illustrated SVG physics graphic (atoms/waves) on the right with a circular navy-bordered tutor photo placeholder
- `StatsStrip.tsx` — full-width navy band, 4 metrics
- `AboutSection.tsx` — photo + bio + credential badges (lucide icons)
- `SubjectsSection.tsx` — curriculum card grid + physics topic tag cloud
- `HowItWorks.tsx` — 3-step horizontal flow (stacks on mobile)
- `Testimonials.tsx` — 3 card grid with stars + flags
- `Pricing.tsx` — 3 tier cards, "Most Popular" highlight on Consistent
- `FAQ.tsx` — shadcn Accordion
- `CTABanner.tsx` — full-width navy conversion section
- `ContactForm.tsx` — react-hook-form + zod validation, submits via Formspree endpoint (placeholder URL you can swap), success toast via sonner

## Content Source
All copy from the brief lives in `src/data/content.ts` (testimonials, FAQ, pricing tiers, curricula, stats, credentials) so it's easy to edit later.

## Booking
Per brief: contact form on `/contact` with the listed fields. Form posts to Formspree (placeholder action URL; you can paste your real endpoint later, or I can swap to EmailJS / Calendly embed if preferred). No backend required.

## SEO
- Home title: `Learn with Tez — Online Physics Tutor for Grades 10–12 | Canada, Australia, Ireland`
- Unique meta per route
- JSON-LD: `EducationalOrganization` on root, `Person` on `/about`, `FAQPage` on `/faq`, `Service` + price hint on `/pricing`
- Canonicals on leaf routes only, relative paths

## Technical Notes
- Stack stays TanStack Start + Tailwind v4 + shadcn (already installed)
- No backend / Lovable Cloud needed
- Resume `.docx` used only as factual reference for the About bio; not shipped as an asset

## Open Choices (I'll default unless you say otherwise)
1. Booking flow: **Custom contact form via Formspree** (default) vs Calendly embed vs EmailJS
2. Tutor photo: use a **placeholder silhouette** until you upload a real headshot
3. Pricing: show "Contact for pricing" on all three tiers as written in the brief

Tell me if you want different defaults; otherwise I'll proceed as above.
