import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Imprint — Shape Consulting",
  description: "Legal imprint (Impressum) for SHAPE Consulting UG, as required by German law (§ 5 TMG).",
};

export default function ImprintPage() {
  return (
    <main style={{ backgroundColor: "var(--color-bg)", minHeight: "100vh" }}>
      <div style={{ maxWidth: "760px", margin: "0 auto", padding: "5rem 2rem 6rem" }}>

        {/* Back link */}
        <Link href="/" style={{ display: "inline-flex", alignItems: "center", gap: "0.375rem", fontFamily: "var(--font-sans)", fontSize: "var(--text-sm)", color: "var(--color-text-muted)", textDecoration: "none", marginBottom: "2.5rem" }}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"/></svg>
          Back to homepage
        </Link>

        <p style={{ fontFamily: "var(--font-sans)", fontSize: "var(--text-xs)", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--color-text-muted)", marginBottom: "0.75rem" }}>
          Legal
        </p>
        <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2rem, 4vw, 2.75rem)", fontWeight: 700, letterSpacing: "-0.025em", color: "var(--color-text-heading)", marginBottom: "0.5rem", lineHeight: 1.15 }}>
          Imprint
        </h1>
        <p style={{ fontFamily: "var(--font-sans)", fontSize: "var(--text-sm)", color: "var(--color-text-muted)", marginBottom: "3rem" }}>
          Impressum · Information pursuant to § 5 TMG
        </p>

        <hr style={{ border: "none", borderTop: "1px solid var(--color-border)", marginBottom: "3rem" }} />

        <Section title="Company">
          <p>
            <strong>SHAPE Consulting UG (haftungsbeschränkt)</strong><br />
            Musterstraße 12<br />
            80331 Munich<br />
            Germany
          </p>
        </Section>

        <Section title="Contact">
          <p>
            Phone: +49 175 959 67 81<br />
            Email: <a href="mailto:info@shapeconsulting.app">info@shapeconsulting.app</a><br />
            Website: <a href="https://www.shapeconsulting.app" target="_blank" rel="noopener noreferrer">www.shapeconsulting.app</a>
          </p>
        </Section>

        <Section title="Managing Director">
          <p>Dr. Thomas Weber</p>
        </Section>

        <Section title="Commercial Register">
          <p>
            Registergericht: Amtsgericht München<br />
            Registernummer: HRB 000000 <span style={{ fontStyle: "italic", color: "var(--color-text-muted)", fontSize: "var(--text-sm)" }}>(placeholder — to be updated)</span>
          </p>
        </Section>

        <Section title="VAT Identification Number">
          <p>
            Umsatzsteuer-Identifikationsnummer gemäß § 27a Umsatzsteuergesetz:<br />
            DE 000 000 000 <span style={{ fontStyle: "italic", color: "var(--color-text-muted)", fontSize: "var(--text-sm)" }}>(placeholder — to be updated)</span>
          </p>
        </Section>

        <Section title="Responsible for Content">
          <p>
            Responsible for content pursuant to § 55 Abs. 2 RStV:<br />
            <strong>Dr. Thomas Weber</strong><br />
            SHAPE Consulting UG (haftungsbeschränkt)<br />
            Musterstraße 12, 80331 Munich, Germany
          </p>
        </Section>

        <Section title="Dispute Resolution">
          <p>
            The European Commission provides a platform for online dispute resolution (ODR):
            {" "}<a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noopener noreferrer">https://ec.europa.eu/consumers/odr</a>
          </p>
          <p>
            We are not willing or obliged to participate in dispute resolution proceedings before a consumer arbitration board.
          </p>
        </Section>

        <Section title="Liability for Content">
          <p>As a service provider, we are responsible for our own content on these pages in accordance with general legislation pursuant to § 7(1) TMG. However, pursuant to §§ 8 to 10 TMG, we are not obligated to monitor transmitted or stored third-party information or to investigate circumstances that indicate illegal activity.</p>
          <p>Obligations to remove or block the use of information under general law remain unaffected by this. Any liability in this regard, however, shall only commence from the point in time at which a concrete infringement of the law becomes known. Upon becoming aware of such infringements, we will remove the relevant content immediately.</p>
        </Section>

        <Section title="Liability for Links">
          <p>Our website contains links to external websites of third parties over whose content we have no influence. Therefore, we cannot accept any liability for this external content. The respective provider or operator of the linked pages is always responsible for the content of those pages. Linked pages were checked for possible legal violations at the time of linking. Illegal content was not recognisable at the time of linking.</p>
          <p>Permanent monitoring of the content of linked pages is not reasonable without concrete indications of an infringement. Upon becoming aware of such infringements, we will remove the relevant links immediately.</p>
        </Section>

        <Section title="Copyright">
          <p>The content and works created by the site operators on these pages are subject to German copyright law. Duplication, processing, distribution, or any form of commercialisation of such material beyond the scope of the copyright law shall require the prior written consent of its respective author or creator. Downloads and copies of this site are only permitted for private, non-commercial use.</p>
        </Section>

      </div>
    </main>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section style={{ marginBottom: "2.5rem" }}>
      <h2 style={{ fontFamily: "var(--font-display)", fontSize: "var(--text-xl)", fontWeight: 700, color: "var(--color-text-heading)", letterSpacing: "-0.01em", marginBottom: "1rem", paddingBottom: "0.625rem", borderBottom: "1px solid var(--color-border)" }}>
        {title}
      </h2>
      <div style={{ fontFamily: "var(--font-sans)", fontSize: "var(--text-base)", color: "var(--color-text-body)", lineHeight: 1.75, display: "flex", flexDirection: "column", gap: "0.75rem" }}>
        {children}
      </div>
    </section>
  );
}
