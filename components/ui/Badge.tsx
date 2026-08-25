import { ReactNode, CSSProperties } from "react";

type BadgeVariant = "primary" | "accent" | "neutral" | "success";

interface BadgeProps {
  variant?: BadgeVariant;
  children: ReactNode;
  icon?: ReactNode;
  className?: string;
  style?: CSSProperties;
}

const variantStyles: Record<BadgeVariant, string> = {
  primary: "badge badge-primary",
  accent:  "badge badge-accent",
  neutral: "badge badge-neutral",
  success: "badge",
};

const successStyle = {
  backgroundColor: "var(--color-accent-tint)",
  color: "var(--color-accent-dark)",
  borderColor: "rgba(74,157,184,0.25)",
};

export function Badge({
  variant = "primary",
  children,
  icon,
  className = "",
  style,
}: BadgeProps) {
  const variantStyle = variant === "success" ? successStyle : undefined;
  return (
    <span
      className={`${variantStyles[variant]} ${className}`}
      style={{ ...variantStyle, ...style }}
    >
      {icon && <span aria-hidden="true">{icon}</span>}
      {children}
    </span>
  );
}
