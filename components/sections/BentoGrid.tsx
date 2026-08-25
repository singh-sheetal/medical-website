import { practiceFeatures } from "@/lib/practice-features";
import { BentoCard } from "@/components/ui/BentoCard";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";

export function BentoGrid() {
  const [large, ...rest] = practiceFeatures;

  return (
    <Section variant="alt" id="practice-management">
      <Container>
        <SectionHeader
          eyebrow="How It Works"
          heading="Everything you need to learn AI in medicine"
          lead="SHAPE Academy courses are practical, peer-led, and designed to fit around a working doctor's schedule. Here's what makes them different."
        />

        {/*
          Bento layout:
          Desktop: [large (col-span 2)] [medium] [medium]
                   [medium]             [medium]  (fills row 2)
          Tablet:  2 columns
          Mobile:  1 column
        */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gridTemplateRows: "auto auto",
            gap: "1rem",
          }}
          className="bento-grid"
        >
          {/* Large card — scheduling — spans 2 columns, 2 rows */}
          <div style={{ gridColumn: "1 / 3", gridRow: "1 / 3" }} className="bento-large">
            <BentoCard feature={large} delay={0} />
          </div>

          {/* 4 medium cards filling the right column and second row */}
          {rest.map((feature, i) => (
            <div
              key={feature.id}
              className="bento-medium"
              style={{
                gridColumn: i < 1 ? "3 / 4" : undefined,
                gridRow:    i < 1 ? `${i + 1} / ${i + 2}` : undefined,
              }}
            >
              <BentoCard feature={feature} delay={0.08 * (i + 1)} />
            </div>
          ))}
        </div>
      </Container>

      <style>{`
        /* Desktop: 3-column bento */
        .bento-grid {
          grid-template-columns: repeat(3, 1fr);
        }

        /* Tablet: 2-column, all equal */
        @media (max-width: 900px) {
          .bento-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            grid-template-rows: auto !important;
          }
          .bento-large {
            grid-column: 1 / -1 !important;
            grid-row: auto !important;
          }
          .bento-medium {
            grid-column: auto !important;
            grid-row: auto !important;
          }
        }

        /* Mobile: single column */
        @media (max-width: 560px) {
          .bento-grid {
            grid-template-columns: 1fr !important;
          }
          .bento-large {
            grid-column: 1 !important;
          }
        }
      `}</style>
    </Section>
  );
}
