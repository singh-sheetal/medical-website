interface DividerProps {
  className?: string;
  spacing?: "sm" | "md" | "lg";
}

const spacingMap = { sm: "1.5rem", md: "3rem", lg: "5rem" };

export function Divider({ className = "", spacing = "md" }: DividerProps) {
  return (
    <hr
      className={className}
      style={{ marginBlock: spacingMap[spacing] }}
      aria-hidden="true"
    />
  );
}
