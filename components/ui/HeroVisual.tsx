"use client";

import { motion } from "framer-motion";

const modules = [
  { icon: "🧠", label: "AI Fundamentals",     time: "Wed 16:00", status: "Available", active: true },
  { icon: "💬", label: "LLMs & Prompting",     time: "Wed 19:00", status: "Jan 2026",  active: false },
  { icon: "🛡️", label: "Data & IT Security",  time: "Wed 19:00", status: "Jan 2026",  active: false },
  { icon: "📋", label: "Doctor–Patient Comm.", time: "Wed 19:00", status: "Jan 2026",  active: false },
];

export function HeroVisual() {
  return (
    <div style={{ position: "relative", width: "100%", maxWidth: "580px", margin: "0 auto" }}>
      {/* Glow */}
      <div aria-hidden="true" style={{
        position: "absolute", inset: "-10%",
        background: "radial-gradient(ellipse at 60% 40%, rgba(242,94,27,0.1) 0%, rgba(124,203,227,0.08) 50%, transparent 70%)",
        borderRadius: "50%", filter: "blur(40px)", zIndex: 0,
      }} />

      {/* Main card */}
      <motion.div
        initial={{ opacity: 0, y: 24, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.7, ease: "easeOut", delay: 0.3 }}
        style={{
          position: "relative", zIndex: 1,
          backgroundColor: "#FFFFFF",
          borderRadius: "var(--radius-xl)",
          border: "1px solid var(--color-border)",
          boxShadow: "var(--shadow-lg)",
          overflow: "hidden",
        }}
      >
        {/* Window chrome */}
        <div style={{ backgroundColor: "var(--color-bg-dark)", padding: "0.75rem 1rem", display: "flex", alignItems: "center", gap: "0.5rem" }}>
          <div style={{ display: "flex", gap: "6px" }}>
            {["#FF5F57","#FFBD2E","#28C840"].map(c => (
              <div key={c} style={{ width: 10, height: 10, borderRadius: "50%", backgroundColor: c }} />
            ))}
          </div>
          <div style={{
            flex: 1, backgroundColor: "rgba(255,255,255,0.08)", borderRadius: "var(--radius-sm)",
            padding: "3px 10px", fontSize: "11px", color: "rgba(255,255,255,0.5)",
            fontFamily: "var(--font-sans)", textAlign: "center",
          }}>
            academy.shapeconsulting.app
          </div>
        </div>

        {/* Header */}
        <div style={{ padding: "1.25rem 1.25rem 0.75rem", borderBottom: "1px solid var(--color-border)" }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <div>
              <div style={{ fontFamily: "var(--font-display)", fontSize: "15px", fontWeight: 700, color: "var(--color-text-heading)" }}>
                SHAPE Academy
              </div>
              <div style={{ fontSize: "11px", color: "var(--color-text-muted)", fontFamily: "var(--font-sans)", marginTop: "2px" }}>
                AI Training for Healthcare Professionals
              </div>
            </div>
            <div style={{
              backgroundColor: "var(--color-primary-tint)", color: "var(--color-primary)",
              fontSize: "10px", fontWeight: 600, padding: "4px 10px",
              borderRadius: "var(--radius-full)", fontFamily: "var(--font-sans)", letterSpacing: "0.04em",
            }}>
              LIVE EVERY WEDNESDAY
            </div>
          </div>
        </div>

        {/* Course list */}
        <div style={{ padding: "0.875rem 1.25rem", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
          {modules.map((mod, i) => (
            <motion.div
              key={mod.label}
              initial={{ opacity: 0, x: -12 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.6 + i * 0.1 }}
              style={{
                display: "flex", alignItems: "center", gap: "0.75rem",
                padding: "0.6rem 0.875rem",
                borderRadius: "var(--radius-md)",
                backgroundColor: mod.active ? "var(--color-primary-tint)" : "var(--color-bg)",
                border: `1px solid ${mod.active ? "rgba(242,94,27,0.2)" : "var(--color-border)"}`,
              }}
            >
              <span style={{ fontSize: "18px", flexShrink: 0 }}>{mod.icon}</span>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{
                  fontSize: "12px", fontWeight: 600,
                  color: mod.active ? "var(--color-primary-dark)" : "var(--color-text-heading)",
                  fontFamily: "var(--font-sans)", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis",
                }}>
                  {mod.label}
                </div>
                <div style={{ fontSize: "10px", color: "var(--color-text-muted)", fontFamily: "var(--font-sans)" }}>
                  {mod.time}
                </div>
              </div>
              <div style={{
                fontSize: "10px", fontWeight: 600,
                color: mod.active ? "var(--color-primary)" : "var(--color-text-muted)",
                fontFamily: "var(--font-sans)", flexShrink: 0,
              }}>
                {mod.status}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Book CTA */}
        <div style={{ padding: "0 1.25rem 1.25rem" }}>
          <div style={{
            backgroundColor: "var(--color-primary)", borderRadius: "var(--radius-md)",
            padding: "0.75rem 1rem", display: "flex", alignItems: "center", justifyContent: "space-between",
          }}>
            <span style={{ fontSize: "12px", fontWeight: 600, color: "white", fontFamily: "var(--font-sans)" }}>
              AI Fundamentals — Next session Wednesday
            </span>
            <span style={{ fontSize: "11px", color: "rgba(255,255,255,0.8)", fontFamily: "var(--font-sans)" }}>
              €49 · Book now →
            </span>
          </div>
        </div>
      </motion.div>

      {/* Floating badge — Jan */}
      <motion.div
        initial={{ opacity: 0, x: -20, y: -10 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 0.6, delay: 1.0, ease: "easeOut" }}
        className="hero-float-left"
        style={{
          position: "absolute", top: "60px", left: "-20px",
          backgroundColor: "var(--color-primary)",
          borderRadius: "var(--radius-lg)", padding: "0.75rem 1rem",
          boxShadow: "var(--shadow-md)", zIndex: 2,
        }}
      >
        <div style={{ fontSize: "10px", color: "rgba(255,255,255,0.7)", fontFamily: "var(--font-sans)", marginBottom: "2px" }}>
          Led by
        </div>
        <div style={{
          fontSize: "13px", fontWeight: 700, color: "white",
          fontFamily: "var(--font-sans)", lineHeight: 1, letterSpacing: "-0.01em",
          fontVariantNumeric: "lining-nums",
        }}>
          Dr. Thomas Weber
        </div>
        <div style={{ fontSize: "10px", color: "rgba(255,255,255,0.7)", fontFamily: "var(--font-sans)", marginTop: "2px" }}>
          Doctor & Founder
        </div>
      </motion.div>

      {/* Floating EU badge */}
      <motion.div
        initial={{ opacity: 0, x: 24, y: 10 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
        className="hero-float-right"
        style={{
          position: "absolute", bottom: "-16px", right: "-16px",
          backgroundColor: "var(--color-white)",
          border: "1px solid var(--color-border)",
          borderRadius: "var(--radius-lg)", padding: "0.875rem 1rem",
          boxShadow: "var(--shadow-md)", zIndex: 2, maxWidth: "185px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "0.4rem", marginBottom: "0.3rem" }}>
          <span style={{ fontSize: "14px" }}>⚖️</span>
          <span style={{ fontSize: "10px", fontWeight: 600, color: "var(--color-primary)", fontFamily: "var(--font-sans)", letterSpacing: "0.04em" }}>
            EU AI ACT COMPLIANT
          </span>
        </div>
        <p style={{ fontSize: "10px", color: "var(--color-text-body)", fontFamily: "var(--font-sans)", lineHeight: 1.5, margin: 0 }}>
          Certifiable as staff training under §4 of the European AI Regulation
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
