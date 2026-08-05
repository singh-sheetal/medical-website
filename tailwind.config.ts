import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
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
        brand: {
          bg:            "#FDF8F5",
          "bg-alt":      "#FAF0EA",
          "bg-dark":     "#1A2040",
          border:        "#E0D8D0",
          "border-strong": "#C8C0B8",
          heading:       "#1A2040",
          body:          "#4A5270",
          muted:         "#7A84A8",
          inverse:       "#FDF8F5",
          success:       "#2E7D5E",
        },
      },
      fontFamily: {
        sans:    ["Inter", "system-ui", "-apple-system", "sans-serif"],
        display: ["Lora", "Georgia", "serif"],
      },
      fontSize: {
        "2xs": ["0.625rem", { lineHeight: "1rem" }],
        xs:    ["0.75rem",  { lineHeight: "1.125rem" }],
        sm:    ["0.875rem", { lineHeight: "1.375rem" }],
        base:  ["1rem",     { lineHeight: "1.75rem" }],
        lg:    ["1.125rem", { lineHeight: "1.75rem" }],
        xl:    ["1.25rem",  { lineHeight: "1.875rem" }],
        "2xl": ["1.5rem",   { lineHeight: "2rem" }],
        "3xl": ["1.875rem", { lineHeight: "2.375rem" }],
        "4xl": ["2.25rem",  { lineHeight: "2.75rem" }],
        "5xl": ["3rem",     { lineHeight: "3.5rem" }],
        "6xl": ["3.75rem",  { lineHeight: "4.25rem" }],
        "7xl": ["4.5rem",   { lineHeight: "5rem" }],
      },
      spacing: {
        section:      "6rem",
        "section-sm": "4rem",
        "section-lg": "8rem",
      },
      borderRadius: {
        sm:    "0.375rem",
        DEFAULT: "0.625rem",
        md:    "0.875rem",
        lg:    "1.25rem",
        xl:    "1.75rem",
        "2xl": "2.25rem",
      },
      maxWidth: {
        container: "1280px",
        prose:     "68ch",
      },
      boxShadow: {
        sm:  "0 1px 3px rgba(26,32,64,0.06), 0 1px 2px rgba(26,32,64,0.04)",
        DEFAULT: "0 4px 12px rgba(26,32,64,0.08), 0 2px 4px rgba(26,32,64,0.04)",
        md:  "0 8px 24px rgba(26,32,64,0.10), 0 4px 8px rgba(26,32,64,0.05)",
        lg:  "0 16px 48px rgba(26,32,64,0.12), 0 8px 16px rgba(26,32,64,0.06)",
      },
      animation: {
        marquee:   "marquee 30s linear infinite",
        "fade-up": "fadeUp 0.5s ease forwards",
        "fade-in": "fadeIn 0.4s ease forwards",
      },
      keyframes: {
        marquee: {
          "0%":   { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        fadeUp: {
          "0%":   { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%":   { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      transitionTimingFunction: {
        spring: "cubic-bezier(0.175, 0.885, 0.32, 1.275)",
      },
    },
  },
  plugins: [],
};

export default config;
