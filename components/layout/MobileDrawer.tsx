"use client";

import Link from "next/link";
import { useEffect } from "react";
import { NavItem } from "@/types";
import { navItems, contactPhone, bookingUrl } from "@/lib/navigation";
import { Button } from "@/components/ui/Button";

interface MobileDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

function MobileNavItem({ item, onClose }: { item: NavItem; onClose: () => void }) {
  return (
    <div>
      <Link
        href={item.href}
        onClick={onClose}
        style={{
          display: "block",
          padding: "0.875rem 0",
          fontFamily: "var(--font-sans)",
          fontSize: "var(--text-lg)",
          fontWeight: 500,
          color: "var(--color-text-heading)",
          textDecoration: "none",
          borderBottom: "1px solid var(--color-border)",
          transition: "color var(--transition-fast)",
        }}
        onMouseEnter={(e) =>
          ((e.currentTarget as HTMLAnchorElement).style.color =
            "var(--color-primary)")
        }
        onMouseLeave={(e) =>
          ((e.currentTarget as HTMLAnchorElement).style.color =
            "var(--color-text-heading)")
        }
      >
        {item.label}
      </Link>

      {/* Children */}
      {item.children && (
        <div style={{ paddingLeft: "1rem", paddingBottom: "0.5rem" }}>
          {item.children.map((child) => (
            <Link
              key={child.href}
              href={child.href}
              onClick={onClose}
              style={{
                display: "block",
                padding: "0.6rem 0",
                fontFamily: "var(--font-sans)",
                fontSize: "var(--text-sm)",
                color: "var(--color-text-body)",
                textDecoration: "none",
                borderBottom: "1px solid var(--color-border)",
                transition: "color var(--transition-fast)",
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
              {child.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

export function MobileDrawer({ isOpen, onClose }: MobileDrawerProps) {
  // Prevent body scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Close on Escape
  useEffect(() => {
    function handleKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [onClose]);

  return (
    <>
      {/* Backdrop */}
      <div
        aria-hidden="true"
        onClick={onClose}
        style={{
          position: "fixed",
          inset: 0,
          backgroundColor: "rgba(26,32,64,0.4)",
          zIndex: 98,
          opacity: isOpen ? 1 : 0,
          pointerEvents: isOpen ? "auto" : "none",
          transition: "opacity var(--transition)",
          backdropFilter: "blur(2px)",
        }}
      />

      {/* Drawer panel */}
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
        style={{
          position: "fixed",
          top: 0,
          right: 0,
          bottom: 0,
          width: "min(320px, 90vw)",
          backgroundColor: "var(--color-white)",
          zIndex: 99,
          transform: isOpen ? "translateX(0)" : "translateX(100%)",
          transition: "transform var(--transition-slow)",
          display: "flex",
          flexDirection: "column",
          boxShadow: "var(--shadow-lg)",
          overflowY: "auto",
        }}
      >
        {/* Drawer header */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "1.25rem 1.5rem",
            borderBottom: "1px solid var(--color-border)",
          }}
        >
          <span
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "var(--text-xl)",
              fontWeight: 700,
              color: "var(--color-primary)",
            }}
          >
            MedicalOS
          </span>

          <button
            onClick={onClose}
            aria-label="Close navigation menu"
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              color: "var(--color-text-muted)",
              padding: "4px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: "var(--radius-sm)",
              transition: "color var(--transition-fast)",
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
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        {/* Nav links */}
        <nav style={{ padding: "0.5rem 1.5rem", flex: 1 }}>
          {navItems.map((item) => (
            <MobileNavItem key={item.href} item={item} onClose={onClose} />
          ))}
        </nav>

        {/* Bottom CTAs */}
        <div
          style={{
            padding: "1.5rem",
            borderTop: "1px solid var(--color-border)",
            display: "flex",
            flexDirection: "column",
            gap: "0.75rem",
          }}
        >
          {/* Phone */}
          <a
            href={`tel:${contactPhone}`}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
              fontSize: "var(--text-sm)",
              color: "var(--color-text-body)",
              textDecoration: "none",
              justifyContent: "center",
            }}
          >
            <svg
              width="16"
              height="16"
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

          <Button as="link" href={bookingUrl} fullWidth size="lg">
            Book Free Demo
          </Button>
        </div>
      </div>
    </>
  );
}
