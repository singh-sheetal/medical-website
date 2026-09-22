"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { LegalHeader, LegalSection } from "./LegalHeader";
import { useI18n } from "@/lib/i18n/context";

export function PrivacyView() {
  const { lang } = useI18n();
  const de = lang === "de";

  return (
    <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3, ease: "easeOut" }}>
      <LegalHeader
        title={de ? "Datenschutzerklärung" : "Privacy Policy"}
        subtitle={de ? "Zuletzt aktualisiert: September 2026" : "Last updated: September 2026"}
      />
      <div style={{ backgroundColor: "var(--color-bg)", paddingBlock: "4rem" }}>
        <Container>
          <div style={{ maxWidth: "760px" }}>
            <LegalSection title={de ? "1. Verantwortlicher" : "1. Controller (Verantwortlicher)"}>
              {de ? (
                <>
                  <p>Verantwortlicher im Sinne der DSGVO für die Datenverarbeitung auf dieser Website ist:</p>
                  <p><strong>SHAPE Consulting UG (haftungsbeschränkt)</strong><br />Musterstraße 12, 80331 München, Deutschland<br />E-Mail: <a href="mailto:info@shapeconsulting.app" style={{ color: "var(--color-primary)" }}>info@shapeconsulting.app</a> · Telefon: +49 175 959 67 81</p>
                </>
              ) : (
                <>
                  <p>The controller responsible for data processing on this website is:</p>
                  <p><strong>SHAPE Consulting UG (haftungsbeschränkt)</strong><br />Musterstraße 12, 80331 Munich, Germany<br />Email: <a href="mailto:info@shapeconsulting.app" style={{ color: "var(--color-primary)" }}>info@shapeconsulting.app</a> · Phone: +49 175 959 67 81</p>
                </>
              )}
            </LegalSection>

            <LegalSection title={de ? "2. Welche Daten wir erheben und warum" : "2. Data We Collect and Why"}>
              {de ? (
                <>
                  <p><strong>Server-Logdaten:</strong> Beim Besuch dieser Website erfassen unsere Server automatisch Standard-Logdaten (IP-Adresse, Browsertyp, Betriebssystem, Referrer-URL, Datum/Uhrzeit). Verarbeitung auf Grundlage berechtigter Interessen (Art. 6 Abs. 1 lit. f DSGVO) zur Sicherstellung der Websitesicherheit und -stabilität. Löschung nach 7 Tagen.</p>
                  <p><strong>Demo-Anfrage-Formular:</strong> Bei der Einreichung einer Demo-Anfrage erheben wir Ihren Namen, Ihre E-Mail-Adresse, Telefonnummer, Praxisname und medizinische Fachrichtung. Ausschließlich zur Beantwortung Ihrer Anfrage und Vereinbarung einer Produktdemonstration. Rechtsgrundlage: Art. 6 Abs. 1 lit. b DSGVO. Aufbewahrung für 6 Monate nach letztem Kontakt, anschließend Löschung.</p>
                  <p><strong>Session-Cookies:</strong> Diese Website verwendet ausschließlich ein Session-Cookie zu Authentifizierungszwecken. Es werden keine Tracking-Cookies, Werbe-Cookies oder Drittanbieter-Analysen eingesetzt.</p>
                </>
              ) : (
                <>
                  <p><strong>Server log data:</strong> When you visit this website, our servers automatically record standard log data (IP address, browser type, OS, referring URL, date/time). Processed on the basis of legitimate interests (Art. 6(1)(f) GDPR) to ensure website security and stability. Deleted after 7 days.</p>
                  <p><strong>Demo request form:</strong> When you submit a demo request, we collect your name, email address, phone number, practice name, and medical specialty. Used solely to respond to your inquiry and arrange a product demonstration. Legal basis: Art. 6(1)(b) GDPR. Retained for 6 months after last contact, then deleted.</p>
                  <p><strong>Session cookies:</strong> This website uses a single session cookie for authentication purposes only. No tracking cookies, advertising cookies, or third-party analytics are used.</p>
                </>
              )}
            </LegalSection>

            <LegalSection title={de ? "3. Datenhosting und Auftragsverarbeiter" : "3. Data Hosting and Processors"}>
              {de ? (
                <p>Alle Daten werden ausschließlich auf Servern in Deutschland und der EU verarbeitet und gespeichert. Wir nutzen <strong>Vercel Inc.</strong> (Standort Frankfurt) für das Hosting und <strong>Resend Inc.</strong> für den transaktionalen E-Mail-Versand. Beide haben mit uns Auftragsverarbeitungsverträge (AVV) gemäß Art. 28 DSGVO geschlossen. Es findet keine Datenübertragung in Drittländer außerhalb der EU/des EWR statt.</p>
              ) : (
                <p>All data is processed and stored exclusively on servers within Germany and the EU. We use <strong>Vercel Inc.</strong> (Frankfurt region) for hosting and <strong>Resend Inc.</strong> for transactional email. Both have signed Data Processing Agreements (DPAs) with us pursuant to Art. 28 GDPR. No data is transferred to third countries outside the EU/EEA.</p>
              )}
            </LegalSection>

            <LegalSection title={de ? "4. Keine Patientendaten" : "4. No Patient Data"}>
              {de ? (
                <p>Shape.Med verarbeitet keinerlei Patientendaten. Es handelt sich ausschließlich um ein Praxisverwaltungstool für Teamorganisation, Dokumentation und Kommunikation.</p>
              ) : (
                <p>Shape.Med does not process patient data of any kind. It is a practice management tool for team organisation, documentation, and communication only.</p>
              )}
            </LegalSection>

            <LegalSection title={de ? "5. Ihre Rechte nach der DSGVO" : "5. Your Rights Under GDPR"}>
              {de ? (
                <>
                  <p>Gemäß DSGVO haben Sie das Recht auf: Auskunft (Art. 15) · Berichtigung (Art. 16) · Löschung (Art. 17) · Einschränkung der Verarbeitung (Art. 18) · Datenübertragbarkeit (Art. 20) · Widerspruch gegen die Verarbeitung (Art. 21).</p>
                  <p>Zur Ausübung dieser Rechte wenden Sie sich bitte an <a href="mailto:info@shapeconsulting.app" style={{ color: "var(--color-primary)" }}>info@shapeconsulting.app</a>. Wir antworten innerhalb von 30 Tagen.</p>
                </>
              ) : (
                <>
                  <p>Under GDPR you have the right to: access your data (Art. 15) · rectification (Art. 16) · erasure (Art. 17) · restriction of processing (Art. 18) · data portability (Art. 20) · object to processing (Art. 21).</p>
                  <p>To exercise any of these rights, contact us at <a href="mailto:info@shapeconsulting.app" style={{ color: "var(--color-primary)" }}>info@shapeconsulting.app</a>. We will respond within 30 days.</p>
                </>
              )}
            </LegalSection>

            <LegalSection title={de ? "6. Aufsichtsbehörde" : "6. Supervisory Authority"}>
              {de ? (
                <p>Sie haben das Recht, eine Beschwerde bei einer Datenschutzbehörde einzureichen. Die zuständige Behörde in Deutschland ist:<br /><strong>Der Bundesbeauftragte für den Datenschutz und die Informationsfreiheit (BfDI)</strong><br />Graurheindorfer Str. 153, 53117 Bonn · <a href="https://www.bfdi.bund.de" target="_blank" rel="noopener noreferrer" style={{ color: "var(--color-primary)" }}>www.bfdi.bund.de</a></p>
              ) : (
                <p>You have the right to lodge a complaint with a data protection authority. The competent authority in Germany is:<br /><strong>Der Bundesbeauftragte für den Datenschutz und die Informationsfreiheit (BfDI)</strong><br />Graurheindorfer Str. 153, 53117 Bonn · <a href="https://www.bfdi.bund.de" target="_blank" rel="noopener noreferrer" style={{ color: "var(--color-primary)" }}>www.bfdi.bund.de</a></p>
              )}
            </LegalSection>
          </div>
        </Container>
      </div>
    </motion.div>
  );
}
