import { createFileRoute } from "@tanstack/react-router";
import { HowItWorks } from "@/components/HowItWorks";
import { SubjectsSection } from "@/components/SubjectsSection";
import { CTABanner } from "@/components/CTABanner";

export const Route = createFileRoute("/how-it-works")({
  head: () => ({
    meta: [
      { title: "How It Works — Free Trial, Diagnostic, Plan | Learn with Tez" },
      { name: "description", content: "Three simple steps: book a free trial, get a diagnostic learning plan, then learn through structured 1:1 Physics sessions." },
      { property: "og:title", content: "How It Works — Learn with Tez" },
      { property: "og:description", content: "Book a free trial. Get a diagnostic. Improve your grades." },
      { property: "og:url", content: "/how-it-works" },
    ],
    links: [{ rel: "canonical", href: "/how-it-works" }],
  }),
  component: HowPage,
});

function HowPage() {
  return (
    <>
      <div className="bg-background pt-10" />
      <HowItWorks />
      <SubjectsSection />
      <CTABanner />
    </>
  );
}