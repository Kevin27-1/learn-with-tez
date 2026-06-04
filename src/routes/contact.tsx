import { createFileRoute } from "@tanstack/react-router";
import { ContactForm } from "@/components/ContactForm";
import { Mail, Phone, Clock } from "lucide-react";
import { SITE } from "@/data/content";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Book a Free Trial — Contact Tezline Joseph | Learn with Tez" },
      { name: "description", content: "Book a free 45-minute trial Physics session. Tell Tez about your curriculum and time zone — he'll get back within 24 hours." },
      { property: "og:title", content: "Book a Free Trial — Learn with Tez" },
      { property: "og:description", content: "Free 45-minute trial Physics session. No commitment, no payment." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <section className="bg-background py-20">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-5">
        <div className="lg:col-span-2">
          <div className="text-sm font-semibold uppercase tracking-wider text-accent">Contact</div>
          <h1 className="mt-2 font-heading text-4xl text-primary md:text-5xl">
            Book Your Free Trial
          </h1>
          <p className="mt-5 text-foreground/70">
            Share a few details about your curriculum, grade, and time zone. Tez will reach out within 24 hours to schedule your free 45-minute diagnostic session.
          </p>
          <ul className="mt-8 space-y-4 text-sm">
            <li className="flex items-start gap-3">
              <Mail size={18} className="mt-0.5 text-accent" />
              <a href={`mailto:${SITE.email}`} className="text-foreground hover:text-accent">
                {SITE.email}
              </a>
            </li>
            <li className="flex items-start gap-3">
              <Phone size={18} className="mt-0.5 text-accent" />
              <a href={`tel:${SITE.phone.replace(/\s/g, "")}`} className="text-foreground hover:text-accent">
                {SITE.phone}
              </a>
            </li>
            <li className="flex items-start gap-3">
              <Clock size={18} className="mt-0.5 text-accent" />
              <span className="text-foreground/80">
                Flexible across EST, PST, GMT/IST, and AEST.
              </span>
            </li>
          </ul>
        </div>
        <div className="lg:col-span-3">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}