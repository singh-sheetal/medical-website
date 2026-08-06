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
      emoji: "👨‍⚕️",
      title: "Dr. Patel's Dashboard",
      accent: "var(--color-primary)",
      accentTint: "var(--color-primary-tint)",
      items: [
        { icon: "📋", label: "AI note generated", sub: "Consultation #14 · Just now" },
        { icon: "💊", label: "Prescription checked", sub: "No interactions found · Safe" },
        { icon: "📄", label: "Referral drafted", sub: "To Cardiology · Ready to send" },
      ],
    },
    staff: {
      emoji: "🗓️",
      title: "Today's Schedule",
      accent: "var(--color-accent)",
      accentTint: "var(--color-accent-tint)",
      items: [
        { icon: "✅", label: "09:00 — Sarah Johnson", sub: "Checked in · Room 2" },
        { icon: "🔔", label: "Reminder sent", sub: "10:30 appt · Michael Chen" },
        { icon: "📝", label: "Intake form completed", sub: "Emma Williams · 11:00" },
      ],
    },
    patients: {
      emoji: "📱",
      title: "Your Health Portal",
      accent: "var(--color-success)",
      accentTint: "var(--color-success-tint, #EAF4EE)",
      items: [
        { icon: "📅", label: "Next appointment", sub: "Wednesday 14 Jan · 10:00 AM" },
        { icon: "🧪", label: "Lab results ready", sub: "Blood panel · Tap to view" },
        { icon: "💬", label: "Reminder received", sub: "See Dr. Patel tomorrow · 9:00" },
      ],
    },
  } as const;

  const c = configs[id as keyof typeof configs];

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
        <span style={{ fontSize: "22px" }}>{c.emoji}</span>
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
              {item.icon}
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
          eyebrow="For Everyone"
          heading="Built for every person in the practice"
          lead="Whether you're the doctor, the receptionist, or the patient — MedicalOS makes every interaction simpler, faster, and more human."
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
