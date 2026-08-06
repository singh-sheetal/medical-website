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
            eyebrow="Powered by AI"
            heading="Less admin. More medicine."
            lead="MedicalOS handles the paperwork so you can focus on what matters — your patients. Here's how our AI works for you every single day."
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
