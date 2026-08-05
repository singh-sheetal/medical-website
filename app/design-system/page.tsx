import { colors } from "@/lib/tokens";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Card, IconCard } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Divider } from "@/components/ui/Divider";
import {
  DisplayHeading, Heading, SubHeading,
  CardHeading, Lead, Body, Caption, Eyebrow,
} from "@/components/ui/Typography";

const swatches = [
  { name: "Primary",        hex: colors.primary.DEFAULT,  role: "CTAs, links, nav" },
  { name: "Primary Light",  hex: colors.primary.light,    role: "Hover states" },
  { name: "Primary Dark",   hex: colors.primary.dark,     role: "Active states" },
  { name: "Primary Tint",   hex: colors.primary.tint,     role: "Badge backgrounds" },
  { name: "Accent",         hex: colors.accent.DEFAULT,   role: "Secondary CTAs, highlights" },
  { name: "Accent Light",   hex: colors.accent.light,     role: "Accent hover" },
  { name: "Accent Dark",    hex: colors.accent.dark,      role: "Accent active" },
  { name: "Accent Tint",    hex: colors.accent.tint,      role: "Accent badge bg" },
  { name: "BG Warm",        hex: colors.bg.DEFAULT,       role: "Page background" },
  { name: "BG Alt",         hex: colors.bg.alt,           role: "Alternate sections" },
  { name: "BG Dark",        hex: colors.bg.dark,          role: "Dark sections" },
  { name: "Text Heading",   hex: colors.text.heading,     role: "All headings" },
  { name: "Text Body",      hex: colors.text.body,        role: "Body copy" },
  { name: "Text Muted",     hex: colors.text.muted,       role: "Captions, labels" },
  { name: "Border",         hex: colors.border.DEFAULT,   role: "Dividers, cards" },
  { name: "Border Strong",  hex: colors.border.strong,    role: "Inputs, emphasis" },
  { name: "Success",        hex: colors.success.DEFAULT,  role: "Positive indicators" },
  { name: "White",          hex: colors.white,            role: "Card surfaces" },
];

