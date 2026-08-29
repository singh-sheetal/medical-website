// ─────────────────────────────────────────────────────────────
// Design Tokens — MedicalOS
// Palette: SHAPE Consulting — Black, White, Orange, Sky Blue
// ─────────────────────────────────────────────────────────────

export const colors = {
  primary: {
    DEFAULT: "#3B82F6",   // Blue — primary colour
    light:   "#60A5FA",
    dark:    "#1D4ED8",
    tint:    "#EFF6FF",
  },
  accent: {
    DEFAULT: "#7CCBE3",   // SHAPE sky blue — section backgrounds, highlights
    light:   "#CBDCE9",
    dark:    "#4AADC8",
    tint:    "#EAF6FA",
  },
  bg: {
    DEFAULT: "#FFFFFF",
    alt:     "#F5F7F8",
    dark:    "#1A1A1A",
  },
  text: {
    heading: "#222222",
    body:    "#444444",
    muted:   "#7A7A7A",
    inverse: "#FFFFFF",
  },
  border: {
    DEFAULT: "#E5E5E5",
    strong:  "#CCCCCC",
  },
  white: "#FFFFFF",
  black: "#222222",
} as const;

export const fonts = {
  display: "'Playfair Display', Georgia, serif",
  sans:    "'Inter', system-ui, -apple-system, sans-serif",
} as const;

export const transitions = {
  fast:   "150ms ease",
  base:   "250ms ease",
  slow:   "400ms ease",
  spring: "350ms cubic-bezier(0.175, 0.885, 0.32, 1.275)",
} as const;

// ── Framer Motion variants ────────────────────────────────────
export const fadeUpVariant = {
  hidden:  { opacity: 0, y: 20 },
  visible: {
    opacity: 1, y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] },
  },
} as const;

export const fadeInVariant = {
  hidden:  { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.4, ease: "easeOut" },
  },
} as const;

export const staggerContainerVariant = {
  hidden:  {},
  visible: {
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
} as const;
