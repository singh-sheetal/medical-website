"use client";

import Link from "next/link";
import { useState, useEffect, useCallback } from "react";
import { navItems, contactPhone, bookingUrl } from "@/lib/navigation";
import { NavDropdown } from "./NavDropdown";
import { MobileDrawer } from "./MobileDrawer";
import { Button } from "@/components/ui/Button";

export function Navbar() {
  const [scrolled, setScrolled]         = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen]     = useState(false);

  // Add scroll shadow
  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 8);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeDropdown = useCallback(() => setActiveDropdown(null), []);
  const closeMobile   = useCallback(() => setMobileOpen(false), []);

  return (
    <>
      <header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 50,
          backgroundColor: "var(--color-white)",
          borderBottom: scrolled
            ? "1px solid var(--color-border)"
            : "1px solid transparent",
          boxShadow: scrolled ? "var(--shadow-sm)" : "none",
          transition:
            "border-color var(--transition), box-shadow var(--transition)",
        }}
      >
        <div
          className="container"
          style={{
            height: "68px",
            display: "flex",
            alignItems: "center",
            gap: "2rem",
          }}
        >
          {/* ── Logo ─────────────────────────────────────────── */}
          <Link
            href="/"
            aria-label="MedicalOS home"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "var(--text-xl)",
              fontWeight: 700,
              color: "var(--color-primary)",
              textDecoration: "none",
              flexShrink: 0,
              letterSpacing: "-0.01em",
            }}
          >
            Medical<span style={{ color: "var(--color-accent)" }}>OS</span>
          </Link>

          {/* ── Desktop nav ───────────────────────────────────── */}
          <nav
            aria-label="Main navigation"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.25rem",
              flex: 1,
            }}
            className="hide-mobile"
          >
            {navItems.map((item) => {
              const hasChildren = item.children && item.children.length > 0;
              const isOpen = activeDropdown === item.label;

              return (
                <div
                  key={item.href}
                  style={{ position: "relative" }}
                  onMouseEnter={() => hasChildren && setActiveDropdown(item.label)}
                  onMouseLeave={() => hasChildren && setActiveDropdown(null)}
                >
                  {hasChildren ? (
                    <button
                      aria-expanded={isOpen}
                      aria-haspopup="true"
                      onClick={() =>
                        setActiveDropdown(isOpen ? null : item.label)
                      }
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "4px",
                        padding: "0.5rem 0.75rem",
                        background: "none",
                        border: "none",
                        cursor: "pointer",
                        fontFamily: "var(--font-sans)",
                        fontSize: "var(--text-sm)",
                        fontWeight: 500,
                        color: isOpen
                          ? "var(--color-primary)"
                          : "var(--color-text-heading)",
                        borderRadius: "var(--radius)",
                        transition:
                          "color var(--transition-fast), background-color var(--transition-fast)",
                        backgroundColor: isOpen
                          ? "var(--color-primary-tint)"
                          : "transparent",
                      }}
                    >
                      {item.label}
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                        style={{
                          transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                          transition: "transform var(--transition-fast)",
                        }}
                      >
                        <polyline points="6 9 12 15 18 9" />
                      </svg>
                    </button>
                  ) : (
                    <Link
                      href={item.href}
                      style={{
                        display: "block",
                        padding: "0.5rem 0.75rem",
                        fontFamily: "var(--font-sans)",
                        fontSize: "var(--text-sm)",
                        fontWeight: 500,
                        color: "var(--color-text-heading)",
                        textDecoration: "none",
                        borderRadius: "var(--radius)",
                        transition:
                          "color var(--transition-fast), background-color var(--transition-fast)",
                      }}
                      onMouseEnter={(e) => {
                        (e.currentTarget as HTMLAnchorElement).style.color =
                          "var(--color-primary)";
                        (
                          e.currentTarget as HTMLAnchorElement
                        ).style.backgroundColor = "var(--color-primary-tint)";
                      }}
                      onMouseLeave={(e) => {
                        (e.currentTarget as HTMLAnchorElement).style.color =
                          "var(--color-text-heading)";
                        (
                          e.currentTarget as HTMLAnchorElement
                        ).style.backgroundColor = "transparent";
                      }}
                    >
                      {item.label}
                    </Link>
                  )}

                  {/* Dropdown */}
                  {hasChildren && isOpen && item.children && (
                    <NavDropdown
                      items={item.children}
                      onClose={closeDropdown}
                    />
                  )}
                </div>
              );
            })}
          </nav>

          {/* ── Right side ────────────────────────────────────── */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "1rem",
              marginLeft: "auto",
              flexShrink: 0,
            }}
          >
            {/* Phone — desktop only */}
            <a
              href={`tel:${contactPhone}`}
              className="hide-mobile"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.4rem",
                fontSize: "var(--text-sm)",
                color: "var(--color-text-body)",
                textDecoration: "none",
                transition: "color var(--transition-fast)",
                fontFamily: "var(--font-sans)",
              }}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLAnchorElement).style.color =
                  "var(--color-primary)")
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLAnchorElement).style.color =
                  "var(--color-text-body)")
              }
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.68A2 2 0 012 .84h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
              </svg>
              {contactPhone}
            </a>

            {/* CTA — desktop */}
            <div className="hide-mobile">
              <Button as="link" href={bookingUrl} size="sm">
                Book Free Demo
              </Button>
            </div>

            {/* Hamburger — mobile only */}
            <button
              onClick={() => setMobileOpen(true)}
              aria-label="Open navigation menu"
              aria-expanded={mobileOpen}
              className="show-mobile"
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                color: "var(--color-text-heading)",
                padding: "6px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "var(--radius-sm)",
              }}
            >
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile drawer */}
      <MobileDrawer isOpen={mobileOpen} onClose={closeMobile} />
    </>
  );
}
