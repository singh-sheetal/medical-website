"use client";

import { motion } from "framer-motion";
import { useI18n } from "@/lib/i18n/context";
import { Container } from "@/components/ui/Container";

export function Contact() {
  const { t } = useI18n();
  const c = t.contact;
  const demoSubject = encodeURIComponent("Demo Request — Shape.Med Practice Operating System");
  const demoBody    = encodeURIComponent("Hello SHAPE Consulting,\n\nI am interested in a demo of Shape.Med.\n\nPractice name:\nContact name:\nBest time to reach me:\n");

  return (
    <section id="contact" style={{ paddingBlock: "var(--section-padding-y)", backgroundColor: "var(--color-bg-dark)" }}>
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

            <a
              href={`mailto:${c.email}?subject=${demoSubject}&body=${demoBody}`}
              className="btn btn-inverse btn-lg"
              style={{ marginBottom: "2.5rem" } as React.CSSProperties}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                <polyline points="22,6 12,13 2,6"/>
              </svg>
              {c.cta}
            </a>

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
                  backgroundColor: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  borderRadius: "var(--radius-lg)",
                  padding: "1.25rem 1.5rem",
                  display: "flex", alignItems: "center", gap: "1rem",
                }}
              >
                <div style={{
                  width: "3px", height: "36px",
                  backgroundColor: "var(--color-primary)",
                  borderRadius: "2px",
                  flexShrink: 0,
                }} />
                <div>
                  <div style={{ fontSize: "var(--text-xs)", color: "rgba(255,255,255,0.45)", fontFamily: "var(--font-sans)", fontWeight: 500, letterSpacing: "0.04em", textTransform: "uppercase" as const, marginBottom: "0.2rem" }}>
                    {card.label}
                  </div>
                  <div style={{ fontSize: "var(--text-base)", color: "var(--color-text-inverse)", fontFamily: "var(--font-sans)", fontWeight: 500 }}>
                    {card.value}
                  </div>
                </div>
              </motion.div>
            ))}

            {/* SHAPE logo */}
            <div style={{
              marginTop: "0.5rem",
              padding: "1.25rem 1.5rem",
              backgroundColor: "rgba(255,255,255,0.03)",
              border: "1px solid rgba(255,255,255,0.06)",
              borderRadius: "var(--radius-lg)",
              display: "flex", alignItems: "center", gap: "0.75rem",
            }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="https://static.wixstatic.com/media/f72710_8450931f44f54442ae52d37c70957931~mv2.png" alt="SHAPE Consulting" style={{ height: "22px", filter: "brightness(0) invert(1)", opacity: 0.6 }} />
              <span style={{ fontSize: "var(--text-xs)", color: "rgba(255,255,255,0.4)", fontFamily: "var(--font-sans)" }}>
                shapeconsulting.app
              </span>
            </div>
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
