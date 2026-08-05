import { ReactNode, CSSProperties } from "react";

interface CardProps {
  children: ReactNode;
  hover?: boolean;
  padding?: "sm" | "md" | "lg";
  className?: string;
  style?: CSSProperties;
  onClick?: () => void;
}

const paddingMap = {
  sm: "1rem",
  md: "1.5rem",
  lg: "2rem",
};

export function Card({
  children,
  hover = true,
  padding = "md",
  className = "",
  style,
  onClick,
}: CardProps) {
  return (
    <div
      className={`card ${!hover ? "no-hover" : ""} ${className}`}
      style={{
        padding: paddingMap[padding],
        cursor: onClick ? "pointer" : undefined,
        ...style,
      }}
      onClick={onClick}
    >
      {children}
    </div>
  );
}

// ── Icon Card — card with a top icon, heading, and body ───
interface IconCardProps {
  icon: ReactNode;
  heading: string;
  body: string;
  className?: string;
}

export function IconCard({ icon, heading, body, className = "" }: IconCardProps) {
  return (
    <Card className={className}>
      <div
        style={{
          width: "48px",
          height: "48px",
          borderRadius: "var(--radius-md)",
          backgroundColor: "var(--color-primary-tint)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: "1.25rem",
          color: "var(--color-primary)",
          flexShrink: 0,
        }}
        aria-hidden="true"
      >
        {icon}
      </div>
      <h4
        style={{
          fontFamily: "var(--font-display)",
          fontSize: "var(--text-lg)",
          fontWeight: 600,
          color: "var(--color-text-heading)",
          marginBottom: "0.5rem",
          lineHeight: 1.3,
        }}
      >
        {heading}
      </h4>
      <p
        style={{
          fontSize: "var(--text-sm)",
          color: "var(--color-text-body)",
          lineHeight: 1.75,
          margin: 0,
        }}
      >
        {body}
      </p>
    </Card>
  );
}
