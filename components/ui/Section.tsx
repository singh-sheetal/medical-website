import { ReactNode, ElementType, CSSProperties } from "react";

type SectionVariant = "default" | "alt" | "dark";
type SectionSize = "sm" | "md" | "lg";

interface SectionProps {
  children: ReactNode;
  as?: ElementType;
  variant?: SectionVariant;
  size?: SectionSize;
  id?: string;
  className?: string;
  style?: CSSProperties;
}

const variantStyles: Record<SectionVariant, string> = {
  default: "",
  alt:     "section-alt",
  dark:    "section-dark",
};

const sizeStyles: Record<SectionSize, string> = {
  sm: "section-sm",
  md: "section",
  lg: "section-lg",
};

export function Section({
  children,
  as: Tag = "section",
  variant = "default",
  size = "md",
  id,
  className = "",
  style,
}: SectionProps) {
  return (
    <Tag
      id={id}
      className={[sizeStyles[size], variantStyles[variant], className]
        .filter(Boolean)
        .join(" ")}
      style={style}
    >
      {children}
    </Tag>
  );
}
