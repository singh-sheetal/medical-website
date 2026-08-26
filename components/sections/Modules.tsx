"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useI18n } from "@/lib/i18n/context";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";

const moduleIcons: Record<string, string> = {
  dashboard:      "⊞",
  organisation:   "👥",
  praxishandbuch: "📋",
  aufgaben:       "✅",
  mitteilungen:   "💬",
};

export function Modules() {
  const { t } = useI18n();
  const [active, setActive] = useState(0);
  const items = t.modules.items;
  const item  = items[active];

  return (
    <section id="modules" style={{ paddingBlock: "var(--section-padding-y)", backgroundColor: "var(--color-bg)" }}>
      <Container>
        <SectionHeader
          eyebrow={t.modules.eyebrow}
          heading={t.modules.heading}
          lead={t.modules.sub}
        />

        {/* Tab strip */}
        <div style={{
          display: "flex", gap: "0.5rem", flexWrap: "wrap",
          justifyContent: "center", marginBottom: "3rem",
        }}>
          {items.map((mod, i) => (
            <button
              key={mod.id}
              onClick={() => setActive(i)}
              style={{
                display: "flex", alignItems: "center", gap: "0.5rem",
                padding: "0.6rem 1.25rem",
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
              <span>{moduleIcons[mod.id]}</span>
              {mod.badge}
            </button>
          ))}
        </div>

        {/* Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            style={{
              display: "grid", gridTemplateColumns: "1fr 1fr",
              gap: "4rem", alignItems: "center",
            }}
            className="module-grid"
          >
            {/* Left — text */}
            <div>
              <div style={{
                display: "inline-flex", alignItems: "center", gap: "0.5rem",
                fontSize: "var(--text-xs)", fontWeight: 600,
                letterSpacing: "0.06em", textTransform: "uppercase" as const,
                color: "var(--color-text-muted)", marginBottom: "1rem",
              }}>
                <span style={{ fontSize: "20px" }}>{moduleIcons[item.id]}</span>
                {item.badge}
              </div>

              <h3 style={{
                fontFamily: "var(--font-display)", fontSize: "clamp(1.75rem, 3vw, 2.5rem)",
                fontWeight: 700, letterSpacing: "-0.02em",
                color: "var(--color-text-heading)", marginBottom: "1rem", lineHeight: 1.2,
              }}>
                {item.heading}
              </h3>

              <p style={{
                fontSize: "var(--text-base)", color: "var(--color-text-body)",
                lineHeight: 1.75, marginBottom: "1.5rem", maxWidth: "44ch",
              }}>
                {item.description}
              </p>

              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.6rem", marginBottom: "2rem" }}>
                {item.bullets.map((b) => (
                  <li key={b} style={{
                    display: "flex", alignItems: "flex-start", gap: "0.625rem",
                    fontSize: "var(--text-sm)", color: "var(--color-text-body)",
                    fontFamily: "var(--font-sans)", lineHeight: 1.6,
                  }}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
                      stroke="var(--color-text-heading)" strokeWidth="2.5"
                      strokeLinecap="round" strokeLinejoin="round"
                      aria-hidden="true" style={{ flexShrink: 0, marginTop: "2px" }}>
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                    {b}
                  </li>
                ))}
              </ul>

              <button
                onClick={() => window.location.href = `mailto:info@shapeconsulting.app?subject=Demo Request — ${item.badge}`}
                style={{
                  display: "inline-flex", alignItems: "center", gap: "0.4rem",
                  fontSize: "var(--text-sm)", fontWeight: 600,
                  color: "var(--color-text-heading)", fontFamily: "var(--font-sans)",
                  background: "none", border: "none", cursor: "pointer",
                  padding: 0, transition: "color var(--transition-fast)",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "var(--color-highlight)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "var(--color-text-heading)")}
              >
                {item.cta}
              </button>
            </div>

            {/* Right — module visual */}
            <div>
              <ModuleVisual id={item.id} badge={item.badge} />
            </div>
          </motion.div>
        </AnimatePresence>
      </Container>

      <style>{`
        .module-grid { grid-template-columns: 1fr 1fr; }
        @media (max-width: 768px) { .module-grid { grid-template-columns: 1fr !important; gap: 2.5rem !important; } }
      `}</style>
    </section>
  );
}

function ModuleVisual({ id, badge }: { id: string; badge: string }) {
  const visuals: Record<string, React.ReactNode> = {
    dashboard: (
      <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
        {[
          { label: "Überfällige Aufgaben", value: "6", color: "var(--color-highlight)", icon: "⚠️" },
          { label: "Kompetenzlücken", value: "11", color: "var(--color-black)", icon: "📊" },
          { label: "Freigaben ausstehend", value: "1", color: "var(--color-accent-dark)", icon: "✍️" },
        ].map(s => (
          <div key={s.label} style={{
            display: "flex", alignItems: "center", gap: "1rem",
            padding: "0.875rem 1rem", backgroundColor: "var(--color-bg)",
            border: "1px solid var(--color-border)", borderRadius: "var(--radius-md)",
          }}>
            <span style={{ fontSize: "18px" }}>{s.icon}</span>
            <span style={{ flex: 1, fontSize: "var(--text-sm)", color: "var(--color-text-body)", fontFamily: "var(--font-sans)" }}>{s.label}</span>
            <span style={{ fontSize: "var(--text-2xl)", fontWeight: 700, color: s.color, fontFamily: "var(--font-sans)", fontVariantNumeric: "lining-nums" }}>{s.value}</span>
          </div>
        ))}
      </div>
    ),
    organisation: (
      <div style={{ display: "flex", flexDirection: "column", gap: "0.4rem" }}>
        {[
          { role: "Praxisinhaber/in", members: 1, skills: 3, complete: 100 },
          { role: "Facharzt",          members: 2, skills: 5, complete: 80 },
          { role: "Leitende MFA",      members: 1, skills: 8, complete: 62 },
          { role: "MFA",               members: 5, skills: 6, complete: 75 },
          { role: "Auszubildende/r",   members: 1, skills: 4, complete: 40 },
        ].map(r => (
          <div key={r.role} style={{
            display: "flex", alignItems: "center", gap: "0.75rem",
            padding: "0.65rem 0.875rem", backgroundColor: "var(--color-bg)",
            border: "1px solid var(--color-border)", borderRadius: "var(--radius)",
          }}>
            <span style={{ fontSize: "var(--text-xs)", color: "var(--color-text-heading)", fontFamily: "var(--font-sans)", fontWeight: 500, flex: 1 }}>{r.role}</span>
            <span style={{ fontSize: "var(--text-xs)", color: "var(--color-text-muted)", fontFamily: "var(--font-sans)" }}>{r.members} · {r.skills} skills</span>
            <div style={{ width: "60px", height: "4px", borderRadius: "2px", backgroundColor: "var(--color-border)" }}>
              <div style={{ width: `${r.complete}%`, height: "100%", borderRadius: "2px", backgroundColor: r.complete >= 80 ? "var(--color-black)" : r.complete >= 60 ? "var(--color-accent-dark)" : "var(--color-highlight)" }} />
            </div>
            <span style={{ fontSize: "10px", color: "var(--color-text-muted)", fontFamily: "var(--font-sans)", width: "28px", textAlign: "right" }}>{r.complete}%</span>
          </div>
        ))}
      </div>
    ),
    praxishandbuch: (
      <div style={{ display: "flex", flexDirection: "column", gap: "0.4rem" }}>
        {[
          { title: "Impfungen",           type: "SOP",           status: "Veröffentlicht", statusColor: "var(--color-black)" },
          { title: "Notfallmanagement",   type: "Checkliste",    status: "In Prüfung",     statusColor: "var(--color-accent-dark)" },
          { title: "Kühlschrank-Hygiene", type: "SOP",           status: "Veröffentlicht", statusColor: "var(--color-black)" },
          { title: "Gerät: EKG",          type: "Geräteanweisung", status: "Entwurf",       statusColor: "var(--color-text-muted)" },
          { title: "EBM/GOÄ Abrechnung", type: "Schulung",      status: "Veröffentlicht", statusColor: "var(--color-black)" },
        ].map(d => (
          <div key={d.title} style={{
            display: "flex", alignItems: "center", gap: "0.75rem",
            padding: "0.65rem 0.875rem", backgroundColor: "var(--color-bg)",
            border: "1px solid var(--color-border)", borderRadius: "var(--radius)",
          }}>
            <span style={{ flex: 1, fontSize: "var(--text-xs)", color: "var(--color-text-heading)", fontFamily: "var(--font-sans)", fontWeight: 500 }}>{d.title}</span>
            <span style={{ fontSize: "10px", color: "var(--color-text-muted)", fontFamily: "var(--font-sans)" }}>{d.type}</span>
            <span style={{ fontSize: "10px", fontWeight: 600, color: d.statusColor, fontFamily: "var(--font-sans)" }}>{d.status}</span>
          </div>
        ))}
      </div>
    ),
    aufgaben: (
      <div style={{ display: "flex", flexDirection: "column", gap: "0.4rem" }}>
        {[
          { name: "Backup Verification",       person: "MG", cat: "IT",      overdue: true },
          { name: "Schulung: Wundversorgung",  person: "TT", cat: "Learning",overdue: false },
          { name: "Schulung: Sterilisation",   person: "NH", cat: "Hygiene", overdue: false },
          { name: "EBM/GOÄ-Abrechnung",        person: "LF", cat: "QM",      overdue: false },
          { name: "Schulung: Telemedizin",      person: "MB", cat: "Learning",overdue: false },
        ].map(task => (
          <div key={task.name} style={{
            display: "flex", alignItems: "center", gap: "0.6rem",
            padding: "0.55rem 0.75rem",
            borderRadius: "var(--radius)",
            backgroundColor: task.overdue ? "rgba(242,94,27,0.04)" : "var(--color-bg)",
            border: `1px solid ${task.overdue ? "rgba(242,94,27,0.2)" : "var(--color-border)"}`,
          }}>
            <div style={{
              width: "22px", height: "22px", borderRadius: "50%",
              backgroundColor: task.overdue ? "var(--color-highlight-tint)" : "var(--color-primary-tint)",
              color: task.overdue ? "var(--color-highlight)" : "var(--color-text-muted)",
              fontSize: "8px", fontWeight: 700, display: "flex", alignItems: "center",
              justifyContent: "center", fontFamily: "var(--font-sans)", flexShrink: 0,
            }}>{task.person}</div>
            <span style={{ flex: 1, fontSize: "11px", fontWeight: 500, color: "var(--color-text-heading)", fontFamily: "var(--font-sans)", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{task.name}</span>
            <span style={{ fontSize: "9px", padding: "2px 5px", borderRadius: "3px", backgroundColor: "var(--color-bg-alt)", color: "var(--color-text-muted)", fontFamily: "var(--font-sans)" }}>{task.cat}</span>
          </div>
        ))}
      </div>
    ),
    mitteilungen: (
      <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
        {[
          { from: "Dr. Anna Weber", title: "Geschlossen am 15.08. – Mariä Himmelfahrt", date: "30.07.2026" },
          { from: "Dr. Anna Weber", title: "Neue Sprechstundenzeiten ab September", date: "28.07.2026" },
          { from: "Monika Groß",    title: "Einführung der neuen Hygienesoftware", date: "24.07.2026" },
          { from: "Dr. Anna Weber", title: "Team-Event: Sommerfest am 12. September", date: "20.07.2026" },
        ].map(m => (
          <div key={m.title} style={{
            padding: "0.75rem 0.875rem", backgroundColor: "var(--color-bg)",
            border: "1px solid var(--color-border)", borderRadius: "var(--radius-md)",
          }}>
            <div style={{ fontSize: "11px", fontWeight: 600, color: "var(--color-text-heading)", fontFamily: "var(--font-sans)", marginBottom: "2px", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{m.title}</div>
            <div style={{ fontSize: "10px", color: "var(--color-text-muted)", fontFamily: "var(--font-sans)" }}>Von {m.from} · {m.date}</div>
          </div>
        ))}
      </div>
    ),
  };

  return (
    <div style={{
      backgroundColor: "var(--color-white)",
      border: "1px solid var(--color-border)",
      borderRadius: "var(--radius-xl)",
      padding: "1.5rem",
      boxShadow: "var(--shadow-md)",
    }}>
      {/* Module header */}
      <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "1rem", paddingBottom: "0.75rem", borderBottom: "1px solid var(--color-border)" }}>
        <span style={{ fontSize: "18px" }}>{moduleIcons[id]}</span>
        <span style={{ fontSize: "var(--text-sm)", fontWeight: 600, color: "var(--color-text-heading)", fontFamily: "var(--font-sans)" }}>{badge}</span>
      </div>
      {visuals[id] || null}
    </div>
  );
}
