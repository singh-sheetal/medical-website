import { Feature } from "@/types";

interface FeatureMediaProps {
  feature: Feature;
}

// Unique placeholder visuals per feature so each block looks distinct
const placeholderConfig: Record<
  string,
  { iconPath: string; lines: string[]; accent: string }
> = {
  "clinical-notes": {
    iconPath: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01",
    lines: [
      "Chief Complaint: Mild shortness of breath",
      "History: 3-day duration, no fever",
      "Assessment: Likely seasonal asthma",
      "Plan: Salbutamol inhaler, follow-up in 2 weeks",
    ],
    accent: "var(--color-primary)",
  },
  prescription: {
    iconPath: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
    lines: [
      "Metformin 500mg — twice daily",
      "✓ No interactions detected",
      "✓ Safe for patient profile",
      "Sending to City Pharmacy...",
    ],
    accent: "var(--color-accent)",
  },
  "document-digitisation": {
    iconPath: "M5 19a2 2 0 01-2-2V7a2 2 0 012-2h4l2 2h4a2 2 0 012 2v1M5 19h14a2 2 0 002-2v-5a2 2 0 00-2-2H9a2 2 0 00-2 2v5a2 2 0 01-2 2z",
    lines: [
      "Lab Result — Blood Panel — 12 Jan 2024",
      "Referral Letter — Dr. Mehta — Cardiology",
      "Old Record — Patient since 2019",
      "X-Ray Report — Left Knee — Nov 2023",
    ],
    accent: "var(--color-accent)",
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
              flexShrink: 0,
            }}
            aria-hidden="true"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d={config.iconPath} />
            </svg>
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
