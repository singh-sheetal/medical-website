"use client";

import { motion } from "framer-motion";
import { HeroVisual } from "@/components/ui/HeroVisual";
import { useI18n } from "@/lib/i18n/context";
import { openDemoForm } from "@/components/ui/GlobalDemoForm";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 22 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.55, ease: "easeOut" as const, delay },
});

export function Hero() {
  const { t } = useI18n();
  const h = t.hero;

  return (
    <section id="hero" style={{
      backgroundColor: "var(--color-bg)",
      paddingTop: "5rem", paddingBottom: "6rem",
      overflow: "hidden", position: "relative",
    }}>
      <div aria-hidden="true" style={{
        position: "absolute", inset: 0,
        backgroundImage: `radial-gradient(circle at 80% 20%, rgba(124,203,227,0.07) 0%, transparent 45%)`,
        pointerEvents: "none",
      }} />

      <div className="container" style={{
        display: "grid", gridTemplateColumns: "1fr 1fr",
        gap: "4rem", alignItems: "center", position: "relative", zIndex: 1,
      }}>
        {/* Left */}
        <div style={{ maxWidth: "560px" }}>
          <motion.div {...fadeUp(0)}>
            <span className="badge badge-neutral" style={{ marginBottom: "1.5rem", display: "inline-flex" }}>
              {h.badge}
            </span>
          </motion.div>

          <motion.h1 {...fadeUp(0.1)} style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(2.5rem, 4.5vw, 3.75rem)",
            fontWeight: 700, lineHeight: 1.1,
            letterSpacing: "-0.03em",
            color: "var(--color-text-heading)",
            marginBottom: "1.25rem",
          }}>
            {h.headline1}<br />
            <span className="highlight">{h.headline2}</span><br />
            {h.headline3}
          </motion.h1>

          <motion.p {...fadeUp(0.2)} style={{
            fontSize: "clamp(1rem, 1.5vw, 1.125rem)",
            color: "var(--color-text-body)", lineHeight: 1.75,
            marginBottom: "2rem", maxWidth: "46ch",
          }}>
            {h.sub}
          </motion.p>

          {/* CTAs */}
          <motion.div {...fadeUp(0.3)} style={{
            display: "flex", gap: "0.875rem", flexWrap: "wrap", alignItems: "center", marginBottom: "1.75rem",
          }}>
            <button onClick={() => openDemoForm()} className="btn btn-primary btn-lg">
              {h.cta1}
            </button>
            <a href="#modules" className="btn btn-primary btn-lg">
              {h.cta2}
            </a>
          </motion.div>

          {/* Trust */}
          <motion.div {...fadeUp(0.4)} style={{ display: "flex", alignItems: "center", gap: "1.25rem", flexWrap: "wrap" }}>
            {[h.trust1, h.trust2, h.trust3].map((item) => (
              <span key={item} style={{
                display: "flex", alignItems: "center", gap: "0.35rem",
                fontSize: "var(--text-sm)", color: "var(--color-text-muted)", fontFamily: "var(--font-sans)",
              }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--color-text-heading)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
                {item}
              </span>
            ))}
          </motion.div>

        </div>

        {/* Right */}
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
