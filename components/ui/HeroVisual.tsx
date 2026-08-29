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
            src="/screenshots/dashboard.jpg"
            alt="Shape.Med Practice Operating System — Dashboard"
            fill
            sizes="(max-width: 900px) 100vw, 50vw"
            style={{ objectFit: "cover", objectPosition: "top left" }}
            priority
          />
        </div>
      </motion.div>

      <style>{`
        @media (max-width: 480px) {
          .hero-float-right, .hero-float-left { display: none; }
        }
      `}</style>
    </div>
  );
}
