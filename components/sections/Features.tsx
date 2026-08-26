"use client";

import { motion } from "framer-motion";
import { useI18n } from "@/lib/i18n/context";
import { Container } from "@/components/ui/Container";

export function Features() {
  const { t } = useI18n();
  const f = t.features;
  const [large, ...rest] = f.items;

  return (
    <section id="features" style={{ paddingBlock: "var(--section-padding-y)", backgroundColor: "var(--color-bg)" }}>
      <Container>
        <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
          <span className="eyebrow">{f.eyebrow}</span>
          <h2 style={{ fontFamily: "var(--font-display)", letterSpacing: "-0.025em", color: "var(--color-text-heading)" }}>
            {f.heading}
          </h2>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gridTemplateRows: "auto auto", gap: "1rem" }} className="features-grid">
          {/* Large card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            style={{ gridColumn: "1/3", gridRow: "1/3" }}
            className="features-large"
          >
            <div style={{
              backgroundColor: "var(--color-black)", borderRadius: "var(--radius-xl)",
              padding: "2.5rem", height: "100%", position: "relative", overflow: "hidden",
            }}>
              <div aria-hidden="true" style={{
                position: "absolute", top: "-30%", right: "-10%", width: "60%", aspectRatio: "1",
                borderRadius: "50%", background: "radial-gradient(circle, rgba(124,203,227,0.12) 0%, transparent 70%)",
              }} />
              <div style={{ fontSize: "32px", marginBottom: "1.25rem" }}>{large.icon}</div>
              <span style={{ display: "inline-block", fontSize: "10px", fontWeight: 600, letterSpacing: "0.06em", textTransform: "uppercase" as const, color: "rgba(255,255,255,0.45)", marginBottom: "0.75rem", fontFamily: "var(--font-sans)" }}>
                {large.badge}
              </span>
              <h3 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.5rem,2.5vw,2rem)", fontWeight: 700, color: "white", marginBottom: "0.75rem", letterSpacing: "-0.02em" }}>
                {large.heading}
              </h3>
              <p style={{ fontSize: "var(--text-base)", color: "rgba(255,255,255,0.65)", lineHeight: 1.7, fontFamily: "var(--font-sans)", maxWidth: "42ch" }}>
                {large.body}
              </p>
            </div>
          </motion.div>

          {/* Smaller cards */}
          {rest.map((item, i) => (
            <motion.div
              key={item.badge}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: 0.08 * (i + 1) }}
              whileHover={{ y: -3, transition: { duration: 0.2 } }}
              className="features-small"
            >
              <div style={{
                backgroundColor: "var(--color-white)", border: "1px solid var(--color-border)",
                borderRadius: "var(--radius-xl)", padding: "1.5rem", height: "100%",
                boxShadow: "var(--shadow-sm)",
              }}>
                <div style={{ fontSize: "24px", marginBottom: "0.875rem" }}>{item.icon}</div>
                <span style={{ display: "inline-block", fontSize: "10px", fontWeight: 600, letterSpacing: "0.06em", textTransform: "uppercase" as const, color: "var(--color-text-muted)", marginBottom: "0.5rem", fontFamily: "var(--font-sans)" }}>
                  {item.badge}
                </span>
                <h4 style={{ fontFamily: "var(--font-display)", fontSize: "var(--text-lg)", fontWeight: 700, color: "var(--color-text-heading)", marginBottom: "0.5rem", letterSpacing: "-0.01em" }}>
                  {item.heading}
                </h4>
                <p style={{ fontSize: "var(--text-sm)", color: "var(--color-text-body)", lineHeight: 1.7, fontFamily: "var(--font-sans)", margin: 0 }}>
                  {item.body}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>

      <style>{`
        @media (max-width: 900px) {
          .features-grid { grid-template-columns: repeat(2,1fr) !important; }
          .features-large { grid-column: 1/-1 !important; grid-row: auto !important; }
          .features-small { grid-column: auto !important; }
        }
        @media (max-width: 560px) {
          .features-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
