// ─────────────────────────────────────────────────────────────
// Design Tokens — MedicalOS
// Single source of truth for all brand values.
// CSS variables are the runtime values; these are for use in
// TypeScript logic (e.g. chart colors, canvas drawing).
// ─────────────────────────────────────────────────────────────

export const colors = {
  primary: {
    DEFAULT: "#C2704A",
    light:   "#D98B68",
    dark:    "#A55A37",
    tint:    "#FDF0E8",
  },
  secondary: {
    DEFAULT: "#2D5F5D",
    light:   "#3D7A78",
    dark:    "#1E4341",
    tint:    "#EAF2F2",
  },
  bg: {
    DEFAULT: "#F5F0E8",
    alt:     "#EDE8DF",
    dark:    "#1E4341",
  },
  text: {
    heading: "#1C1917",
    body:    "#57534E",
    muted:   "#9E8F7E",
    inverse: "#F5F0E8",
  },
  border: {
    DEFAULT: "#E8E2D8",
    strong:  "#D4CCBf",
  },
  success: {
    DEFAULT: "#3A7D5E",
    tint:    "#EAF4EE",
  },
  white: "#FFFFFF",
  black: "#0C0A09",
} as const;

export const fonts = {
  display: "'Lora', Georgia, serif",
  sans:    "'Inter', system-ui, -apple-system, sans-serif",
} as const;

export const spacing = {
  sectionY:   "6rem",
  sectionYSm: "4rem",
  sectionYLg: "8rem",
  containerMax: "1280px",
} as const;

export const transitions = {
  fast:   "150ms ease",
  base:   "250ms ease",
  slow:   "400ms ease",
  spring: "350ms cubic-bezier(0.175, 0.885, 0.32, 1.275)",
} as const;

// ── Framer Motion variants (reused across sections) ──────────
export const fadeUpVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] },
  },
} as const;

export const fadeInVariant = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.4, ease: "easeOut" },
  },
} as const;

export const staggerContainerVariant = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
} as const;
