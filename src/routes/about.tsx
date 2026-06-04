import { createFileRoute } from "@tanstack/react-router";
import { AboutSection } from "@/components/AboutSection";
import { StatsStrip } from "@/components/StatsStrip";
import { CTABanner } from "@/components/CTABanner";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Tezline Joseph — Physics Tutor | Learn with Tez" },
      { name: "description", content: "Meet Tezline Joseph: 12+ years of Physics teaching across CBSE, IGCSE, and IB. M.Sc. Physics, B.Sc. Physics, and B.Ed. — all WES certified for Canadian equivalency." },
      { property: "og:title", content: "About Tezline Joseph — Physics Tutor" },
      { property: "og:description", content: "12+ years of Physics teaching. Three WES-certified degrees. Live online tutoring for Grades 10–12." },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Person",
        name: "Tezline Joseph",
        jobTitle: "Physics Tutor",
        description: "12+ year veteran Physics educator with WES-certified M.Sc., B.Sc., and B.Ed.",
        knowsAbout: ["Physics", "Mechanics", "Electromagnetism", "IB Physics", "IGCSE Physics", "Leaving Certificate Physics"],
      }),
    }],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <div className="bg-background pt-12" />
      <AboutSection />
      <StatsStrip />
      <CTABanner />
    </>
  );
}