"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { motion } from "framer-motion";
import { testimonials, featuredTestimonials } from "@/lib/testimonials";
import { TestimonialCard } from "@/components/ui/TestimonialCard";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";

const CARD_WIDTH  = 360;
const GAP         = 16;
const UNIT        = CARD_WIDTH + GAP;
const AUTO_DELAY  = 4000; // ms between auto-advances

export function Testimonials() {
  const [current, setCurrent]   = useState(0);
  const [paused,  setPaused]    = useState(false);
  const trackRef                = useRef<HTMLDivElement>(null);
  const timerRef                = useRef<ReturnType<typeof setTimeout> | null>(null);
  const total                   = testimonials.length;

  const goTo = useCallback((index: number) => {
    const clamped = Math.max(0, Math.min(index, total - 1));
    setCurrent(clamped);
    if (trackRef.current) {
      trackRef.current.scrollTo({
        left: clamped * UNIT,
        behavior: "smooth",
      });
    }
  }, [total]);

  const next = useCallback(() => goTo(current === total - 1 ? 0 : current + 1), [current, goTo, total]);
  const prev = useCallback(() => goTo(current === 0 ? total - 1 : current - 1), [current, goTo, total]);

  // Auto-advance
  useEffect(() => {
    if (paused) return;
    timerRef.current = setTimeout(next, AUTO_DELAY);
    return () => { if (timerRef.current) clearTimeout(timerRef.current); };
  }, [current, paused, next]);

  return (
    <Section id="testimonials" variant="default">
      <Container>
        <SectionHeader
          eyebrow="What doctors say"
          heading="Loved by healthcare professionals"
          lead="Don't take our word for it. Here's what doctors, specialists, and practice managers say about working with MedicalOS every day."
        />
      </Container>

      {/* ── Carousel ─────────────────────────────────────── */}
      <div
        style={{ position: "relative" }}
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        {/* Left arrow */}
        <button
          onClick={prev}
          aria-label="Previous testimonial"
          style={{
            position: "absolute",
            left: "1rem",
            top: "50%",
            transform: "translateY(-50%)",
            zIndex: 10,
            width: "40px",
            height: "40px",
            borderRadius: "50%",
            border: "1px solid var(--color-border)",
            backgroundColor: "var(--color-white)",
            boxShadow: "var(--shadow)",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "var(--color-text-heading)",
            transition: "border-color var(--transition-fast), box-shadow var(--transition-fast)",
          }}
          onMouseEnter={(e) => {
            const el = e.currentTarget as HTMLButtonElement;
            el.style.borderColor = "var(--color-primary)";
            el.style.boxShadow = "var(--shadow-md)";
          }}
          onMouseLeave={(e) => {
            const el = e.currentTarget as HTMLButtonElement;
            el.style.borderColor = "var(--color-border)";
            el.style.boxShadow = "var(--shadow)";
          }}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <polyline points="15 18 9 12 15 6"/>
          </svg>
        </button>

        {/* Right arrow */}
        <button
          onClick={next}
          aria-label="Next testimonial"
          style={{
            position: "absolute",
            right: "1rem",
            top: "50%",
            transform: "translateY(-50%)",
            zIndex: 10,
            width: "40px",
            height: "40px",
            borderRadius: "50%",
            border: "1px solid var(--color-border)",
            backgroundColor: "var(--color-white)",
            boxShadow: "var(--shadow)",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "var(--color-text-heading)",
            transition: "border-color var(--transition-fast), box-shadow var(--transition-fast)",
          }}
          onMouseEnter={(e) => {
            const el = e.currentTarget as HTMLButtonElement;
            el.style.borderColor = "var(--color-primary)";
            el.style.boxShadow = "var(--shadow-md)";
          }}
          onMouseLeave={(e) => {
            const el = e.currentTarget as HTMLButtonElement;
            el.style.borderColor = "var(--color-border)";
            el.style.boxShadow = "var(--shadow)";
          }}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <polyline points="9 18 15 12 9 6"/>
          </svg>
        </button>

        {/* Fade masks */}
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            inset: 0,
            zIndex: 5,
            pointerEvents: "none",
            background: "linear-gradient(to right, var(--color-bg) 0%, transparent 8%, transparent 92%, var(--color-bg) 100%)",
          }}
        />

        {/* Scrollable track */}
        <div
          ref={trackRef}
          style={{
            display: "flex",
            gap: `${GAP}px`,
            overflowX: "auto",
            scrollSnapType: "x mandatory",
            scrollbarWidth: "none",
            msOverflowStyle: "none",
            paddingInline: `calc((100% - ${CARD_WIDTH}px) / 2)`,
            paddingBlock: "1rem",
          }}
        >
          {testimonials.map((t, i) => (
            <div
              key={t.id}
              onClick={() => goTo(i)}
              style={{
                width: `${CARD_WIDTH}px`,
                flexShrink: 0,
                scrollSnapAlign: "center",
                opacity: i === current ? 1 : 0.55,
                transform: i === current ? "scale(1)" : "scale(0.97)",
                transition: "opacity var(--transition), transform var(--transition)",
                cursor: i === current ? "default" : "pointer",
              }}
            >
              <TestimonialCard testimonial={t} />
            </div>
          ))}
        </div>

        {/* Hide scrollbar */}
        <style>{`
          div::-webkit-scrollbar { display: none; }
        `}</style>
      </div>

      {/* Dot indicators */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "0.5rem",
          marginTop: "1.5rem",
        }}
        role="tablist"
        aria-label="Testimonial navigation"
      >
        {testimonials.map((_, i) => (
          <button
            key={i}
            role="tab"
            aria-selected={i === current}
            aria-label={`Go to testimonial ${i + 1}`}
            onClick={() => goTo(i)}
            style={{
              width: i === current ? "24px" : "8px",
              height: "8px",
              borderRadius: "var(--radius-full)",
              backgroundColor: i === current ? "var(--color-primary)" : "var(--color-border)",
              border: "none",
              cursor: "pointer",
              padding: 0,
              transition: "width var(--transition), background-color var(--transition)",
            }}
          />
        ))}
      </div>

      {/* ── Featured quotes ───────────────────────────────── */}
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "1.25rem",
            marginTop: "4rem",
            paddingTop: "3rem",
            borderTop: "1px solid var(--color-border)",
          }}
          className="featured-quotes"
        >
          {featuredTestimonials.map((t, i) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, ease: "easeOut", delay: i * 0.1 }}
            >
              <TestimonialCard testimonial={t} featured />
            </motion.div>
          ))}
        </motion.div>
      </Container>

      <style>{`
        @media (max-width: 900px) {
          .featured-quotes {
            grid-template-columns: 1fr !important;
          }
        }
        @media (min-width: 640px) and (max-width: 900px) {
          .featured-quotes {
            grid-template-columns: repeat(2, 1fr) !important;
          }
          .featured-quotes > div:last-child {
            grid-column: 1 / -1;
          }
        }
      `}</style>
    </Section>
  );
}
