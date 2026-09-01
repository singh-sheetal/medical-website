"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useCallback } from "react";
import { useI18n } from "@/lib/i18n/context";
import { MobileDrawer } from "./MobileDrawer";
import { openDemoForm } from "@/components/ui/GlobalDemoForm";
import { images } from "@/lib/images";

const DEMO_EMAIL = "mailto:info@shapeconsulting.app?subject=Demo%20Request%20%E2%80%94%20Shape.Med";

export function Navbar() {
  const { t, toggle, lang } = useI18n();
  const [scrolled, setScrolled]     = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    function onScroll() { setScrolled(window.scrollY > 8); }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMobile = useCallback(() => setMobileOpen(false), []);

  const navLinks = [
    { label: t.nav.product, href: "#modules" },
    { label: t.nav.faq,     href: "#faq" },
    { label: t.nav.contact, href: "#contact" },
  ];

  return (
    <>
      <header style={{
        position: "sticky", top: 0, zIndex: 50,
        backgroundColor: "var(--color-white)",
        borderBottom: scrolled ? "1px solid var(--color-border)" : "1px solid transparent",
        boxShadow: scrolled ? "var(--shadow-sm)" : "none",
        transition: "border-color var(--transition), box-shadow var(--transition)",
      }}>
        <div className="container navbar-inner" style={{ height: "68px", display: "flex", alignItems: "center", gap: "1.5rem" }}>

          {/* Logo */}
          <Link href="/" aria-label="Shape Consulting home" style={{ display: "flex", alignItems: "center", gap: "0.5rem", textDecoration: "none", flexShrink: 0 }}>
            <Image src={images.logo} alt="SHAPE Consulting" width={100} height={28} style={{ objectFit: "contain" }} priority />
            <div style={{ borderLeft: "1px solid var(--color-border)", paddingLeft: "0.5rem", display: "flex", flexDirection: "column", gap: "1px" }}>
              <span style={{ fontFamily: "var(--font-sans)", fontSize: "9px", fontWeight: 600, letterSpacing: "0.06em", textTransform: "uppercase" as const, color: "var(--color-text-muted)", lineHeight: 1 }}>
                Practice
              </span>
              <span style={{ fontFamily: "var(--font-sans)", fontSize: "9px", fontWeight: 600, letterSpacing: "0.06em", textTransform: "uppercase" as const, color: "var(--color-primary)", lineHeight: 1 }}>
                Operating System
              </span>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav aria-label="Main navigation" className="nav-desktop" style={{ display: "flex", alignItems: "center", gap: "0.125rem", flex: 1 }}>
            {navLinks.map((item) => (
              <a
                key={item.href}
                href={item.href}
                style={{
                  display: "block", padding: "0.45rem 0.75rem",
                  fontFamily: "var(--font-sans)", fontSize: "var(--text-sm)", fontWeight: 500,
                  color: "var(--color-text-heading)", textDecoration: "none",
                  borderRadius: "var(--radius)",
                  transition: "color var(--transition-fast), background-color var(--transition-fast)",
                  whiteSpace: "nowrap",
                }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "var(--color-bg-alt)"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "transparent"; }}
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Right side */}
          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginLeft: "auto", flexShrink: 0 }}>

            {/* Language toggle */}
            <button
              onClick={toggle}
              className="nav-desktop"
              style={{
                fontFamily: "var(--font-sans)", fontSize: "var(--text-xs)", fontWeight: 600,
                letterSpacing: "0.06em", color: "var(--color-text-muted)",
                background: "none", border: "1px solid var(--color-border)",
                borderRadius: "var(--radius)", padding: "0.3rem 0.6rem",
                cursor: "pointer", transition: "all var(--transition-fast)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLButtonElement).style.borderColor = "var(--color-primary)";
                (e.currentTarget as HTMLButtonElement).style.color = "var(--color-primary)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLButtonElement).style.borderColor = "var(--color-border)";
                (e.currentTarget as HTMLButtonElement).style.color = "var(--color-text-muted)";
              }}
              aria-label={`Switch to ${lang === "en" ? "German" : "English"}`}
            >
              {t.nav.language}
            </button>

            {/* Demo CTA */}
            <div className="nav-cta">
              <button onClick={() => openDemoForm()} className="btn btn-primary btn-sm">
                {t.nav.demo}
              </button>
            </div>

            {/* Hamburger */}
            <button
              onClick={() => setMobileOpen(true)}
              aria-label="Open navigation menu"
              aria-expanded={mobileOpen}
              className="nav-hamburger"
              style={{
                background: "none", border: "none", cursor: "pointer",
                color: "var(--color-text-heading)", padding: "6px",
                display: "none", alignItems: "center", justifyContent: "center",
                borderRadius: "var(--radius-sm)",
              }}
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <line x1="3" y1="6" x2="21" y2="6"/>
                <line x1="3" y1="12" x2="21" y2="12"/>
                <line x1="3" y1="18" x2="21" y2="18"/>
              </svg>
            </button>
          </div>
        </div>
      </header>

      <style>{`
        @media (max-width: 860px) {
          .nav-desktop { display: none !important; }
          .nav-cta     { display: none !important; }
          .nav-hamburger { display: flex !important; }
        }
      `}</style>

      <MobileDrawer isOpen={mobileOpen} onClose={closeMobile} />
    </>
  );
}