export default function DesignSystem() {
  return (
    <main style={{ backgroundColor: "var(--color-bg)", minHeight: "100vh" }}>
      <Container>
        <div style={{ paddingBlock: "4rem" }}>

          <Eyebrow>Palette: Slate Blue & Soft Peach</Eyebrow>
          <DisplayHeading style={{ marginBottom: "0.5rem" }}>Design System</DisplayHeading>
          <Lead style={{ marginBottom: "3rem", color: "var(--color-text-muted)" }}>
            All tokens, components, and primitives used in the project.
          </Lead>

          {/* Colors */}
          <SubHeading style={{ marginBottom: "1.25rem" }}>Color Palette</SubHeading>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(160px, 1fr))", gap: "12px", marginBottom: "3rem" }}>
            {swatches.map((s) => (
              <div key={s.hex + s.name} style={{ borderRadius: "var(--radius-md)", overflow: "hidden", border: "1px solid var(--color-border)", background: "white" }}>
                <div style={{ height: "64px", backgroundColor: s.hex, border: s.hex === colors.white ? "1px solid var(--color-border)" : "none" }} />
                <div style={{ padding: "10px 12px" }}>
                  <div style={{ fontWeight: 600, fontSize: "0.8rem", color: "var(--color-text-heading)", marginBottom: "2px" }}>{s.name}</div>
                  <div style={{ fontFamily: "monospace", fontSize: "0.72rem", color: "var(--color-primary)" }}>{s.hex}</div>
                  <div style={{ fontSize: "0.7rem", color: "var(--color-text-muted)", marginTop: "2px" }}>{s.role}</div>
                </div>
              </div>
            ))}
          </div>

          <Divider />

          {/* Typography */}
          <SubHeading style={{ marginBottom: "1.25rem" }}>Typography</SubHeading>
          <Card style={{ marginBottom: "1rem" }}>
            <Eyebrow>Display — Lora (serif)</Eyebrow>
            <DisplayHeading>Display Heading</DisplayHeading>
            <Heading>Section Heading</Heading>
            <SubHeading>Sub Heading</SubHeading>
            <CardHeading>Card Heading</CardHeading>
          </Card>
          <Card style={{ marginBottom: "3rem" }}>
            <Eyebrow>Body — Inter (sans-serif)</Eyebrow>
            <Lead>Lead paragraph — large intro text used in hero and section intros.</Lead>
            <Body>Regular body — the default paragraph size used throughout the site.</Body>
            <Caption>Caption / small — image captions, metadata, fine print.</Caption>
          </Card>

          <Divider />

          {/* Buttons */}
          <SubHeading style={{ marginBottom: "1.25rem" }}>Buttons</SubHeading>
          <Card style={{ marginBottom: "3rem" }}>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "12px", alignItems: "center", marginBottom: "12px" }}>
              <Button as="link" href="#" size="lg">Book a Consultation</Button>
              <Button as="link" href="#" variant="accent" size="lg">Get Started Free</Button>
              <Button as="link" href="#" variant="secondary" size="lg">Learn More</Button>
              <Button as="link" href="#" variant="ghost" size="lg">View Features</Button>
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "12px", alignItems: "center", marginBottom: "12px" }}>
              <Button as="link" href="#">Primary</Button>
              <Button as="link" href="#" variant="accent">Accent</Button>
              <Button as="link" href="#" variant="secondary">Secondary</Button>
              <Button as="link" href="#" variant="ghost">Ghost</Button>
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "12px", alignItems: "center" }}>
              <Button as="link" href="#" size="sm">Small Primary</Button>
              <Button as="link" href="#" variant="accent" size="sm">Small Accent</Button>
              <Button as="button" loading>Loading</Button>
            </div>
          </Card>

          <Divider />

          {/* Badges */}
          <SubHeading style={{ marginBottom: "1.25rem" }}>Badges</SubHeading>
          <Card style={{ marginBottom: "3rem" }}>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", alignItems: "center" }}>
              <Badge variant="primary">AI-Powered</Badge>
              <Badge variant="accent">New Feature</Badge>
              <Badge variant="neutral">Coming Soon</Badge>
              <Badge variant="success">Live</Badge>
            </div>
          </Card>

          <Divider />

          {/* Cards */}
          <SubHeading style={{ marginBottom: "1.25rem" }}>Cards</SubHeading>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: "16px", marginBottom: "3rem" }}>
            <IconCard
              icon={<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>}
              heading="Auto-Documentation"
              body="AI transcribes and structures your consultation notes automatically, saving 2+ hours per day."
            />
            <IconCard
              icon={<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>}
              heading="Smart Scheduling"
              body="Patients book appointments online 24/7. Automated reminders reduce no-shows by up to 60%."
            />
            <IconCard
              icon={<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>}
              heading="GDPR Compliant"
              body="Patient data is encrypted, stored securely, and fully compliant with medical data regulations."
            />
          </div>

          <Divider />

          {/* Section Header */}
          <SubHeading style={{ marginBottom: "1.25rem" }}>Section Header</SubHeading>
          <Card style={{ marginBottom: "3rem" }}>
            <SectionHeader
              eyebrow="Features"
              heading="Everything your practice needs"
              lead="One platform for documentation, scheduling, billing, and patient communication. Built for the way modern practices actually work."
            />
          </Card>

          {/* Dark section */}
          <Section variant="dark" style={{ borderRadius: "var(--radius-xl)", marginBottom: "3rem" }}>
            <Container>
              <SectionHeader
                eyebrow="Dark Section Preview"
                heading="Ready to transform your practice?"
                lead="Join thousands of healthcare professionals who have already made the switch to smarter practice management."
                inverse
              />
              <div style={{ display: "flex", gap: "12px", justifyContent: "center", flexWrap: "wrap" }}>
                <Button as="link" href="#" variant="accent" size="lg">Get Started Today</Button>
                <Button as="link" href="#" variant="inverse" size="lg">Talk to Sales</Button>
              </div>
            </Container>
          </Section>

        </div>
      </Container>
    </main>
  );
}
