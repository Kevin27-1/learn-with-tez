import { Link } from "@tanstack/react-router";
import { Linkedin, MessageCircle, Mail, Phone } from "lucide-react";
import { NAV_LINKS, SITE } from "@/data/content";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="font-heading text-2xl font-bold">
            Learn with <span className="text-accent">Tez</span>
          </div>
          <p className="mt-3 max-w-sm text-sm text-primary-foreground/70">
            {SITE.tagline} Personal 1:1 Physics tutoring for Grades 10–12 across Canada, Australia, and Ireland.
          </p>
        </div>

        <div>
          <div className="text-sm font-semibold uppercase tracking-wider text-accent">Quick Links</div>
          <ul className="mt-4 space-y-2 text-sm">
            {NAV_LINKS.map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="text-primary-foreground/80 hover:text-accent">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <div className="text-sm font-semibold uppercase tracking-wider text-accent">Contact</div>
          <ul className="mt-4 space-y-3 text-sm text-primary-foreground/80">
            <li className="flex items-center gap-2">
              <Mail size={16} className="text-accent" />
              <a href={`mailto:${SITE.email}`} className="hover:text-accent">{SITE.email}</a>
            </li>
            <li className="flex items-center gap-2">
              <Phone size={16} className="text-accent" />
              <a href={`tel:${SITE.phone.replace(/\s/g, "")}`} className="hover:text-accent">{SITE.phone}</a>
            </li>
            <li className="flex items-center gap-3 pt-2">
              <a href="#" aria-label="LinkedIn" className="text-primary-foreground/80 hover:text-accent">
                <Linkedin size={18} />
              </a>
              <a href="#" aria-label="WhatsApp" className="text-primary-foreground/80 hover:text-accent">
                <MessageCircle size={18} />
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-primary-foreground/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-6 py-6 text-xs text-primary-foreground/60 md:flex-row">
          <div>Regions served: Canada · Australia · Ireland</div>
          <div>© 2025 Learn with Tez. All rights reserved.</div>
        </div>
      </div>
    </footer>
  );
}