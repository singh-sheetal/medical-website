"use client";

import { motion } from "framer-motion";
import { useView } from "@/lib/view-context";
import { Container } from "@/components/ui/Container";

export function PrivacyView() {
  const { setView } = useView();

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      <div style={{ backgroundColor: "var(--color-primary)", padding: "4rem 0 3rem" }}>
        <Container>
          <button
            onClick={() => setView("home")}
            style={{ display: "inline-flex", alignItems: "center", gap: "0.375rem", fontFamily: "var(--font-sans)", fontSize: "var(--text-sm)", color: "rgba(255,255,255,0.7)", background: "none", border: "none", cursor: "pointer", marginBottom: "1.5rem", padding: 0 }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"/></svg>
            Back
          </button>
          <p style={{ fontFamily: "var(--font-sans)", fontSize: "var(--text-xs)", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase" as const, color: "rgba(255,255,255,0.65)", marginBottom: "0.5rem" }}>Legal</p>
          <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2rem, 4vw, 2.75rem)", fontWeight: 700, color: "white", letterSpacing: "-0.025em", marginBottom: "0.375rem", lineHeight: 1.15 }}>Privacy Policy</h1>
          <p style={{ fontFamily: "var(--font-sans)", fontSize: "var(--text-sm)", color: "rgba(255,255,255,0.65)" }}>Datenschutzerklärung · Last updated: September 2026</p>
        </Container>
      </div>

      <div style={{ backgroundColor: "var(--color-bg)", paddingBlock: "4rem" }}>
        <Container>
          <div style={{ maxWidth: "760px" }}>
            <S title="1. Controller (Verantwortlicher)">
              <p>The controller responsible for data processing on this website is:</p>
              <p><strong>SHAPE Consulting UG (haftungsbeschränkt)</strong><br />Musterstraße 12, 80331 Munich, Germany<br />Email: <a href="mailto:info@shapeconsulting.app" style={{ color: "var(--color-primary)" }}>info@shapeconsulting.app</a> · Phone: +49 175 959 67 81</p>
            </S>
            <S title="2. Data We Collect and Why">
              <p><strong>Server log data:</strong> When you visit this website, our servers automatically record standard log data (IP address, browser type, OS, referring URL, date/time). Processed on the basis of legitimate interests (Art. 6(1)(f) GDPR) to ensure website security and stability. Deleted after 7 days.</p>
              <p><strong>Demo request form:</strong> When you submit a demo request, we collect your name, email address, phone number, practice name, and medical specialty. Used solely to respond to your inquiry and arrange a product demonstration. Legal basis: Art. 6(1)(b) GDPR. Retained for 6 months after last contact, then deleted.</p>
              <p><strong>Session cookies:</strong> This website uses a single session cookie for authentication purposes only. No tracking cookies, advertising cookies, or third-party analytics are used.</p>
            </S>
            <S title="3. Data Hosting and Processors">
              <p>All data is processed and stored exclusively on servers within Germany and the EU. We use <strong>Vercel Inc.</strong> (Frankfurt region) for hosting and <strong>Resend Inc.</strong> for transactional email. Both have signed Data Processing Agreements (DPAs) with us pursuant to Art. 28 GDPR. No data is transferred to third countries outside the EU/EEA.</p>
            </S>
            <S title="4. No Patient Data">
              <p>Shape.Med does not process patient data of any kind. It is a practice management tool for team organisation, documentation, and communication only.</p>
            </S>
            <S title="5. Your Rights Under GDPR">
              <p>Under GDPR you have the right to: access your data (Art. 15) · rectification (Art. 16) · erasure (Art. 17) · restriction of processing (Art. 18) · data portability (Art. 20) · object to processing (Art. 21).</p>
              <p>To exercise any of these rights, contact us at <a href="mailto:info@shapeconsulting.app" style={{ color: "var(--color-primary)" }}>info@shapeconsulting.app</a>. We will respond within 30 days.</p>
            </S>
            <S title="6. Supervisory Authority">
              <p>You have the right to lodge a complaint with a data protection authority. The competent authority in Germany is:<br /><strong>Der Bundesbeauftragte für den Datenschutz und die Informationsfreiheit (BfDI)</strong><br />Graurheindorfer Str. 153, 53117 Bonn · <a href="https://www.bfdi.bund.de" target="_blank" rel="noopener noreferrer" style={{ color: "var(--color-primary)" }}>www.bfdi.bund.de</a></p>
            </S>
          </div>
        </Container>
      </div>
    </motion.div>
  );
}

function S({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div style={{ marginBottom: "2rem" }}>
      <h2 style={{ fontFamily: "var(--font-sans)", fontSize: "var(--text-lg)", fontWeight: 700, color: "var(--color-text-heading)", marginBottom: "0.75rem", paddingBottom: "0.5rem", borderBottom: "1px solid var(--color-border)" }}>{title}</h2>
      <div style={{ fontFamily: "var(--font-sans)", fontSize: "var(--text-base)", color: "var(--color-text-body)", lineHeight: 1.75, display: "flex", flexDirection: "column", gap: "0.625rem" }}>{children}</div>
    </div>
  );
}
