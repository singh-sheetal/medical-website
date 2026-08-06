"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Feature } from "@/types";
import { FeatureMedia } from "@/components/ui/FeatureMedia";

interface FeatureBlockProps {
  feature: Feature;
  index: number;
}

export function FeatureBlock({ feature, index }: FeatureBlockProps) {
  const isLeft = feature.layout === "left"; // text on left, media on right
  const delay  = 0.1;

  return (
    <div
      id={feature.id}
      style={{
        paddingBlock: "5rem",
        borderBottom: "1px solid var(--color-border)",
      }}
    >
      <div
        className="container"
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "4rem",
          alignItems: "center",
        }}
      >
        {/* Text column */}
        <motion.div
          initial={{ opacity: 0, x: isLeft ? -24 : 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55, ease: "easeOut", delay }}
          style={{ order: isLeft ? 0 : 1 }}
        >
          {/* Badge */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.4rem",
              backgroundColor: "var(--color-accent-tint)",
              color: "var(--color-accent-dark)",
              borderRadius: "var(--radius-full)",
              border: "1px solid rgba(232,145,106,0.2)",
              padding: "0.3rem 0.875rem",
              fontFamily: "var(--font-sans)",
              fontSize: "var(--text-xs)",
              fontWeight: 600,
              letterSpacing: "0.05em",
              textTransform: "uppercase" as const,
              marginBottom: "1.25rem",
            }}
          >
            <span
              aria-hidden="true"
              style={{
                width: "6px",
                height: "6px",
                borderRadius: "50%",
                backgroundColor: "var(--color-accent)",
                display: "inline-block",
                flexShrink: 0,
              }}
            />
            {feature.badge}
          </div>

          {/* Headline */}
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(1.75rem, 3vw, 2.5rem)",
              fontWeight: 700,
              lineHeight: 1.2,
              letterSpacing: "-0.02em",
              color: "var(--color-text-heading)",
              marginBottom: "1rem",
            }}
          >
            {feature.headline}
          </h2>

          {/* Description */}
          <p
            style={{
              fontSize: "var(--text-base)",
              color: "var(--color-text-body)",
              lineHeight: 1.75,
              marginBottom: "1.5rem",
              maxWidth: "44ch",
            }}
          >
            {feature.description}
          </p>

          {/* Bullet list */}
          <ul
            style={{
              listStyle: "none",
              display: "flex",
              flexDirection: "column",
              gap: "0.6rem",
              marginBottom: "2rem",
            }}
          >
            {feature.bullets.map((bullet) => (
              <li
                key={bullet}
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "0.625rem",
                  fontSize: "var(--text-sm)",
                  color: "var(--color-text-body)",
                  fontFamily: "var(--font-sans)",
                  lineHeight: 1.6,
                }}
              >
                {/* Check icon */}
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="var(--color-primary)"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                  style={{ flexShrink: 0, marginTop: "1px" }}
                >
                  <circle
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="var(--color-primary-tint)"
                    strokeWidth="0"
                    fill="var(--color-primary-tint)"
                  />
                  <polyline points="9 12 11 14 15 10" />
                </svg>
                {bullet}
              </li>
            ))}
          </ul>

          {/* CTA link */}
          <Link
            href={feature.ctaHref}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.4rem",
              fontSize: "var(--text-sm)",
              fontWeight: 600,
              color: "var(--color-primary)",
              fontFamily: "var(--font-sans)",
              textDecoration: "none",
              transition: "gap var(--transition-fast), color var(--transition-fast)",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLAnchorElement;
              el.style.gap = "0.65rem";
              el.style.color = "var(--color-primary-dark)";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLAnchorElement;
              el.style.gap = "0.4rem";
              el.style.color = "var(--color-primary)";
            }}
          >
            {feature.ctaLabel}
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </Link>
        </motion.div>

        {/* Media column */}
        <motion.div
          initial={{ opacity: 0, x: isLeft ? 24 : -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: "easeOut", delay: delay + 0.1 }}
          style={{
            order: isLeft ? 1 : 0,
            position: "relative",
          }}
        >
          {/* Decorative blob behind the media */}
          <div
            aria-hidden="true"
            style={{
              position: "absolute",
              inset: "-8%",
              background:
                index % 2 === 0
                  ? "radial-gradient(ellipse at 60% 50%, rgba(61,90,158,0.08) 0%, transparent 70%)"
                  : "radial-gradient(ellipse at 40% 50%, rgba(232,145,106,0.08) 0%, transparent 70%)",
              borderRadius: "50%",
              filter: "blur(30px)",
              pointerEvents: "none",
              zIndex: 0,
            }}
          />
          <div style={{ position: "relative", zIndex: 1 }}>
            <FeatureMedia feature={feature} />
          </div>
        </motion.div>
      </div>

      {/* Responsive */}
      <style>{`
        #${feature.id} > div {
          --feature-gap: 4rem;
        }
        @media (max-width: 768px) {
          #${feature.id} > div {
            grid-template-columns: 1fr !important;
            gap: 2.5rem !important;
          }
          #${feature.id} > div > div:first-child,
          #${feature.id} > div > div:last-child {
            order: unset !important;
          }
        }
      `}</style>
    </div>
  );
}
