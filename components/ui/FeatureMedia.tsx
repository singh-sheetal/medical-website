import { Feature } from "@/types";

interface FeatureMediaProps {
  feature: Feature;
}

// Unique placeholder visuals per feature so each block looks distinct
const placeholderConfig: Record<
  string,
  { icon: string; lines: string[]; accent: string }
> = {
  "clinical-notes": {
    icon: "📋",
    lines: [
      "Chief Complaint: Mild shortness of breath",
      "History: 3-day duration, no fever",
      "Assessment: Likely seasonal asthma",
      "Plan: Salbutamol inhaler, follow-up in 2 weeks",
    ],
    accent: "var(--color-primary)",
  },
  prescription: {
    icon: "💊",
    lines: [
      "Metformin 500mg — twice daily",
      "✓ No interactions detected",
      "✓ Safe for patient profile",
      "Sending to City Pharmacy...",
    ],
    accent: "var(--color-accent)",
  },
  "document-digitisation": {
    icon: "🗂️",
    lines: [
      "Lab Result — Blood Panel — 12 Jan 2024",
      "Referral Letter — Dr. Mehta — Cardiology",
      "Old Record — Patient since 2019",
      "X-Ray Report — Left Knee — Nov 2023",
    ],
    accent: "var(--color-success)",
  },
};

export function FeatureMedia({ feature }: FeatureMediaProps) {
  const config = placeholderConfig[feature.id];

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        aspectRatio: "4 / 3",
        borderRadius: "var(--radius-xl)",
        overflow: "hidden",
        backgroundColor: "var(--color-white)",
        border: "1px solid var(--color-border)",
        boxShadow: "var(--shadow-lg)",
      }}
      aria-label={feature.mediaAlt}
      role="img"
    >
      {/* Background gradient */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          background: `linear-gradient(135deg, var(--color-bg) 0%, var(--color-bg-alt) 100%)`,
        }}
      />

      {/* Content */}
      <div
        style={{
          position: "relative",
          zIndex: 1,
          padding: "2rem",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
        }}
      >
        {/* Header */}
        <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
          <div
            style={{
              width: "44px",
              height: "44px",
              borderRadius: "var(--radius-md)",
              backgroundColor: config.accent,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "20px",
              flexShrink: 0,
            }}
            aria-hidden="true"
          >
            {config.icon}
          </div>
          <div>
            <div
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "var(--text-sm)",
                fontWeight: 600,
                color: "var(--color-text-heading)",
              }}
            >
              {feature.badge}
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.35rem",
                marginTop: "2px",
              }}
            >
              <div
                aria-hidden="true"
                style={{
                  width: "6px",
                  height: "6px",
                  borderRadius: "50%",
                  backgroundColor: config.accent,
                  animation: "pulse 2s infinite",
                }}
              />
              <span
                style={{
                  fontSize: "var(--text-xs)",
                  color: "var(--color-text-muted)",
                  fontFamily: "var(--font-sans)",
                }}
              >
                AI Processing
              </span>
            </div>
          </div>
        </div>

        {/* Lines — simulating content */}
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            gap: "0.6rem",
          }}
        >
          {config.lines.map((line, i) => (
            <div
              key={i}
              style={{
                backgroundColor: "var(--color-white)",
                border: "1px solid var(--color-border)",
                borderRadius: "var(--radius)",
                padding: "0.65rem 0.875rem",
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
                animation: `fadeIn 0.4s ease ${i * 0.12}s both`,
              }}
            >
              {/* Color dot */}
              <div
                aria-hidden="true"
                style={{
                  width: "6px",
                  height: "6px",
                  borderRadius: "50%",
                  backgroundColor: config.accent,
                  flexShrink: 0,
                  opacity: 0.7,
                }}
              />
              <span
                style={{
                  fontSize: "var(--text-xs)",
                  color: "var(--color-text-body)",
                  fontFamily: "var(--font-sans)",
                  lineHeight: 1.4,
                }}
              >
                {line}
              </span>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div
          style={{
            backgroundColor: config.accent,
            borderRadius: "var(--radius)",
            padding: "0.6rem 1rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <span
            style={{
              fontSize: "var(--text-xs)",
              fontWeight: 600,
              color: "white",
              fontFamily: "var(--font-sans)",
            }}
          >
            Ready for review
          </span>
          <span
            style={{
              fontSize: "var(--text-xs)",
              color: "rgba(255,255,255,0.75)",
              fontFamily: "var(--font-sans)",
            }}
          >
            ✓ Approve · Edit
          </span>
        </div>
      </div>

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.4; transform: scale(1.3); }
        }
      `}</style>
    </div>
  );
}
