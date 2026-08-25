import { faqItems } from "@/lib/faq";
import { AccordionItem } from "@/components/ui/AccordionItem";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { bookingUrl } from "@/lib/navigation";

export function FAQ() {
  // Split into two columns
  const mid   = Math.ceil(faqItems.length / 2);
  const left  = faqItems.slice(0, mid);
  const right = faqItems.slice(mid);

  return (
    <Section id="faq" variant="default">
      <Container>
        <SectionHeader
          eyebrow="Common Questions"
          heading="Everything you need to know"
          lead="Can't find your answer? Book a free 15-minute discovery call with Dr. Thomas Weber — he's happy to talk through which course is right for you."
        />

        {/* Two-column accordion */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "0 4rem",
            marginBottom: "3rem",
          }}
          className="faq-grid"
        >
          <div>
            {left.map((item, i) => (
              <AccordionItem key={item.question} item={item} index={i} />
            ))}
          </div>
          <div>
            {right.map((item, i) => (
              <AccordionItem key={item.question} item={item} index={i + mid} />
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div
          style={{
            textAlign: "center",
            paddingTop: "2rem",
            borderTop: "1px solid var(--color-border)",
          }}
        >
          <p
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: "var(--text-base)",
              color: "var(--color-text-muted)",
              marginBottom: "1.25rem",
            }}
          >
            Still have questions? We&apos;re happy to help.
          </p>
          <Button as="link" href={bookingUrl} size="lg">
            Book a free discovery call
          </Button>
        </div>
      </Container>

      <style>{`
        @media (max-width: 768px) {
          .faq-grid {
            grid-template-columns: 1fr !important;
            gap: 0 !important;
          }
        }
      `}</style>
    </Section>
  );
}
