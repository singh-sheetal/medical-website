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
        subtitle={de ? "Datenschutz-Grundverordnung – Konformitätserklärung" : "General Data Protection Regulation compliance statement"}
      />
      <div style={{ backgroundColor: "var(--color-bg)", paddingBlock: "4rem" }}>
        <Container>
          <div style={{ maxWidth: "760px" }}>
            <LegalSection title={de ? "Unser Bekenntnis" : "Our Commitment"}>
              {de ? (
                <p>SHAPE Consulting UG bekennt sich vollumfänglich zur Datenschutz-Grundverordnung (EU) 2016/679 (DSGVO). Wir gestalten unsere Produkte und Prozesse nach den Grundsätzen des Datenschutzes durch Technikgestaltung und durch datenschutzfreundliche Voreinstellungen (Art. 25 DSGVO).</p>
              ) : (
                <p>SHAPE Consulting UG is fully committed to the General Data Protection Regulation (EU) 2016/679 (GDPR), implemented in Germany as the Datenschutz-Grundverordnung (DSGVO). We design our products and processes with data protection by design and by default (Art. 25 GDPR).</p>
              )}
            </LegalSection>

            <LegalSection title={de ? "Rechtsgrundlagen der Verarbeitung" : "Legal Bases for Processing"}>
              {de ? (
                <>
                  <p>Alle personenbezogenen Daten, die wir verarbeiten, haben eine definierte Rechtsgrundlage gemäß Art. 6 DSGVO:</p>
                  <ul style={{ paddingLeft: "1.25rem", display: "flex", flexDirection: "column", gap: "0.375rem" }}>
                    <li><strong>Art. 6 Abs. 1 lit. b</strong> — Verarbeitung zur Erfüllung vorvertraglicher oder vertraglicher Pflichten (Demo-Anfragen)</li>
                    <li><strong>Art. 6 Abs. 1 lit. f</strong> — Berechtigte Interessen (Serversicherheit, Website-Stabilität)</li>
                  </ul>
                </>
              ) : (
                <>
                  <p>All personal data we process has a defined legal basis under Art. 6 GDPR:</p>
                  <ul style={{ paddingLeft: "1.25rem", display: "flex", flexDirection: "column", gap: "0.375rem" }}>
                    <li><strong>Art. 6(1)(b)</strong> — Processing for pre-contractual or contractual purposes (demo requests)</li>
                    <li><strong>Art. 6(1)(f)</strong> — Legitimate interests (server security, website stability)</li>
                  </ul>
                </>
              )}
            </LegalSection>

            <LegalSection title={de ? "Datensparsamkeit" : "Data Minimisation"}>
              {de ? (
                <p>Wir erheben nur die für den jeweiligen Zweck unbedingt erforderlichen Mindestdaten. Shape.Med verarbeitet unter keinen Umständen Patientengesundheitsdaten. Es werden keine besonderen Kategorien personenbezogener Daten (Art. 9 DSGVO) verarbeitet.</p>
              ) : (
                <p>We collect only the minimum data necessary for each specific purpose. Shape.Med does not process patient health data under any circumstances. No special category data (Art. 9 GDPR) is processed.</p>
              )}
            </LegalSection>

            <LegalSection title={de ? "Auftragsverarbeitungsvertrag (AVV)" : "Data Processing Agreement (DPA)"}>
              {de ? (
                <p>Kunden, die Shape.Med nutzen, können einen Auftragsverarbeitungsvertrag (AVV) gemäß Art. 28 DSGVO anfordern. Bitte kontaktieren Sie uns unter <a href="mailto:info@shapeconsulting.app" style={{ color: "var(--color-primary)" }}>info@shapeconsulting.app</a>.</p>
              ) : (
                <p>Customers who use Shape.Med can request a Data Processing Agreement (Auftragsverarbeitungsvertrag / AVV) pursuant to Art. 28 GDPR. Please contact us at <a href="mailto:info@shapeconsulting.app" style={{ color: "var(--color-primary)" }}>info@shapeconsulting.app</a>.</p>
              )}
            </LegalSection>

            <LegalSection title={de ? "Sicherheitsmaßnahmen (TOMs)" : "Security Measures (TOMs)"}>
              {de ? (
                <>
                  <p>Wir setzen geeignete technische und organisatorische Maßnahmen um, um ein dem Risiko angemessenes Schutzniveau zu gewährleisten:</p>
                  <ul style={{ paddingLeft: "1.25rem", display: "flex", flexDirection: "column", gap: "0.375rem" }}>
                    <li>Verschlüsselung der Daten bei der Übertragung (TLS) und bei der Speicherung</li>
                    <li>Zugangskontrolle und rollenbasierte Berechtigungen</li>
                    <li>Regelmäßige Sicherheitsbewertungen</li>
                    <li>Serverinfrastruktur ausschließlich in Deutschland</li>
                  </ul>
                </>
              ) : (
                <>
                  <p>We implement appropriate technical and organisational measures to ensure security appropriate to the risk:</p>
                  <ul style={{ paddingLeft: "1.25rem", display: "flex", flexDirection: "column", gap: "0.375rem" }}>
                    <li>Encryption of data in transit (TLS) and at rest</li>
                    <li>Access controls and role-based permissions</li>
                    <li>Regular security assessments</li>
                    <li>Server infrastructure exclusively within Germany</li>
                  </ul>
                </>
              )}
            </LegalSection>

            <LegalSection title={de ? "Betroffenenrechte" : "Data Subject Rights"}>
              {de ? (
                <p>Wir unterstützen vollumfänglich alle Rechte betroffener Personen gemäß Kapitel III DSGVO (Art. 15–22). Zur Einreichung einer Anfrage kontaktieren Sie uns unter <a href="mailto:info@shapeconsulting.app" style={{ color: "var(--color-primary)" }}>info@shapeconsulting.app</a>. Alle Anfragen werden innerhalb von 30 Tagen bearbeitet.</p>
              ) : (
                <p>We fully support all rights of data subjects under Chapter III of the GDPR (Arts. 15–22). To submit a request, contact <a href="mailto:info@shapeconsulting.app" style={{ color: "var(--color-primary)" }}>info@shapeconsulting.app</a>. All requests are processed within 30 days.</p>
              )}
            </LegalSection>

            <LegalSection title={de ? "Aufsichtsbehörde" : "Supervisory Authority"}>
              <p><strong>Der Bundesbeauftragte für den Datenschutz und die Informationsfreiheit (BfDI)</strong><br />Graurheindorfer Str. 153, 53117 Bonn<br /><a href="https://www.bfdi.bund.de" target="_blank" rel="noopener noreferrer" style={{ color: "var(--color-primary)" }}>www.bfdi.bund.de</a></p>
            </LegalSection>
          </div>
        </Container>
      </div>
    </motion.div>
  );
}
