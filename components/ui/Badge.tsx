import { ReactNode, CSSProperties } from "react";

type BadgeVariant = "primary" | "accent" | "neutral";

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
};

export function Badge({
  variant = "primary",
  children,
  icon,
  className = "",
  style,
}: BadgeProps) {
  return (
    <span
      className={`${variantStyles[variant]} ${className}`}
      style={style}
    >
      {icon && <span aria-hidden="true">{icon}</span>}
      {children}
    </span>
  );
}
