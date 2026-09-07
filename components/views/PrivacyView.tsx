"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { LegalHeader, LegalSection } from "./LegalHeader";

export function PrivacyView() {
  return (
    <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3, ease: "easeOut" }}>
      <LegalHeader title="Privacy Policy" subtitle="Datenschutzerklärung · Last updated: September 2026" />
      <div style={{ backgroundColor: "var(--color-bg)", paddingBlock: "4rem" }}>
        <Container>
          <div style={{ maxWidth: "760px" }}>
            <LegalSection title="1. Controller (Verantwortlicher)">
              <p>The controller responsible for data processing on this website is:</p>
              <p><strong>SHAPE Consulting UG (haftungsbeschränkt)</strong><br />Musterstraße 12, 80331 Munich, Germany<br />Email: <a href="mailto:info@shapeconsulting.app" style={{ color: "var(--color-primary)" }}>info@shapeconsulting.app</a> · Phone: +49 175 959 67 81</p>
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
        </Container>
      </div>
    </motion.div>
  );
}
