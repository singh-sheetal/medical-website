import { Testimonial } from "@/types";

interface TestimonialCardProps {
  testimonial: Testimonial;
  featured?: boolean;
}

function Avatar({ name }: { name: string }) {
  const initials = name
    .split(" ")
    .filter((_, i) => i === 0 || i === name.split(" ").length - 1)
    .map((n) => n[0])
    .join("");

  // Generate a consistent colour from the name
  const colours = [
    "var(--color-primary)",
    "var(--color-accent)",
    "var(--color-accent)",
    "#7C5CBF",
    "var(--color-accent-dark)",
    "#9E5C2E",
  ];
  const colour = colours[name.charCodeAt(0) % colours.length];

  return (
    <div
      aria-hidden="true"
      style={{
        width: "44px",
        height: "44px",
        borderRadius: "50%",
        backgroundColor: colour,
        color: "#fff",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "var(--text-sm)",
        fontWeight: 700,
        fontFamily: "var(--font-sans)",
        flexShrink: 0,
        letterSpacing: "0.02em",
      }}
    >
      {initials}
    </div>
  );
}

export function TestimonialCard({ testimonial, featured = false }: TestimonialCardProps) {
  return (
    <div
      style={{
        backgroundColor: "var(--color-white)",
        border: "1px solid var(--color-border)",
        borderRadius: "var(--radius-xl)",
        padding: featured ? "2rem" : "1.5rem",
        display: "flex",
        flexDirection: "column",
        gap: "1.25rem",
        height: "100%",
        boxShadow: "var(--shadow-sm)",
        flexShrink: 0,
      }}
    >
      {/* Stars */}
      <div style={{ display: "flex", gap: "3px" }} aria-label="5 stars">
        {Array.from({ length: 5 }).map((_, i) => (
          <svg
            key={i}
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="var(--color-accent)"
            aria-hidden="true"
          >
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
          </svg>
        ))}
      </div>

      {/* Quote */}
      <blockquote
        style={{
          fontFamily: featured ? "var(--font-display)" : "var(--font-sans)",
          fontSize: featured ? "var(--text-lg)" : "var(--text-sm)",
          fontStyle: featured ? "italic" : "normal",
          color: "var(--color-text-heading)",
          lineHeight: 1.7,
          margin: 0,
          flex: 1,
        }}
      >
        &ldquo;{testimonial.quote}&rdquo;
      </blockquote>

      {/* Author */}
      <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
        <Avatar name={testimonial.name} />
        <div>
          <div
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: "var(--text-sm)",
              fontWeight: 600,
              color: "var(--color-text-heading)",
              lineHeight: 1.3,
            }}
          >
            {testimonial.name}
          </div>
          <div
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: "var(--text-xs)",
              color: "var(--color-text-muted)",
              marginTop: "1px",
            }}
          >
            {testimonial.title} · {testimonial.company}
          </div>
        </div>
      </div>
    </div>
  );
}
