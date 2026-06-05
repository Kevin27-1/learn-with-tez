import { CTAButton } from "./CTAButton";
import { Check, ArrowRight } from "lucide-react";
import tezPortrait from "@/assets/tez-portrait.jpeg.asset.json";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -left-32 top-10 h-72 w-72 rounded-full bg-accent/10 blur-3xl" />
        <div className="absolute right-0 top-40 h-96 w-96 rounded-full bg-gold/10 blur-3xl" />
      </div>
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 py-20 md:py-28 lg:grid-cols-2">
        <div className="animate-fade-up">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-xs font-medium text-primary">
            <span className="h-2 w-2 rounded-full bg-accent" />
            12+ Years · WES-Certified Physics Educator
          </div>
          <h1 className="font-heading text-5xl leading-[1.05] text-primary md:text-6xl">
            Physics Made Clear. <br />
            <span className="text-accent">Grades Made Better.</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg text-foreground/70">
            Expert 1:1 Physics tutoring for Grades 10–12 students in Canada, Australia & Ireland — by a 12-year veteran educator with WES-certified qualifications.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <CTAButton to="/contact" variant="teal">
              Book Your Free Trial Session <ArrowRight size={16} />
            </CTAButton>
            <CTAButton to="/how-it-works" variant="outline">
              See How It Works →
            </CTAButton>
          </div>
          <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-foreground/70">
            {["No contracts", "Flexible scheduling across time zones", "First session free"].map((t) => (
              <li key={t} className="flex items-center gap-2">
                <Check size={16} className="text-accent" /> {t}
              </li>
            ))}
          </ul>
        </div>

        <div className="relative mx-auto w-full max-w-md animate-fade-up">
          <div className="relative aspect-square">
            {/* Decorative physics SVG */}
            <svg viewBox="0 0 400 400" className="absolute inset-0 h-full w-full text-accent/30">
              <defs>
                <radialGradient id="g1" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="currentColor" stopOpacity="0.25" />
                  <stop offset="100%" stopColor="currentColor" stopOpacity="0" />
                </radialGradient>
              </defs>
              <circle cx="200" cy="200" r="190" fill="url(#g1)" />
              <g fill="none" stroke="currentColor" strokeWidth="1.5">
                <ellipse cx="200" cy="200" rx="180" ry="70" />
                <ellipse cx="200" cy="200" rx="180" ry="70" transform="rotate(60 200 200)" />
                <ellipse cx="200" cy="200" rx="180" ry="70" transform="rotate(120 200 200)" />
              </g>
              <circle cx="200" cy="200" r="8" fill="currentColor" />
            </svg>
            <div className="absolute inset-8 overflow-hidden rounded-full border-4 border-primary/90 bg-gradient-to-br from-primary to-primary/70 shadow-[0_30px_60px_-20px_rgba(11,31,58,0.4)]">
              <img
                src={tezPortrait.url}
                alt="Tezline Joseph, Physics tutor"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-4 left-4 rounded-2xl border border-border bg-card px-4 py-3 shadow-[0_4px_24px_rgba(11,31,58,0.10)]">
              <div className="text-xs text-muted-foreground">Avg. result</div>
              <div className="font-heading text-lg text-primary">+1–2 letter grades</div>
            </div>
            <div className="absolute -right-2 top-6 rounded-2xl border border-border bg-card px-4 py-3 shadow-[0_4px_24px_rgba(11,31,58,0.10)]">
              <div className="text-xs text-muted-foreground">CA · AU · IE</div>
              <div className="font-heading text-lg text-primary">Live 1:1</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}