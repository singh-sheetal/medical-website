"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function HeroVisual() {
  return (
    <div style={{ position: "relative", width: "100%", maxWidth: "620px", margin: "0 auto" }}>

      {/* Glow */}
      <div aria-hidden="true" style={{
        position: "absolute", inset: "-8%",
        background: "radial-gradient(ellipse at 60% 40%, rgba(124,203,227,0.08) 0%, transparent 65%)",
        filter: "blur(30px)", zIndex: 0,
      }} />

      {/* Main screenshot card */}
      <motion.div
        initial={{ opacity: 0, y: 24, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.7, ease: "easeOut", delay: 0.3 }}
        style={{
          position: "relative", zIndex: 1,
          borderRadius: "var(--radius-xl)",
          overflow: "hidden",
          border: "1px solid var(--color-border)",
          boxShadow: "var(--shadow-lg)",
          backgroundColor: "var(--color-bg-dark)",
        }}
      >
        {/* Browser chrome */}
        <div style={{
          backgroundColor: "var(--color-bg-dark)",
          padding: "0.65rem 0.875rem",
          display: "flex", alignItems: "center", gap: "0.5rem",
        }}>
          <div style={{ display: "flex", gap: "5px" }}>
            {["#FF5F57","#FFBD2E","#28C840"].map(c => (
              <div key={c} style={{ width: 9, height: 9, borderRadius: "50%", backgroundColor: c }} />
            ))}
          </div>
          <div style={{
            flex: 1, backgroundColor: "rgba(255,255,255,0.07)",
            borderRadius: "4px", padding: "2px 10px",
            fontSize: "11px", color: "rgba(255,255,255,0.4)",
            fontFamily: "var(--font-sans)", textAlign: "center",
          }}>
            shapemed.zerobiased.com
          </div>
        </div>

        {/* Real dashboard screenshot */}
        <div style={{ position: "relative", width: "100%", aspectRatio: "1400/856" }}>
          <Image
            src="/screenshots/shapemed-full.jpg"
            alt="Shape.Med Practice Operating System — Dashboard"
            fill
            sizes="(max-width: 900px) 100vw, 50vw"
            style={{ objectFit: "cover", objectPosition: "top left" }}
            priority
          />
        </div>
      </motion.div>

      {/* Floating — competency badge */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 1.0 }}
        className="hero-float-left"
        style={{
          position: "absolute", top: "60px", left: "-20px",
          backgroundColor: "var(--color-black)",
          borderRadius: "var(--radius-lg)",
          padding: "0.75rem 1rem",
          boxShadow: "var(--shadow-md)", zIndex: 2,
        }}
      >
        <div style={{
          fontSize: "10px", color: "rgba(255,255,255,0.55)",
          fontFamily: "var(--font-sans)", marginBottom: "2px",
        }}>
          Kompetenzlücken
        </div>
        <div style={{
          fontSize: "26px", fontWeight: 700, color: "white",
          fontFamily: "var(--font-sans)", lineHeight: 1,
          fontVariantNumeric: "lining-nums", letterSpacing: "-0.02em",
        }}>
          11
        </div>
        <div style={{
          fontSize: "10px", color: "rgba(255,255,255,0.55)",
          fontFamily: "var(--font-sans)", marginTop: "2px",
        }}>
          erkannt
        </div>
      </motion.div>

      {/* Floating — GDPR badge */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 1.1 }}
        className="hero-float-right"
        style={{
          position: "absolute", bottom: "-14px", right: "-16px",
          backgroundColor: "var(--color-white)",
          border: "1px solid var(--color-border)",
          borderRadius: "var(--radius-lg)",
          padding: "0.75rem 1rem",
          boxShadow: "var(--shadow-md)", zIndex: 2, maxWidth: "170px",
        }}
      >
        <div style={{
          display: "flex", alignItems: "center", gap: "0.4rem",
          marginBottom: "0.25rem",
        }}>
          <div style={{
            width: "6px", height: "6px", borderRadius: "50%",
            backgroundColor: "var(--color-text-heading)", flexShrink: 0,
          }} />
          <span style={{
            fontSize: "10px", fontWeight: 600,
            color: "var(--color-text-heading)",
            fontFamily: "var(--font-sans)", letterSpacing: "0.04em",
          }}>
            DSGVO-KONFORM
          </span>
        </div>
        <p style={{
          fontSize: "10px", color: "var(--color-text-muted)",
          fontFamily: "var(--font-sans)", lineHeight: 1.5, margin: 0,
        }}>
          Alle Daten sicher in Deutschland gehostet
        </p>
      </motion.div>

      <style>{`
        @media (max-width: 480px) {
          .hero-float-right, .hero-float-left { display: none; }
        }
      `}</style>
    </div>
  );
}
