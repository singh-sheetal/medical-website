"use client";

import { motion } from "framer-motion";

const tasks = [
  { name: "Backup Verification",          person: "MG", cat: "IT",       overdue: true,  days: "11d" },
  { name: "Schulung: Wundversorgung",     person: "TT", cat: "Learning", overdue: false, days: "Aug 4" },
  { name: "Schulung: Sterilisation",      person: "NH", cat: "Hygiene",  overdue: false, days: "Aug 4" },
  { name: "EBM/GOÄ-Abrechnung",          person: "LF", cat: "QM",       overdue: false, days: "Aug 12" },
];

const catColour: Record<string, string> = {
  IT:      "var(--color-accent-dark)",
  Learning:"var(--color-black)",
  Hygiene: "var(--color-highlight)",
  QM:      "var(--color-text-muted)",
};

export function HeroVisual() {
  return (
    <div style={{ position: "relative", width: "100%", maxWidth: "560px", margin: "0 auto" }}>
      {/* Subtle glow */}
      <div aria-hidden="true" style={{
        position: "absolute", inset: "-8%",
        background: "radial-gradient(ellipse at 60% 40%, rgba(124,203,227,0.1) 0%, transparent 65%)",
        filter: "blur(30px)", zIndex: 0,
      }} />

      {/* Main card */}
      <motion.div
        initial={{ opacity: 0, y: 24, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.7, ease: "easeOut", delay: 0.3 }}
        style={{
          position: "relative", zIndex: 1,
          backgroundColor: "var(--color-white)",
          borderRadius: "var(--radius-xl)",
          border: "1px solid var(--color-border)",
          boxShadow: "var(--shadow-lg)",
          overflow: "hidden",
        }}
      >
        {/* Window chrome */}
        <div style={{ backgroundColor: "var(--color-bg-dark)", padding: "0.7rem 1rem", display: "flex", alignItems: "center", gap: "0.5rem" }}>
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
            shapemed.zerobiased.com
          </div>
        </div>

        {/* Header */}
        <div style={{ padding: "1rem 1.25rem 0.75rem", borderBottom: "1px solid var(--color-border)", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div>
            <div style={{ fontFamily: "var(--font-display)", fontSize: "14px", fontWeight: 700, color: "var(--color-text-heading)" }}>
              Aufgaben & Routinen
            </div>
            <div style={{ fontSize: "11px", color: "var(--color-text-muted)", fontFamily: "var(--font-sans)", marginTop: "2px" }}>
              Praxis am Markt · Dr. Anna Weber
            </div>
          </div>
          <div style={{
            backgroundColor: "var(--color-highlight-tint)", color: "var(--color-highlight)",
            fontSize: "10px", fontWeight: 600, padding: "3px 8px",
            borderRadius: "var(--radius-full)", fontFamily: "var(--font-sans)", letterSpacing: "0.04em",
          }}>
            1 ESKALIERT
          </div>
        </div>

        {/* Stats row */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", borderBottom: "1px solid var(--color-border)" }}>
          {[
            { label: "Gesamt", value: "15" },
            { label: "Überfällig", value: "6", accent: true },
            { label: "Heute", value: "0" },
            { label: "Erledigt", value: "3" },
          ].map(s => (
            <div key={s.label} style={{ padding: "0.75rem", textAlign: "center", borderRight: "1px solid var(--color-border)" }}>
              <div style={{
                fontFamily: "var(--font-sans)", fontSize: "18px", fontWeight: 700,
                color: s.accent ? "var(--color-highlight)" : "var(--color-text-heading)",
                lineHeight: 1, fontVariantNumeric: "lining-nums",
              }}>{s.value}</div>
              <div style={{ fontSize: "10px", color: "var(--color-text-muted)", fontFamily: "var(--font-sans)", marginTop: "2px" }}>{s.label}</div>
            </div>
          ))}
        </div>

        {/* Task list */}
        <div style={{ padding: "0.75rem 1rem", display: "flex", flexDirection: "column", gap: "0.4rem" }}>
          {tasks.map((task, i) => (
            <motion.div
              key={task.name}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.35, delay: 0.6 + i * 0.08 }}
              style={{
                display: "flex", alignItems: "center", gap: "0.6rem",
                padding: "0.55rem 0.75rem",
                borderRadius: "var(--radius)",
                backgroundColor: task.overdue ? "rgba(242,94,27,0.05)" : "var(--color-bg)",
                border: `1px solid ${task.overdue ? "rgba(242,94,27,0.2)" : "var(--color-border)"}`,
              }}
            >
              <div style={{
                width: "26px", height: "26px", borderRadius: "50%",
                backgroundColor: task.overdue ? "var(--color-highlight-tint)" : "var(--color-primary-tint)",
                color: task.overdue ? "var(--color-highlight)" : "var(--color-text-muted)",
                fontSize: "9px", fontWeight: 700, display: "flex", alignItems: "center",
                justifyContent: "center", fontFamily: "var(--font-sans)", flexShrink: 0,
              }}>{task.person}</div>
              <span style={{ flex: 1, fontSize: "11px", fontWeight: 500, color: "var(--color-text-heading)", fontFamily: "var(--font-sans)", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                {task.name}
              </span>
              <span style={{ fontSize: "9px", fontWeight: 600, padding: "2px 6px", borderRadius: "4px", backgroundColor: "var(--color-bg-alt)", color: catColour[task.cat] || "var(--color-text-muted)", fontFamily: "var(--font-sans)", flexShrink: 0 }}>
                {task.cat}
              </span>
              <span style={{ fontSize: "10px", color: task.overdue ? "var(--color-highlight)" : "var(--color-text-muted)", fontFamily: "var(--font-sans)", flexShrink: 0, fontWeight: task.overdue ? 600 : 400 }}>
                {task.overdue ? `${task.days} überfällig` : task.days}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Bottom bar */}
        <div style={{ margin: "0 1rem 1rem", backgroundColor: "var(--color-black)", borderRadius: "var(--radius)", padding: "0.6rem 0.875rem", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <span style={{ fontSize: "11px", fontWeight: 600, color: "white", fontFamily: "var(--font-sans)" }}>
            Shape.Med — Praxis-Betriebssystem
          </span>
          <span style={{ fontSize: "10px", color: "rgba(255,255,255,0.6)", fontFamily: "var(--font-sans)" }}>
            shapeconsulting.app
          </span>
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
          borderRadius: "var(--radius-lg)", padding: "0.75rem 1rem",
          boxShadow: "var(--shadow-md)", zIndex: 2,
        }}
      >
        <div style={{ fontSize: "10px", color: "rgba(255,255,255,0.6)", fontFamily: "var(--font-sans)", marginBottom: "2px" }}>Kompetenzlücken</div>
        <div style={{ fontSize: "22px", fontWeight: 700, color: "white", fontFamily: "var(--font-sans)", lineHeight: 1, fontVariantNumeric: "lining-nums", letterSpacing: "-0.02em" }}>
          11
        </div>
        <div style={{ fontSize: "10px", color: "rgba(255,255,255,0.6)", fontFamily: "var(--font-sans)", marginTop: "2px" }}>erkannt</div>
      </motion.div>

      {/* Floating — GDPR badge */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 1.1 }}
        className="hero-float-right"
        style={{
          position: "absolute", bottom: "-16px", right: "-16px",
          backgroundColor: "var(--color-white)",
          border: "1px solid var(--color-border)",
          borderRadius: "var(--radius-lg)", padding: "0.75rem 1rem",
          boxShadow: "var(--shadow-md)", zIndex: 2, maxWidth: "170px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "0.4rem", marginBottom: "0.25rem" }}>
          <span style={{ fontSize: "13px" }}>🔒</span>
          <span style={{ fontSize: "10px", fontWeight: 600, color: "var(--color-text-heading)", fontFamily: "var(--font-sans)", letterSpacing: "0.04em" }}>DSGVO-KONFORM</span>
        </div>
        <p style={{ fontSize: "10px", color: "var(--color-text-muted)", fontFamily: "var(--font-sans)", lineHeight: 1.5, margin: 0 }}>
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
