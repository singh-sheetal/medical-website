"use client";

import Link from "next/link";
import Image from "next/image";
import { useI18n } from "@/lib/i18n/context";
import { images } from "@/lib/images";

const DEMO_EMAIL = "mailto:info@shapeconsulting.app?subject=Demo%20Request%20%E2%80%94%20Shape.Med";

export function Footer() {
  const { t } = useI18n();
  const f = t.footer;
  const currentYear = new Date().getFullYear();

  return (
    <footer style={{ backgroundColor: "var(--color-bg-alt)", borderTop: "1px solid var(--color-border)" }}>
      <div className="container" style={{ paddingBlock: "3rem" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1.5fr 1fr 1fr", gap: "3rem", marginBottom: "2.5rem" }} className="footer-grid">

          {/* Brand */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.875rem" }}>
              <Image src={images.logo} alt="SHAPE Consulting" width={90} height={24} style={{ objectFit: "contain" }} />
            </div>
            <p style={{ fontSize: "var(--text-sm)", color: "var(--color-text-muted)", fontFamily: "var(--font-sans)", lineHeight: 1.7, maxWidth: "28ch", marginBottom: "1.25rem" }}>
              {f.tagline}
            </p>
            <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
              {f.badges.map(b => (
                <span key={b} style={{
                  fontSize: "10px", fontWeight: 500, padding: "3px 8px",
                  borderRadius: "var(--radius-full)", border: "1px solid var(--color-border)",
                  color: "var(--color-text-muted)", fontFamily: "var(--font-sans)",
                }}>{b}</span>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <div style={{ fontSize: "var(--text-xs)", fontWeight: 600, letterSpacing: "0.06em", textTransform: "uppercase" as const, color: "var(--color-text-heading)", marginBottom: "1rem", fontFamily: "var(--font-sans)" }}>
              Shape.Med
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
              {[
                { label: f.links.product, href: "#modules" },
                { label: f.links.team,    href: "#about" },
                { label: f.links.contact, href: "#contact" },
              ].map(l => (
                <a key={l.href} href={l.href} style={{ fontSize: "var(--text-sm)", color: "var(--color-text-muted)", fontFamily: "var(--font-sans)", textDecoration: "none", transition: "color var(--transition-fast)" }}
                  onMouseEnter={e => (e.currentTarget.style.color = "var(--color-text-heading)")}
                  onMouseLeave={e => (e.currentTarget.style.color = "var(--color-text-muted)")}
                >{l.label}</a>
              ))}
            </div>
          </div>

          {/* Legal + Contact */}
          <div>
            <div style={{ fontSize: "var(--text-xs)", fontWeight: 600, letterSpacing: "0.06em", textTransform: "uppercase" as const, color: "var(--color-text-heading)", marginBottom: "1rem", fontFamily: "var(--font-sans)" }}>
              Legal
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
              {[
                { label: f.links.privacy, href: "#privacy" },
                { label: f.links.imprint, href: "#imprint" },
                { label: f.links.gdpr,    href: "#gdpr" },
              ].map(l => (
                <a key={l.href} href={l.href} style={{ fontSize: "var(--text-sm)", color: "var(--color-text-muted)", fontFamily: "var(--font-sans)", textDecoration: "none", transition: "color var(--transition-fast)" }}
                  onMouseEnter={e => (e.currentTarget.style.color = "var(--color-text-heading)")}
                  onMouseLeave={e => (e.currentTarget.style.color = "var(--color-text-muted)")}
                >{l.label}</a>
              ))}
              <a href="mailto:info@shapeconsulting.app" style={{ fontSize: "var(--text-sm)", color: "var(--color-text-muted)", fontFamily: "var(--font-sans)", textDecoration: "none", marginTop: "0.25rem", transition: "color var(--transition-fast)" }}
                onMouseEnter={e => (e.currentTarget.style.color = "var(--color-text-heading)")}
                onMouseLeave={e => (e.currentTarget.style.color = "var(--color-text-muted)")}
              >info@shapeconsulting.app</a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{ paddingTop: "1.5rem", borderTop: "1px solid var(--color-border)" }}>
          <p style={{ fontSize: "var(--text-xs)", color: "var(--color-text-muted)", fontFamily: "var(--font-sans)", margin: 0 }}>
            © {currentYear} {f.copyright}
          </p>
        </div>
      </div>

      <style>{`
        @media (max-width: 640px) { .footer-grid { grid-template-columns: 1fr !important; gap: 2rem !important; } }
      `}</style>
    </footer>
  );
}
