import { createFileRoute } from "@tanstack/react-router";
import { Pricing } from "@/components/Pricing";
import { FAQ } from "@/components/FAQ";
import { CTABanner } from "@/components/CTABanner";

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title: "Pricing — 1:1 Physics Tutoring Plans | Learn with Tez" },
      { name: "description", content: "Three flexible plans for 1:1 Physics tutoring: Starter, Consistent, and Intensive. First session always free." },
      { property: "og:title", content: "Pricing — Learn with Tez" },
      { property: "og:description", content: "Simple, transparent pricing for 1:1 Physics tutoring. First session free." },
      { property: "og:url", content: "/pricing" },
    ],
    links: [{ rel: "canonical", href: "/pricing" }],
  }),
  component: PricingPage,
});

function PricingPage() {
  return (
    <>
      <div className="bg-background pt-10" />
      <Pricing />
      <FAQ />
      <CTABanner />
    </>
  );
}