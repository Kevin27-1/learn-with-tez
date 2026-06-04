import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FAQS } from "@/data/content";

export function FAQ() {
  return (
    <section className="bg-muted/50 py-24">
      <div className="mx-auto max-w-3xl px-6">
        <div className="text-center">
          <div className="text-sm font-semibold uppercase tracking-wider text-accent">FAQ</div>
          <h2 className="mt-2 font-heading text-4xl text-primary md:text-5xl">
            Common Questions
          </h2>
        </div>

        <Accordion type="single" collapsible className="mt-10 space-y-3">
          {FAQS.map((f, i) => (
            <AccordionItem
              key={i}
              value={`item-${i}`}
              className="rounded-2xl border border-border bg-card px-5"
            >
              <AccordionTrigger className="text-left font-heading text-base text-primary hover:no-underline">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="text-foreground/75">{f.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}