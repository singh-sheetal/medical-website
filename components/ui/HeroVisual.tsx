"use client";

import { motion } from "framer-motion";

export function HeroVisual() {
  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        maxWidth: "620px",
        margin: "0 auto",
      }}
    >
      {/* Glow background */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: "-10%",
          background:
            "radial-gradient(ellipse at 60% 40%, rgba(61,90,158,0.12) 0%, rgba(232,145,106,0.07) 50%, transparent 70%)",
          borderRadius: "50%",
          filter: "blur(40px)",
          zIndex: 0,
        }}
      />

      {/* Main dashboard card */}
      <motion.div
        initial={{ opacity: 0, y: 24, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.3 }}
        style={{
          position: "relative",
          zIndex: 1,
          backgroundColor: "#FFFFFF",
          borderRadius: "var(--radius-xl)",
          border: "1px solid var(--color-border)",
          boxShadow: "var(--shadow-lg)",
          overflow: "hidden",
        }}
      >
        {/* Window chrome */}
        <div
          style={{
            backgroundColor: "var(--color-bg-dark)",
            padding: "0.75rem 1rem",
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
          }}
        >
          <div style={{ display: "flex", gap: "6px" }}>
            {["#FF5F57", "#FFBD2E", "#28C840"].map((c) => (
              <div key={c} style={{ width: 10, height: 10, borderRadius: "50%", backgroundColor: c }} />
            ))}
          </div>
          <div
            style={{
              flex: 1,
              backgroundColor: "rgba(255,255,255,0.08)",
              borderRadius: "var(--radius-sm)",
              padding: "3px 10px",
              fontSize: "11px",
              color: "rgba(253,248,245,0.5)",
              fontFamily: "var(--font-sans)",
              textAlign: "center",
            }}
          >
            app.medicalos.com
          </div>
        </div>

        {/* Dashboard body */}
        <div style={{ display: "flex", height: "340px" }}>

          {/* Sidebar */}
          <div
            style={{
              width: "56px",
              backgroundColor: "var(--color-bg-dark)",
              borderRight: "1px solid rgba(255,255,255,0.06)",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              padding: "1rem 0",
              gap: "0.75rem",
            }}
          >
            {[
              { icon: "⊞", active: true },
              { icon: "📅", active: false },
              { icon: "👥", active: false },
              { icon: "💊", active: false },
              { icon: "📄", active: false },
            ].map(({ icon, active }, i) => (
              <div
                key={i}
                style={{
                  width: "36px",
                  height: "36px",
                  borderRadius: "var(--radius)",
                  backgroundColor: active
                    ? "var(--color-accent)"
                    : "rgba(255,255,255,0.05)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "14px",
                  cursor: "pointer",
                }}
              >
                {icon}
              </div>
            ))}
          </div>

          {/* Main content */}
          <div style={{ flex: 1, padding: "1.25rem", overflow: "hidden" }}>

            {/* Header row */}
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "1rem" }}>
              <div>
                <div style={{ fontSize: "13px", fontWeight: 600, color: "var(--color-text-heading)", fontFamily: "var(--font-sans)" }}>
                  Good morning, Dr. Patel
                </div>
                <div style={{ fontSize: "11px", color: "var(--color-text-muted)", fontFamily: "var(--font-sans)" }}>
                  Wednesday, 14 patients today
                </div>
              </div>
              <div
                style={{
                  backgroundColor: "var(--color-primary-tint)",
                  color: "var(--color-primary)",
                  fontSize: "10px",
                  fontWeight: 600,
                  padding: "4px 10px",
                  borderRadius: "var(--radius-full)",
                  fontFamily: "var(--font-sans)",
                  letterSpacing: "0.04em",
                }}
              >
                AI ACTIVE
              </div>
            </div>

            {/* Stats row */}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "8px", marginBottom: "1rem" }}>
              {[
                { label: "Appointments", value: "14", change: "+2", color: "var(--color-primary)" },
                { label: "Notes Ready", value: "9", change: "AI", color: "var(--color-accent)" },
                { label: "Pending Bills", value: "3", change: "-1", color: "var(--color-success)" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  style={{
                    backgroundColor: "var(--color-bg)",
                    borderRadius: "var(--radius-md)",
                    padding: "0.6rem 0.75rem",
                    border: "1px solid var(--color-border)",
                  }}
                >
                  <div style={{ fontSize: "10px", color: "var(--color-text-muted)", fontFamily: "var(--font-sans)", marginBottom: "2px" }}>
                    {stat.label}
                  </div>
                  <div style={{ display: "flex", alignItems: "baseline", gap: "4px" }}>
                    <span style={{ fontSize: "20px", fontWeight: 700, color: stat.color, fontFamily: "var(--font-sans)", lineHeight: 1 }}>
                      {stat.value}
                    </span>
                    <span style={{ fontSize: "10px", color: "var(--color-text-muted)", fontFamily: "var(--font-sans)" }}>
                      {stat.change}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Patient list */}
            <div style={{ fontSize: "10px", fontWeight: 600, color: "var(--color-text-muted)", fontFamily: "var(--font-sans)", letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: "0.5rem" }}>
              Today&apos;s Patients
            </div>
            {[
              { name: "Sarah Johnson", time: "09:00", status: "In Progress", statusColor: "var(--color-accent)" },
              { name: "Michael Chen", time: "09:30", status: "Checked In", statusColor: "var(--color-primary)" },
              { name: "Emma Williams", time: "10:00", status: "Scheduled", statusColor: "var(--color-text-muted)" },
              { name: "James Brown", time: "10:30", status: "Scheduled", statusColor: "var(--color-text-muted)" },
            ].map((patient) => (
              <div
                key={patient.name}
                style={{
                  display: "flex",
                  alignItems: "center",
                  padding: "0.45rem 0.6rem",
                  borderRadius: "var(--radius)",
                  marginBottom: "3px",
                  backgroundColor: patient.status === "In Progress" ? "var(--color-accent-tint)" : "transparent",
                  transition: "background-color var(--transition-fast)",
                }}
              >
                {/* Avatar */}
                <div
                  style={{
                    width: "26px",
                    height: "26px",
                    borderRadius: "50%",
                    backgroundColor: "var(--color-primary-tint)",
                    color: "var(--color-primary)",
                    fontSize: "10px",
                    fontWeight: 600,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontFamily: "var(--font-sans)",
                    flexShrink: 0,
                    marginRight: "0.5rem",
                  }}
                >
                  {patient.name.split(" ").map((n) => n[0]).join("")}
                </div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontSize: "11px", fontWeight: 500, color: "var(--color-text-heading)", fontFamily: "var(--font-sans)", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                    {patient.name}
                  </div>
                  <div style={{ fontSize: "10px", color: "var(--color-text-muted)", fontFamily: "var(--font-sans)" }}>
                    {patient.time}
                  </div>
                </div>
                <div style={{ fontSize: "9px", fontWeight: 600, color: patient.statusColor, fontFamily: "var(--font-sans)", letterSpacing: "0.03em", flexShrink: 0 }}>
                  {patient.status}
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Floating AI note card */}
      <motion.div
        initial={{ opacity: 0, x: 24, y: 10 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
        className="hero-float-right"
        style={{
          position: "absolute",
          bottom: "-16px",
          right: "-16px",
          backgroundColor: "var(--color-white)",
          border: "1px solid var(--color-border)",
          borderRadius: "var(--radius-lg)",
          padding: "0.875rem 1rem",
          boxShadow: "var(--shadow-md)",
          zIndex: 2,
          maxWidth: "190px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "0.4rem", marginBottom: "0.4rem" }}>
          <div style={{ width: "8px", height: "8px", borderRadius: "50%", backgroundColor: "var(--color-accent)", flexShrink: 0, animation: "pulse 2s infinite" }} />
          <span style={{ fontSize: "10px", fontWeight: 600, color: "var(--color-accent)", fontFamily: "var(--font-sans)", letterSpacing: "0.04em" }}>
            AI GENERATING NOTE
          </span>
        </div>
        <p style={{ fontSize: "10px", color: "var(--color-text-body)", fontFamily: "var(--font-sans)", lineHeight: 1.5, margin: 0 }}>
          &quot;Patient presents with mild hypertension. Recommend lifestyle changes and follow-up in 4 weeks...&quot;
        </p>
      </motion.div>

      {/* Floating stat badge */}
      <motion.div
        initial={{ opacity: 0, x: -20, y: -10 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 0.6, delay: 1.0, ease: "easeOut" }}
        className="hero-float-left"
        style={{
          position: "absolute",
          top: "60px",
          left: "-16px",
          backgroundColor: "var(--color-primary)",
          borderRadius: "var(--radius-lg)",
          padding: "0.75rem 1rem",
          boxShadow: "var(--shadow-md)",
          zIndex: 2,
        }}
      >
        <div style={{ fontSize: "22px", fontWeight: 700, color: "white", fontFamily: "var(--font-sans)", lineHeight: 1 }}>
          2.4h
        </div>
        <div style={{ fontSize: "10px", color: "rgba(255,255,255,0.75)", fontFamily: "var(--font-sans)", marginTop: "2px" }}>
          saved daily
        </div>
      </motion.div>

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(1.2); }
        }
        @media (max-width: 480px) {
          .hero-float-right,
          .hero-float-left { display: none; }
        }
      `}</style>
    </div>
  );
}
