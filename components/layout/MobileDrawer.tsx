"use client";

import { useEffect } from "react";
import Image from "next/image";
import { useI18n } from "@/lib/i18n/context";
import { images } from "@/lib/images";
import { openDemoForm } from "@/components/ui/GlobalDemoForm";

interface MobileDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileDrawer({ isOpen, onClose }: MobileDrawerProps) {
  const { t, toggle, lang } = useI18n();

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  useEffect(() => {
    function handleKey(e: KeyboardEvent) { if (e.key === "Escape") onClose(); }
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [onClose]);

  const navLinks = [
    { label: t.nav.product, href: "#modules" },
    { label: t.nav.faq,     href: "#faq" },
    { label: t.nav.about,   href: "#about" },
    { label: t.nav.contact, href: "#contact" },
  ];

  return (
    <>
      {/* Backdrop */}
      <div
        aria-hidden="true"
        onClick={onClose}
        style={{
          position: "fixed", inset: 0,
          backgroundColor: "rgba(26,32,64,0.4)",
          zIndex: 98,
          opacity: isOpen ? 1 : 0,
          pointerEvents: isOpen ? "auto" : "none",
          transition: "opacity var(--transition)",
          backdropFilter: "blur(2px)",
        }}
      />

      {/* Drawer */}
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
        style={{
          position: "fixed", top: 0, right: 0, bottom: 0,
          width: "min(320px, 90vw)",
          backgroundColor: "var(--color-white)",
          zIndex: 99,
          transform: isOpen ? "translateX(0)" : "translateX(100%)",
          transition: "transform var(--transition-slow)",
          display: "flex", flexDirection: "column",
          boxShadow: "var(--shadow-lg)",
          overflowY: "auto",
        }}
      >
        {/* Header */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "1.25rem 1.5rem", borderBottom: "1px solid var(--color-border)" }}>
          <Image src={images.logo} alt="SHAPE Consulting" width={90} height={24} style={{ objectFit: "contain" }} />
          <button onClick={onClose} aria-label="Close navigation menu"
            style={{ background: "none", border: "none", cursor: "pointer", color: "var(--color-text-muted)", padding: "4px", display: "flex", alignItems: "center", borderRadius: "var(--radius-sm)" }}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
            </svg>
          </button>
        </div>

        {/* Nav links */}
        <nav style={{ padding: "0.5rem 1.5rem", flex: 1 }}>
          {navLinks.map(item => (
            <a
              key={item.href}
              href={item.href}
              onClick={onClose}
              style={{
                display: "block", padding: "0.875rem 0",
                fontFamily: "var(--font-sans)", fontSize: "var(--text-lg)", fontWeight: 500,
                color: "var(--color-text-heading)", textDecoration: "none",
                borderBottom: "1px solid var(--color-border)",
                transition: "color var(--transition-fast)",
              }}
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Bottom CTAs */}
        <div style={{ padding: "1.5rem", borderTop: "1px solid var(--color-border)", display: "flex", flexDirection: "column", gap: "0.75rem" }}>
          {/* Language toggle */}
          <button
            onClick={toggle}
            style={{
              fontFamily: "var(--font-sans)", fontSize: "var(--text-sm)", fontWeight: 500,
              color: "var(--color-text-muted)", background: "none",
              border: "1px solid var(--color-border)", borderRadius: "var(--radius)",
              padding: "0.5rem", cursor: "pointer", width: "100%",
            }}
          >
            {lang === "en" ? "🇩🇪 Deutsch" : "🇬🇧 English"}
          </button>

          {/* Request Demo */}
          <button
            onClick={() => { onClose(); openDemoForm(); }}
            className="btn btn-primary"
            style={{ width: "100%", justifyContent: "center" }}
          >
            {t.nav.demo}
          </button>
        </div>
      </div>
    </>
  );
}
