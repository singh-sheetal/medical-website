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
                  <p>
                    <strong>SHAPE Consulting UG (haftungsbeschränkt)</strong><br />
                    Musterstraße 12, 80331 München, Deutschland<br />
                    E-Mail: <a href="mailto:info@shapeconsulting.app" style={{ color: "var(--color-primary)" }}>info@shapeconsulting.app</a><br />
                    Telefon: +49 175 959 67 81
                  </p>
                </>
              ) : (
                <>
                  <p>The controller responsible for data processing on this website is:</p>
                  <p>
                    <strong>SHAPE Consulting UG (haftungsbeschränkt)</strong><br />
                    Musterstraße 12, 80331 Munich, Germany<br />
                    Email: <a href="mailto:info@shapeconsulting.app" style={{ color: "var(--color-primary)" }}>info@shapeconsulting.app</a><br />
                    Phone: +49 175 959 67 81
                  </p>
                </>
              )}
            </LegalSection>

            <LegalSection title={de ? "2. Welche Daten wir erheben und warum" : "2. Data We Collect and Why"}>
              {de ? (
                <>
                  <p><strong>Server-Logdaten:</strong> Beim Besuch dieser Website erfassen unsere Server automatisch Standard-Logdaten (IP-Adresse, Browsertyp, Betriebssystem, Referrer-URL, Datum/Uhrzeit). Rechtsgrundlage: Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an der Sicherheit und Stabilität der Website).</p>
                  <p><strong>Demo-Anfrage-Formular:</strong> Bei der Einreichung einer Demo-Anfrage erheben wir Ihren Namen, Ihre E-Mail-Adresse, Telefonnummer, Praxisname und medizinische Fachrichtung. Diese Daten werden ausschließlich zur Beantwortung Ihrer Anfrage und zur Vereinbarung einer Produktdemonstration verwendet. Rechtsgrundlage: Art. 6 Abs. 1 lit. b DSGVO.</p>
                  <p><strong>Session-Cookie:</strong> Diese Website verwendet ein einzelnes Session-Cookie ausschließlich zur Authentifizierung. Es werden keine Tracking-Cookies, Werbe-Cookies oder Drittanbieter-Analysen eingesetzt.</p>
                </>
              ) : (
                <>
                  <p><strong>Server log data:</strong> When you visit this website, our servers automatically record standard log data (IP address, browser type, OS, referring URL, date/time). Legal basis: Art. 6(1)(f) GDPR (legitimate interest in website security and stability).</p>
                  <p><strong>Demo request form:</strong> When you submit a demo request, we collect your name, email address, phone number, practice name, and medical specialty. Used solely to respond to your inquiry and arrange a product demonstration. Legal basis: Art. 6(1)(b) GDPR.</p>
                  <p><strong>Session cookie:</strong> This website uses a single session cookie for authentication purposes only. No tracking cookies, advertising cookies, or third-party analytics are used.</p>
                </>
              )}
            </LegalSection>

            <LegalSection title={de ? "3. Hosting und Dienstleister" : "3. Hosting and Service Providers"}>
              {de ? (
                <>
                  <p>Wir setzen folgende Dienstleister ein, mit denen wir Auftragsverarbeitungsverträge gemäß Art. 28 DSGVO abgeschlossen haben oder abschließen werden:</p>
                  <p>
                    <strong>Vercel Inc.</strong><br />
                    440 N Barranca Avenue #4133, Covina, CA 91723, USA<br />
                    Zweck: Hosting und Bereitstellung dieser Website. Da Vercel ein US-amerikanisches Unternehmen ist, können Daten in die USA übertragen werden. Die Übertragung erfolgt auf Grundlage von Standardvertragsklauseln (SCCs) gemäß Art. 46 Abs. 2 lit. c DSGVO.<br />
                    Datenschutzerklärung: <a href="https://vercel.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer" style={{ color: "var(--color-primary)" }}>vercel.com/legal/privacy-policy</a>
                  </p>
                  <p>
                    <strong>Resend Inc.</strong><br />
                    Zweck: Versand von Transaktions-E-Mails (Bestätigung von Demo-Anfragen).<br />
                    Datenschutzerklärung: <a href="https://resend.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer" style={{ color: "var(--color-primary)" }}>resend.com/legal/privacy-policy</a>
                  </p>
                </>
              ) : (
                <>
                  <p>We use the following service providers, with whom we have concluded or will conclude Data Processing Agreements (DPAs) pursuant to Art. 28 GDPR:</p>
                  <p>
                    <strong>Vercel Inc.</strong><br />
                    440 N Barranca Avenue #4133, Covina, CA 91723, USA<br />
                    Purpose: Hosting and delivery of this website. As Vercel is a US company, data may be transferred to the USA. Such transfers are based on Standard Contractual Clauses (SCCs) pursuant to Art. 46(2)(c) GDPR.<br />
                    Privacy policy: <a href="https://vercel.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer" style={{ color: "var(--color-primary)" }}>vercel.com/legal/privacy-policy</a>
                  </p>
                  <p>
                    <strong>Resend Inc.</strong><br />
                    Purpose: Sending transactional emails (demo request confirmations).<br />
                    Privacy policy: <a href="https://resend.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer" style={{ color: "var(--color-primary)" }}>resend.com/legal/privacy-policy</a>
                  </p>
                </>
              )}
            </LegalSection>

            <LegalSection title={de ? "4. Keine Patientendaten" : "4. No Patient Data"}>
              {de ? (
                <p>Shape.Med verarbeitet keinerlei Patientendaten. Es handelt sich ausschließlich um ein Praxisverwaltungstool für Teamorganisation, Dokumentation und Kommunikation. Es werden keine besonderen Kategorien personenbezogener Daten im Sinne von Art. 9 DSGVO verarbeitet.</p>
              ) : (
                <p>Shape.Med does not process patient data of any kind. It is a practice management tool for team organisation, documentation, and communication only. No special category data within the meaning of Art. 9 GDPR is processed.</p>
              )}
            </LegalSection>

            <LegalSection title={de ? "5. Ihre Rechte nach der DSGVO" : "5. Your Rights Under GDPR"}>
              {de ? (
                <>
                  <p>Gemäß DSGVO haben Sie das Recht auf:</p>
                  <ul style={{ paddingLeft: "1.25rem", display: "flex", flexDirection: "column", gap: "0.375rem" }}>
                    <li>Auskunft über Ihre gespeicherten Daten (Art. 15 DSGVO)</li>
                    <li>Berichtigung unrichtiger Daten (Art. 16 DSGVO)</li>
                    <li>Löschung Ihrer Daten (Art. 17 DSGVO)</li>
                    <li>Einschränkung der Verarbeitung (Art. 18 DSGVO)</li>
                    <li>Datenübertragbarkeit (Art. 20 DSGVO)</li>
                    <li>Widerspruch gegen die Verarbeitung (Art. 21 DSGVO)</li>
                  </ul>
                  <p>Zur Ausübung dieser Rechte wenden Sie sich bitte an: <a href="mailto:info@shapeconsulting.app" style={{ color: "var(--color-primary)" }}>info@shapeconsulting.app</a></p>
                </>
              ) : (
                <>
                  <p>Under GDPR you have the right to:</p>
                  <ul style={{ paddingLeft: "1.25rem", display: "flex", flexDirection: "column", gap: "0.375rem" }}>
                    <li>Access your stored data (Art. 15 GDPR)</li>
                    <li>Rectification of inaccurate data (Art. 16 GDPR)</li>
                    <li>Erasure of your data (Art. 17 GDPR)</li>
                    <li>Restriction of processing (Art. 18 GDPR)</li>
                    <li>Data portability (Art. 20 GDPR)</li>
                    <li>Object to processing (Art. 21 GDPR)</li>
                  </ul>
                  <p>To exercise any of these rights, contact us at: <a href="mailto:info@shapeconsulting.app" style={{ color: "var(--color-primary)" }}>info@shapeconsulting.app</a></p>
                </>
              )}
            </LegalSection>

            <LegalSection title={de ? "6. Aufsichtsbehörde" : "6. Supervisory Authority"}>
              {de ? (
                <p>Sie haben das Recht, eine Beschwerde bei einer Datenschutzaufsichtsbehörde einzureichen. Die zuständige Behörde ist:<br /><br /><strong>Der Bundesbeauftragte für den Datenschutz und die Informationsfreiheit (BfDI)</strong><br />Graurheindorfer Str. 153, 53117 Bonn<br /><a href="https://www.bfdi.bund.de" target="_blank" rel="noopener noreferrer" style={{ color: "var(--color-primary)" }}>www.bfdi.bund.de</a></p>
              ) : (
                <p>You have the right to lodge a complaint with a supervisory authority. The competent authority in Germany is:<br /><br /><strong>Der Bundesbeauftragte für den Datenschutz und die Informationsfreiheit (BfDI)</strong><br />Graurheindorfer Str. 153, 53117 Bonn<br /><a href="https://www.bfdi.bund.de" target="_blank" rel="noopener noreferrer" style={{ color: "var(--color-primary)" }}>www.bfdi.bund.de</a></p>
              )}
            </LegalSection>

          </div>
        </Container>
      </div>
    </motion.div>
  );
}
