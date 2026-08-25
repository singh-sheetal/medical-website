"use client";

import { motion } from "framer-motion";
import { BentoFeature } from "@/lib/practice-features";

const accentMap = {
  primary: {
    bg:      "var(--color-primary-tint)",
    icon:    "var(--color-primary)",
    badge:   "var(--color-primary-tint)",
    badgeText: "var(--color-primary-dark)",
    border:  "rgba(61,90,158,0.15)",
    hover:   "rgba(61,90,158,0.05)",
  },
  accent: {
    bg:      "var(--color-accent-tint)",
    icon:    "var(--color-accent)",
    badge:   "var(--color-accent-tint)",
    badgeText: "var(--color-accent-dark)",
    border:  "rgba(232,145,106,0.15)",
    hover:   "rgba(232,145,106,0.05)",
  },
  success: {
    bg:      "var(--color-accent-tint)",
    icon:    "var(--color-accent)",
    badge:   "var(--color-accent-tint)",
    badgeText: "var(--color-accent-dark)",
    border:  "rgba(46,125,94,0.15)",
    hover:   "rgba(46,125,94,0.05)",
  },
  dark: {
    bg:      "var(--color-bg-dark)",
    icon:    "var(--color-text-inverse)",
    badge:   "rgba(255,255,255,0.1)",
    badgeText: "rgba(253,248,245,0.85)",
    border:  "transparent",
    hover:   "transparent",
  },
};

interface BentoCardProps {
  feature: BentoFeature;
  delay?: number;
}

export function BentoCard({ feature, delay = 0 }: BentoCardProps) {
  const a    = accentMap[feature.accent];
  const dark = feature.accent === "dark";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, ease: "easeOut", delay }}
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
      style={{
        backgroundColor: dark ? a.bg : "var(--color-white)",
        border: `1px solid ${a.border || "var(--color-border)"}`,
        borderRadius: "var(--radius-xl)",
        padding: feature.size === "large" ? "2rem" : "1.5rem",
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        height: "100%",
        boxShadow: dark ? "none" : "var(--shadow-sm)",
        cursor: "default",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background blob for large card */}
      {feature.size === "large" && (
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            top: "-30%",
            right: "-10%",
            width: "60%",
            aspectRatio: "1",
            borderRadius: "50%",
            background: `radial-gradient(circle, ${a.bg} 0%, transparent 70%)`,
            opacity: 0.6,
            pointerEvents: "none",
          }}
        />
      )}

      {/* Icon */}
      <div
        aria-hidden="true"
        style={{
          width: feature.size === "large" ? "52px" : "44px",
          height: feature.size === "large" ? "52px" : "44px",
          borderRadius: "var(--radius-md)",
          backgroundColor: dark ? "rgba(255,255,255,0.1)" : a.bg,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexShrink: 0,
          position: "relative",
          zIndex: 1,
        }}
      >
        <svg
          width={feature.size === "large" ? "24" : "20"}
          height={feature.size === "large" ? "24" : "20"}
          viewBox="0 0 24 24"
          fill="none"
          stroke={dark ? "rgba(253,248,245,0.9)" : a.icon}
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d={feature.iconPath} />
        </svg>
      </div>

      {/* Content */}
      <div style={{ position: "relative", zIndex: 1, flex: 1 }}>
        {/* Badge */}
        {feature.badge && (
          <span
            style={{
              display: "inline-block",
              backgroundColor: dark ? "rgba(255,255,255,0.1)" : a.bg,
              color: dark ? "rgba(253,248,245,0.75)" : a.badgeText,
              fontSize: "var(--text-2xs)",
              fontWeight: 600,
              letterSpacing: "0.06em",
              textTransform: "uppercase",
              padding: "0.2rem 0.6rem",
              borderRadius: "var(--radius-full)",
              fontFamily: "var(--font-sans)",
              marginBottom: "0.5rem",
            }}
          >
            {feature.badge}
          </span>
        )}

        {/* Heading */}
        <h3
          style={{
            fontFamily: "var(--font-display)",
            fontSize:
              feature.size === "large"
                ? "clamp(1.25rem, 2vw, 1.6rem)"
                : "var(--text-lg)",
            fontWeight: 700,
            lineHeight: 1.25,
            color: dark ? "var(--color-text-inverse)" : "var(--color-text-heading)",
            marginBottom: "0.5rem",
            letterSpacing: "-0.01em",
          }}
        >
          {feature.heading}
        </h3>

        {/* Body */}
        <p
          style={{
            fontSize: feature.size === "large" ? "var(--text-base)" : "var(--text-sm)",
            color: dark ? "rgba(253,248,245,0.7)" : "var(--color-text-body)",
            lineHeight: 1.7,
            fontFamily: "var(--font-sans)",
            margin: 0,
          }}
        >
          {feature.body}
        </p>
      </div>

      {/* Learn more arrow — large card only */}
      {feature.size === "large" && (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.375rem",
            fontSize: "var(--text-sm)",
            fontWeight: 600,
            color: dark ? "rgba(253,248,245,0.8)" : "var(--color-primary)",
            fontFamily: "var(--font-sans)",
            position: "relative",
            zIndex: 1,
          }}
        >
          Learn more
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <line x1="5" y1="12" x2="19" y2="12"/>
            <polyline points="12 5 19 12 12 19"/>
          </svg>
        </div>
      )}
    </motion.div>
  );
}
