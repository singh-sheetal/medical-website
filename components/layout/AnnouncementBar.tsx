"use client";

import { announcementMessages } from "@/lib/navigation";
import { useState } from "react";

export function AnnouncementBar() {
  const [dismissed, setDismissed] = useState(false);

  if (dismissed) return null;

  // Duplicate messages for seamless loop
  const repeated = [...announcementMessages, ...announcementMessages];

  return (
    <div
      role="banner"
      style={{
        backgroundColor: "var(--color-bg-dark)",
        color: "var(--color-text-inverse)",
        height: "40px",
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
        position: "relative",
        zIndex: 51,
      }}
    >
      {/* Scrolling marquee */}
      <div
        style={{
          display: "flex",
          width: "100%",
          overflow: "hidden",
          maskImage:
            "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
        }}
      >
        <div
          style={{
            display: "flex",
            gap: "3rem",
            whiteSpace: "nowrap",
            animation: "marquee 35s linear infinite",
            willChange: "transform",
          }}
        >
          {repeated.map((msg, i) => (
            <span
              key={i}
              style={{
                fontSize: "var(--text-xs)",
                fontFamily: "var(--font-sans)",
                fontWeight: 400,
                color: "rgba(253,248,245,0.9)",
                flexShrink: 0,
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
              }}
            >
              {msg}
              <span
                aria-hidden="true"
                style={{
                  display: "inline-block",
                  width: "4px",
                  height: "4px",
                  borderRadius: "50%",
                  backgroundColor: "var(--color-accent)",
                  marginLeft: "1.5rem",
                }}
              />
            </span>
          ))}
        </div>
      </div>

      {/* Dismiss button */}
      <button
        onClick={() => setDismissed(true)}
        aria-label="Dismiss announcement"
        style={{
          position: "absolute",
          right: "1rem",
          top: "50%",
          transform: "translateY(-50%)",
          background: "none",
          border: "none",
          cursor: "pointer",
          color: "rgba(253,248,245,0.6)",
          padding: "4px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          lineHeight: 1,
          flexShrink: 0,
          transition: "color var(--transition-fast)",
          zIndex: 1,
        }}
        onMouseEnter={(e) =>
          ((e.currentTarget as HTMLButtonElement).style.color =
            "rgba(253,248,245,1)")
        }
        onMouseLeave={(e) =>
          ((e.currentTarget as HTMLButtonElement).style.color =
            "rgba(253,248,245,0.6)")
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
          <line x1="18" y1="6" x2="6" y2="18" />
          <line x1="6" y1="6" x2="18" y2="18" />
        </svg>
      </button>
    </div>
  );
}
