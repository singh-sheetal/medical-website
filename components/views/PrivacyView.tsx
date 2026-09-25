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

            {/* 1. Controller */}
            <LegalSection title={de ? "1. Verantwortlicher" : "1. Controller"}>
              {de ? (
                <>
                  <p>Verantwortlicher im Sinne der DSGVO ist:</p>
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

            {/* 2. General information */}
            <LegalSection title={de ? "2. Allgemeine Hinweise zur Datenverarbeitung" : "2. General Information on Data Processing"}>
              {de ? (
                <>
                  <p>Diese Datenschutzerklärung informiert Sie über die Art, den Umfang und den Zweck der Verarbeitung personenbezogener Daten auf dieser Website gemäß der Datenschutz-Grundverordnung (DSGVO) und dem Telekommunikation-Digitale-Dienste-Datenschutz-Gesetz (TDDDG).</p>
                  <p>Personenbezogene Daten werden nur erhoben, soweit dies zur Bereitstellung einer funktionsfähigen Website sowie unserer Inhalte und Leistungen erforderlich ist. Die Erhebung und Verwendung personenbezogener Daten erfolgt regelmäßig nur nach Einwilligung der Nutzerin oder des Nutzers. Eine Ausnahme gilt in solchen Fällen, in denen eine vorherige Einholung einer Einwilligung aus tatsächlichen Gründen nicht möglich ist und die Verarbeitung der Daten durch gesetzliche Vorschriften gestattet ist.</p>
                </>
              ) : (
                <>
                  <p>This privacy policy informs you about the nature, scope, and purpose of the processing of personal data on this website in accordance with the General Data Protection Regulation (GDPR) and the German Telecommunications Digital Services Data Protection Act (TDDDG).</p>
                  <p>Personal data is only collected to the extent necessary to provide a functional website and our content and services. Collection and use of personal data generally occurs only with the consent of the user, except where prior consent is not possible for factual reasons and processing is permitted by law.</p>
                </>
              )}
            </LegalSection>

            {/* 3. Legal bases */}
            <LegalSection title={de ? "3. Rechtsgrundlagen der Verarbeitung" : "3. Legal Bases for Processing"}>
              {de ? (
                <>
                  <p>Die Verarbeitung personenbezogener Daten erfolgt auf Grundlage der folgenden Rechtsgrundlagen der DSGVO:</p>
                  <ul style={{ paddingLeft: "1.25rem", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                    <li><strong>Art. 6 Abs. 1 lit. a DSGVO</strong> – Einwilligung der betroffenen Person</li>
                    <li><strong>Art. 6 Abs. 1 lit. b DSGVO</strong> – Erfüllung eines Vertrages oder vorvertraglicher Maßnahmen</li>
                    <li><strong>Art. 6 Abs. 1 lit. c DSGVO</strong> – Erfüllung einer rechtlichen Verpflichtung</li>
                    <li><strong>Art. 6 Abs. 1 lit. f DSGVO</strong> – Wahrung berechtigter Interessen des Verantwortlichen</li>
                  </ul>
                </>
              ) : (
                <>
                  <p>Personal data is processed on the basis of the following legal grounds under GDPR:</p>
                  <ul style={{ paddingLeft: "1.25rem", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                    <li><strong>Art. 6(1)(a) GDPR</strong> – Consent of the data subject</li>
                    <li><strong>Art. 6(1)(b) GDPR</strong> – Performance of a contract or pre-contractual measures</li>
                    <li><strong>Art. 6(1)(c) GDPR</strong> – Compliance with a legal obligation</li>
                    <li><strong>Art. 6(1)(f) GDPR</strong> – Legitimate interests of the controller</li>
                  </ul>
                </>
              )}
            </LegalSection>

            {/* 4. Data we collect */}
            <LegalSection title={de ? "4. Erhobene Daten und Zwecke" : "4. Data Collected and Purposes"}>
              {de ? (
                <>
                  <p><strong>Server-Logdaten:</strong> Beim Besuch dieser Website erfassen unsere Server automatisch Standardlogdaten: IP-Adresse, Browsertyp, Betriebssystem, Referrer-URL sowie Datum und Uhrzeit des Zugriffs. Diese Daten sind nicht bestimmten Personen zuordenbar und werden nicht mit anderen Datenquellen zusammengeführt. Rechtsgrundlage: Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an Sicherheit und Stabilität).</p>
                  <p><strong>Demo-Anfrage-Formular:</strong> Bei Einreichung einer Demo-Anfrage erheben wir: Name, E-Mail-Adresse, Telefonnummer, Praxisname und medizinische Fachrichtung. Diese Daten werden ausschließlich zur Beantwortung Ihrer Anfrage und Vereinbarung einer Produktdemonstration verwendet. Rechtsgrundlage: Art. 6 Abs. 1 lit. b DSGVO.</p>
                  <p><strong>Session-Cookie:</strong> Diese Website setzt ein einzelnes technisch notwendiges Session-Cookie zur Authentifizierung. Dieses Cookie ist für den Betrieb der Website erforderlich und wird nach dem Schließen des Browsers oder nach 30 Minuten Inaktivität gelöscht. Es werden keine Tracking-, Werbe- oder Analyse-Cookies eingesetzt.</p>
                </>
              ) : (
                <>
                  <p><strong>Server log data:</strong> When you visit this website, our servers automatically record standard log data: IP address, browser type, operating system, referring URL, and date/time of access. This data cannot be attributed to specific individuals and is not merged with other data sources. Legal basis: Art. 6(1)(f) GDPR (legitimate interest in security and stability).</p>
                  <p><strong>Demo request form:</strong> When submitting a demo request, we collect: name, email address, phone number, practice name, and medical specialty. This data is used solely to respond to your inquiry and arrange a product demonstration. Legal basis: Art. 6(1)(b) GDPR.</p>
                  <p><strong>Session cookie:</strong> This website sets a single technically necessary session cookie for authentication. This cookie is required for the operation of the website and is deleted when the browser is closed or after 30 minutes of inactivity. No tracking, advertising, or analytics cookies are used.</p>
                </>
              )}
            </LegalSection>

            {/* 5. Cookies */}
            <LegalSection title={de ? "5. Cookies und Speicherung auf Endgeräten (§ 25 TDDDG)" : "5. Cookies and Device Storage (§ 25 TDDDG)"}>
              {de ? (
                <>
                  <p>Gemäß § 25 TDDDG ist für das Speichern von Informationen auf dem Endgerät der Nutzerin oder des Nutzers eine Einwilligung erforderlich, es sei denn, die Speicherung ist unbedingt erforderlich, damit der Anbieter einen vom Nutzer ausdrücklich gewünschten Dienst bereitstellen kann.</p>
                  <p>Wir setzen ausschließlich ein technisch notwendiges Session-Cookie ein (<code>__shape_auth</code>), das den Zugang zu dieser passwortgeschützten Demo-Umgebung ermöglicht. Da dieses Cookie technisch unbedingt erforderlich ist, bedarf es keiner gesonderten Einwilligung gemäß § 25 Abs. 2 Nr. 2 TDDDG.</p>
                  <p>Es werden keine Cookies zu Analyse-, Marketing- oder Trackingzwecken eingesetzt.</p>
                </>
              ) : (
                <>
                  <p>Under § 25 TDDDG, storing information on a user's device requires consent unless the storage is strictly necessary for the provider to deliver a service expressly requested by the user.</p>
                  <p>We use only a single technically necessary session cookie (<code>__shape_auth</code>), which enables access to this password-protected demo environment. As this cookie is technically essential, no separate consent is required under § 25(2)(2) TDDDG.</p>
                  <p>No cookies are used for analytics, marketing, or tracking purposes.</p>
                </>
              )}
            </LegalSection>

            {/* 6. Hosting */}
            <LegalSection title={de ? "6. Hosting und Auftragsverarbeiter" : "6. Hosting and Data Processors"}>
              {de ? (
                <>
                  <p>Wir setzen folgende Dienstleister ein. Mit jedem Dienstleister wird ein Auftragsverarbeitungsvertrag (AVV) gemäß Art. 28 DSGVO abgeschlossen oder ist abzuschließen:</p>
                  <p>
                    <strong>Vercel Inc.</strong><br />
                    440 N Barranca Avenue #4133, Covina, CA 91723, USA<br />
                    Zweck: Hosting und Bereitstellung dieser Website.<br />
                    Da Vercel ein US-amerikanisches Unternehmen ist, können personenbezogene Daten in die USA übermittelt werden. Grundlage dieser Übermittlung sind Standardvertragsklauseln (SCCs) gemäß Art. 46 Abs. 2 lit. c DSGVO.<br />
                    Datenschutzerklärung: <a href="https://vercel.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer" style={{ color: "var(--color-primary)" }}>vercel.com/legal/privacy-policy</a>
                  </p>
                  <p>
                    <strong>Resend (Plus Five Five, Inc.)</strong><br />
                    2261 Market Street #5039, San Francisco, CA 94114, USA<br />
                    Zweck: Versand von Transaktions-E-Mails (Bestätigung von Demo-Anfragen).<br />
                    Datenübermittlung in die USA auf Basis von SCCs gemäß Art. 46 Abs. 2 lit. c DSGVO.<br />
                    Datenschutzerklärung: <a href="https://resend.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer" style={{ color: "var(--color-primary)" }}>resend.com/legal/privacy-policy</a>
                  </p>
                </>
              ) : (
                <>
                  <p>We use the following service providers. A Data Processing Agreement (DPA) pursuant to Art. 28 GDPR has been or will be concluded with each provider:</p>
                  <p>
                    <strong>Vercel Inc.</strong><br />
                    440 N Barranca Avenue #4133, Covina, CA 91723, USA<br />
                    Purpose: Hosting and delivery of this website.<br />
                    As Vercel is a US company, personal data may be transferred to the USA. Such transfers are based on Standard Contractual Clauses (SCCs) pursuant to Art. 46(2)(c) GDPR.<br />
                    Privacy policy: <a href="https://vercel.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer" style={{ color: "var(--color-primary)" }}>vercel.com/legal/privacy-policy</a>
                  </p>
                  <p>
                    <strong>Resend (Plus Five Five, Inc.)</strong><br />
                    2261 Market Street #5039, San Francisco, CA 94114, USA<br />
                    Purpose: Sending transactional emails (demo request confirmations).<br />
                    Data transferred to the USA on the basis of SCCs pursuant to Art. 46(2)(c) GDPR.<br />
                    Privacy policy: <a href="https://resend.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer" style={{ color: "var(--color-primary)" }}>resend.com/legal/privacy-policy</a>
                  </p>
                </>
              )}
            </LegalSection>

            {/* 7. Retention */}
            <LegalSection title={de ? "7. Speicherdauern" : "7. Data Retention Periods"}>
              {de ? (
                <ul style={{ paddingLeft: "1.25rem", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                  <li><strong>Server-Logdaten:</strong> Automatische Löschung nach spätestens 30 Tagen</li>
                  <li><strong>Demo-Anfragen:</strong> Aufbewahrung bis zum Abschluss der Anfrage; anschließend Löschung, sofern keine gesetzlichen Aufbewahrungspflichten bestehen</li>
                  <li><strong>Session-Cookie:</strong> Sitzungsende oder 30 Minuten Inaktivität</li>
                  <li><strong>E-Mail-Korrespondenz:</strong> Aufbewahrung gemäß gesetzlicher Aufbewahrungsfristen (§ 257 HGB, § 147 AO), in der Regel 6–10 Jahre</li>
                </ul>
              ) : (
                <ul style={{ paddingLeft: "1.25rem", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                  <li><strong>Server log data:</strong> Automatically deleted after no more than 30 days</li>
                  <li><strong>Demo requests:</strong> Retained until the inquiry is completed; then deleted unless statutory retention obligations apply</li>
                  <li><strong>Session cookie:</strong> Deleted at end of session or after 30 minutes of inactivity</li>
                  <li><strong>Email correspondence:</strong> Retained in accordance with statutory retention periods (§ 257 HGB, § 147 AO), generally 6–10 years</li>
                </ul>
              )}
            </LegalSection>

            {/* 8. No patient data */}
            <LegalSection title={de ? "8. Keine Patientendaten" : "8. No Patient Data"}>
              {de ? (
                <p>Shape.Med verarbeitet keinerlei Patientendaten. Es handelt sich ausschließlich um ein Praxisverwaltungstool für Teamorganisation, Dokumentation und Kommunikation. Es werden keine besonderen Kategorien personenbezogener Daten im Sinne von Art. 9 DSGVO verarbeitet.</p>
              ) : (
                <p>Shape.Med does not process patient data of any kind. It is a practice management tool for team organisation, documentation, and communication only. No special category data within the meaning of Art. 9 GDPR is processed.</p>
              )}
            </LegalSection>

            {/* 9. Rights */}
            <LegalSection title={de ? "9. Ihre Rechte als betroffene Person" : "9. Your Rights as a Data Subject"}>
              {de ? (
                <>
                  <p>Sie haben gegenüber uns folgende Rechte hinsichtlich der Sie betreffenden personenbezogenen Daten:</p>
                  <ul style={{ paddingLeft: "1.25rem", display: "flex", flexDirection: "column", gap: "0.625rem" }}>
                    <li><strong>Auskunftsrecht (Art. 15 DSGVO):</strong> Sie haben das Recht, Auskunft darüber zu erhalten, ob und welche personenbezogenen Daten wir über Sie verarbeiten, sowie Informationen über Zwecke, Empfänger und Speicherdauer.</li>
                    <li><strong>Berichtigungsrecht (Art. 16 DSGVO):</strong> Sie haben das Recht, die Berichtigung unrichtiger oder die Vervollständigung unvollständiger personenbezogener Daten zu verlangen.</li>
                    <li><strong>Recht auf Löschung (Art. 17 DSGVO):</strong> Sie haben das Recht, die Löschung Ihrer personenbezogenen Daten zu verlangen, sofern die gesetzlichen Voraussetzungen dafür erfüllt sind.</li>
                    <li><strong>Recht auf Einschränkung der Verarbeitung (Art. 18 DSGVO):</strong> Sie haben das Recht, unter bestimmten Umständen die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.</li>
                    <li><strong>Recht auf Datenübertragbarkeit (Art. 20 DSGVO):</strong> Sie haben das Recht, die Sie betreffenden personenbezogenen Daten in einem strukturierten, gängigen und maschinenlesbaren Format zu erhalten.</li>
                    <li><strong>Widerspruchsrecht (Art. 21 DSGVO):</strong> Sie haben das Recht, aus Gründen, die sich aus Ihrer besonderen Situation ergeben, jederzeit gegen die Verarbeitung Ihrer personenbezogenen Daten Widerspruch einzulegen, soweit diese auf Art. 6 Abs. 1 lit. f DSGVO beruht.</li>
                    <li><strong>Recht auf Widerruf der Einwilligung (Art. 7 Abs. 3 DSGVO):</strong> Soweit die Datenverarbeitung auf einer Einwilligung beruht, können Sie diese jederzeit mit Wirkung für die Zukunft widerrufen. Die Rechtmäßigkeit der bis zum Widerruf erfolgten Verarbeitung bleibt unberührt.</li>
                  </ul>
                  <p style={{ marginTop: "1rem" }}>Zur Ausübung Ihrer Rechte wenden Sie sich bitte an:<br />
                    <strong>SHAPE Consulting UG (haftungsbeschränkt)</strong><br />
                    Musterstraße 12, 80331 München<br />
                    E-Mail: <a href="mailto:info@shapeconsulting.app" style={{ color: "var(--color-primary)" }}>info@shapeconsulting.app</a>
                  </p>
                </>
              ) : (
                <>
                  <p>You have the following rights regarding the personal data we hold about you:</p>
                  <ul style={{ paddingLeft: "1.25rem", display: "flex", flexDirection: "column", gap: "0.625rem" }}>
                    <li><strong>Right of access (Art. 15 GDPR):</strong> You have the right to obtain confirmation of whether and which personal data we process about you, including information about purposes, recipients, and retention periods.</li>
                    <li><strong>Right to rectification (Art. 16 GDPR):</strong> You have the right to request correction of inaccurate or completion of incomplete personal data.</li>
                    <li><strong>Right to erasure (Art. 17 GDPR):</strong> You have the right to request deletion of your personal data where the statutory conditions are met.</li>
                    <li><strong>Right to restriction of processing (Art. 18 GDPR):</strong> You have the right to request restriction of the processing of your personal data under certain circumstances.</li>
                    <li><strong>Right to data portability (Art. 20 GDPR):</strong> You have the right to receive the personal data concerning you in a structured, commonly used and machine-readable format.</li>
                    <li><strong>Right to object (Art. 21 GDPR):</strong> You have the right to object at any time to the processing of your personal data on grounds relating to your particular situation, where processing is based on Art. 6(1)(f) GDPR.</li>
                    <li><strong>Right to withdraw consent (Art. 7(3) GDPR):</strong> Where processing is based on consent, you may withdraw it at any time with effect for the future. The lawfulness of processing prior to withdrawal is not affected.</li>
                  </ul>
                  <p style={{ marginTop: "1rem" }}>To exercise any of these rights, please contact:<br />
                    <strong>SHAPE Consulting UG (haftungsbeschränkt)</strong><br />
                    Musterstraße 12, 80331 Munich, Germany<br />
                    Email: <a href="mailto:info@shapeconsulting.app" style={{ color: "var(--color-primary)" }}>info@shapeconsulting.app</a>
                  </p>
                </>
              )}
            </LegalSection>

            {/* 10. Automated decision-making */}
            <LegalSection title={de ? "10. Automatisierte Entscheidungsfindung (Art. 22 DSGVO)" : "10. Automated Decision-Making (Art. 22 GDPR)"}>
              {de ? (
                <p>Eine automatisierte Entscheidungsfindung einschließlich Profiling gemäß Art. 22 DSGVO findet nicht statt. Wir setzen keine Verfahren ein, die ausschließlich auf einer automatisierten Verarbeitung beruhen und die Ihnen gegenüber rechtliche Wirkung entfalten oder Sie in ähnlicher Weise erheblich beeinträchtigen.</p>
              ) : (
                <p>No automated decision-making including profiling pursuant to Art. 22 GDPR takes place. We do not use any processes based solely on automated processing that produce legal effects concerning you or similarly significantly affect you.</p>
              )}
            </LegalSection>

            {/* 11. Supervisory authority */}
            <LegalSection title={de ? "11. Beschwerderecht bei der Aufsichtsbehörde" : "11. Right to Lodge a Complaint"}>
              {de ? (
                <>
                  <p>Unbeschadet eines anderweitigen verwaltungsrechtlichen oder gerichtlichen Rechtsbehelfs steht Ihnen das Recht auf Beschwerde bei einer Aufsichtsbehörde zu, insbesondere in dem Mitgliedstaat Ihres Aufenthaltsorts, Ihres Arbeitsplatzes oder des Orts des mutmaßlichen Verstoßes, wenn Sie der Ansicht sind, dass die Verarbeitung der Sie betreffenden personenbezogenen Daten gegen die DSGVO verstößt.</p>
                  <p>
                    <strong>Der Bundesbeauftragte für den Datenschutz und die Informationsfreiheit (BfDI)</strong><br />
                    Graurheindorfer Str. 153, 53117 Bonn<br />
                    <a href="https://www.bfdi.bund.de" target="_blank" rel="noopener noreferrer" style={{ color: "var(--color-primary)" }}>www.bfdi.bund.de</a>
                  </p>
                </>
              ) : (
                <>
                  <p>Without prejudice to any other administrative or judicial remedy, you have the right to lodge a complaint with a supervisory authority, in particular in the member state of your habitual residence, place of work, or place of the alleged infringement, if you consider that the processing of your personal data infringes the GDPR.</p>
                  <p>
                    <strong>Der Bundesbeauftragte für den Datenschutz und die Informationsfreiheit (BfDI)</strong><br />
                    Graurheindorfer Str. 153, 53117 Bonn<br />
                    <a href="https://www.bfdi.bund.de" target="_blank" rel="noopener noreferrer" style={{ color: "var(--color-primary)" }}>www.bfdi.bund.de</a>
                  </p>
                </>
              )}
            </LegalSection>

          </div>
        </Container>
      </div>
    </motion.div>
  );
}
