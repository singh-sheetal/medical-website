"use client";

import { forwardRef } from "react";
import Link from "next/link";

type ButtonVariant = "primary" | "secondary" | "ghost" | "inverse";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonBaseProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
  loading?: boolean;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  className?: string;
  children: React.ReactNode;
}

interface ButtonAsButton extends ButtonBaseProps {
  as?: "button";
  href?: never;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

interface ButtonAsLink extends ButtonBaseProps {
  as: "link";
  href: string;
  onClick?: never;
  type?: never;
  disabled?: never;
  style?: React.CSSProperties;
}

type ButtonProps = ButtonAsButton | ButtonAsLink;

const variantStyles: Record<ButtonVariant, string> = {
  primary:   "btn btn-primary",
  secondary: "btn btn-secondary",
  ghost:     "btn btn-ghost",
  inverse:   "btn btn-inverse",
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: "btn-sm",
  md: "",
  lg: "btn-lg",
};

export const Button = forwardRef<
  HTMLButtonElement | HTMLAnchorElement,
  ButtonProps
>(function Button(
  {
    variant = "primary",
    size = "md",
    fullWidth = false,
    loading = false,
    icon,
    iconPosition = "left",
    className = "",
    children,
    ...props
  },
  ref
) {
  const classes = [
    variantStyles[variant],
    sizeStyles[size],
    fullWidth ? "w-full" : "",
    loading ? "opacity-70 cursor-not-allowed" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const content = (
    <>
      {loading && (
        <svg
          className="animate-spin"
          style={{ width: "1em", height: "1em" }}
          fill="none"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <circle
            style={{ opacity: 0.25 }}
            cx="12" cy="12" r="10"
            stroke="currentColor"
            strokeWidth="4"
          />
          <path
            style={{ opacity: 0.75 }}
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
          />
        </svg>
      )}
      {!loading && icon && iconPosition === "left" && icon}
      <span>{children}</span>
      {!loading && icon && iconPosition === "right" && icon}
    </>
  );

  if (props.as === "link") {
    return (
      <Link
        href={props.href}
        className={classes}
        style={props.style}
        ref={ref as React.Ref<HTMLAnchorElement>}
      >
        {content}
      </Link>
    );
  }

  const { as: _as, ...buttonProps } = props as ButtonAsButton & { as?: "button" };

  return (
    <button
      {...buttonProps}
      className={classes}
      disabled={buttonProps.disabled || loading}
      ref={ref as React.Ref<HTMLButtonElement>}
    >
      {content}
    </button>
  );
});

Button.displayName = "Button";
