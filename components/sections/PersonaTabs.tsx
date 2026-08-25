"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { personas } from "@/lib/personas";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";

// Unique placeholder visual per persona
function PersonaVisual({ id }: { id: string }) {
  const configs = {
    doctors: {
      iconPath: "M12 14l9-5-9-5-9 5 9 5z M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z",
      title: "AI Fundamentals Course",
      accent: "var(--color-primary)",
      accentTint: "var(--color-primary-tint)",
      items: [
        { iconPath: "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z", label: "What is AI — and how does it work?", sub: "Module 1 · 15 min" },
        { iconPath: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z", label: "EU AI Act & legal compliance", sub: "Module 3 · 20 min" },
        { iconPath: "M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z", label: "Live Q&A with Jan Baumann", sub: "Module 4 · 45 min" },
      ],
    },
    staff: {
      iconPath: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z",
      title: "Team Training Portal",
      accent: "var(--color-accent-dark)",
      accentTint: "var(--color-accent-tint)",
      items: [
        { iconPath: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z", label: "AI scheduling tools explained", sub: "Practical · No tech required" },
        { iconPath: "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z", label: "Patient data & GDPR", sub: "Security · Compliant workflows" },
        { iconPath: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2", label: "EU AI Act staff certification", sub: "§4 compliant · Trackable" },
      ],
    },
    clinics: {
      iconPath: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4",
      title: "Clinic Advisory Programme",
      accent: "var(--color-text-heading)",
      accentTint: "var(--color-bg-alt)",
      items: [
        { iconPath: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4", label: "Workflow assessment complete", sub: "3 departments · 12 AI opportunities" },
        { iconPath: "M13 10V3L4 14h7v7l9-11h-7z", label: "AI integration roadmap", sub: "Q1 2026 · Approved by team" },
        { iconPath: "M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z", label: "Shape.Med Portal onboarding", sub: "All 28 staff · In progress" },
      ],
    },
  } as const;

  const c = configs[id as keyof typeof configs] ?? configs.doctors;

  return (
    <div
      style={{
        backgroundColor: "var(--color-white)",
        border: "1px solid var(--color-border)",
        borderRadius: "var(--radius-xl)",
        overflow: "hidden",
        boxShadow: "var(--shadow-lg)",
      }}
      aria-hidden="true"
    >
      {/* Header bar */}
      <div
        style={{
          backgroundColor: c.accent,
          padding: "1rem 1.25rem",
          display: "flex",
          alignItems: "center",
          gap: "0.75rem",
        }}
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d={c.iconPath} /></svg>
        <span
          style={{
            fontFamily: "var(--font-sans)",
            fontSize: "var(--text-sm)",
            fontWeight: 600,
            color: "#fff",
          }}
        >
          {c.title}
        </span>
        <div
          style={{
            marginLeft: "auto",
            display: "flex",
            alignItems: "center",
            gap: "0.35rem",
            fontSize: "var(--text-xs)",
            color: "rgba(255,255,255,0.8)",
            fontFamily: "var(--font-sans)",
          }}
        >
          <div
            style={{
              width: "6px",
              height: "6px",
              borderRadius: "50%",
              backgroundColor: "#fff",
              opacity: 0.9,
            }}
          />
          Live
        </div>
      </div>

      {/* Items */}
      <div style={{ padding: "1rem", display: "flex", flexDirection: "column", gap: "0.625rem" }}>
        {c.items.map((item, i) => (
          <div
            key={i}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.75rem",
              padding: "0.75rem",
              backgroundColor: i === 0 ? c.accentTint : "var(--color-bg)",
              borderRadius: "var(--radius-md)",
              border: `1px solid ${i === 0 ? "rgba(0,0,0,0.06)" : "var(--color-border)"}`,
            }}
          >
            <div
              style={{
                width: "36px",
                height: "36px",
                borderRadius: "var(--radius)",
                backgroundColor: i === 0 ? c.accent : "var(--color-white)",
                border: i === 0 ? "none" : "1px solid var(--color-border)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "16px",
                flexShrink: 0,
              }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d={item.iconPath} /></svg>
            </div>
            <div>
              <div
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "var(--text-sm)",
                  fontWeight: 600,
                  color: "var(--color-text-heading)",
                  lineHeight: 1.3,
                }}
              >
                {item.label}
              </div>
              <div
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "var(--text-xs)",
                  color: "var(--color-text-muted)",
                  marginTop: "1px",
                }}
              >
                {item.sub}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function PersonaTabs() {
  const [active, setActive] = useState(0);
  const persona = personas[active];

  return (
    <Section id="for-everyone" variant="alt">
      <Container>
        <SectionHeader
          eyebrow="Who It's For"
          heading="Designed for everyone in healthcare"
          lead="From solo GPs to large clinic teams — SHAPE Academy has a learning path for every role in modern healthcare."
        />

        {/* Tab switcher */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginBottom: "3.5rem",
          }}
        >
          <div
            role="tablist"
            aria-label="Select persona"
            style={{
              display: "inline-flex",
              backgroundColor: "var(--color-white)",
              border: "1px solid var(--color-border)",
              borderRadius: "var(--radius-full)",
              padding: "5px",
              gap: "4px",
              boxShadow: "var(--shadow-sm)",
            }}
          >
            {personas.map((p, i) => (
              <button
                key={p.id}
                role="tab"
                aria-selected={i === active}
                aria-controls={`persona-panel-${p.id}`}
                onClick={() => setActive(i)}
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "var(--text-sm)",
                  fontWeight: 500,
                  padding: "0.5rem 1.5rem",
                  borderRadius: "var(--radius-full)",
                  border: "none",
                  cursor: "pointer",
                  transition: "background-color var(--transition-fast), color var(--transition-fast), box-shadow var(--transition-fast)",
                  backgroundColor: i === active ? "var(--color-primary)" : "transparent",
                  color: i === active ? "#fff" : "var(--color-text-body)",
                  boxShadow: i === active ? "var(--shadow-sm)" : "none",
                }}
              >
                {p.label}
              </button>
            ))}
          </div>
        </div>

        {/* Tab content */}
        <div
          id={`persona-panel-${persona.id}`}
          role="tabpanel"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "4rem",
            alignItems: "center",
          }}
          className="persona-grid"
        >
          {/* Left — copy */}
          <AnimatePresence mode="wait">
            <motion.div
              key={persona.id + "-copy"}
              initial={{ opacity: 0, x: -16 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 16 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              <h3
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(1.5rem, 2.5vw, 2.25rem)",
                  fontWeight: 700,
                  lineHeight: 1.2,
                  letterSpacing: "-0.02em",
                  color: "var(--color-text-heading)",
                  marginBottom: "1.5rem",
                }}
              >
                {persona.headline}
              </h3>

              <ul
                style={{
                  listStyle: "none",
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.875rem",
                }}
              >
                {persona.bullets.map((bullet, i) => (
                  <motion.li
                    key={bullet}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: i * 0.06, ease: "easeOut" }}
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "0.75rem",
                      fontSize: "var(--text-base)",
                      color: "var(--color-text-body)",
                      fontFamily: "var(--font-sans)",
                      lineHeight: 1.6,
                    }}
                  >
                    <div
                      style={{
                        width: "22px",
                        height: "22px",
                        borderRadius: "50%",
                        backgroundColor: "var(--color-primary)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                        marginTop: "1px",
                      }}
                      aria-hidden="true"
                    >
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#fff"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </div>
                    {bullet}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </AnimatePresence>

          {/* Right — visual */}
          <AnimatePresence mode="wait">
            <motion.div
              key={persona.id + "-visual"}
              initial={{ opacity: 0, x: 16 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -16 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
            >
              <PersonaVisual id={persona.id} />
            </motion.div>
          </AnimatePresence>
        </div>
      </Container>

      <style>{`
        .persona-grid {
          grid-template-columns: 1fr 1fr;
        }
        @media (max-width: 768px) {
          .persona-grid {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
          }
        }
      `}</style>
    </Section>
  );
}
