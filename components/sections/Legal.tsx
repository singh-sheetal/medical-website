"use client";

import { useI18n } from "@/lib/i18n/context";
import { Container } from "@/components/ui/Container";

export function Legal() {
  return (
    <section style={{ backgroundColor: "var(--color-bg-alt)", paddingBlock: "var(--section-padding-y)" }}>
      <Container>
        <div>

          {/* ── Privacy Policy ─────────────────────────────── */}
          <div id="privacy" style={{ marginBottom: "4rem", scrollMarginTop: "100px" }}>
            <span style={{ display: "block", fontFamily: "var(--font-sans)", fontSize: "var(--text-xs)", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase" as const, color: "var(--color-text-muted)", marginBottom: "0.75rem" }}>
              Legal
            </span>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.75rem, 3vw, 2.25rem)", fontWeight: 700, letterSpacing: "-0.02em", color: "var(--color-text-heading)", marginBottom: "0.375rem", lineHeight: 1.2 }}>
              Privacy Policy
            </h2>
            <p style={{ fontFamily: "var(--font-sans)", fontSize: "var(--text-sm)", color: "var(--color-text-muted)", marginBottom: "2rem" }}>
              Datenschutzerklärung · Last updated: September 2026
            </p>

            <LegalSection title="1. Controller (Verantwortlicher)">
              <p>The controller responsible for data processing on this website is:</p>
              <p><strong>SHAPE Consulting UG (haftungsbeschränkt)</strong><br />Musterstraße 12, 80331 Munich, Germany<br />Email: info@shapeconsulting.app · Phone: +49 175 959 67 81</p>
            </LegalSection>

            <LegalSection title="2. Data We Collect and Why">
              <p><strong>Server log data:</strong> When you visit this website, our servers automatically record standard log data (IP address, browser type, OS, referring URL, date/time). Processed on the basis of legitimate interests (Art. 6(1)(f) GDPR) to ensure website security and stability. Deleted after 7 days.</p>
              <p><strong>Demo request form:</strong> When you submit a demo request, we collect your name, email address, phone number, practice name, and medical specialty. Used solely to respond to your inquiry and arrange a product demonstration. Legal basis: Art. 6(1)(b) GDPR. Retained for 6 months after last contact, then deleted.</p>
              <p><strong>Session cookies:</strong> This website uses a single session cookie for authentication purposes only. No tracking cookies, advertising cookies, or third-party analytics are used.</p>
            </LegalSection>

            <LegalSection title="3. Data Hosting and Processors">
              <p>All data is processed and stored exclusively on servers within Germany and the EU. We use <strong>Vercel Inc.</strong> (Frankfurt region) for hosting and <strong>Resend Inc.</strong> for transactional email. Both have signed Data Processing Agreements (DPAs) with us pursuant to Art. 28 GDPR. No data is transferred to third countries outside the EU/EEA.</p>
            </LegalSection>

            <LegalSection title="4. No Patient Data">
              <p>Shape.Med does not process patient data of any kind. It is a practice management tool for team organisation, documentation, and communication only.</p>
            </LegalSection>

            <LegalSection title="5. Your Rights Under GDPR">
              <p>Under GDPR you have the right to: access your data (Art. 15) · rectification (Art. 16) · erasure (Art. 17) · restriction of processing (Art. 18) · data portability (Art. 20) · object to processing (Art. 21).</p>
              <p>To exercise any of these rights, contact us at <a href="mailto:info@shapeconsulting.app" style={{ color: "var(--color-primary)" }}>info@shapeconsulting.app</a>. We will respond within 30 days.</p>
            </LegalSection>

            <LegalSection title="6. Supervisory Authority">
              <p>You have the right to lodge a complaint with a data protection authority. The competent authority in Germany is:<br /><strong>Der Bundesbeauftragte für den Datenschutz und die Informationsfreiheit (BfDI)</strong><br />Graurheindorfer Str. 153, 53117 Bonn · <a href="https://www.bfdi.bund.de" target="_blank" rel="noopener noreferrer" style={{ color: "var(--color-primary)" }}>www.bfdi.bund.de</a></p>
            </LegalSection>
          </div>

          <hr style={{ border: "none", borderTop: "1px solid var(--color-border)", marginBottom: "4rem" }} />

          {/* ── Imprint ────────────────────────────────────── */}
          <div id="imprint" style={{ marginBottom: "4rem", scrollMarginTop: "100px" }}>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.75rem, 3vw, 2.25rem)", fontWeight: 700, letterSpacing: "-0.02em", color: "var(--color-text-heading)", marginBottom: "0.375rem", lineHeight: 1.2 }}>
              Imprint
            </h2>
            <p style={{ fontFamily: "var(--font-sans)", fontSize: "var(--text-sm)", color: "var(--color-text-muted)", marginBottom: "2rem" }}>
              Impressum · Information pursuant to § 5 TMG
            </p>

            <LegalSection title="Company">
              <p><strong>SHAPE Consulting UG (haftungsbeschränkt)</strong><br />Musterstraße 12<br />80331 Munich, Germany</p>
            </LegalSection>

            <LegalSection title="Contact">
              <p>Phone: +49 175 959 67 81<br />Email: <a href="mailto:info@shapeconsulting.app" style={{ color: "var(--color-primary)" }}>info@shapeconsulting.app</a><br />Website: <a href="https://www.shapeconsulting.app" target="_blank" rel="noopener noreferrer" style={{ color: "var(--color-primary)" }}>www.shapeconsulting.app</a></p>
            </LegalSection>

            <LegalSection title="Managing Director">
              <p>Dr. Thomas Weber</p>
            </LegalSection>

            <LegalSection title="Commercial Register">
              <p>Registergericht: Amtsgericht München<br />Registernummer: HRB 000000 <em style={{ color: "var(--color-text-muted)", fontSize: "var(--text-sm)" }}>(placeholder — to be updated)</em></p>
            </LegalSection>

            <LegalSection title="VAT Identification Number">
              <p>Umsatzsteuer-Identifikationsnummer gemäß § 27a UStG:<br />DE 000 000 000 <em style={{ color: "var(--color-text-muted)", fontSize: "var(--text-sm)" }}>(placeholder — to be updated)</em></p>
            </LegalSection>

            <LegalSection title="Dispute Resolution">
              <p>The EU Commission provides a platform for online dispute resolution: <a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noopener noreferrer" style={{ color: "var(--color-primary)" }}>ec.europa.eu/consumers/odr</a>. We are not obliged to participate in dispute resolution proceedings before a consumer arbitration board.</p>
            </LegalSection>

            <LegalSection title="Liability">
              <p>As a service provider we are responsible for our own content under general legislation (§ 7(1) TMG). We are not obligated to monitor third-party information transmitted or stored. Upon becoming aware of legal infringements we will remove relevant content immediately.</p>
            </LegalSection>
          </div>

          <hr style={{ border: "none", borderTop: "1px solid var(--color-border)", marginBottom: "4rem" }} />

          {/* ── GDPR ───────────────────────────────────────── */}
          <div id="gdpr" style={{ scrollMarginTop: "100px" }}>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.75rem, 3vw, 2.25rem)", fontWeight: 700, letterSpacing: "-0.02em", color: "var(--color-text-heading)", marginBottom: "0.375rem", lineHeight: 1.2 }}>
              GDPR
            </h2>
            <p style={{ fontFamily: "var(--font-sans)", fontSize: "var(--text-sm)", color: "var(--color-text-muted)", marginBottom: "2rem" }}>
              DSGVO · General Data Protection Regulation compliance statement
            </p>

            <LegalSection title="Our Commitment">
              <p>SHAPE Consulting UG is fully committed to the General Data Protection Regulation (EU) 2016/679 (GDPR), implemented in Germany as the Datenschutz-Grundverordnung (DSGVO). We design our products and processes with data protection by design and by default (Art. 25 GDPR).</p>
            </LegalSection>

            <LegalSection title="Legal Bases for Processing">
              <p>All personal data we process has a defined legal basis under Art. 6 GDPR:</p>
              <ul style={{ paddingLeft: "1.25rem", display: "flex", flexDirection: "column", gap: "0.375rem" }}>
                <li><strong>Art. 6(1)(b)</strong> — Processing for pre-contractual or contractual purposes (demo requests)</li>
                <li><strong>Art. 6(1)(f)</strong> — Legitimate interests (server security, website stability)</li>
              </ul>
            </LegalSection>

            <LegalSection title="Data Minimisation">
              <p>We collect only the minimum data necessary for each specific purpose. Shape.Med does not process patient health data under any circumstances. No special category data (Art. 9 GDPR) is processed.</p>
            </LegalSection>

            <LegalSection title="Data Processing Agreement (DPA)">
              <p>Customers who use Shape.Med as a data processor can request a Data Processing Agreement (Auftragsverarbeitungsvertrag / AVV) pursuant to Art. 28 GDPR. Please contact us at <a href="mailto:info@shapeconsulting.app" style={{ color: "var(--color-primary)" }}>info@shapeconsulting.app</a>.</p>
            </LegalSection>

            <LegalSection title="Security Measures">
              <p>We implement appropriate technical and organisational measures (TOMs) to ensure a level of security appropriate to the risk, including: encryption of data in transit (TLS) and at rest, access controls and role-based permissions, regular security assessments, and server infrastructure exclusively within Germany.</p>
            </LegalSection>

            <LegalSection title="Data Subject Rights">
              <p>We fully support all rights of data subjects under Chapter III of the GDPR (Arts. 15–22). To submit a request, contact <a href="mailto:info@shapeconsulting.app" style={{ color: "var(--color-primary)" }}>info@shapeconsulting.app</a>. All requests are processed within 30 days.</p>
            </LegalSection>
          </div>

        </div>
      </Container>
    </section>
  );
}

function LegalSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div style={{ marginBottom: "1.75rem" }}>
      <h3 style={{ fontFamily: "var(--font-sans)", fontSize: "var(--text-base)", fontWeight: 600, color: "var(--color-text-heading)", marginBottom: "0.5rem" }}>
        {title}
      </h3>
      <div style={{ fontFamily: "var(--font-sans)", fontSize: "var(--text-base)", color: "var(--color-text-body)", lineHeight: 1.75, display: "flex", flexDirection: "column", gap: "0.5rem" }}>
        {children}
      </div>
    </div>
  );
}
