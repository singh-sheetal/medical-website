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
  backgroundColor: "var(--color-success-tint)",
  color: "var(--color-success)",
  borderColor: "rgba(46,125,94,0.2)",
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
