import { CTAButton } from "./CTAButton";

export function CTABanner() {
  return (
    <section className="relative overflow-hidden bg-primary py-20 text-primary-foreground">
      <div className="pointer-events-none absolute inset-0 -z-0 opacity-20">
        <div className="absolute -left-10 top-10 h-64 w-64 rounded-full bg-accent blur-3xl" />
        <div className="absolute -right-10 bottom-0 h-64 w-64 rounded-full bg-gold blur-3xl" />
      </div>
      <div className="relative mx-auto max-w-4xl px-6 text-center">
        <h2 className="font-heading text-4xl md:text-5xl">
          Ready to Close the Gap <span className="text-accent">Before Exams?</span>
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-primary-foreground/80">
          Book a free 45-minute trial session — no commitment, no payment, just results-focused Physics teaching.
        </p>
        <div className="mt-8 flex justify-center">
          <CTAButton to="/contact" variant="gold">
            Book My Free Trial Session →
          </CTAButton>
        </div>
        <div className="mt-6 text-sm text-primary-foreground/60">
          Available for students in Canada 🇨🇦 · Australia 🇦🇺 · Ireland 🇮🇪
        </div>
      </div>
    </section>
  );
}