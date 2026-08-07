// ─────────────────────────────────────────────────────────────
// Design Tokens — MedicalOS
// Palette: Slate Blue & Soft Peach
// ─────────────────────────────────────────────────────────────

export const colors = {
  primary: {
    DEFAULT: "#3D5A9E",
    light:   "#5A78BC",
    dark:    "#2C4280",
    tint:    "#EEF1FA",
  },
  accent: {
    DEFAULT: "#E8916A",
    light:   "#F0AA8A",
    dark:    "#C97448",
    tint:    "#FDF3EE",
  },
  bg: {
    DEFAULT: "#FDF8F5",
    alt:     "#FAF0EA",
    dark:    "#1A2040",
  },
  text: {
    heading: "#1A2040",
    body:    "#4A5270",
    muted:   "#7A84A8",
    inverse: "#FDF8F5",
  },
  border: {
    DEFAULT: "#E0D8D0",
    strong:  "#C8C0B8",
  },
  success: {
    DEFAULT: "#2E7D5E",
    tint:    "#EAF4EE",
  },
  white: "#FFFFFF",
  black: "#0D1020",
} as const;

export const fonts = {
  display: "'Playfair Display', Georgia, serif",
  sans:    "'Inter', system-ui, -apple-system, sans-serif",
} as const;

export const spacing = {
  sectionY:     "6rem",
  sectionYSm:   "4rem",
  sectionYLg:   "8rem",
  containerMax: "1280px",
} as const;

export const transitions = {
  fast:   "150ms ease",
  base:   "250ms ease",
  slow:   "400ms ease",
  spring: "350ms cubic-bezier(0.175, 0.885, 0.32, 1.275)",
} as const;

// ── Framer Motion variants ───────────────────────────────────
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
