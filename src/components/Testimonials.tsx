import { Star } from "lucide-react";
import { TESTIMONIALS } from "@/data/content";

export function Testimonials() {
  return (
    <section className="bg-muted/50 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <div className="text-sm font-semibold uppercase tracking-wider text-accent">Testimonials</div>
          <h2 className="mt-2 font-heading text-4xl text-primary md:text-5xl">
            What Students & Parents Say
          </h2>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <figure
              key={i}
              className="hover-lift flex h-full flex-col rounded-3xl border border-border bg-card p-8"
            >
              <div className="flex gap-1 text-gold">
                {Array.from({ length: 5 }).map((_, k) => (
                  <Star key={k} size={16} fill="currentColor" strokeWidth={0} />
                ))}
              </div>
              <blockquote className="mt-4 flex-1 font-heading text-lg leading-snug text-primary">
                “{t.quote}”
              </blockquote>
              <figcaption className="mt-6 border-t border-border pt-4 text-sm">
                <div className="font-semibold text-foreground">
                  {t.name} {t.flag}
                </div>
                <div className="text-muted-foreground">{t.location} · {t.grade}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}