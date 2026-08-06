"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FAQItem } from "@/types";

interface AccordionItemProps {
  item: FAQItem;
  index: number;
}

export function AccordionItem({ item, index }: AccordionItemProps) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.35, ease: "easeOut", delay: (index % 8) * 0.04 }}
      style={{
        borderBottom: "1px solid var(--color-border)",
      }}
    >
      <button
        aria-expanded={open}
        onClick={() => setOpen(!open)}
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "1rem",
          padding: "1.25rem 0",
          background: "none",
          border: "none",
          cursor: "pointer",
          textAlign: "left",
        }}
      >
        <span
          style={{
            fontFamily: "var(--font-sans)",
            fontSize: "var(--text-base)",
            fontWeight: 500,
            color: open ? "var(--color-primary)" : "var(--color-text-heading)",
            lineHeight: 1.5,
            transition: "color var(--transition-fast)",
            flex: 1,
          }}
        >
          {item.question}
        </span>

        {/* Icon */}
        <motion.div
          animate={{ rotate: open ? 45 : 0 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          style={{
            width: "28px",
            height: "28px",
            borderRadius: "50%",
            backgroundColor: open ? "var(--color-primary)" : "var(--color-bg-alt)",
            border: `1px solid ${open ? "var(--color-primary)" : "var(--color-border)"}`,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
            color: open ? "#fff" : "var(--color-text-muted)",
            transition: "background-color var(--transition-fast), border-color var(--transition-fast), color var(--transition-fast)",
          }}
          aria-hidden="true"
        >
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="12" y1="5" x2="12" y2="19" />
            <line x1="5" y1="12" x2="19" y2="12" />
          </svg>
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="answer"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            style={{ overflow: "hidden" }}
          >
            <p
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "var(--text-base)",
                color: "var(--color-text-body)",
                lineHeight: 1.75,
                paddingBottom: "1.25rem",
                margin: 0,
                maxWidth: "72ch",
              }}
            >
              {item.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
