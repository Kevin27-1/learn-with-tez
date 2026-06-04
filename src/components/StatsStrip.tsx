import { STATS } from "@/data/content";

export function StatsStrip() {
  return (
    <section className="bg-primary text-primary-foreground">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-6 py-14 md:grid-cols-4">
        {STATS.map((s) => (
          <div key={s.label} className="text-center md:text-left">
            <div className="font-heading text-4xl text-accent md:text-5xl">{s.value}</div>
            <div className="mt-2 text-sm text-primary-foreground/70">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}