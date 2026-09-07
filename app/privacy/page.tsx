import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy — Shape Consulting",
  description: "Privacy Policy and Data Protection Statement (Datenschutzerklärung) for Shape Consulting and Shape.Med.",
};

export default function PrivacyPage() {
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
          Privacy Policy
        </h1>
        <p style={{ fontFamily: "var(--font-sans)", fontSize: "var(--text-sm)", color: "var(--color-text-muted)", marginBottom: "3rem" }}>
          Datenschutzerklärung · Last updated: September 2026
        </p>

        <hr style={{ border: "none", borderTop: "1px solid var(--color-border)", marginBottom: "3rem" }} />

        <Section title="1. Controller (Verantwortlicher)">
          <p>The controller responsible for data processing on this website is:</p>
          <p style={{ marginTop: "0.75rem" }}>
            <strong>SHAPE Consulting UG (haftungsbeschränkt)</strong><br />
            Musterstraße 12<br />
            80331 Munich, Germany<br />
            <br />
            Email: <a href="mailto:info@shapeconsulting.app">info@shapeconsulting.app</a><br />
            Phone: +49 175 959 67 81
          </p>
        </Section>

        <Section title="2. Data We Collect and Why">
          <Subsection title="2.1 Server log data">
            <p>When you visit this website, our servers automatically record standard log data including your IP address, browser type, operating system, referring URL, and the date and time of your visit. This data is processed on the basis of our legitimate interests pursuant to Art. 6(1)(f) GDPR to ensure the security, stability, and functionality of this website. It is automatically deleted after 7 days.</p>
          </Subsection>
          <Subsection title="2.2 Demo request form">
            <p>When you submit a demo request, we collect your name, email address, phone number, practice name, and medical specialty. This data is used solely to respond to your inquiry and to arrange a product demonstration of Shape.Med.</p>
            <p style={{ marginTop: "0.5rem" }}>The legal basis for this processing is Art. 6(1)(b) GDPR (processing necessary for pre-contractual measures at the request of the data subject). Your data will be retained for 6 months after last contact and then deleted, unless a contractual relationship is established.</p>
          </Subsection>
          <Subsection title="2.3 Session cookies">
            <p>This website uses a single session cookie exclusively for authentication purposes (site access protection). This cookie contains no personal data and expires when the browser session ends or after 30 minutes of inactivity. No tracking cookies, advertising cookies, or third-party analytics are used on this website.</p>
          </Subsection>
        </Section>

        <Section title="3. Data Hosting and Processors">
          <p>All data is processed and stored exclusively on servers located within Germany and the European Union. We work with the following processors, each of whom has signed a Data Processing Agreement (DPA) with us in accordance with Art. 28 GDPR:</p>
          <ul style={{ marginTop: "0.75rem", paddingLeft: "1.25rem", display: "flex", flexDirection: "column", gap: "0.4rem" }}>
            <li><strong>Vercel Inc.</strong> — website hosting (Frankfurt, EU region)</li>
            <li><strong>Resend Inc.</strong> — transactional email delivery for demo request submissions</li>
          </ul>
          <p style={{ marginTop: "0.75rem" }}>No personal data is transferred to third countries outside the EU/EEA.</p>
        </Section>

        <Section title="4. No Patient Data">
          <p>Shape.Med is a practice management and team coordination tool. It does not process patient data of any kind. No health data, patient records, or clinical information is stored in or transmitted through Shape.Med or this website.</p>
        </Section>

        <Section title="5. Your Rights Under GDPR">
          <p>Under the General Data Protection Regulation (GDPR), you have the following rights regarding your personal data:</p>
          <ul style={{ marginTop: "0.75rem", paddingLeft: "1.25rem", display: "flex", flexDirection: "column", gap: "0.4rem" }}>
            <li><strong>Right of access</strong> (Art. 15 GDPR) — You have the right to obtain confirmation of whether we process your personal data and to receive a copy of it.</li>
            <li><strong>Right to rectification</strong> (Art. 16 GDPR) — You have the right to have inaccurate personal data corrected.</li>
            <li><strong>Right to erasure</strong> (Art. 17 GDPR) — You have the right to request the deletion of your personal data under certain conditions.</li>
            <li><strong>Right to restriction</strong> (Art. 18 GDPR) — You have the right to request restriction of processing in certain circumstances.</li>
            <li><strong>Right to data portability</strong> (Art. 20 GDPR) — You have the right to receive your data in a structured, machine-readable format.</li>
            <li><strong>Right to object</strong> (Art. 21 GDPR) — You have the right to object to processing based on legitimate interests.</li>
          </ul>
          <p style={{ marginTop: "0.75rem" }}>To exercise any of these rights, please contact us at <a href="mailto:info@shapeconsulting.app">info@shapeconsulting.app</a>. We will respond within 30 days.</p>
        </Section>

        <Section title="6. Right to Lodge a Complaint">
          <p>You have the right to lodge a complaint with a data protection supervisory authority if you believe that the processing of your personal data violates the GDPR. The competent authority in Germany is:</p>
          <p style={{ marginTop: "0.75rem" }}>
            <strong>Der Bundesbeauftragte für den Datenschutz und die Informationsfreiheit (BfDI)</strong><br />
            Graurheindorfer Str. 153<br />
            53117 Bonn, Germany<br />
            <a href="https://www.bfdi.bund.de" target="_blank" rel="noopener noreferrer">www.bfdi.bund.de</a>
          </p>
        </Section>

        <Section title="7. Changes to This Privacy Policy">
          <p>We reserve the right to update this privacy policy as necessary to reflect changes in legal requirements or our data processing activities. The current version is always available at this URL. We recommend checking this page periodically.</p>
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

function Subsection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div style={{ marginTop: "1rem" }}>
      <h3 style={{ fontFamily: "var(--font-sans)", fontSize: "var(--text-base)", fontWeight: 600, color: "var(--color-text-heading)", marginBottom: "0.5rem" }}>
        {title}
      </h3>
      <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
        {children}
      </div>
    </div>
  );
}
