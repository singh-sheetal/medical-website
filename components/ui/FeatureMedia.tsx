import { Feature } from "@/types";

interface FeatureMediaProps {
  feature: Feature;
}

const placeholderConfig: Record<string, {
  icon: string; lines: string[]; accent: string; bottomLabel: string;
}> = {
  "ai-fundamentals": {
    icon: "🧠",
    lines: [
      "Module 1 — What is AI and how does it work?",
      "Module 2 — AI tools along the patient journey",
      "Module 3 — GDPR, data protection & EU AI Act",
      "Module 4 — Live Q&A with Jan Baumann",
    ],
    accent: "var(--color-primary)",
    bottomLabel: "Next session: this Wednesday · €49",
  },
  "course-series": {
    icon: "📚",
    lines: [
      "Part 1 — LLMs & Prompting",
      "Part 2 — AI Tools for Your Practice",
      "Part 3 — Data & IT Security",
      "Part 4 — Doctor–Patient Communication",
      "Part 5 — Change & Innovation Management",
    ],
    accent: "var(--color-accent-dark)",
    bottomLabel: "Full series package — €395 (save €100)",
  },
  consulting: {
    icon: "🤝",
    lines: [
      "Step 1 — Assess your current workflows",
      "Step 2 — Define your AI goals",
      "Step 3 — Select & implement the right tools",
      "Step 4 — Coach your team through change",
    ],
    accent: "var(--color-text-heading)",
    bottomLabel: "Free 15-min discovery call — book now",
  },
};

export function FeatureMedia({ feature }: FeatureMediaProps) {
  const config = placeholderConfig[feature.id] ?? placeholderConfig["ai-fundamentals"];

  return (
    <div
      style={{
        position: "relative", width: "100%", aspectRatio: "4 / 3",
        borderRadius: "var(--radius-xl)", overflow: "hidden",
        backgroundColor: "var(--color-white)",
        border: "1px solid var(--color-border)", boxShadow: "var(--shadow-lg)",
      }}
      aria-label={feature.mediaAlt}
      role="img"
    >
      {/* Background */}
      <div aria-hidden="true" style={{
        position: "absolute", inset: 0,
        background: "linear-gradient(135deg, var(--color-bg) 0%, var(--color-bg-alt) 100%)",
      }} />

      <div style={{
        position: "relative", zIndex: 1, padding: "1.75rem",
        height: "100%", display: "flex", flexDirection: "column", gap: "0.875rem",
      }}>
        {/* Header */}
        <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
          <div style={{
            width: "44px", height: "44px", borderRadius: "var(--radius-md)",
            backgroundColor: config.accent, display: "flex",
            alignItems: "center", justifyContent: "center", fontSize: "20px", flexShrink: 0,
          }} aria-hidden="true">
            {config.icon}
          </div>
          <div>
            <div style={{ fontFamily: "var(--font-sans)", fontSize: "var(--text-sm)", fontWeight: 600, color: "var(--color-text-heading)" }}>
              {feature.badge}
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "0.35rem", marginTop: "2px" }}>
              <div aria-hidden="true" style={{
                width: "6px", height: "6px", borderRadius: "50%",
                backgroundColor: config.accent, animation: "pulse 2s infinite",
              }} />
              <span style={{ fontSize: "var(--text-xs)", color: "var(--color-text-muted)", fontFamily: "var(--font-sans)" }}>
                SHAPE Academy
              </span>
            </div>
          </div>
        </div>

        {/* Lines */}
        <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "0.5rem" }}>
          {config.lines.map((line, i) => (
            <div key={i} style={{
              backgroundColor: "var(--color-white)", border: "1px solid var(--color-border)",
              borderRadius: "var(--radius)", padding: "0.6rem 0.875rem",
              display: "flex", alignItems: "center", gap: "0.5rem",
              animation: `fadeIn 0.4s ease ${i * 0.1}s both`,
            }}>
              <div aria-hidden="true" style={{
                width: "6px", height: "6px", borderRadius: "50%",
                backgroundColor: config.accent, flexShrink: 0, opacity: 0.7,
              }} />
              <span style={{ fontSize: "var(--text-xs)", color: "var(--color-text-body)", fontFamily: "var(--font-sans)", lineHeight: 1.4 }}>
                {line}
              </span>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div style={{
          backgroundColor: config.accent, borderRadius: "var(--radius)",
          padding: "0.6rem 1rem", display: "flex",
          alignItems: "center", justifyContent: "space-between",
        }}>
          <span style={{ fontSize: "var(--text-xs)", fontWeight: 600, color: "white", fontFamily: "var(--font-sans)" }}>
            {config.bottomLabel}
          </span>
          <span style={{ fontSize: "var(--text-xs)", color: "rgba(255,255,255,0.75)", fontFamily: "var(--font-sans)" }}>
            Book →
          </span>
        </div>
      </div>

      <style>{`
        @keyframes pulse { 0%, 100% { opacity: 1; transform: scale(1); } 50% { opacity: 0.4; transform: scale(1.3); } }
      `}</style>
    </div>
  );
}
