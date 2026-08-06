"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { bookingUrl } from "@/lib/navigation";

const stats = [
  { value: "30 min", label: "Free consultation" },
  { value: "1 day",  label: "Setup time" },
  { value: "30 days", label: "Free trial" },
];

export function CTABanner() {
  return (
    <Section variant="dark" id="book-demo">
      {/* Decorative blobs */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          overflow: "hidden",
          pointerEvents: "none",
        }}
      >
        <div style={{
          position: "absolute",
          top: "-20%",
          left: "-10%",
          width: "50%",
          aspectRatio: "1",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(61,90,158,0.25) 0%, transparent 70%)",
          filter: "blur(60px)",
        }} />
        <div style={{
          position: "absolute",
          bottom: "-20%",
          right: "-10%",
          width: "50%",
          aspectRatio: "1",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(232,145,106,0.15) 0%, transparent 70%)",
          filter: "blur(60px)",
        }} />
      </div>

      <Container style={{ position: "relative", zIndex: 1 }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr auto",
            gap: "3rem",
            alignItems: "center",
          }}
          className="cta-grid"
        >
          {/* Left — copy */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            {/* Eyebrow */}
            <span
              style={{
                display: "inline-block",
                fontFamily: "var(--font-sans)",
                fontSize: "var(--text-xs)",
                fontWeight: 600,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                color: "var(--color-accent)",
                marginBottom: "1rem",
              }}
            >
              Get Started Today
            </span>

            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(2rem, 3.5vw, 3rem)",
                fontWeight: 700,
                lineHeight: 1.15,
                letterSpacing: "-0.02em",
                color: "var(--color-text-inverse)",
                marginBottom: "1rem",
              }}
            >
              Ready to transform
              <br />
              your practice?
            </h2>

            <p
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "var(--text-lg)",
                color: "rgba(253,248,245,0.7)",
                lineHeight: 1.65,
                marginBottom: "2rem",
                maxWidth: "44ch",
              }}
            >
              Book a free 30-minute demo. We&apos;ll show you exactly how MedicalOS
              fits your workflow — no pressure, no commitment.
            </p>

            {/* CTAs */}
            <div style={{ display: "flex", gap: "0.875rem", flexWrap: "wrap" }}>
              <Button as="link" href={bookingUrl} variant="accent" size="lg">
                Book a Free Demo
              </Button>
              <Button as="link" href="#features" variant="ghost" size="lg"
                style={{
                  borderColor: "rgba(253,248,245,0.25)",
                  color: "var(--color-text-inverse)",
                } as React.CSSProperties}
              >
                Explore features
              </Button>
            </div>

            {/* Trust micro-copy */}
            <p
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "var(--text-sm)",
                color: "rgba(253,248,245,0.45)",
                marginTop: "1rem",
              }}
            >
              No credit card required · Cancel anytime · GDPR compliant
            </p>
          </motion.div>

          {/* Right — stat cards */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.15 }}
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "0.75rem",
              minWidth: "200px",
            }}
            className="cta-stats"
          >
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, x: 16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, ease: "easeOut", delay: 0.2 + i * 0.08 }}
                style={{
                  backgroundColor: "rgba(255,255,255,0.06)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  borderRadius: "var(--radius-lg)",
                  padding: "1.25rem 1.5rem",
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.2rem",
                }}
              >
                <div
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "var(--text-3xl)",
                    fontWeight: 700,
                    color: "var(--color-accent)",
                    lineHeight: 1,
                  }}
                >
                  {stat.value}
                </div>
                <div
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: "var(--text-sm)",
                    color: "rgba(253,248,245,0.6)",
                  }}
                >
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </Container>

      <style>{`
        #book-demo {
          position: relative;
          overflow: hidden;
        }
        @media (max-width: 768px) {
          .cta-grid {
            grid-template-columns: 1fr !important;
          }
          .cta-stats {
            flex-direction: row !important;
            flex-wrap: wrap;
          }
          .cta-stats > div {
            flex: 1;
            min-width: 120px;
          }
        }
      `}</style>
    </Section>
  );
}
