// ─────────────────────────────────────────────────────────────
// Design Tokens — MedicalOS
// Palette: SHAPE Consulting — Black, White, Orange, Sky Blue
// ─────────────────────────────────────────────────────────────

export const colors = {
  primary: {
    DEFAULT: "#E8611A",   // SHAPE orange — nav active, headings highlight
    light:   "#F07840",
    dark:    "#C44E0F",
    tint:    "#FDF0E8",
  },
  accent: {
    DEFAULT: "#6BBDD4",   // SHAPE sky blue — section backgrounds, highlights
    light:   "#7DCFE6",
    dark:    "#4A9DB8",
    tint:    "#EAF6FA",
  },
  bg: {
    DEFAULT: "#FFFFFF",
    alt:     "#F5F7F8",
    dark:    "#1A1A1A",
  },
  text: {
    heading: "#1A1A1A",
    body:    "#3D3D3D",
    muted:   "#7A7A7A",
    inverse: "#FFFFFF",
  },
  border: {
    DEFAULT: "#E5E5E5",
    strong:  "#CCCCCC",
  },
  success: {
    DEFAULT: "#4A9DB8",
    tint:    "#EAF6FA",
  },
  white: "#FFFFFF",
  black: "#1A1A1A",
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
