"use client";

import { useView } from "@/lib/view-context";
import { Container } from "@/components/ui/Container";

interface LegalHeaderProps {
  title: string;
  subtitle: string;
}

export function LegalHeader({ title, subtitle }: LegalHeaderProps) {
  const { setView } = useView();

  return (
    <div style={{ backgroundColor: "var(--color-primary)", padding: "3.5rem 0 3rem" }}>
      <Container>
        <button
          onClick={() => setView("home")}
          style={{
            display: "inline-flex", alignItems: "center", gap: "0.375rem",
            fontFamily: "var(--font-sans)", fontSize: "var(--text-sm)",
            fontWeight: 500,
            color: "rgba(255,255,255,0.7)", background: "none", border: "none",
            cursor: "pointer", marginBottom: "1.75rem", padding: 0,
            transition: "color 150ms ease",
          }}
          onMouseEnter={e => (e.currentTarget.style.color = "white")}
          onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.7)")}
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 18 9 12 15 6"/>
          </svg>
          Back
        </button>

        <h1 style={{
          fontFamily: "var(--font-display)",
          fontSize: "clamp(2rem, 4vw, 2.75rem)",
          fontWeight: 700, color: "white",
          letterSpacing: "-0.025em",
          marginBottom: "0.5rem",
          lineHeight: 1.15,
        }}>
          {title}
        </h1>
        <p style={{
          fontFamily: "var(--font-sans)", fontSize: "var(--text-sm)",
          color: "rgba(255,255,255,0.65)",
        }}>
          {subtitle}
        </p>
      </Container>
    </div>
  );
}

export function LegalSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div style={{ marginBottom: "2rem" }}>
      <h2 style={{
        fontFamily: "var(--font-sans)", fontSize: "var(--text-lg)",
        fontWeight: 700, color: "var(--color-text-heading)",
        marginBottom: "0.75rem", paddingBottom: "0.5rem",
        borderBottom: "1px solid var(--color-border)",
      }}>
        {title}
      </h2>
      <div style={{
        fontFamily: "var(--font-sans)", fontSize: "var(--text-base)",
        color: "var(--color-text-body)", lineHeight: 1.75,
        display: "flex", flexDirection: "column", gap: "0.625rem",
      }}>
        {children}
      </div>
    </div>
  );
}
