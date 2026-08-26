"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { teamMembers } from "@/lib/images";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function Team() {
  return (
    <Section id="about" variant="alt">
      <Container>
        <SectionHeader
          eyebrow="About Us"
          heading="By doctors, for doctors"
          lead="SHAPE Academy is built by medical professionals who understand the challenges of integrating technology into a real clinical environment."
        />

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "2rem",
          }}
          className="team-grid"
        >
          {teamMembers.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, ease: "easeOut", delay: i * 0.1 }}
              style={{
                backgroundColor: "var(--color-white)",
                borderRadius: "var(--radius-xl)",
                border: "1px solid var(--color-border)",
                overflow: "hidden",
                boxShadow: "var(--shadow-sm)",
              }}
            >
              {/* Photo */}
              <div
                style={{
                  position: "relative",
                  width: "100%",
                  aspectRatio: "1 / 1",
                  backgroundColor: "var(--color-bg-alt)",
                  overflow: "hidden",
                }}
              >
                <Image
                  src={member.image}
                  alt={`${member.name} — ${member.role}`}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 400px"
                  style={{ objectFit: "cover", objectPosition: "top center" }}
                />
              </div>

              {/* Info */}
              <div style={{ padding: "1.5rem" }}>
                <div
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "var(--text-lg)",
                    fontWeight: 700,
                    color: "var(--color-text-heading)",
                    marginBottom: "0.25rem",
                    letterSpacing: "-0.01em",
                  }}
                >
                  {member.name}
                </div>
                <div
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: "var(--text-xs)",
                    fontWeight: 600,
                    letterSpacing: "0.06em",
                    textTransform: "uppercase",
                    color: "var(--color-primary)",
                    marginBottom: "0.875rem",
                  }}
                >
                  {member.role}
                </div>
                <p
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: "var(--text-sm)",
                    color: "var(--color-text-body)",
                    lineHeight: 1.7,
                    margin: 0,
                  }}
                >
                  {member.bio}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>

      <style>{`
        @media (max-width: 768px) {
          .team-grid { grid-template-columns: 1fr !important; }
        }
        @media (min-width: 480px) and (max-width: 768px) {
          .team-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
      `}</style>
    </Section>
  );
}
