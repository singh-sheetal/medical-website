"use client";

import { motion } from "framer-motion";
import { trustedByLogos } from "@/lib/partners";

function LogoPlaceholder({ name, abbr }: { name: string; abbr: string }) {
  return (
    <div
      title={name}
      style={{
        display: "flex",
        alignItems: "center",
        gap: "0.5rem",
        padding: "0.5rem 1.25rem",
        borderRadius: "var(--radius-md)",
        border: "1px solid var(--color-border)",
        backgroundColor: "var(--color-white)",
        flexShrink: 0,
        transition: "border-color var(--transition-fast), box-shadow var(--transition-fast)",
        cursor: "default",
        userSelect: "none",
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget as HTMLDivElement;
        el.style.borderColor = "var(--color-primary)";
        el.style.boxShadow = "var(--shadow-sm)";
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget as HTMLDivElement;
        el.style.borderColor = "var(--color-border)";
        el.style.boxShadow = "none";
      }}
    >
      {/* Logo mark — circular abbr */}
      <div
        aria-hidden="true"
        style={{
          width: "28px",
          height: "28px",
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
      {/* Name */}
      <span
        style={{
          fontFamily: "var(--font-sans)",
          fontSize: "var(--text-sm)",
          fontWeight: 600,
          color: "var(--color-text-body)",
          whiteSpace: "nowrap",
          letterSpacing: "-0.01em",
        }}
      >
        {name}
      </span>
    </div>
  );
}

export function LogoStrip() {
  // Duplicate for seamless loop
  const repeated = [...trustedByLogos, ...trustedByLogos];

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
        overflow: "hidden",
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

      {/* Scrolling logo track */}
      <div
        style={{
          position: "relative",
          overflow: "hidden",
          maskImage:
            "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)",
        }}
      >
        <div
          style={{
            display: "flex",
            gap: "1rem",
            width: "max-content",
            animation: "marquee 28s linear infinite",
            willChange: "transform",
          }}
        >
          {repeated.map((logo, i) => (
            <LogoPlaceholder key={`${logo.abbr}-${i}`} {...logo} />
          ))}
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
          { value: "5,000+",  label: "Practices" },
          { value: "1.2M+",   label: "Patients served" },
          { value: "4.9 ★",   label: "Average rating" },
          { value: "99.9%",   label: "Uptime SLA" },
        ].map((stat) => (
          <div
            key={stat.label}
            style={{ textAlign: "center" }}
          >
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
