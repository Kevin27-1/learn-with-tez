import { STEPS } from "@/data/content";

export function HowItWorks() {
  return (
    <section className="bg-background py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <div className="text-sm font-semibold uppercase tracking-wider text-accent">How It Works</div>
          <h2 className="mt-2 font-heading text-4xl text-primary md:text-5xl">
            Getting Started Is Simple
          </h2>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {STEPS.map((s, i) => (
            <div
              key={s.n}
              className="hover-lift relative rounded-3xl border border-border bg-card p-8"
            >
              <div className="font-heading text-5xl text-accent/30">{s.n}</div>
              <div className="mt-4 font-heading text-xl text-primary">{s.title}</div>
              <p className="mt-3 text-sm text-foreground/70">{s.body}</p>
              {i < STEPS.length - 1 && (
                <div className="absolute right-6 top-10 hidden text-accent md:block">→</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}