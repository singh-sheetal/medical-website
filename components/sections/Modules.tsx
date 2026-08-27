"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useI18n } from "@/lib/i18n/context";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";

const moduleLabels: Record<string, string> = {
  dashboard:      "01",
  organisation:   "02",
  praxishandbuch: "03",
  aufgaben:       "04",
  mitteilungen:   "05",
};

const moduleScreenshots: Record<string, string> = {
  dashboard:      "/screenshots/dashboard.jpg",
  organisation:   "/screenshots/organisation.jpg",
  praxishandbuch: "/screenshots/praxishandbuch.jpg",
  aufgaben:       "/screenshots/aufgaben.jpg",
  mitteilungen:   "/screenshots/mitteilungen.jpg",
};

export function Modules() {
  const { t } = useI18n();
  const [active, setActive] = useState(0);
  const items = t.modules.items;
  const item  = items[active];

  return (
    <section id="modules" style={{
      paddingBlock: "var(--section-padding-y)",
      backgroundColor: "var(--color-bg)",
    }}>
      <Container>
        <SectionHeader
          eyebrow={t.modules.eyebrow}
          heading={t.modules.heading}
          lead={t.modules.sub}
        />

        {/* Tab strip */}
        <div style={{
          display: "flex", gap: "0.375rem", flexWrap: "wrap",
          justifyContent: "center", marginBottom: "3rem",
        }}>
          {items.map((mod, i) => (
            <button
              key={mod.id}
              onClick={() => setActive(i)}
              style={{
                display: "flex", alignItems: "center", gap: "0.5rem",
                padding: "0.55rem 1.125rem",
                fontFamily: "var(--font-sans)", fontSize: "var(--text-sm)", fontWeight: 500,
                borderRadius: "var(--radius-full)",
                border: `1.5px solid ${i === active ? "var(--color-black)" : "var(--color-border)"}`,
                backgroundColor: i === active ? "var(--color-black)" : "transparent",
                color: i === active ? "var(--color-white)" : "var(--color-text-body)",
                cursor: "pointer",
                transition: "all var(--transition-fast)",
                whiteSpace: "nowrap",
              }}
            >
              <span style={{
                fontSize: "10px", fontWeight: 700,
                fontFamily: "var(--font-sans)", opacity: 0.5,
                letterSpacing: "0.02em",
              }}>
                {moduleLabels[mod.id]}
              </span>
              {mod.badge}
            </button>
          ))}
        </div>

        {/* Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1.4fr",
              gap: "4rem",
              alignItems: "center",
            }}
            className="module-grid"
          >
            {/* Left — text */}
            <div>
              <div style={{
                fontSize: "var(--text-xs)", fontWeight: 600,
                letterSpacing: "0.06em", textTransform: "uppercase" as const,
                color: "var(--color-text-muted)",
                fontFamily: "var(--font-sans)",
                marginBottom: "1rem",
              }}>
                {item.badge}
              </div>

              <h3 style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(1.75rem, 3vw, 2.5rem)",
                fontWeight: 700, letterSpacing: "-0.02em",
                color: "var(--color-text-heading)",
                marginBottom: "1rem", lineHeight: 1.2,
              }}>
                {item.heading}
              </h3>

              <p style={{
                fontSize: "var(--text-base)", color: "var(--color-text-body)",
                lineHeight: 1.75, marginBottom: "1.5rem", maxWidth: "44ch",
                fontFamily: "var(--font-sans)",
              }}>
                {item.description}
              </p>

              <ul style={{
                listStyle: "none",
                display: "flex", flexDirection: "column", gap: "0.6rem",
                marginBottom: "2rem",
              }}>
                {item.bullets.map((b) => (
                  <li key={b} style={{
                    display: "flex", alignItems: "flex-start", gap: "0.625rem",
                    fontSize: "var(--text-sm)", color: "var(--color-text-body)",
                    fontFamily: "var(--font-sans)", lineHeight: 1.6,
                  }}>
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none"
                      stroke="var(--color-text-heading)" strokeWidth="2.5"
                      strokeLinecap="round" strokeLinejoin="round"
                      aria-hidden="true"
                      style={{ flexShrink: 0, marginTop: "2px" }}>
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                    {b}
                  </li>
                ))}
              </ul>

              <a
                href={`mailto:info@shapeconsulting.app?subject=Demo Request — Shape.Med ${item.badge}`}
                style={{
                  display: "inline-flex", alignItems: "center", gap: "0.4rem",
                  fontSize: "var(--text-sm)", fontWeight: 600,
                  color: "var(--color-text-heading)",
                  fontFamily: "var(--font-sans)",
                  textDecoration: "none",
                  borderBottom: "1px solid var(--color-text-heading)",
                  paddingBottom: "1px",
                  transition: "color var(--transition-fast), border-color var(--transition-fast)",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.color = "var(--color-highlight)";
                  (e.currentTarget as HTMLAnchorElement).style.borderColor = "var(--color-highlight)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.color = "var(--color-text-heading)";
                  (e.currentTarget as HTMLAnchorElement).style.borderColor = "var(--color-text-heading)";
                }}
              >
                {item.cta}
              </a>
            </div>

            {/* Right — real product screenshot */}
            <div style={{ position: "relative" }}>
              {/* Browser chrome wrapper */}
              <div style={{
                borderRadius: "var(--radius-xl)",
                overflow: "hidden",
                border: "1px solid var(--color-border)",
                boxShadow: "var(--shadow-lg)",
                backgroundColor: "var(--color-bg-dark)",
              }}>
                {/* Browser bar */}
                <div style={{
                  backgroundColor: "var(--color-bg-dark)",
                  padding: "0.6rem 0.875rem",
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
                    fontSize: "10px", color: "rgba(255,255,255,0.4)",
                    fontFamily: "var(--font-sans)", textAlign: "center",
                  }}>
                    shapemed.zerobiased.com
                  </div>
                </div>

                {/* Screenshot */}
                <div style={{ position: "relative", width: "100%", aspectRatio: "1090/820" }}>
                  <Image
                    src={moduleScreenshots[item.id]}
                    alt={`Shape.Med ${item.badge} — real product screenshot`}
                    fill
                    sizes="(max-width: 768px) 100vw, 55vw"
                    style={{ objectFit: "cover", objectPosition: "top left" }}
                    priority={active === 0}
                  />
                </div>
              </div>

              {/* Subtle reflection */}
              <div aria-hidden="true" style={{
                position: "absolute", bottom: "-24px", left: "5%", right: "5%",
                height: "24px",
                background: "linear-gradient(to bottom, rgba(0,0,0,0.06), transparent)",
                filter: "blur(8px)",
                borderRadius: "50%",
              }} />
            </div>
          </motion.div>
        </AnimatePresence>
      </Container>

      <style>{`
        .module-grid { grid-template-columns: 1fr 1.4fr; }
        @media (max-width: 768px) {
          .module-grid { grid-template-columns: 1fr !important; gap: 2.5rem !important; }
        }
      `}</style>
    </section>
  );
}
