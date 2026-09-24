"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { LegalHeader, LegalSection } from "./LegalHeader";
import { useI18n } from "@/lib/i18n/context";

export function GdprView() {
  const { lang } = useI18n();
  const de = lang === "de";

  return (
    <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3, ease: "easeOut" }}>
      <LegalHeader
        title={de ? "DSGVO" : "GDPR"}
        subtitle={de ? "Datenschutz-Grundverordnung – Konformitätserklärung" : "General Data Protection Regulation – Compliance Statement"}
      />
      <div style={{ backgroundColor: "var(--color-bg)", paddingBlock: "4rem" }}>
        <Container>
          <div style={{ maxWidth: "760px" }}>

            <LegalSection title={de ? "Unser Bekenntnis" : "Our Commitment"}>
              {de ? (
                <p>SHAPE Consulting UG bekennt sich vollumfänglich zur Datenschutz-Grundverordnung (EU) 2016/679 (DSGVO). Wir gestalten unsere Produkte und Prozesse nach den Grundsätzen des Datenschutzes durch Technikgestaltung und datenschutzfreundliche Voreinstellungen gemäß Art. 25 DSGVO.</p>
              ) : (
                <p>SHAPE Consulting UG is fully committed to the General Data Protection Regulation (EU) 2016/679 (GDPR). We design our products and processes according to the principles of data protection by design and by default pursuant to Art. 25 GDPR.</p>
              )}
            </LegalSection>

            <LegalSection title={de ? "Rechtsgrundlagen der Verarbeitung" : "Legal Bases for Processing"}>
              {de ? (
                <>
                  <p>Alle personenbezogenen Daten, die wir verarbeiten, haben eine definierte Rechtsgrundlage gemäß Art. 6 DSGVO:</p>
                  <ul style={{ paddingLeft: "1.25rem", display: "flex", flexDirection: "column", gap: "0.375rem" }}>
                    <li><strong>Art. 6 Abs. 1 lit. b DSGVO</strong> — Verarbeitung zur Erfüllung vorvertraglicher oder vertraglicher Maßnahmen (Demo-Anfragen)</li>
                    <li><strong>Art. 6 Abs. 1 lit. f DSGVO</strong> — Berechtigtes Interesse (Sicherheit und Stabilität der Website)</li>
                  </ul>
                </>
              ) : (
                <>
                  <p>All personal data we process has a defined legal basis under Art. 6 GDPR:</p>
                  <ul style={{ paddingLeft: "1.25rem", display: "flex", flexDirection: "column", gap: "0.375rem" }}>
                    <li><strong>Art. 6(1)(b) GDPR</strong> — Processing for pre-contractual or contractual purposes (demo requests)</li>
                    <li><strong>Art. 6(1)(f) GDPR</strong> — Legitimate interests (website security and stability)</li>
                  </ul>
                </>
              )}
            </LegalSection>

            <LegalSection title={de ? "Datensparsamkeit" : "Data Minimisation"}>
              {de ? (
                <p>Wir erheben ausschließlich die für den jeweiligen Zweck erforderlichen Mindestdaten. Shape.Med verarbeitet unter keinen Umständen Patientengesundheitsdaten. Es werden keine besonderen Kategorien personenbezogener Daten gemäß Art. 9 DSGVO verarbeitet.</p>
              ) : (
                <p>We collect only the minimum data necessary for each specific purpose. Shape.Med does not process patient health data under any circumstances. No special category data within the meaning of Art. 9 GDPR is processed.</p>
              )}
            </LegalSection>

            <LegalSection title={de ? "Internationale Datenübermittlungen" : "International Data Transfers"}>
              {de ? (
                <p>Wir setzen Vercel Inc. (USA) als Hosting-Dienstleister ein. Dabei können personenbezogene Daten in die USA übertragen werden. Grundlage dieser Übermittlung sind Standardvertragsklauseln (SCCs) gemäß Art. 46 Abs. 2 lit. c DSGVO. Weitere Informationen finden Sie in der Datenschutzerklärung von Vercel: <a href="https://vercel.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer" style={{ color: "var(--color-primary)" }}>vercel.com/legal/privacy-policy</a></p>
              ) : (
                <p>We use Vercel Inc. (USA) as our hosting provider. This may involve the transfer of personal data to the USA. Such transfers are based on Standard Contractual Clauses (SCCs) pursuant to Art. 46(2)(c) GDPR. For more information, see Vercel's privacy policy: <a href="https://vercel.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer" style={{ color: "var(--color-primary)" }}>vercel.com/legal/privacy-policy</a></p>
              )}
            </LegalSection>

            <LegalSection title={de ? "Auftragsverarbeitungsvertrag (AVV)" : "Data Processing Agreement (DPA)"}>
              {de ? (
                <p>Kunden, die Shape.Med nutzen, können auf Anfrage einen Auftragsverarbeitungsvertrag (AVV) gemäß Art. 28 DSGVO abschließen. Bitte kontaktieren Sie uns unter <a href="mailto:info@shapeconsulting.app" style={{ color: "var(--color-primary)" }}>info@shapeconsulting.app</a>.</p>
              ) : (
                <p>Customers using Shape.Med may request a Data Processing Agreement (DPA) pursuant to Art. 28 GDPR. Please contact us at <a href="mailto:info@shapeconsulting.app" style={{ color: "var(--color-primary)" }}>info@shapeconsulting.app</a>.</p>
              )}
            </LegalSection>

            <LegalSection title={de ? "Technische und organisatorische Maßnahmen (TOMs)" : "Technical and Organisational Measures (TOMs)"}>
              {de ? (
                <>
                  <p>Wir setzen geeignete technische und organisatorische Maßnahmen um, um ein dem Risiko angemessenes Schutzniveau zu gewährleisten:</p>
                  <ul style={{ paddingLeft: "1.25rem", display: "flex", flexDirection: "column", gap: "0.375rem" }}>
                    <li>Verschlüsselung der Datenübertragung mittels TLS/HTTPS</li>
                    <li>Zugriffskontrolle durch Authentifizierung</li>
                    <li>Keine Weitergabe von Daten an Dritte ohne Rechtsgrundlage</li>
                  </ul>
                </>
              ) : (
                <>
                  <p>We implement appropriate technical and organisational measures to ensure a level of security appropriate to the risk:</p>
                  <ul style={{ paddingLeft: "1.25rem", display: "flex", flexDirection: "column", gap: "0.375rem" }}>
                    <li>Encryption of data in transit via TLS/HTTPS</li>
                    <li>Access control through authentication</li>
                    <li>No sharing of data with third parties without a legal basis</li>
                  </ul>
                </>
              )}
            </LegalSection>

            <LegalSection title={de ? "Betroffenenrechte" : "Data Subject Rights"}>
              {de ? (
                <p>Wir unterstützen vollumfänglich alle Rechte betroffener Personen gemäß Kapitel III DSGVO (Art. 15–22). Anfragen richten Sie bitte an <a href="mailto:info@shapeconsulting.app" style={{ color: "var(--color-primary)" }}>info@shapeconsulting.app</a>.</p>
              ) : (
                <p>We fully support all data subject rights under Chapter III GDPR (Arts. 15–22). Please address requests to <a href="mailto:info@shapeconsulting.app" style={{ color: "var(--color-primary)" }}>info@shapeconsulting.app</a>.</p>
              )}
            </LegalSection>

            <LegalSection title={de ? "Aufsichtsbehörde" : "Supervisory Authority"}>
              <p>
                <strong>Der Bundesbeauftragte für den Datenschutz und die Informationsfreiheit (BfDI)</strong><br />
                Graurheindorfer Str. 153, 53117 Bonn<br />
                <a href="https://www.bfdi.bund.de" target="_blank" rel="noopener noreferrer" style={{ color: "var(--color-primary)" }}>www.bfdi.bund.de</a>
              </p>
            </LegalSection>

          </div>
        </Container>
      </div>
    </motion.div>
  );
}
