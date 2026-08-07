"use client";

import Link from "next/link";
import {
  footerColumns,
  socialLinks,
  trustBadges,
  pressLogos,
  contactInfo,
} from "@/lib/footer-links";
import { bookingUrl } from "@/lib/navigation";

function FooterLinkColumn({
  heading,
  links,
}: {
  heading: string;
  links: { label: string; href: string }[];
}) {
  return (
    <div>
      <h3
        style={{
          fontFamily: "var(--font-sans)",
          fontSize: "var(--text-xs)",
          fontWeight: 600,
          letterSpacing: "0.08em",
          textTransform: "uppercase",
          color: "var(--color-text-inverse)",
          marginBottom: "1.25rem",
          opacity: 0.9,
        }}
      >
        {heading}
      </h3>
      <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.6rem" }}>
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "var(--text-sm)",
                color: "rgba(253,248,245,0.65)",
                textDecoration: "none",
                transition: "color var(--transition-fast)",
                lineHeight: 1.5,
              }}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLAnchorElement).style.color =
                  "var(--color-text-inverse)")
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLAnchorElement).style.color =
                  "rgba(253,248,245,0.65)")
              }
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      style={{
        backgroundColor: "var(--color-bg-dark)",
        color: "var(--color-text-inverse)",
      }}
    >
      {/* ── CTA strip ──────────────────────────────────────── */}
      <div
        style={{
          borderBottom: "1px solid rgba(255,255,255,0.08)",
          padding: "3rem 0",
        }}
      >
        <div
          className="container footer-cta-strip"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "2rem",
            flexWrap: "wrap",
          }}
        >
          <div>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(1.5rem, 3vw, 2rem)",
                fontWeight: 700,
                color: "var(--color-text-inverse)",
                marginBottom: "0.5rem",
                lineHeight: 1.25,
              }}
            >
              Ready to transform your practice?
            </h2>
            <p
              style={{
                fontSize: "var(--text-sm)",
                color: "rgba(253,248,245,0.65)",
                fontFamily: "var(--font-sans)",
              }}
            >
              Join thousands of healthcare professionals already using MedicalOS.
            </p>
          </div>
          <Link
            href={bookingUrl}
            className="btn btn-accent btn-lg"
            style={{ flexShrink: 0 }}
          >
            Book a Free Demo
          </Link>
        </div>
      </div>

      {/* ── Press logos ────────────────────────────────────── */}
      <div
        style={{
          borderBottom: "1px solid rgba(255,255,255,0.08)",
          padding: "1.75rem 0",
        }}
      >
        <div className="container">
          <p
            style={{
              fontSize: "var(--text-xs)",
              color: "rgba(253,248,245,0.4)",
              fontFamily: "var(--font-sans)",
              fontWeight: 500,
              letterSpacing: "0.06em",
              textTransform: "uppercase",
              marginBottom: "1rem",
              textAlign: "center",
            }}
          >
            As seen in
          </p>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "2.5rem",
              flexWrap: "wrap",
            }}
          >
            {pressLogos.map((name) => (
              <span
                key={name}
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "var(--text-base)",
                  fontWeight: 600,
                  color: "rgba(253,248,245,0.3)",
                  letterSpacing: "-0.01em",
                  userSelect: "none",
                }}
              >
                {name}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* ── Main footer grid ───────────────────────────────── */}
      <div className="container" style={{ paddingBlock: "4rem" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.5fr repeat(4, 1fr)",
            gap: "3rem",
          }}
          className="footer-grid"
        >
          {/* Brand column */}
          <div>
            {/* Wordmark */}
            <Link
              href="/"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "var(--text-2xl)",
                fontWeight: 700,
                color: "var(--color-text-inverse)",
                textDecoration: "none",
                display: "inline-block",
                marginBottom: "1rem",
                letterSpacing: "-0.01em",
              }}
            >
              Medical
              <span style={{ color: "var(--color-accent)" }}>OS</span>
            </Link>

            <p
              style={{
                fontSize: "var(--text-sm)",
                color: "rgba(253,248,245,0.6)",
                fontFamily: "var(--font-sans)",
                lineHeight: 1.75,
                marginBottom: "1.5rem",
                maxWidth: "28ch",
              }}
            >
              AI-powered practice management for modern healthcare professionals.
            </p>

            {/* Contact info */}
            <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem", marginBottom: "1.5rem" }}>
              <a
                href={`mailto:${contactInfo.email}`}
                style={{
                  fontSize: "var(--text-sm)",
                  color: "rgba(253,248,245,0.6)",
                  textDecoration: "none",
                  fontFamily: "var(--font-sans)",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  transition: "color var(--transition-fast)",
                }}
                onMouseEnter={(e) =>
                  ((e.currentTarget as HTMLAnchorElement).style.color =
                    "var(--color-accent)")
                }
                onMouseLeave={(e) =>
                  ((e.currentTarget as HTMLAnchorElement).style.color =
                    "rgba(253,248,245,0.6)")
                }
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                {contactInfo.email}
              </a>
              <a
                href={`tel:${contactInfo.phone}`}
                style={{
                  fontSize: "var(--text-sm)",
                  color: "rgba(253,248,245,0.6)",
                  textDecoration: "none",
                  fontFamily: "var(--font-sans)",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  transition: "color var(--transition-fast)",
                }}
                onMouseEnter={(e) =>
                  ((e.currentTarget as HTMLAnchorElement).style.color =
                    "var(--color-accent)")
                }
                onMouseLeave={(e) =>
                  ((e.currentTarget as HTMLAnchorElement).style.color =
                    "rgba(253,248,245,0.6)")
                }
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.68A2 2 0 012 .84h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>
                {contactInfo.phone}
              </a>
            </div>

            {/* Social icons */}
            <div style={{ display: "flex", gap: "0.75rem" }}>
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  style={{
                    width: "36px",
                    height: "36px",
                    borderRadius: "var(--radius)",
                    border: "1px solid rgba(255,255,255,0.12)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "rgba(253,248,245,0.6)",
                    transition: "color var(--transition-fast), border-color var(--transition-fast), background-color var(--transition-fast)",
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget as HTMLAnchorElement;
                    el.style.color = "var(--color-text-inverse)";
                    el.style.borderColor = "var(--color-accent)";
                    el.style.backgroundColor = "rgba(232,145,106,0.1)";
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget as HTMLAnchorElement;
                    el.style.color = "rgba(253,248,245,0.6)";
                    el.style.borderColor = "rgba(255,255,255,0.12)";
                    el.style.backgroundColor = "transparent";
                  }}
                >
                  {s.label === "LinkedIn" && (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/>
                      <circle cx="4" cy="4" r="2"/>
                    </svg>
                  )}
                  {s.label === "Twitter / X" && (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                    </svg>
                  )}
                  {s.label === "YouTube" && (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <path d="M22.54 6.42a2.78 2.78 0 00-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 00-1.95 1.96A29 29 0 001 12a29 29 0 00.46 5.58a2.78 2.78 0 001.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 001.95-1.96A29 29 0 0023 12a29 29 0 00-.46-5.58zM9.75 15.02V8.98L15.5 12l-5.75 3.02z"/>
                    </svg>
                  )}
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {footerColumns.map((col) => (
            <FooterLinkColumn
              key={col.heading}
              heading={col.heading}
              links={col.links}
            />
          ))}
        </div>
      </div>

      {/* ── Trust badges + copyright ────────────────────────── */}
      <div
        style={{
          borderTop: "1px solid rgba(255,255,255,0.08)",
          padding: "1.5rem 0",
        }}
      >
        <div
          className="container"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "1.5rem",
            flexWrap: "wrap",
          }}
        >
          {/* Trust badges */}
          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
            {trustBadges.map((badge) => (
              <span
                key={badge.label}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.35rem",
                  fontSize: "var(--text-xs)",
                  color: "rgba(253,248,245,0.5)",
                  fontFamily: "var(--font-sans)",
                  fontWeight: 500,
                }}
              >
                <span aria-hidden="true">{badge.icon}</span>
                {badge.label}
              </span>
            ))}
          </div>

          {/* Copyright */}
          <p
            style={{
              fontSize: "var(--text-xs)",
              color: "rgba(253,248,245,0.35)",
              fontFamily: "var(--font-sans)",
            }}
          >
            © {currentYear} MedicalOS. All rights reserved.
          </p>
        </div>
      </div>

      {/* Footer responsive styles */}
      <style>{`
        @media (max-width: 1024px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr !important;
          }
        }
        @media (max-width: 640px) {
          .footer-grid {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
          }
          .footer-cta-strip {
            flex-direction: column !important;
            text-align: center !important;
          }
        }
      `}</style>
    </footer>
  );
}
