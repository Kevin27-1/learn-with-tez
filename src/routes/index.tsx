import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/Hero";
import { StatsStrip } from "@/components/StatsStrip";
import { AboutSection } from "@/components/AboutSection";
import { SubjectsSection } from "@/components/SubjectsSection";
import { HowItWorks } from "@/components/HowItWorks";
import { Testimonials } from "@/components/Testimonials";
import { Pricing } from "@/components/Pricing";
import { CTABanner } from "@/components/CTABanner";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Learn with Tez — Online Physics Tutor for Grades 10–12 | Canada, Australia, Ireland" },
      { name: "description", content: "1:1 online Physics tutoring by Tezline Joseph — WES-certified, 12+ years' experience. First session free. Serving Canada, Australia & Ireland." },
      { property: "og:title", content: "Learn with Tez — Physics Made Clear. Grades Made Better." },
      { property: "og:description", content: "Expert 1:1 Physics tutoring for Grades 10–12 students in Canada, Australia & Ireland." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Hero />
      <SubjectsSection />
      <StatsStrip />
      <AboutSection />
      <HowItWorks />
      <Testimonials />
      <Pricing />
      <CTABanner />
    </>
  );
}
