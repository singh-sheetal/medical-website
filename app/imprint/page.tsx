import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Imprint — Shape Consulting",
  description: "Legal imprint (Impressum) for SHAPE Consulting UG.",
};

export default function ImprintPage() {
  return (
    <main style={{ paddingBlock: "5rem 6rem", backgroundColor: "var(--color-bg)" }}>
      <div style={{ maxWidth: "760px", marginInline: "auto", paddingInline: "1.5rem" }}>
        <Link href="/" style={{ display: "inline-flex", alignItems: "center", gap: "0.375rem", fontFamily: "var(--font-sans)", fontSize: "0.875rem", color: "var(--color-text-muted)", textDecoration: "none", marginBottom: "2.5rem" }}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"/></svg>
          Back to website
        </Link>

        <div style={{ marginBottom: "3rem", paddingBottom: "2rem", borderBottom: "1px solid var(--color-border)" }}>
          <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.75rem", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase" as const, color: "var(--color-text-muted)", marginBottom: "0.75rem" }}>
            Impressum
          </p>
          <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.75rem, 3vw, 2.5rem)", fontWeight: 700, letterSpacing: "-0.02em", color: "var(--color-text-heading)" }}>
            Imprint
          </h1>
        </div>

        {/* Company details */}
        <div style={{ marginBottom: "2.5rem" }}>
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: "1.25rem", fontWeight: 700, color: "var(--color-text-heading)", marginBottom: "1rem" }}>
            Company information
          </h2>
          <div style={{ fontFamily: "var(--font-sans)", fontSize: "0.9375rem", color: "var(--color-text-body)", lineHeight: 2 }}>
            <p><strong>SHAPE Consulting UG (haftungsbeschränkt)</strong></p>
            <p>Musterstraße 12 <em style={{ color: "var(--color-primary)", fontSize: "0.8rem" }}>[placeholder — to be updated]</em></p>
            <p>80331 München <em style={{ color: "var(--color-primary)", fontSize: "0.8rem" }}>[placeholder — to be updated]</em></p>
            <p>Germany</p>
          </div>
        </div>

        <div style={{ marginBottom: "2.5rem" }}>
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: "1.25rem", fontWeight: 700, color: "var(--color-text-heading)", marginBottom: "1rem" }}>
            Contact
          </h2>
          <div style={{ fontFamily: "var(--font-sans)", fontSize: "0.9375rem", color: "var(--color-text-body)", lineHeight: 2 }}>
            <p>Email: <a href="mailto:info@shapeconsulting.app" style={{ color: "var(--color-primary)" }}>info@shapeconsulting.app</a></p>
            <p>Phone: +49 175 959 67 81</p>
            <p>Website: <a href="https://www.shapeconsulting.app" target="_blank" rel="noopener noreferrer" style={{ color: "var(--color-primary)" }}>www.shapeconsulting.app</a></p>
          </div>
        </div>

        <div style={{ marginBottom: "2.5rem" }}>
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: "1.25rem", fontWeight: 700, color: "var(--color-text-heading)", marginBottom: "1rem" }}>
            Legal details (Angaben gemäß § 5 TMG)
          </h2>
          <div style={{ fontFamily: "var(--font-sans)", fontSize: "0.9375rem", color: "var(--color-text-body)", lineHeight: 2 }}>
            <p>Managing Director (Geschäftsführer): Jan Baumann</p>
            <p>Registered court (Registergericht): Amtsgericht München <em style={{ color: "var(--color-primary)", fontSize: "0.8rem" }}>[placeholder]</em></p>
            <p>Registration number (Registernummer): HRB XXXXX <em style={{ color: "var(--color-primary)", fontSize: "0.8rem" }}>[placeholder]</em></p>
            <p>VAT ID (USt-IdNr.): DE XXXXXXXXX <em style={{ color: "var(--color-primary)", fontSize: "0.8rem" }}>[placeholder]</em></p>
          </div>
        </div>

        <div style={{ marginBottom: "2.5rem" }}>
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: "1.25rem", fontWeight: 700, color: "var(--color-text-heading)", marginBottom: "1rem" }}>
            Responsible for content (§ 55 Abs. 2 RStV)
          </h2>
          <div style={{ fontFamily: "var(--font-sans)", fontSize: "0.9375rem", color: "var(--color-text-body)", lineHeight: 2 }}>
            <p>Jan Baumann</p>
            <p>Musterstraße 12, 80331 München, Germany <em style={{ color: "var(--color-primary)", fontSize: "0.8rem" }}>[placeholder]</em></p>
          </div>
        </div>

        <div style={{ marginBottom: "2.5rem" }}>
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: "1.25rem", fontWeight: 700, color: "var(--color-text-heading)", marginBottom: "1rem" }}>
            Disclaimer
          </h2>
          <div style={{ fontFamily: "var(--font-sans)", fontSize: "0.9375rem", color: "var(--color-text-body)", lineHeight: 1.8 }}>
            <p><strong>Liability for content:</strong> The content of our website has been created with great care. However, we cannot guarantee the accuracy, completeness, or timeliness of the content. As a service provider, we are responsible for our own content on these pages in accordance with general law pursuant to § 7(1) TMG.</p>
            <br />
            <p><strong>Liability for links:</strong> Our website contains links to external third-party websites over whose content we have no control. We therefore cannot accept any liability for this external content. The respective provider or operator of the linked pages is always responsible for the content of the linked pages.</p>
            <br />
            <p><strong>Copyright:</strong> The content and works on these pages created by the site operator are subject to German copyright law. Duplication, editing, distribution, and any kind of use outside the limits of copyright law require the written consent of the respective author or creator.</p>
          </div>
        </div>

        <div style={{ paddingTop: "2rem", borderTop: "1px solid var(--color-border)", display: "flex", gap: "1.5rem", flexWrap: "wrap" }}>
          <Link href="/privacy" style={{ fontFamily: "var(--font-sans)", fontSize: "0.875rem", color: "var(--color-text-muted)", textDecoration: "none" }}>Privacy Policy</Link>
          <Link href="/" style={{ fontFamily: "var(--font-sans)", fontSize: "0.875rem", color: "var(--color-text-muted)", textDecoration: "none" }}>← Back to website</Link>
        </div>
      </div>
    </main>
  );
}
