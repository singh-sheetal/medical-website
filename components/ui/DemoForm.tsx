"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useI18n } from "@/lib/i18n/context";

interface DemoFormProps {
  isOpen: boolean;
  onClose: () => void;
}

type Step = 1 | 2 | 3;

const INPUT_STYLE: React.CSSProperties = {
  width: "100%",
  padding: "0.7rem 0.875rem",
  fontFamily: "var(--font-sans)",
  fontSize: "var(--text-sm)",
  color: "var(--color-text-heading)",
  backgroundColor: "var(--color-white)",
  border: "1.5px solid var(--color-border)",
  borderRadius: "var(--radius-md)",
  outline: "none",
  transition: "border-color 150ms ease",
  boxSizing: "border-box" as const,
};

const LABEL_STYLE: React.CSSProperties = {
  display: "block",
  fontFamily: "var(--font-sans)",
  fontSize: "var(--text-sm)",
  fontWeight: 500,
  color: "var(--color-text-heading)",
  marginBottom: "0.375rem",
};

function Field({ label, error, children }: { label: string; error?: string; children: React.ReactNode }) {
  return (
    <div style={{ marginBottom: "1rem" }}>
      <label style={LABEL_STYLE}>{label}</label>
      {children}
      {error && (
        <p style={{ fontFamily: "var(--font-sans)", fontSize: "var(--text-xs)", color: "var(--color-primary)", marginTop: "0.25rem" }}>
          {error}
        </p>
      )}
    </div>
  );
}

function StepIndicator({ current, total, labels }: { current: Step; total: number; labels: string[] }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "1.75rem" }}>
      {Array.from({ length: total }).map((_, i) => {
        const stepNum = (i + 1) as Step;
        const done    = current > stepNum;
        const active  = current === stepNum;
        return (
          <div key={i} style={{ display: "flex", alignItems: "center", gap: "0.5rem", flex: i < total - 1 ? 1 : "none" }}>
            <div style={{
              width: "28px", height: "28px", borderRadius: "50%", flexShrink: 0,
              backgroundColor: done || active ? "var(--color-primary)" : "var(--color-border)",
              display: "flex", alignItems: "center", justifyContent: "center",
              transition: "background-color 250ms ease",
            }}>
              {done ? (
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
              ) : (
                <span style={{ fontFamily: "var(--font-sans)", fontSize: "11px", fontWeight: 700, color: active ? "white" : "var(--color-text-muted)" }}>
                  {stepNum}
                </span>
              )}
            </div>
            <span style={{
              fontFamily: "var(--font-sans)", fontSize: "var(--text-xs)", fontWeight: 500,
              color: active ? "var(--color-primary)" : done ? "var(--color-text-muted)" : "var(--color-text-muted)",
              whiteSpace: "nowrap",
            }}>
              {labels[i]}
            </span>
            {i < total - 1 && (
              <div style={{ flex: 1, height: "1px", backgroundColor: done ? "var(--color-primary)" : "var(--color-border)", transition: "background-color 250ms ease" }} />
            )}
          </div>
        );
      })}
    </div>
  );
}

