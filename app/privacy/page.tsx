import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy — Shape Consulting",
  description: "Privacy Policy and data protection information for the Shape.Med website.",
};

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div style={{ marginBottom: "2.5rem" }}>
      <h2 style={{ fontFamily: "var(--font-display)", fontSize: "1.25rem", fontWeight: 700, color: "var(--color-text-heading)", letterSpacing: "-0.01em", marginBottom: "1rem" }}>
        {title}
      </h2>
      <div style={{ fontFamily: "var(--font-sans)", fontSize: "0.9375rem", color: "var(--color-text-body)", lineHeight: 1.8 }}>
        {children}
      </div>
    </div>
  );
}

export default function PrivacyPage() {
  return (
    <main style={{ paddingBlock: "5rem 6rem", backgroundColor: "var(--color-bg)" }}>
      <div style={{ maxWidth: "760px", marginInline: "auto", paddingInline: "1.5rem" }}>
        <Link href="/" style={{ display: "inline-flex", alignItems: "center", gap: "0.375rem", fontFamily: "var(--font-sans)", fontSize: "0.875rem", color: "var(--color-text-muted)", textDecoration: "none", marginBottom: "2.5rem" }}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"/></svg>
          Back to website
        </Link>

        <div style={{ marginBottom: "3rem", paddingBottom: "2rem", borderBottom: "1px solid var(--color-border)" }}>
          <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.75rem", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase" as const, color: "var(--color-text-muted)", marginBottom: "0.75rem" }}>
            Datenschutzerklärung
          </p>
          <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.75rem, 3vw, 2.5rem)", fontWeight: 700, letterSpacing: "-0.02em", color: "var(--color-text-heading)", marginBottom: "0.75rem" }}>
            Privacy Policy
          </h1>
          <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.9375rem", color: "var(--color-text-muted)" }}>Last updated: September 2026</p>
        </div>

        <Section title="1. Controller (Verantwortlicher)">
          <p>The controller responsible for data processing on this website is:</p><br />
          <p>
            <strong>SHAPE Consulting UG (haftungsbeschränkt)</strong><br />
            Musterstraße 12 <em style={{ color: "var(--color-primary)", fontSize: "0.8rem" }}>[placeholder]</em><br />
            80331 München <em style={{ color: "var(--color-primary)", fontSize: "0.8rem" }}>[placeholder]</em><br />
            Germany<br /><br />
            Email: <a href="mailto:info@shapeconsulting.app" style={{ color: "var(--color-primary)" }}>info@shapeconsulting.app</a><br />
            Phone: +49 175 959 67 81
          </p>
        </Section>

        <Section title="2. What data we collect and why">
          <p><strong>2.1 Server log data</strong><br />
          When you visit this website, our server automatically collects standard log data including your IP address, browser type, operating system, referring URL, and date and time of access. This is processed on the basis of our legitimate interests pursuant to Art. 6(1)(f) GDPR to ensure the security and stability of this website. Log data is deleted after 7 days.</p><br />
          <p><strong>2.2 Demo request form</strong><br />
          When you submit a demo request, we collect your name, email address, phone number, practice name, and medical specialty. This data is used solely to respond to your inquiry and arrange a product demonstration. The legal basis is Art. 6(1)(b) GDPR (pre-contractual measures). Your data will be retained for 6 months after our last contact and then permanently deleted.</p><br />
          <p><strong>2.3 Cookies</strong><br />
          This website uses a single session cookie for site access authentication. This cookie does not track your behaviour, does not contain personal data, and expires after 30 minutes. No advertising cookies, tracking pixels, or third-party analytics tools are used on this website.</p>
        </Section>

        <Section title="3. Data hosting and processors">
          <p>All data is processed and stored exclusively on servers within Germany and the EU. We use the following GDPR-compliant processors, each with a signed Data Processing Agreement (DPA):</p><br />
          <ul style={{ paddingLeft: "1.25rem", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
            <li><strong>Vercel Inc.</strong> — website hosting, Frankfurt region. <a href="https://vercel.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer" style={{ color: "var(--color-primary)" }}>Privacy Policy</a></li>
            <li><strong>Resend Inc.</strong> — transactional email delivery for demo requests. <a href="https://resend.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer" style={{ color: "var(--color-primary)" }}>Privacy Policy</a></li>
          </ul><br />
          <p>No data is transferred to third countries outside the EU/EEA without appropriate safeguards.</p>
        </Section>

        <Section title="4. No patient data">
          <p>Shape.Med is a practice management and team coordination tool. It does not process, store, or transmit patient data of any kind. No health data as defined under Art. 9 GDPR is collected through this website or through the Shape.Med application.</p>
        </Section>

        <Section title="5. Your rights (Art. 15–21 GDPR)">
          <p>As a data subject, you have the following rights:</p><br />
          <ul style={{ paddingLeft: "1.25rem", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
            <li><strong>Right of access</strong> (Art. 15) — request a copy of the personal data we hold about you.</li>
            <li><strong>Right to rectification</strong> (Art. 16) — request correction of inaccurate data.</li>
            <li><strong>Right to erasure</strong> (Art. 17) — request deletion of your personal data.</li>
            <li><strong>Right to restriction</strong> (Art. 18) — request that we restrict processing of your data.</li>
            <li><strong>Right to data portability</strong> (Art. 20) — request your data in a machine-readable format.</li>
            <li><strong>Right to object</strong> (Art. 21) — object to processing based on legitimate interests.</li>
          </ul><br />
          <p>To exercise any of these rights, contact us at <a href="mailto:info@shapeconsulting.app" style={{ color: "var(--color-primary)" }}>info@shapeconsulting.app</a>. We will respond within 30 days.</p>
        </Section>

        <Section title="6. Right to lodge a complaint">
          <p>If you believe that our processing of your personal data violates the GDPR, you have the right to lodge a complaint with the competent supervisory authority:</p><br />
          <p>
            <strong>Der Bundesbeauftragte für den Datenschutz und die Informationsfreiheit (BfDI)</strong><br />
            Graurheindorfer Str. 153, 53117 Bonn, Germany<br />
            <a href="https://www.bfdi.bund.de" target="_blank" rel="noopener noreferrer" style={{ color: "var(--color-primary)" }}>www.bfdi.bund.de</a>
          </p>
        </Section>

        <Section title="7. Changes to this policy">
          <p>We reserve the right to update this Privacy Policy at any time. The current version is always available at this URL. We recommend checking this page periodically.</p>
        </Section>

        <div style={{ paddingTop: "2rem", borderTop: "1px solid var(--color-border)", display: "flex", gap: "1.5rem", flexWrap: "wrap" }}>
          <Link href="/imprint" style={{ fontFamily: "var(--font-sans)", fontSize: "0.875rem", color: "var(--color-text-muted)", textDecoration: "none" }}>Imprint</Link>
          <Link href="/" style={{ fontFamily: "var(--font-sans)", fontSize: "0.875rem", color: "var(--color-text-muted)", textDecoration: "none" }}>← Back to website</Link>
        </div>
      </div>
    </main>
  );
}
