"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ReactNode } from "react";
import { fadeUpVariant, fadeInVariant, staggerContainerVariant } from "@/lib/tokens";

interface AnimateInProps {
  children: ReactNode;
  variant?: "fadeUp" | "fadeIn";
  delay?: number;
  className?: string;
  style?: React.CSSProperties;
}

// Single element fade-in on scroll
export function AnimateIn({
  children,
  variant = "fadeUp",
  delay = 0,
  className,
  style,
}: AnimateInProps) {
  const prefersReduced = useReducedMotion();
  const baseVariant = variant === "fadeUp" ? fadeUpVariant : fadeInVariant;

  const safeVariant = prefersReduced
    ? { hidden: {}, visible: {} }
    : {
        hidden: baseVariant.hidden,
        visible: {
          ...baseVariant.visible,
          transition: {
            ...(baseVariant.visible as { transition?: object }).transition,
            delay,
          },
        },
      };

  return (
    <motion.div
      className={className}
      style={style}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={safeVariant}
    >
      {children}
    </motion.div>
  );
}

// Stagger container — children animate in sequence
interface StaggerProps {
  children: ReactNode;
  className?: string;
  style?: React.CSSProperties;
  delayChildren?: number;
  staggerChildren?: number;
}

export function StaggerChildren({
  children,
  className,
  style,
  delayChildren = 0.1,
  staggerChildren = 0.1,
}: StaggerProps) {
  const prefersReduced = useReducedMotion();

  return (
    <motion.div
      className={className}
      style={style}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={
        prefersReduced
          ? { hidden: {}, visible: {} }
          : {
              ...staggerContainerVariant,
              visible: {
                transition: { staggerChildren, delayChildren },
              },
            }
      }
    >
      {children}
    </motion.div>
  );
}

// Child item used inside StaggerChildren
export function StaggerItem({
  children,
  className,
  style,
}: {
  children: ReactNode;
  className?: string;
  style?: React.CSSProperties;
}) {
  const prefersReduced = useReducedMotion();

  return (
    <motion.div
      className={className}
      style={style}
      variants={prefersReduced ? { hidden: {}, visible: {} } : fadeUpVariant}
    >
      {children}
    </motion.div>
  );
}
