import { ReactNode, ElementType, CSSProperties } from "react";

interface ContainerProps {
  children: ReactNode;
  as?: ElementType;
  narrow?: boolean;
  wide?: boolean;
  className?: string;
  style?: CSSProperties;
}

export function Container({
  children,
  as: Tag = "div",
  narrow = false,
  wide = false,
  className = "",
  style,
}: ContainerProps) {
  const maxWidth = narrow
    ? "var(--prose-max, 68ch)"
    : wide
    ? "100%"
    : "var(--container-max)";

  return (
    <Tag
      className={className}
      style={{
        width: "100%",
        maxWidth,
        marginInline: "auto",
        paddingInline: wide ? 0 : "var(--container-padding)",
        ...style,
      }}
    >
      {children}
    </Tag>
  );
}
