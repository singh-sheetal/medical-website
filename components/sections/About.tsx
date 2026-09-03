"use client";

import { motion } from "framer-motion";
import { useI18n } from "@/lib/i18n/context";
import { Container } from "@/components/ui/Container";

export function About() {
  const { t } = useI18n();
  const a = t.about;

  return (
    <section id="about" style={{
      paddingBlock: "var(--section-padding-y)",
      backgroundColor: "var(--color-bg-alt)",
    }}>
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          style={{ maxWidth: "680px" }}
        >
          <span style={{
            display: "block",
            fontFamily: "var(--font-sans)",
            fontSize: "var(--text-xs)",
            fontWeight: 600,
            letterSpacing: "0.08em",
            textTransform: "uppercase" as const,
            color: "var(--color-text-muted)",
            marginBottom: "0.75rem",
          }}>
            {a.eyebrow}
          </span>

          <h2 style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(1.75rem, 3vw, 2.5rem)",
            fontWeight: 700,
            letterSpacing: "-0.02em",
            color: "var(--color-text-heading)",
            marginBottom: "1.25rem",
            lineHeight: 1.2,
          }}>
            {a.heading}
          </h2>

          <p style={{
            fontFamily: "var(--font-sans)",
            fontSize: "var(--text-lg)",
            color: "var(--color-text-body)",
            lineHeight: 1.75,
            marginBottom: "2rem",
          }}>
            {a.body}
          </p>

          <a
            href={a.url}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary btn-lg"
          >
            {a.cta}
            <svg
              width="16" height="16" viewBox="0 0 24 24"
              fill="none" stroke="currentColor" strokeWidth="2"
              strokeLinecap="round" strokeLinejoin="round"
              aria-hidden="true"
              style={{ flexShrink: 0 }}
            >
              <line x1="7" y1="17" x2="17" y2="7"/>
              <polyline points="7 7 17 7 17 17"/>
            </svg>
          </a>
        </motion.div>
      </Container>
    </section>
  );
}
