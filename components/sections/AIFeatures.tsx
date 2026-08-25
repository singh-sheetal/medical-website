import { aiFeatures } from "@/lib/features";
import { FeatureBlock } from "./FeatureBlock";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Container } from "@/components/ui/Container";

export function AIFeatures() {
  return (
    <section id="features" aria-label="AI features">
      {/* Section header */}
      <div
        style={{
          paddingTop: "5rem",
          paddingBottom: "1rem",
          backgroundColor: "var(--color-bg)",
        }}
      >
        <Container>
          <SectionHeader
            eyebrow="Our Courses"
            heading="Learn AI the way it works in practice."
            lead="SHAPE Academy gives you the knowledge and confidence to use AI in your practice — from a first overview to specialist deep-dives, all taught by active medical professionals."
          />
        </Container>
      </div>

      {/* Feature blocks */}
      <div style={{ backgroundColor: "var(--color-bg)" }}>
        {aiFeatures.map((feature, index) => (
          <FeatureBlock key={feature.id} feature={feature} index={index} />
        ))}
      </div>
    </section>
  );
}
