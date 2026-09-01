"use client";

import { motion } from "framer-motion";
import { useI18n } from "@/lib/i18n/context";
import { Container } from "@/components/ui/Container";
import { openDemoForm } from "@/components/ui/GlobalDemoForm";

export function Contact() {
  const { t } = useI18n();
  const c = t.contact;

  return (
    <section id="contact" style={{ paddingBlock: "var(--section-padding-y)", backgroundColor: "var(--color-primary)" }}>
      <Container>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "5rem", alignItems: "center" }} className="contact-grid">

          {/* Left — copy */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <span style={{
              display: "block", fontFamily: "var(--font-sans)", fontSize: "var(--text-xs)",
              fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase" as const,
              color: "rgba(255,255,255,0.45)", marginBottom: "1rem",
            }}>{c.eyebrow}</span>

            <h2 style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2rem, 3.5vw, 3rem)",
              fontWeight: 700, lineHeight: 1.15,
              letterSpacing: "-0.025em",
              color: "var(--color-text-inverse)",
              marginBottom: "1.25rem",
            }}>
              {c.heading}
            </h2>

            <p style={{
              fontSize: "var(--text-lg)", color: "rgba(255,255,255,0.65)",
              lineHeight: 1.75, marginBottom: "2rem", maxWidth: "44ch",
              fontFamily: "var(--font-sans)",
            }}>
              {c.sub}
            </p>

            <button
              onClick={() => openDemoForm()}
              className="btn btn-inverse btn-lg"
              style={{ marginBottom: "2.5rem" }}
            >
              {c.cta}
            </button>

            <p style={{ fontSize: "var(--text-xs)", color: "rgba(255,255,255,0.3)", fontFamily: "var(--font-sans)" }}>
              SHAPE Consulting UG · Germany
            </p>
          </motion.div>

          {/* Right — contact cards */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
            style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
          >
            {c.cards.map((card, i) => (
              <motion.div
                key={card.label}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, ease: "easeOut", delay: 0.15 + i * 0.08 }}
                style={{
                  backgroundColor: "var(--color-white)",
                  border: "none",
                  borderRadius: "var(--radius-lg)",
                  padding: "1.25rem 1.5rem",
                  display: "flex", alignItems: "center", gap: "1rem",
                }}
              >
                <div style={{
                  width: "3px", height: "36px",
                  backgroundColor: "rgba(255,255,255,0.6)",
                  borderRadius: "2px",
                  flexShrink: 0,
                }} />
                <div>
                  <div style={{ fontSize: "var(--text-xs)", color: "var(--color-text-muted)", fontFamily: "var(--font-sans)", fontWeight: 500, letterSpacing: "0.04em", textTransform: "uppercase" as const, marginBottom: "0.2rem" }}>
                    {card.label}
                  </div>
                  <div style={{ fontSize: "var(--text-base)", color: "var(--color-text-heading)", fontFamily: "var(--font-sans)", fontWeight: 500 }}>
                    {card.value}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </Container>

      <style>{`
        @media (max-width: 768px) {
          .contact-grid { grid-template-columns: 1fr !important; gap: 3rem !important; }
        }
      `}</style>
    </section>
  );
}
