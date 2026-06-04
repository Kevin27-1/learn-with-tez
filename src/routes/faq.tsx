import { createFileRoute } from "@tanstack/react-router";
import { FAQ } from "@/components/FAQ";
import { CTABanner } from "@/components/CTABanner";
import { FAQS } from "@/data/content";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "FAQ — Common Questions About Physics Tutoring | Learn with Tez" },
      { name: "description", content: "Answers about platform, time zones, free trial, materials, curricula, and expected progress with Learn with Tez." },
      { property: "og:title", content: "FAQ — Learn with Tez" },
      { property: "og:description", content: "Common questions about live 1:1 Physics tutoring with Tezline Joseph." },
      { property: "og:url", content: "/faq" },
    ],
    links: [{ rel: "canonical", href: "/faq" }],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: FAQS.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      }),
    }],
  }),
  component: FAQPage,
});

function FAQPage() {
  return (
    <>
      <div className="bg-background pt-10" />
      <FAQ />
      <CTABanner />
    </>
  );
}