import { CURRICULA, TOPICS } from "@/data/content";

export function SubjectsSection() {
  return (
    <section className="bg-muted/50 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <div className="text-sm font-semibold uppercase tracking-wider text-accent">What I Teach</div>
          <h2 className="mt-2 font-heading text-4xl text-primary md:text-5xl">
            Covering Every Curriculum You're In
          </h2>
          <p className="mt-4 text-foreground/70">
            Sessions tailored to your exact syllabus — from provincial standards to international boards.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {CURRICULA.map((c) => (
            <div
              key={c.title}
              className="hover-lift flex items-start gap-4 rounded-2xl border border-border bg-card p-6"
            >
              <div className="text-3xl">{c.flag}</div>
              <div>
                <div className="font-heading text-lg text-primary">{c.title}</div>
                <div className="mt-1 text-sm text-muted-foreground">{c.detail}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-14">
          <div className="text-center text-sm font-semibold uppercase tracking-wider text-accent">
            Science
          </div>
          <div className="mt-5 flex flex-wrap justify-center gap-2">
            {TOPICS.map((t) => (
              <span
                key={t}
                className="rounded-full border border-border bg-card px-4 py-2 text-sm text-foreground/80"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}