import { ReactNode } from "react";

type BadgeVariant = "primary" | "secondary" | "neutral" | "success";

interface BadgeProps {
  variant?: BadgeVariant;
  children: ReactNode;
  icon?: ReactNode;
  className?: string;
}

const variantStyles: Record<BadgeVariant, string> = {
  primary:   "badge badge-primary",
  secondary: "badge badge-secondary",
  neutral:   "badge badge-neutral",
  success:   "badge",
};

const successStyle = {
  backgroundColor: "var(--color-success-tint)",
  color: "var(--color-success)",
  borderColor: "rgba(58,125,94,0.2)",
};

export function Badge({
  variant = "primary",
  children,
  icon,
  className = "",
}: BadgeProps) {
  return (
    <span
      className={`${variantStyles[variant]} ${className}`}
      style={variant === "success" ? successStyle : undefined}
    >
      {icon && <span aria-hidden="true">{icon}</span>}
      {children}
    </span>
  );
}
