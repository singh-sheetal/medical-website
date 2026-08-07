"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

type ConsentState = "accepted" | "declined" | null;

const CONSENT_KEY = "medicalos_cookie_consent";

export function CookieBanner() {
  const [consent, setConsent] = useState<ConsentState>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Delay slightly so it doesn't flash on first render
    const timer = setTimeout(() => {
      try {
        const stored = localStorage.getItem(CONSENT_KEY) as ConsentState;
        if (!stored) setVisible(true);
        else setConsent(stored);
      } catch {
        setVisible(true);
      }
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  const handleAccept = () => {
    try { localStorage.setItem(CONSENT_KEY, "accepted"); } catch {}
    setConsent("accepted");
    setVisible(false);
  };

  const handleDecline = () => {
    try { localStorage.setItem(CONSENT_KEY, "declined"); } catch {}
    setConsent("declined");
    setVisible(false);
  };

  if (!visible || consent !== null) return null;

  return (
    <div
      role="dialog"
      aria-label="Cookie consent"
      aria-live="polite"
      style={{
        position:        "fixed",
        bottom:          "1.5rem",
        left:            "50%",
        transform:       "translateX(-50%)",
        width:           "min(560px, calc(100vw - 2rem))",
        backgroundColor: "var(--color-white)",
        border:          "1px solid var(--color-border)",
        borderRadius:    "var(--radius-xl)",
        boxShadow:       "var(--shadow-lg)",
        padding:         "1.25rem 1.5rem",
        zIndex:          200,
        display:         "flex",
        alignItems:      "flex-start",
        gap:             "1rem",
        animation:       "fadeUp 0.4s ease",
      }}
    >
      {/* Cookie icon */}
      <div
        aria-hidden="true"
        style={{
          width:           "36px",
          height:          "36px",
          borderRadius:    "var(--radius-md)",
          backgroundColor: "var(--color-primary-tint)",
          display:         "flex",
          alignItems:      "center",
          justifyContent:  "center",
          flexShrink:      0,
          fontSize:        "18px",
        }}
      >
        🍪
      </div>

      {/* Text + actions */}
      <div style={{ flex: 1 }}>
        <p
          style={{
            fontFamily:  "var(--font-sans)",
            fontSize:    "var(--text-sm)",
            color:       "var(--color-text-heading)",
            fontWeight:  500,
            marginBottom: "0.25rem",
          }}
        >
          We use cookies
        </p>
        <p
          style={{
            fontFamily:  "var(--font-sans)",
            fontSize:    "var(--text-xs)",
            color:       "var(--color-text-muted)",
            lineHeight:  1.6,
            marginBottom: "1rem",
          }}
        >
          We use essential cookies to make our site work, and optional analytics
          cookies to understand how you use it. See our{" "}
          <Link
            href="#privacy"
            style={{ color: "var(--color-primary)", textDecoration: "underline" }}
          >
            Privacy Policy
          </Link>
          .
        </p>

        <div style={{ display: "flex", gap: "0.625rem", flexWrap: "wrap" }}>
          <button
            onClick={handleAccept}
            style={{
              fontFamily:      "var(--font-sans)",
              fontSize:        "var(--text-xs)",
              fontWeight:      500,
              padding:         "0.5rem 1.25rem",
              borderRadius:    "var(--radius)",
              border:          "none",
              backgroundColor: "var(--color-primary)",
              color:           "var(--color-white)",
              cursor:          "pointer",
              transition:      "background-color var(--transition-fast)",
            }}
            onMouseEnter={(e) =>
              ((e.currentTarget as HTMLButtonElement).style.backgroundColor =
                "var(--color-primary-dark)")
            }
            onMouseLeave={(e) =>
              ((e.currentTarget as HTMLButtonElement).style.backgroundColor =
                "var(--color-primary)")
            }
          >
            Accept all
          </button>
          <button
            onClick={handleDecline}
            style={{
              fontFamily:      "var(--font-sans)",
              fontSize:        "var(--text-xs)",
              fontWeight:      500,
              padding:         "0.5rem 1.25rem",
              borderRadius:    "var(--radius)",
              border:          "1px solid var(--color-border)",
              backgroundColor: "transparent",
              color:           "var(--color-text-body)",
              cursor:          "pointer",
              transition:      "border-color var(--transition-fast)",
            }}
            onMouseEnter={(e) =>
              ((e.currentTarget as HTMLButtonElement).style.borderColor =
                "var(--color-border-strong)")
            }
            onMouseLeave={(e) =>
              ((e.currentTarget as HTMLButtonElement).style.borderColor =
                "var(--color-border)")
            }
          >
            Essential only
          </button>
        </div>
      </div>
    </div>
  );
}
