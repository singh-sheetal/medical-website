import { colors } from "@/lib/tokens";

const swatches = [
  { name: "Primary",        hex: colors.primary.DEFAULT,  role: "CTAs, links, accents" },
  { name: "Primary Light",  hex: colors.primary.light,    role: "Hover states" },
  { name: "Primary Dark",   hex: colors.primary.dark,     role: "Active states" },
  { name: "Primary Tint",   hex: colors.primary.tint,     role: "Badge backgrounds" },
  { name: "Secondary",      hex: colors.secondary.DEFAULT, role: "Nav, dark sections" },
  { name: "Secondary Light",hex: colors.secondary.light,  role: "Hover on dark bg" },
  { name: "Secondary Dark", hex: colors.secondary.dark,   role: "Deep dark sections" },
  { name: "Secondary Tint", hex: colors.secondary.tint,   role: "Subtle backgrounds" },
  { name: "BG Linen",       hex: colors.bg.DEFAULT,       role: "Page background" },
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
    <main style={{ backgroundColor: "var(--color-bg)", minHeight: "100vh", padding: "3rem 2rem" }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>

        {/* Header */}
        <div style={{ marginBottom: "3rem" }}>
          <span className="eyebrow">M2 Complete</span>
          <h1 style={{ fontFamily: "var(--font-display)", color: "var(--color-text-heading)", fontSize: "clamp(2rem, 4vw, 3rem)", marginBottom: "0.5rem" }}>
            Design Token Reference
          </h1>
          <p style={{ color: "var(--color-text-muted)", fontSize: "1rem" }}>
            Every color, type size, and spacing value used in the project.
          </p>
        </div>

        {/* Color Palette */}
        <section style={{ marginBottom: "3rem" }}>
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: "1.5rem", color: "var(--color-text-heading)", marginBottom: "1.25rem" }}>
            Color Palette
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(160px, 1fr))", gap: "12px" }}>
            {swatches.map((s) => (
              <div key={s.hex} className="card" style={{ padding: "0", overflow: "hidden" }}>
                <div style={{
                  height: "72px",
                  backgroundColor: s.hex,
                  border: s.hex === colors.white ? "1px solid var(--color-border)" : "none",
                }} />
                <div style={{ padding: "10px 12px" }}>
                  <div style={{ fontWeight: 600, fontSize: "0.8rem", color: "var(--color-text-heading)", marginBottom: "2px" }}>
                    {s.name}
                  </div>
                  <div style={{ fontFamily: "monospace", fontSize: "0.72rem", color: "var(--color-primary)", marginBottom: "3px" }}>
                    {s.hex}
                  </div>
                  <div style={{ fontSize: "0.7rem", color: "var(--color-text-muted)", lineHeight: 1.4 }}>
                    {s.role}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Typography */}
        <section style={{ marginBottom: "3rem" }}>
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: "1.5rem", color: "var(--color-text-heading)", marginBottom: "1.25rem" }}>
            Typography
          </h2>
          <div className="card" style={{ marginBottom: "1rem" }}>
            <span className="eyebrow">Display — Lora (serif)</span>
            {["4.5rem", "3.75rem", "3rem", "1.875rem", "1.5rem"].map((size, i) => (
              <div key={size} style={{ fontFamily: "var(--font-display)", fontSize: size, color: "var(--color-text-heading)", lineHeight: 1.2, marginBottom: "0.5rem", fontWeight: 700 }}>
                {["H1 Heading", "H2 Heading", "H3 Heading", "H4 Heading", "H5 Heading"][i]}
              </div>
            ))}
          </div>
          <div className="card">
            <span className="eyebrow">Body — Inter (sans-serif)</span>
            <p style={{ fontSize: "1.125rem", marginBottom: "0.5rem" }}>Large body — 18px. Used for section introductions and hero subtext.</p>
            <p style={{ marginBottom: "0.5rem" }}>Regular body — 16px. The default paragraph size throughout the site.</p>
            <p style={{ fontSize: "0.875rem", color: "var(--color-text-muted)", marginBottom: "0.5rem" }}>Small / caption — 14px. Used for image captions, form labels, metadata.</p>
            <p style={{ fontSize: "0.75rem", color: "var(--color-text-muted)" }}>Extra small — 12px. Navigation labels, badges, fine print.</p>
          </div>
        </section>

        {/* Components */}
        <section style={{ marginBottom: "3rem" }}>
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: "1.5rem", color: "var(--color-text-heading)", marginBottom: "1.25rem" }}>
            Buttons
          </h2>
          <div className="card" style={{ display: "flex", flexWrap: "wrap", gap: "12px", alignItems: "center" }}>
            <a href="#" className="btn btn-primary btn-lg">Book a Free Consultation</a>
            <a href="#" className="btn btn-secondary btn-lg">Learn More</a>
            <a href="#" className="btn btn-ghost btn-lg">View Features</a>
            <a href="#" className="btn btn-primary">Primary Default</a>
            <a href="#" className="btn btn-secondary">Secondary Default</a>
            <a href="#" className="btn btn-primary btn-sm">Small CTA</a>
          </div>
        </section>

        <section style={{ marginBottom: "3rem" }}>
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: "1.5rem", color: "var(--color-text-heading)", marginBottom: "1.25rem" }}>
            Badges
          </h2>
          <div className="card" style={{ display: "flex", flexWrap: "wrap", gap: "8px", alignItems: "center" }}>
            <span className="badge badge-primary">AI-Powered</span>
            <span className="badge badge-secondary">GDPR Compliant</span>
            <span className="badge badge-neutral">Coming Soon</span>
          </div>
        </section>

        {/* Dark section preview */}
        <section style={{ borderRadius: "var(--radius-lg)", overflow: "hidden", marginBottom: "3rem" }}>
          <div className="section-dark" style={{ padding: "3rem" }}>
            <span className="eyebrow" style={{ color: "var(--color-primary-light)" }}>Dark Section</span>
            <h2 style={{ color: "var(--color-text-inverse)", marginBottom: "1rem" }}>
              This is how dark sections look
            </h2>
            <p style={{ color: "rgba(245,240,232,0.75)", marginBottom: "1.5rem" }}>
              The dark teal background with warm linen text creates a premium feel without being harsh.
            </p>
            <a href="#" className="btn btn-inverse btn-lg">Get Started</a>
          </div>
        </section>

      </div>
    </main>
  );
}