export function DemoForm({ isOpen, onClose }: DemoFormProps) {
  const { t } = useI18n();
  const f = t.form;

  const [step, setStep]         = useState<Step>(1);
  const [submitting, setSubmitting] = useState(false);
  const [errors, setErrors]     = useState<Record<string, string>>({});

  const [data, setData] = useState({
    name: "", email: "", phone: "", practice: "",
    specialty: "", teamSize: "",
    challenge: "", currentSoftware: "", heardFrom: "",
  });

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      setStep(1); setErrors({}); setSubmitting(false);
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  useEffect(() => {
    function onKey(e: KeyboardEvent) { if (e.key === "Escape") onClose(); }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [onClose]);

  function set(field: string, value: string) {
    setData(d => ({ ...d, [field]: value }));
    if (errors[field]) setErrors(e => { const n = { ...e }; delete n[field]; return n; });
  }

  function focusStyle(e: React.FocusEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) {
    (e.target as HTMLElement).style.borderColor = "var(--color-primary)";
  }
  function blurStyle(e: React.FocusEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) {
    (e.target as HTMLElement).style.borderColor = "var(--color-border)";
  }

  function validateStep1() {
    const e: Record<string, string> = {};
    if (!data.name.trim())     e.name     = f.required;
    if (!data.email.trim())    e.email    = f.required;
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) e.email = f.invalidEmail;
    if (!data.phone.trim())    e.phone    = f.required;
    if (!data.practice.trim()) e.practice = f.required;
    if (!data.specialty)       e.specialty= f.required;
    if (!data.teamSize)        e.teamSize = f.required;
    return e;
  }

  function validateStep2() {
    const e: Record<string, string> = {};
    if (!data.challenge)        e.challenge       = f.required;
    if (!data.currentSoftware)  e.currentSoftware = f.required;
    return e;
  }

  function handleNext() {
    const e = step === 1 ? validateStep1() : {};
    if (Object.keys(e).length) { setErrors(e); return; }
    setStep(s => (s + 1) as Step);
  }

  async function handleSubmit() {
    const e = validateStep2();
    if (Object.keys(e).length) { setErrors(e); return; }
    setSubmitting(true);

    const body = `
New Shape.Med Demo Request
===========================
Name:       ${data.name}
Email:      ${data.email}
Phone:      ${data.phone}
Practice:   ${data.practice}
Specialty:  ${data.specialty}
Team size:  ${data.teamSize}

Challenge:         ${data.challenge}
Current software:  ${data.currentSoftware}
Heard from:        ${data.heardFrom || "—"}
    `.trim();

    try {
      // Send via mailto as fallback — works without a backend
      const subject = encodeURIComponent(`Shape.Med Demo Request — ${data.name} (${data.practice})`);
      const bodyEnc = encodeURIComponent(body);
      window.location.href = `mailto:shejustfied@gmail.com?subject=${subject}&body=${bodyEnc}`;
    } catch {}

    // Show success after short delay regardless
    setTimeout(() => {
      setSubmitting(false);
      setStep(3);
    }, 800);
  }

  if (!isOpen) return null;

  const stepLabels = [f.step1, f.step2, f.step3];

  return (
    <>
      {/* Backdrop */}
      <div
        aria-hidden="true"
        onClick={onClose}
        style={{
          position: "fixed", inset: 0,
          backgroundColor: "rgba(30,42,64,0.55)",
          backdropFilter: "blur(4px)",
          zIndex: 200,
          animation: "fadeIn 0.2s ease",
        }}
      />

      <style>{`
        .demo-form-modal input::placeholder,
        .demo-form-modal select::placeholder,
        .demo-form-modal textarea::placeholder {
          color: var(--color-text-muted);
          opacity: 1;
        }
        .demo-form-modal select option { color: var(--color-text-heading); }
      `}</style>

      {/* Modal */}
      <div
        role="dialog"
        aria-modal="true"
        aria-label={f.title}
        className="demo-form-modal"
        style={{
          position: "fixed",
          top: "50%", left: "50%",
          transform: "translate(-50%, -50%)",
          zIndex: 201,
          width: "min(560px, calc(100vw - 2rem))",
          maxHeight: "calc(100vh - 3rem)",
          overflowY: "auto",
          backgroundColor: "var(--color-white)",
          borderRadius: "var(--radius-xl)",
          boxShadow: "var(--shadow-lg)",
          border: "1px solid var(--color-border)",
          animation: "fadeUp 0.25s ease",
        }}
      >
        {/* Header */}
        <div style={{
          padding: "1.75rem 2rem 1.25rem",
          borderBottom: step < 3 ? "1px solid var(--color-border)" : "none",
          display: "flex", alignItems: "flex-start", justifyContent: "space-between",
          position: "sticky", top: 0, backgroundColor: "var(--color-white)", zIndex: 1,
        }}>
          <div>
            <div style={{
              fontFamily: "var(--font-display)", fontSize: "var(--text-xl)",
              fontWeight: 700, color: "var(--color-text-heading)",
              letterSpacing: "-0.01em", marginBottom: "0.2rem",
            }}>
              {step < 3 ? f.title : f.successTitle}
            </div>
            {step < 3 && (
              <div style={{ fontFamily: "var(--font-sans)", fontSize: "var(--text-sm)", color: "var(--color-text-muted)" }}>
                {f.subtitle}
              </div>
            )}
          </div>
          <button
            onClick={onClose}
            aria-label="Close"
            style={{
              background: "none", border: "none", cursor: "pointer",
              color: "var(--color-text-muted)", padding: "4px", marginLeft: "1rem",
              borderRadius: "var(--radius-sm)", flexShrink: 0,
              display: "flex", alignItems: "center", justifyContent: "center",
              transition: "color var(--transition-fast)",
            }}
            onMouseEnter={e => (e.currentTarget.style.color = "var(--color-text-heading)")}
            onMouseLeave={e => (e.currentTarget.style.color = "var(--color-text-muted)")}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
            </svg>
          </button>
        </div>

        {/* Body */}
        <div style={{ padding: "1.5rem 2rem 2rem" }}>

          {/* Step indicator */}
          {step < 3 && <StepIndicator current={step} total={3} labels={stepLabels} />}

          <AnimatePresence mode="wait">

            {/* ── STEP 1 ── */}
            {step === 1 && (
              <motion.div key="step1" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.2 }}>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0 1rem" }}>
                  <Field label={f.name} error={errors.name}>
                    <input type="text" value={data.name} onChange={e => set("name", e.target.value)}
                      placeholder={f.namePh} autoComplete="name"
                      style={INPUT_STYLE} onFocus={focusStyle} onBlur={blurStyle} />
                  </Field>
                  <Field label={f.email} error={errors.email}>
                    <input type="email" value={data.email} onChange={e => set("email", e.target.value)}
                      placeholder={f.emailPh} autoComplete="email"
                      style={INPUT_STYLE} onFocus={focusStyle} onBlur={blurStyle} />
                  </Field>
                  <Field label={f.phone} error={errors.phone}>
                    <input type="tel" value={data.phone} onChange={e => set("phone", e.target.value)}
                      placeholder={f.phonePh} autoComplete="tel"
                      style={INPUT_STYLE} onFocus={focusStyle} onBlur={blurStyle} />
                  </Field>
                  <Field label={f.practice} error={errors.practice}>
                    <input type="text" value={data.practice} onChange={e => set("practice", e.target.value)}
                      placeholder={f.practicePh}
                      style={INPUT_STYLE} onFocus={focusStyle} onBlur={blurStyle} />
                  </Field>
                </div>
                <Field label={f.specialty} error={errors.specialty}>
                  <select value={data.specialty} onChange={e => set("specialty", e.target.value)}
                    style={{ ...INPUT_STYLE, cursor: "pointer" }} onFocus={focusStyle} onBlur={blurStyle}>
                    <option value="">{f.specialtyPh}</option>
                    {f.specialties.map((s: string) => <option key={s} value={s}>{s}</option>)}
                  </select>
                </Field>
                <Field label={f.teamSize} error={errors.teamSize}>
                  <div style={{ display: "flex", gap: "0.625rem", flexWrap: "wrap" }}>
                    {f.teamSizes.map((s: string) => (
                      <button key={s} type="button" onClick={() => set("teamSize", s)}
                        style={{
                          fontFamily: "var(--font-sans)", fontSize: "var(--text-sm)", fontWeight: 500,
                          padding: "0.5rem 1.25rem", borderRadius: "var(--radius-full)",
                          border: `1.5px solid ${data.teamSize === s ? "var(--color-primary)" : "var(--color-border)"}`,
                          backgroundColor: data.teamSize === s ? "var(--color-primary)" : "var(--color-white)",
                          color: data.teamSize === s ? "var(--color-white)" : "var(--color-text-body)",
                          cursor: "pointer", transition: "all 150ms ease",
                        }}>
                        {s}
                      </button>
                    ))}
                  </div>
                  {errors.teamSize && <p style={{ fontFamily: "var(--font-sans)", fontSize: "var(--text-xs)", color: "var(--color-primary)", marginTop: "0.25rem" }}>{errors.teamSize}</p>}
                </Field>
              </motion.div>
            )}

            {/* ── STEP 2 ── */}
            {step === 2 && (
              <motion.div key="step2" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.2 }}>
                <Field label={f.challenge} error={errors.challenge}>
                  <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                    {f.challengeOpts.map((opt: string) => (
                      <button key={opt} type="button" onClick={() => set("challenge", opt)}
                        style={{
                          fontFamily: "var(--font-sans)", fontSize: "var(--text-sm)", fontWeight: 400,
                          padding: "0.7rem 1rem", borderRadius: "var(--radius-md)", textAlign: "left",
                          border: `1.5px solid ${data.challenge === opt ? "var(--color-primary)" : "var(--color-border)"}`,
                          backgroundColor: data.challenge === opt ? "var(--color-primary)" : "var(--color-white)",
                          color: data.challenge === opt ? "var(--color-white)" : "var(--color-text-body)",
                          cursor: "pointer", transition: "all 150ms ease",
                        }}>
                        {opt}
                      </button>
                    ))}
                  </div>
                  {errors.challenge && <p style={{ fontFamily: "var(--font-sans)", fontSize: "var(--text-xs)", color: "var(--color-primary)", marginTop: "0.25rem" }}>{errors.challenge}</p>}
                </Field>

                <Field label={f.currentSoftware} error={errors.currentSoftware}>
                  <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                    {f.softwareOpts.map((opt: string) => (
                      <button key={opt} type="button" onClick={() => set("currentSoftware", opt)}
                        style={{
                          fontFamily: "var(--font-sans)", fontSize: "var(--text-sm)", fontWeight: 400,
                          padding: "0.7rem 1rem", borderRadius: "var(--radius-md)", textAlign: "left",
                          border: `1.5px solid ${data.currentSoftware === opt ? "var(--color-primary)" : "var(--color-border)"}`,
                          backgroundColor: data.currentSoftware === opt ? "var(--color-primary)" : "var(--color-white)",
                          color: data.currentSoftware === opt ? "var(--color-white)" : "var(--color-text-body)",
                          cursor: "pointer", transition: "all 150ms ease",
                        }}>
                        {opt}
                      </button>
                    ))}
                  </div>
                  {errors.currentSoftware && <p style={{ fontFamily: "var(--font-sans)", fontSize: "var(--text-xs)", color: "var(--color-primary)", marginTop: "0.25rem" }}>{errors.currentSoftware}</p>}
                </Field>

                <Field label={f.heardFrom}>
                  <input type="text" value={data.heardFrom} onChange={e => set("heardFrom", e.target.value)}
                    placeholder={f.heardFromPh}
                    style={INPUT_STYLE} onFocus={focusStyle} onBlur={blurStyle} />
                </Field>
              </motion.div>
            )}

            {/* ── STEP 3 — SUCCESS ── */}
            {step === 3 && (
              <motion.div key="step3" initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.3 }}
                style={{ textAlign: "center", padding: "2rem 0 1rem" }}>
                <div style={{
                  width: "72px", height: "72px", borderRadius: "50%",
                  backgroundColor: "var(--color-primary-tint)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  margin: "0 auto 1.5rem",
                }}>
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                </div>
                <h3 style={{ fontFamily: "var(--font-display)", fontSize: "var(--text-2xl)", fontWeight: 700, color: "var(--color-text-heading)", letterSpacing: "-0.02em", marginBottom: "0.875rem" }}>
                  {f.successTitle}
                </h3>
                <p style={{ fontFamily: "var(--font-sans)", fontSize: "var(--text-base)", color: "var(--color-text-body)", lineHeight: 1.75, marginBottom: "0.5rem", maxWidth: "38ch", margin: "0 auto 0.5rem" }}>
                  {f.successMsg}
                </p>
                <p style={{ fontFamily: "var(--font-sans)", fontSize: "var(--text-sm)", color: "var(--color-text-muted)", marginBottom: "2rem" }}>
                  {f.successSub}
                </p>
                <button onClick={onClose} className="btn btn-primary">
                  {f.close}
                </button>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Navigation buttons */}
          {step < 3 && (
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "1.5rem", paddingTop: "1.25rem", borderTop: "1px solid var(--color-border)" }}>
              {step > 1 ? (
                <button onClick={() => setStep(s => (s - 1) as Step)} className="btn btn-ghost btn-sm">
                  ← {f.back}
                </button>
              ) : <div />}

              {step < 2 ? (
                <button onClick={handleNext} className="btn btn-primary">
                  {f.next} →
                </button>
              ) : (
                <button onClick={handleSubmit} disabled={submitting} className="btn btn-primary"
                  style={{ opacity: submitting ? 0.7 : 1 }}>
                  {submitting ? f.submitting : f.submit}
                </button>
              )}
            </div>
          )}
        </div>
      </div>
    </>
  );
}
