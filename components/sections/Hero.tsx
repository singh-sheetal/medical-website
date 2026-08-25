"use client";

import { motion } from "framer-motion";
import { HeroVisual } from "@/components/ui/HeroVisual";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { bookingUrl } from "@/lib/navigation";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 22 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.55, ease: "easeOut" as const, delay },
});

const checkItems = [
  "No technical background needed",
  "EU AI Act §4 compliant",
  "Live every Wednesday",
];

export function Hero() {
  return (
    <section id="hero" style={{
      backgroundColor: "var(--color-bg)",
      paddingTop: "5rem", paddingBottom: "6rem",
      overflow: "hidden", position: "relative",
    }}>
      {/* Background gradient */}
      <div aria-hidden="true" style={{
        position: "absolute", inset: 0,
        backgroundImage: `radial-gradient(circle at 20% 50%, rgba(242,94,27,0.05) 0%, transparent 50%),
          radial-gradient(circle at 80% 20%, rgba(124,203,227,0.06) 0%, transparent 40%)`,
        pointerEvents: "none",
      }} />

      <div className="container" style={{
        display: "grid", gridTemplateColumns: "1fr 1fr",
        gap: "4rem", alignItems: "center", position: "relative", zIndex: 1,
      }}>
        {/* Left — copy */}
        <div style={{ maxWidth: "540px" }}>

          <motion.div {...fadeUp(0)}>
            <Badge variant="accent" style={{ marginBottom: "1.5rem" }}>
              ✦ AI Training for Healthcare Professionals
            </Badge>
          </motion.div>

          <motion.h1 {...fadeUp(0.1)} style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(2.5rem, 4.5vw, 3.75rem)",
            fontWeight: 700, lineHeight: 1.1,
            letterSpacing: "-0.03em",
            color: "var(--color-text-heading)",
            marginBottom: "1.25rem",
          }}>
            Rethink medicine.{" "}
            <span style={{ color: "var(--color-primary)", position: "relative", display: "inline-block" }}>
              With AI.
              <svg viewBox="0 0 200 10" fill="none" xmlns="http://www.w3.org/2000/svg"
                style={{ position: "absolute", bottom: "-4px", left: 0, width: "100%", height: "7px" }}
                aria-hidden="true">
                <path d="M2 7 C40 2, 100 8, 140 4 C165 2, 185 7, 198 4"
                  stroke="var(--color-accent)" strokeWidth="3" strokeLinecap="round" fill="none" opacity="0.8"/>
              </svg>
            </span>
            <br />
            For{" "}
            <span style={{ color: "var(--color-accent-dark)" }}>people.</span>
          </motion.h1>

          <motion.p {...fadeUp(0.2)} style={{
            fontSize: "clamp(1rem, 1.5vw, 1.125rem)",
            color: "var(--color-text-body)", lineHeight: 1.75,
            marginBottom: "2rem", maxWidth: "46ch",
          }}>
            SHAPE Academy helps doctors and healthcare teams build real AI confidence
            — through practical online courses and hands-on consulting, led by
            active medical professionals. Made in Germany.
          </motion.p>

          {/* CTAs */}
          <motion.div {...fadeUp(0.3)} style={{
            display: "flex", gap: "0.875rem", flexWrap: "wrap",
            alignItems: "center", marginBottom: "1.75rem",
          }}>
            <Button as="link" href={bookingUrl} size="lg">
              Book AI Fundamentals — €49
            </Button>
            <Button as="link" href="#courses" variant="ghost" size="lg">
              <span style={{ display: "flex", alignItems: "center", gap: "0.4rem" }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <circle cx="12" cy="12" r="10"/>
                  <polygon points="10 8 16 12 10 16 10 8"/>
                </svg>
                See all courses
              </span>
            </Button>
          </motion.div>

          {/* Trust micro-copy */}
          <motion.div {...fadeUp(0.4)} style={{
            display: "flex", alignItems: "center", gap: "1.25rem", flexWrap: "wrap",
          }}>
            {checkItems.map((item) => (
              <span key={item} style={{
                display: "flex", alignItems: "center", gap: "0.35rem",
                fontSize: "var(--text-sm)", color: "var(--color-text-muted)",
                fontFamily: "var(--font-sans)",
              }}>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none"
                  stroke="var(--color-primary)" strokeWidth="2.5"
                  strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                {item}
              </span>
            ))}
          </motion.div>

          {/* Stats */}
          <motion.div {...fadeUp(0.5)} style={{
            display: "flex", gap: "2rem", marginTop: "2.5rem",
            paddingTop: "2rem", borderTop: "1px solid var(--color-border)", flexWrap: "wrap",
          }}>
            {[
              { value: "6",    unit: " courses", label: "In the academy" },
              { value: "25",   unit: " max",     label: "Per session" },
              { value: "90",   unit: " min",     label: "Per course" },
            ].map((stat) => (
              <div key={stat.label}>
                <div style={{
                  fontFamily: "var(--font-sans)", fontSize: "var(--text-3xl)",
                  fontWeight: 700, color: "var(--color-text-heading)",
                  lineHeight: 1, marginBottom: "0.35rem",
                  letterSpacing: "-0.03em", fontVariantNumeric: "lining-nums",
                  display: "flex", alignItems: "baseline", gap: "1px",
                }}>
                  {stat.value}
                  <span style={{ fontSize: "var(--text-base)", fontWeight: 500, color: "var(--color-primary)", letterSpacing: "0" }}>
                    {stat.unit}
                  </span>
                </div>
                <div style={{ fontSize: "var(--text-sm)", color: "var(--color-text-muted)", fontFamily: "var(--font-sans)", letterSpacing: "0.01em" }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right — visual */}
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", paddingRight: "2rem" }}>
          <HeroVisual />
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          #hero > div { grid-template-columns: 1fr !important; text-align: center; }
          #hero > div > div:first-child { max-width: 100% !important; align-items: center; display: flex; flex-direction: column; }
          #hero > div > div:last-child { padding-right: 0 !important; order: -1; }
          #hero > div > div:first-child > div:nth-child(4),
          #hero > div > div:first-child > div:nth-child(5) { justify-content: center; }
        }
      `}</style>
    </section>
  );
}
