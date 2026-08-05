import { ReactNode, CSSProperties } from "react";

interface TypographyProps {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
  id?: string;
}

// ── Eyebrow label — appears above headings ─────────────────
export function Eyebrow({ children, className = "", style }: TypographyProps) {
  return (
    <span className={`eyebrow ${className}`} style={style}>
      {children}
    </span>
  );
}

// ── Display heading — hero H1 ──────────────────────────────
export function DisplayHeading({ children, className = "", style, id }: TypographyProps) {
  return (
    <h1
      id={id}
      className={className}
      style={{
        fontFamily: "var(--font-display)",
        fontSize: "clamp(var(--text-4xl), 5vw, var(--text-6xl))",
        fontWeight: 700,
        lineHeight: 1.15,
        letterSpacing: "-0.02em",
        color: "var(--color-text-heading)",
        ...style,
      }}
    >
      {children}
    </h1>
  );
}

// ── Section heading — H2 ───────────────────────────────────
export function Heading({ children, className = "", style, id }: TypographyProps) {
  return (
    <h2
      id={id}
      className={className}
      style={{
        fontFamily: "var(--font-display)",
        fontSize: "clamp(var(--text-3xl), 4vw, var(--text-5xl))",
        fontWeight: 700,
        lineHeight: 1.2,
        letterSpacing: "-0.02em",
        color: "var(--color-text-heading)",
        ...style,
      }}
    >
      {children}
    </h2>
  );
}

// ── Sub-heading — H3 ───────────────────────────────────────
export function SubHeading({ children, className = "", style, id }: TypographyProps) {
  return (
    <h3
      id={id}
      className={className}
      style={{
        fontFamily: "var(--font-display)",
        fontSize: "clamp(var(--text-2xl), 3vw, var(--text-3xl))",
        fontWeight: 700,
        lineHeight: 1.25,
        letterSpacing: "-0.01em",
        color: "var(--color-text-heading)",
        ...style,
      }}
    >
      {children}
    </h3>
  );
}

// ── Card heading — H4 ──────────────────────────────────────
export function CardHeading({ children, className = "", style }: TypographyProps) {
  return (
    <h4
      className={className}
      style={{
        fontFamily: "var(--font-display)",
        fontSize: "var(--text-xl)",
        fontWeight: 600,
        lineHeight: 1.3,
        color: "var(--color-text-heading)",
        ...style,
      }}
    >
      {children}
    </h4>
  );
}

// ── Lead paragraph — large intro text ─────────────────────
export function Lead({ children, className = "", style }: TypographyProps) {
  return (
    <p
      className={className}
      style={{
        fontFamily: "var(--font-sans)",
        fontSize: "clamp(var(--text-base), 2vw, var(--text-lg))",
        lineHeight: 1.75,
        color: "var(--color-text-body)",
        ...style,
      }}
    >
      {children}
    </p>
  );
}

// ── Body text ─────────────────────────────────────────────
export function Body({ children, className = "", style }: TypographyProps) {
  return (
    <p
      className={className}
      style={{
        fontFamily: "var(--font-sans)",
        fontSize: "var(--text-base)",
        lineHeight: 1.75,
        color: "var(--color-text-body)",
        ...style,
      }}
    >
      {children}
    </p>
  );
}

// ── Small / caption text ───────────────────────────────────
export function Caption({ children, className = "", style }: TypographyProps) {
  return (
    <p
      className={className}
      style={{
        fontFamily: "var(--font-sans)",
        fontSize: "var(--text-sm)",
        lineHeight: 1.6,
        color: "var(--color-text-muted)",
        ...style,
      }}
    >
      {children}
    </p>
  );
}

// ── Inverse variants (for dark backgrounds) ───────────────
export function HeadingInverse(props: TypographyProps) {
  return (
    <Heading
      {...props}
      style={{ color: "var(--color-text-inverse)", ...props.style }}
    />
  );
}

export function LeadInverse(props: TypographyProps) {
  return (
    <Lead
      {...props}
      style={{ color: "rgba(245,240,232,0.8)", ...props.style }}
    />
  );
}
