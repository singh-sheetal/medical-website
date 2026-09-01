"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useI18n } from "@/lib/i18n/context";
import { Container } from "@/components/ui/Container";

export function FAQ() {
  const { t } = useI18n();
  const f = t.faq;
  const [open, setOpen] = useState<Set<number>>(new Set());

  function toggle(i: number) {
    setOpen(prev => {
      const next = new Set(prev);
      next.has(i) ? next.delete(i) : next.add(i);
      return next;
    });
  }

  return (
    <section id="faq" style={{ paddingBlock: "var(--section-padding-y)", backgroundColor: "var(--color-bg)" }}>
      <Container>
        <div style={{ marginBottom: "3rem" }}>
          <span style={{ display: "block", fontFamily: "var(--font-sans)", fontSize: "var(--text-xs)", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--color-text-muted)", marginBottom: "0.75rem" }}>
            {f.eyebrow}
          </span>
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.75rem, 3vw, 2.5rem)", fontWeight: 700, letterSpacing: "-0.02em", color: "var(--color-text-heading)" }}>
            {f.heading}
          </h2>
        </div>

        <div style={{ maxWidth: "780px" }}>
          {f.items.map((item, i) => {
            const isOpen = open.has(i);
            return (
              <div key={i} style={{ borderBottom: "1px solid var(--color-border)" }}>
                <button
                  onClick={() => toggle(i)}
                  aria-expanded={isOpen}
                  style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "1.5rem", padding: "1.25rem 0", background: "none", border: "none", cursor: "pointer", textAlign: "left" }}
                >
                  <span style={{ fontFamily: "var(--font-sans)", fontSize: "var(--text-base)", fontWeight: 600, color: isOpen ? "var(--color-primary)" : "var(--color-text-heading)", lineHeight: 1.5, transition: "color var(--transition-fast)", flex: 1 }}>
                    {item.q}
                  </span>
                  <div style={{ width: "28px", height: "28px", borderRadius: "50%", border: `1.5px solid ${isOpen ? "var(--color-primary)" : "var(--color-border)"}`, backgroundColor: isOpen ? "var(--color-primary)" : "transparent", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, transition: "all var(--transition-fast)" }}>
                    <motion.div animate={{ rotate: isOpen ? 45 : 0 }} transition={{ duration: 0.2 }}>
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke={isOpen ? "white" : "var(--color-text-muted)"} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/>
                      </svg>
                    </motion.div>
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div key="answer" initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.25, ease: "easeInOut" }} style={{ overflow: "hidden" }}>
                      <p style={{ fontFamily: "var(--font-sans)", fontSize: "var(--text-base)", color: "var(--color-text-body)", lineHeight: 1.75, paddingBottom: "1.25rem", maxWidth: "66ch", margin: 0 }}>
                        {item.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
