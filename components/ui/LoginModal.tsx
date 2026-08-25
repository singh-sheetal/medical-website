"use client";

import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/Button";

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function LoginModal({ isOpen, onClose }: LoginModalProps) {
  const [email, setEmail]       = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading]   = useState(false);
  const [error, setError]       = useState("");
  const emailRef                = useRef<HTMLInputElement>(null);

  // Focus email on open
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => emailRef.current?.focus(), 100);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
      setEmail(""); setPassword(""); setError(""); setLoading(false);
    }
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  // Close on Escape
  useEffect(() => {
    function handleKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [onClose]);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email || !password) { setError("Please enter your email and password."); return; }
    setLoading(true);
    setError("");
    // Placeholder — replace with real auth when ready
    setTimeout(() => {
      setLoading(false);
      setError("Login is not yet available. Please check back soon.");
    }, 1200);
  }

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        aria-hidden="true"
        onClick={onClose}
        style={{
          position: "fixed", inset: 0,
          backgroundColor: "rgba(26,26,26,0.5)",
          zIndex: 200,
          backdropFilter: "blur(3px)",
          animation: "fadeIn 0.2s ease",
        }}
      />

      {/* Modal */}
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Sign in to SHAPE Academy"
        style={{
          position: "fixed",
          top: "50%", left: "50%",
          transform: "translate(-50%, -50%)",
          zIndex: 201,
          width: "min(440px, calc(100vw - 2rem))",
          backgroundColor: "var(--color-white)",
          borderRadius: "var(--radius-xl)",
          boxShadow: "var(--shadow-lg)",
          border: "1px solid var(--color-border)",
          animation: "fadeUp 0.25s ease",
          overflow: "hidden",
        }}
      >
        {/* Header */}
        <div style={{
          padding: "1.75rem 2rem 1.25rem",
          borderBottom: "1px solid var(--color-border)",
          display: "flex", alignItems: "flex-start", justifyContent: "space-between",
        }}>
          <div>
            <div style={{
              fontFamily: "var(--font-display)", fontSize: "var(--text-xl)",
              fontWeight: 700, color: "var(--color-text-heading)", marginBottom: "0.25rem",
            }}>
              Sign in to{" "}
              <span style={{ color: "var(--color-primary)" }}>SHAPE Academy</span>
            </div>
            <div style={{ fontSize: "var(--text-sm)", color: "var(--color-text-muted)", fontFamily: "var(--font-sans)" }}>
              Access your courses and learning portal
            </div>
          </div>
          <button
            onClick={onClose}
            aria-label="Close sign in"
            style={{
              background: "none", border: "none", cursor: "pointer",
              color: "var(--color-text-muted)", padding: "4px",
              borderRadius: "var(--radius-sm)", flexShrink: 0, marginLeft: "1rem",
              display: "flex", alignItems: "center", justifyContent: "center",
              transition: "color var(--transition-fast)",
            }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLButtonElement).style.color = "var(--color-text-heading)")}
            onMouseLeave={(e) => ((e.currentTarget as HTMLButtonElement).style.color = "var(--color-text-muted)")}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <line x1="18" y1="6" x2="6" y2="18"/>
              <line x1="6" y1="6" x2="18" y2="18"/>
            </svg>
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} style={{ padding: "1.5rem 2rem 2rem" }}>
          {/* Email */}
          <div style={{ marginBottom: "1rem" }}>
            <label
              htmlFor="login-email"
              style={{
                display: "block", fontFamily: "var(--font-sans)",
                fontSize: "var(--text-sm)", fontWeight: 500,
                color: "var(--color-text-heading)", marginBottom: "0.4rem",
              }}
            >
              Email address
            </label>
            <input
              ref={emailRef}
              id="login-email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="doctor@yourpractice.com"
              autoComplete="email"
              style={{
                width: "100%", padding: "0.7rem 0.875rem",
                fontFamily: "var(--font-sans)", fontSize: "var(--text-sm)",
                color: "var(--color-text-heading)",
                backgroundColor: "var(--color-bg)",
                border: "1.5px solid var(--color-border)",
                borderRadius: "var(--radius-md)",
                outline: "none", transition: "border-color var(--transition-fast)",
                boxSizing: "border-box",
              }}
              onFocus={(e) => ((e.currentTarget as HTMLInputElement).style.borderColor = "var(--color-primary)")}
              onBlur={(e)  => ((e.currentTarget as HTMLInputElement).style.borderColor = "var(--color-border)")}
            />
          </div>

          {/* Password */}
          <div style={{ marginBottom: "0.75rem" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "0.4rem" }}>
              <label
                htmlFor="login-password"
                style={{
                  fontFamily: "var(--font-sans)", fontSize: "var(--text-sm)",
                  fontWeight: 500, color: "var(--color-text-heading)",
                }}
              >
                Password
              </label>
              <a
                href="#"
                onClick={(e) => e.preventDefault()}
                style={{
                  fontSize: "var(--text-xs)", color: "var(--color-primary)",
                  fontFamily: "var(--font-sans)", textDecoration: "none",
                }}
              >
                Forgot password?
              </a>
            </div>
            <input
              id="login-password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              autoComplete="current-password"
              style={{
                width: "100%", padding: "0.7rem 0.875rem",
                fontFamily: "var(--font-sans)", fontSize: "var(--text-sm)",
                color: "var(--color-text-heading)",
                backgroundColor: "var(--color-bg)",
                border: "1.5px solid var(--color-border)",
                borderRadius: "var(--radius-md)",
                outline: "none", transition: "border-color var(--transition-fast)",
                boxSizing: "border-box",
              }}
              onFocus={(e) => ((e.currentTarget as HTMLInputElement).style.borderColor = "var(--color-primary)")}
              onBlur={(e)  => ((e.currentTarget as HTMLInputElement).style.borderColor = "var(--color-border)")}
            />
          </div>

          {/* Error */}
          {error && (
            <div style={{
              backgroundColor: "rgba(242,94,27,0.08)",
              border: "1px solid rgba(242,94,27,0.2)",
              borderRadius: "var(--radius)",
              padding: "0.6rem 0.875rem",
              fontFamily: "var(--font-sans)", fontSize: "var(--text-xs)",
              color: "var(--color-primary-dark)", marginBottom: "1rem",
            }}>
              {error}
            </div>
          )}

          {/* Submit */}
          <div style={{ marginTop: error ? 0 : "1rem" }}>
            <Button
              as="button"
              type="submit"
              fullWidth
              size="lg"
              loading={loading}
            >
              Sign in
            </Button>
          </div>

          {/* Divider */}
          <div style={{
            display: "flex", alignItems: "center", gap: "0.875rem",
            margin: "1.25rem 0",
          }}>
            <div style={{ flex: 1, height: "1px", backgroundColor: "var(--color-border)" }} />
            <span style={{ fontSize: "var(--text-xs)", color: "var(--color-text-muted)", fontFamily: "var(--font-sans)" }}>
              Don't have an account?
            </span>
            <div style={{ flex: 1, height: "1px", backgroundColor: "var(--color-border)" }} />
          </div>

          {/* Register link */}
          <Button
            as="link"
            href="https://www.shapeconsulting.app/pricing-plans/plans-pricing"
            variant="secondary"
            fullWidth
          >
            Book a course to get started
          </Button>
        </form>
      </div>
    </>
  );
}
