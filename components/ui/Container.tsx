import { ReactNode, ElementType } from "react";

interface ContainerProps {
  children: ReactNode;
  as?: ElementType;
  narrow?: boolean;   // max-width: prose (68ch) — for text-heavy content
  wide?: boolean;     // full width within padding — for edge-to-edge sections
  className?: string;
}

export function Container({
  children,
  as: Tag = "div",
  narrow = false,
  wide = false,
  className = "",
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
      }}
    >
      {children}
    </Tag>
  );
}
