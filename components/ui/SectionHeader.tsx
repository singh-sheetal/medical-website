import { Eyebrow, Heading, Lead, HeadingInverse, LeadInverse } from "./Typography";

interface SectionHeaderProps {
  eyebrow?: string;
  heading: string;
  lead?: string;
  align?: "left" | "center";
  inverse?: boolean;        // for dark section backgrounds
  maxWidth?: string;        // constrain lead text width
  className?: string;
}

export function SectionHeader({
  eyebrow,
  heading,
  lead,
  align = "center",
  inverse = false,
  maxWidth = "52ch",
  className = "",
}: SectionHeaderProps) {
  const HeadingComponent = inverse ? HeadingInverse : Heading;
  const LeadComponent    = inverse ? LeadInverse    : Lead;

  return (
    <div
      className={className}
      style={{
        textAlign: align,
        marginBottom: "3.5rem",
        ...(align === "center" ? { display: "flex", flexDirection: "column", alignItems: "center" } : {}),
      }}
    >
      {eyebrow && <Eyebrow style={inverse ? { color: "var(--color-primary-light)" } : undefined}>{eyebrow}</Eyebrow>}

      <HeadingComponent style={{ marginBottom: lead ? "1rem" : 0 }}>
        {heading}
      </HeadingComponent>

      {lead && (
        <LeadComponent style={{ maxWidth, marginTop: "0.75rem" }}>
          {lead}
        </LeadComponent>
      )}
    </div>
  );
}
