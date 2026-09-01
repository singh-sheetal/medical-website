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
          DEFAULT: "#F25E1B",
          light:   "#F9795A",
          dark:    "#D44E0E",
          tint:    "#FEF0E8",
        },
        accent: {
          DEFAULT: "#7CCBE3",
          light:   "#CBDCE9",
          dark:    "#4AADC8",
          tint:    "#EAF6FA",
        },
        brand: {
          bg:            "#FFFFFF",
          "bg-alt":      "#F5F7F8",
          "bg-dark":     "#1A1A1A",
          border:        "#E5E5E5",
          "border-strong": "#CCCCCC",
          heading:       "#222222",
          body:          "#444444",
          muted:         "#7A7A7A",
          inverse:       "#FFFFFF",
        },
      },
      fontFamily: {
        sans:    ["Plus Jakarta Sans", "system-ui", "-apple-system", "sans-serif"],
        display: ["Plus Jakarta Sans", "Georgia", "serif"],
      },
      boxShadow: {
        sm:  "0 1px 3px rgba(26,26,26,0.06), 0 1px 2px rgba(26,26,26,0.04)",
        DEFAULT: "0 4px 12px rgba(26,26,26,0.08), 0 2px 4px rgba(26,26,26,0.04)",
        md:  "0 8px 24px rgba(26,26,26,0.10), 0 4px 8px rgba(26,26,26,0.05)",
        lg:  "0 16px 48px rgba(26,26,26,0.12), 0 8px 16px rgba(26,26,26,0.06)",
      },
      animation: {
        marquee:   "marquee 30s linear infinite",
        "fade-up": "fadeUp 0.5s ease forwards",
        "fade-in": "fadeIn 0.4s ease forwards",
      },
    },
  },
  plugins: [],
};

export default config;
