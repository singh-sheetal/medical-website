"use client";

import Link from "next/link";
import { NavItem } from "@/types";
import { useEffect, useRef } from "react";

interface NavDropdownProps {
  items: NavItem[];
  onClose: () => void;
}

export function NavDropdown({ items, onClose }: NavDropdownProps) {
  const ref = useRef<HTMLDivElement>(null);

  // Close on outside click
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        onClose();
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [onClose]);

  // Close on Escape
  useEffect(() => {
    function handleKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [onClose]);

  return (
    <div
      ref={ref}
      role="menu"
      aria-label="Features menu"
      style={{
        position: "absolute",
        top: "calc(100% + 12px)",
        left: "50%",
        transform: "translateX(-50%)",
        backgroundColor: "var(--color-white)",
        border: "1px solid var(--color-border)",
        borderRadius: "var(--radius-lg)",
        boxShadow: "var(--shadow-lg)",
        padding: "0.5rem",
        minWidth: "220px",
        zIndex: 100,
        animation: "fadeIn 0.15s ease",
      }}
    >
      {items.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          role="menuitem"
          onClick={onClose}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.75rem",
            padding: "0.65rem 0.875rem",
            borderRadius: "var(--radius)",
            fontSize: "var(--text-sm)",
            fontFamily: "var(--font-sans)",
            color: "var(--color-text-body)",
            textDecoration: "none",
            transition: "background-color var(--transition-fast), color var(--transition-fast)",
            fontWeight: 400,
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLAnchorElement).style.backgroundColor =
              "var(--color-primary-tint)";
            (e.currentTarget as HTMLAnchorElement).style.color =
              "var(--color-primary)";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLAnchorElement).style.backgroundColor =
              "transparent";
            (e.currentTarget as HTMLAnchorElement).style.color =
              "var(--color-text-body)";
          }}
        >
          {/* Arrow icon */}
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
            style={{ flexShrink: 0, opacity: 0.5 }}
          >
            <polyline points="9 18 15 12 9 6" />
          </svg>
          {item.label}
        </Link>
      ))}
    </div>
  );
}
