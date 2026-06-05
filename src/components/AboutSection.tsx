import { GraduationCap, Globe, MapPin } from "lucide-react";
import { ABOUT_BIO, CREDENTIALS } from "@/data/content";
import tezPortrait from "@/assets/tez-portrait.jpeg.asset.json";

const iconMap = { GraduationCap, Globe, MapPin };

export function AboutSection() {
  return (
    <section className="bg-background py-24">
      <div className="mx-auto grid max-w-7xl gap-14 px-6 lg:grid-cols-5">
        <div className="lg:col-span-2">
          <div className="relative mx-auto aspect-[4/5] w-full max-w-sm overflow-hidden rounded-3xl border border-border bg-gradient-to-br from-primary to-primary/80 shadow-[0_30px_60px_-20px_rgba(11,31,58,0.4)]">
            <img
              src={tezPortrait.url}
              alt="Tezline Joseph, Physics tutor"
              className="h-full w-full object-cover"
            />
            <div className="absolute bottom-4 left-4 right-4 rounded-2xl bg-background/95 px-4 py-3 backdrop-blur">
              <div className="font-heading text-lg text-primary">Tezline Joseph</div>
              <div className="text-xs text-muted-foreground">M.Sc. Physics · B.Ed. · 12+ yrs</div>
            </div>
          </div>
        </div>
        <div className="lg:col-span-3">
          <div className="text-sm font-semibold uppercase tracking-wider text-accent">About</div>
          <h2 className="mt-2 font-heading text-4xl text-primary md:text-5xl">
            Meet Your Tutor — Tezline Joseph
          </h2>
          <div className="mt-6 space-y-4 text-foreground/80">
            {ABOUT_BIO.map((p, i) => <p key={i}>{p}</p>)}
          </div>
          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {CREDENTIALS.map((c) => {
              const Icon = iconMap[c.icon as keyof typeof iconMap];
              return (
                <div key={c.label} className="flex items-center gap-3 rounded-2xl border border-border bg-card px-4 py-3">
                  <Icon size={18} className="text-accent" />
                  <span className="text-sm text-foreground/80">{c.label}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}