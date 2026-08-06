"use client";

import { motion, useAnimationControls } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { trustedByLogos } from "@/lib/partners";

function LogoCard({ name, abbr }: { name: string; abbr: string }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "0.5rem",
        padding: "0.6rem 1.25rem",
        borderRadius: "var(--radius-md)",
        border: "1px solid var(--color-border)",
        backgroundColor: "var(--color-white)",
        flexShrink: 0,
        userSelect: "none",
        cursor: "default",
        minWidth: "130px",
        boxShadow: "var(--shadow-sm)",
      }}
    >
      <div
        aria-hidden="true"
        style={{
          width: "30px",
          height: "30px",
          borderRadius: "50%",
          backgroundColor: "var(--color-primary-tint)",
          color: "var(--color-primary)",
          fontSize: "9px",
          fontWeight: 700,
          fontFamily: "var(--font-sans)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          letterSpacing: "0.04em",
          flexShrink: 0,
        }}
      >
        {abbr}
      </div>
      <span
        style={{
          fontFamily: "var(--font-sans)",
          fontSize: "var(--text-sm)",
          fontWeight: 600,
          color: "var(--color-text-body)",
          whiteSpace: "nowrap",
        }}
      >
        {name}
      </span>
    </div>
  );
}

const CARD_WIDTH  = 168; // px — approx card width + gap
const GAP         = 12;
const UNIT        = CARD_WIDTH + GAP;
const TOTAL_LOGOS = trustedByLogos.length;
const SPEED       = 35; // seconds for one full loop

export function LogoStrip() {
  const [paused, setPaused]   = useState(false);
  const [offset, setOffset]   = useState(0);
  const controls              = useAnimationControls();
  const rafRef                = useRef<number | null>(null);
  const lastTimeRef           = useRef<number | null>(null);
  const offsetRef             = useRef(0);
  const totalWidth            = UNIT * TOTAL_LOGOS;

  // Animate via rAF for smooth, controllable scroll
  useEffect(() => {
    const tick = (time: number) => {
      if (!paused) {
        if (lastTimeRef.current !== null) {
          const delta = time - lastTimeRef.current;
          offsetRef.current += (totalWidth / (SPEED * 1000)) * delta;
          if (offsetRef.current >= totalWidth) {
            offsetRef.current -= totalWidth;
          }
          setOffset(offsetRef.current);
        }
        lastTimeRef.current = time;
      } else {
        lastTimeRef.current = null;
      }
      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [paused, totalWidth]);

  // Manual scroll helpers
  const scroll = (dir: "left" | "right") => {
    offsetRef.current = Math.max(
      0,
      offsetRef.current + (dir === "right" ? UNIT * 2 : -UNIT * 2)
    ) % totalWidth;
    setOffset(offsetRef.current);
  };

  // Duplicate logos for seamless loop
  const repeated = [...trustedByLogos, ...trustedByLogos, ...trustedByLogos];

  return (
    <motion.section
      id="trusted-by"
      aria-label="Trusted by leading healthcare organisations"
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      style={{
        paddingBlock: "3rem",
        borderTop: "1px solid var(--color-border)",
        borderBottom: "1px solid var(--color-border)",
        backgroundColor: "var(--color-bg-alt)",
      }}
    >
      {/* Label */}
      <p
        style={{
          textAlign: "center",
          fontFamily: "var(--font-sans)",
          fontSize: "var(--text-xs)",
          fontWeight: 600,
          letterSpacing: "0.08em",
          textTransform: "uppercase",
          color: "var(--color-text-muted)",
          marginBottom: "1.5rem",
        }}
      >
        Trusted by 5,000+ healthcare professionals worldwide
      </p>

      {/* Carousel wrapper */}
      <div
        style={{ position: "relative" }}
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        {/* Left arrow */}
        <button
          onClick={() => scroll("left")}
          aria-label="Scroll logos left"
          style={{
            position: "absolute",
            left: "1rem",
            top: "50%",
            transform: "translateY(-50%)",
            zIndex: 10,
            width: "36px",
            height: "36px",
            borderRadius: "50%",
            border: "1px solid var(--color-border)",
            backgroundColor: "var(--color-white)",
            boxShadow: "var(--shadow)",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "var(--color-text-heading)",
            transition: "box-shadow var(--transition-fast), border-color var(--transition-fast)",
          }}
          onMouseEnter={(e) => {
            const el = e.currentTarget as HTMLButtonElement;
            el.style.borderColor = "var(--color-primary)";
            el.style.boxShadow = "var(--shadow-md)";
          }}
          onMouseLeave={(e) => {
            const el = e.currentTarget as HTMLButtonElement;
            el.style.borderColor = "var(--color-border)";
            el.style.boxShadow = "var(--shadow)";
          }}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </button>

        {/* Right arrow */}
        <button
          onClick={() => scroll("right")}
          aria-label="Scroll logos right"
          style={{
            position: "absolute",
            right: "1rem",
            top: "50%",
            transform: "translateY(-50%)",
            zIndex: 10,
            width: "36px",
            height: "36px",
            borderRadius: "50%",
            border: "1px solid var(--color-border)",
            backgroundColor: "var(--color-white)",
            boxShadow: "var(--shadow)",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "var(--color-text-heading)",
            transition: "box-shadow var(--transition-fast), border-color var(--transition-fast)",
          }}
          onMouseEnter={(e) => {
            const el = e.currentTarget as HTMLButtonElement;
            el.style.borderColor = "var(--color-primary)";
            el.style.boxShadow = "var(--shadow-md)";
          }}
          onMouseLeave={(e) => {
            const el = e.currentTarget as HTMLButtonElement;
            el.style.borderColor = "var(--color-border)";
            el.style.boxShadow = "var(--shadow)";
          }}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </button>

        {/* Fade masks */}
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            inset: 0,
            zIndex: 5,
            pointerEvents: "none",
            background:
              "linear-gradient(to right, var(--color-bg-alt) 0%, transparent 12%, transparent 88%, var(--color-bg-alt) 100%)",
          }}
        />

        {/* Scrolling track */}
        <div style={{ overflow: "hidden", paddingBlock: "0.25rem" }}>
          <div
            style={{
              display: "flex",
              gap: `${GAP}px`,
              width: "max-content",
              transform: `translateX(-${offset}px)`,
              willChange: "transform",
            }}
          >
            {repeated.map((logo, i) => (
              <LogoCard key={`${logo.abbr}-${i}`} {...logo} />
            ))}
          </div>
        </div>
      </div>

      {/* Stats strip */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "3rem",
          marginTop: "2rem",
          flexWrap: "wrap",
          paddingInline: "1.5rem",
        }}
      >
        {[
          { value: "5,000+", label: "Practices" },
          { value: "1.2M+",  label: "Patients served" },
          { value: "4.9 ★",  label: "Average rating" },
          { value: "99.9%",  label: "Uptime SLA" },
        ].map((stat) => (
          <div key={stat.label} style={{ textAlign: "center" }}>
            <div
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "var(--text-2xl)",
                fontWeight: 700,
                color: "var(--color-primary)",
                lineHeight: 1,
                marginBottom: "0.2rem",
              }}
            >
              {stat.value}
            </div>
            <div
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "var(--text-xs)",
                color: "var(--color-text-muted)",
                letterSpacing: "0.02em",
              }}
            >
              {stat.label}
            </div>
          </div>
        ))}
      </motion.div>
    </motion.section>
  );
}
