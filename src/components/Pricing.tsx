import { Check } from "lucide-react";
import { PRICING } from "@/data/content";
import { CTAButton } from "./CTAButton";
import { cn } from "@/lib/utils";

export function Pricing() {
  return (
    <section className="bg-background py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <div className="text-sm font-semibold uppercase tracking-wider text-accent">Pricing</div>
          <h2 className="mt-2 font-heading text-4xl text-primary md:text-5xl">
            Simple, Transparent Pricing
          </h2>
          <p className="mt-4 text-foreground/70">
            All sessions are live, 1:1, and tailored to your syllabus.
          </p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {PRICING.map((p) => (
            <div
              key={p.name}
              className={cn(
                "relative flex flex-col rounded-3xl border bg-card p-8 transition-all",
                p.popular
                  ? "border-accent shadow-[0_20px_50px_-20px_rgba(0,194,168,0.4)] lg:-translate-y-2"
                  : "border-border hover-lift",
              )}
            >
              {p.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gold px-3 py-1 text-xs font-semibold text-gold-foreground">
                  ⭐ Most Popular
                </div>
              )}
              <div className="font-heading text-2xl text-primary">{p.name}</div>
              <div className="mt-1 text-sm text-muted-foreground">{p.best}</div>
              <div className="mt-6">
                <div className="font-heading text-3xl text-primary">{p.sessions}</div>
                <div className="mt-1 text-sm text-accent">{p.price}</div>
              </div>
              <ul className="mt-6 flex-1 space-y-3 text-sm text-foreground/80">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-2">
                    <Check size={16} className="mt-0.5 shrink-0 text-accent" /> {f}
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <CTAButton
                  to="/contact"
                  variant={p.popular ? "teal" : "outline"}
                  className="w-full"
                >
                  {p.popular ? "Get Started" : "Book Free Trial"}
                </CTAButton>
              </div>
            </div>
          ))}
        </div>

        <p className="mx-auto mt-10 max-w-2xl text-center text-sm text-muted-foreground">
          Pricing varies by region and session frequency. Book a free trial to discuss the right plan for your student.
        </p>
      </div>
    </section>
  );
}