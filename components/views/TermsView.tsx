"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { LegalHeader, LegalSection } from "./LegalHeader";
import { useI18n } from "@/lib/i18n/context";

export function TermsView() {
  const { lang } = useI18n();
  const de = lang === "de";

  return (
    <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3, ease: "easeOut" }}>
      <LegalHeader
        title={de ? "Allgemeine Geschäftsbedingungen" : "Terms & Conditions"}
        subtitle={de ? "Stand: September 2026" : "As of September 2026"}
      />
      <div style={{ backgroundColor: "var(--color-bg)", paddingBlock: "4rem" }}>
        <Container>
          <div style={{ maxWidth: "760px" }}>

            {/* 1. Scope */}
            <LegalSection title={de ? "1. Geltungsbereich" : "1. Scope of Application"}>
              {de ? (
                <>
                  <p>Diese Allgemeinen Geschäftsbedingungen (AGB) gelten für alle Leistungen der <strong>SHAPE Consulting UG (haftungsbeschränkt)</strong>, Musterstraße 12, 80331 München (nachfolgend „SHAPE Consulting" oder „wir"), im Zusammenhang mit der Software Shape.Med.</p>
                  <p>Unsere Leistungen richten sich ausschließlich an Unternehmer im Sinne des § 14 BGB, das heißt natürliche oder juristische Personen oder rechtsfähige Personengesellschaften, die bei Abschluss des Rechtsgeschäfts in Ausübung ihrer gewerblichen oder selbständigen beruflichen Tätigkeit handeln – insbesondere Inhaber medizinischer Praxen und Gesundheitseinrichtungen.</p>
                  <p>Verbrauchern im Sinne des § 13 BGB ist die Nutzung unserer Dienste nicht gestattet. Entgegenstehende AGB des Nutzers finden keine Anwendung, auch wenn wir ihrer Geltung nicht gesondert widersprechen.</p>
                </>
              ) : (
                <>
                  <p>These General Terms and Conditions (GTC) apply to all services provided by <strong>SHAPE Consulting UG (haftungsbeschränkt)</strong>, Musterstraße 12, 80331 Munich, Germany (hereinafter "SHAPE Consulting" or "we"), in connection with the Shape.Med software.</p>
                  <p>Our services are directed exclusively at businesses within the meaning of § 14 BGB — i.e. natural or legal persons or legally capable partnerships acting in the exercise of their commercial or independent professional activity — in particular owners of medical practices and healthcare facilities.</p>
                  <p>Use of our services by consumers within the meaning of § 13 BGB is not permitted. Any conflicting terms and conditions of the user shall not apply, even if we do not separately object to them.</p>
                </>
              )}
            </LegalSection>

            {/* 2. Services */}
            <LegalSection title={de ? "2. Leistungsbeschreibung" : "2. Description of Services"}>
              {de ? (
                <>
                  <p>Shape.Med ist eine cloudbasierte Praxisverwaltungssoftware, die Praxisteams bei Organisation, Dokumentation und Kommunikation unterstützt. Shape.Med verarbeitet keine Patientendaten.</p>
                  <p>Die aktuell verfügbare Version ist eine Demoversion, die im Rahmen eines kostenlosen Testzeitraums zur Verfügung gestellt wird (siehe § 3). Der genaue Leistungsumfang der Vollversion wird zu einem späteren Zeitpunkt bekannt gegeben.</p>
                  <p>Wir behalten uns vor, die angebotenen Dienste jederzeit weiterzuentwickeln, zu ergänzen oder anzupassen. Wesentliche Änderungen werden den registrierten Nutzern rechtzeitig mitgeteilt.</p>
                </>
              ) : (
                <>
                  <p>Shape.Med is a cloud-based practice management software that supports practice teams with organisation, documentation, and communication. Shape.Med does not process patient data.</p>
                  <p>The currently available version is a demo made available during a free trial period (see § 3). The exact scope of the full version will be announced at a later date.</p>
                  <p>We reserve the right to further develop, supplement, or adjust the offered services at any time. Material changes will be communicated to registered users in due time.</p>
                </>
              )}
            </LegalSection>

            {/* 3. Trial period */}
            <LegalSection title={de ? "3. Kostenloser Testzeitraum" : "3. Free Trial Period"}>
              {de ? (
                <>
                  <p>Die Nutzung von Shape.Med ist derzeit kostenlos und im Rahmen eines Testzeitraums zugänglich. Ein Anspruch auf dauerhafte kostenlose Nutzung besteht nicht.</p>
                  <p>Wir behalten uns vor, nach Ablauf oder Beendigung des Testzeitraums ein kostenpflichtiges Abonnementmodell einzuführen. Registrierte Nutzer werden hierüber mit angemessenem Vorlauf informiert und haben die Möglichkeit, ihre Zugangsdaten vor Beginn einer Kostenpflicht zu löschen.</p>
                  <p>Eine Verlängerung des Testzeitraums oder die Einführung eines Entgelts begründet keine automatische Vertragsverlängerung; es bedarf einer ausdrücklichen Zustimmung des Nutzers.</p>
                </>
              ) : (
                <>
                  <p>The use of Shape.Med is currently free of charge and accessible during a trial period. There is no entitlement to permanent free use.</p>
                  <p>We reserve the right to introduce a paid subscription model after the expiry or termination of the trial period. Registered users will be informed with reasonable advance notice and will have the opportunity to delete their access data before any charges commence.</p>
                  <p>An extension of the trial period or the introduction of a fee does not constitute an automatic contract renewal; the explicit consent of the user is required.</p>
                </>
              )}
            </LegalSection>

            {/* 4. Registration and access */}
            <LegalSection title={de ? "4. Registrierung und Zugangsdaten" : "4. Registration and Access"}>
              {de ? (
                <>
                  <p>Der Zugang zu Shape.Med erfolgt nach vorheriger Anfrage und Freigabe durch SHAPE Consulting. Zugangsdaten sind vertraulich zu behandeln und dürfen nicht an Dritte weitergegeben werden.</p>
                  <p>Der Nutzer ist verpflichtet, SHAPE Consulting unverzüglich zu informieren, sofern ein Verdacht auf unbefugte Nutzung der Zugangsdaten besteht.</p>
                  <p>Ein Rechtsanspruch auf Zugang zu Shape.Med oder Freischaltung eines Accounts besteht nicht.</p>
                </>
              ) : (
                <>
                  <p>Access to Shape.Med is granted following prior request and approval by SHAPE Consulting. Access credentials must be kept confidential and must not be disclosed to third parties.</p>
                  <p>The user is obliged to notify SHAPE Consulting immediately if there is any suspicion of unauthorised use of the access credentials.</p>
                  <p>There is no legal right to access Shape.Med or to the activation of an account.</p>
                </>
              )}
            </LegalSection>

            {/* 5. Permitted use */}
            <LegalSection title={de ? "5. Nutzungsbedingungen und Pflichten des Nutzers" : "5. Permitted Use and User Obligations"}>
              {de ? (
                <>
                  <p>Der Nutzer verpflichtet sich, Shape.Med ausschließlich für legitime, berufliche Zwecke im Praxisalltag zu nutzen und dabei alle anwendbaren Gesetze und Vorschriften einzuhalten.</p>
                  <p>Folgende Handlungen sind untersagt:</p>
                  <ul style={{ paddingLeft: "1.25rem", display: "flex", flexDirection: "column", gap: "0.375rem" }}>
                    <li>Missbrauch, Manipulation oder unbefugter Zugriff auf Systeme oder Daten</li>
                    <li>Reverse Engineering, Dekompilierung oder Extraktion von Quellcode</li>
                    <li>Weitergabe oder Unterlizenzierung des Zugangs an Dritte</li>
                    <li>Nutzung der Software für wettbewerbswidrige Zwecke oder zur Entwicklung konkurrierender Produkte</li>
                    <li>Verarbeitung von Patientendaten oder besonderen Kategorien personenbezogener Daten über die Plattform</li>
                  </ul>
                </>
              ) : (
                <>
                  <p>The user undertakes to use Shape.Med exclusively for legitimate professional purposes in day-to-day practice operations and to comply with all applicable laws and regulations.</p>
                  <p>The following actions are prohibited:</p>
                  <ul style={{ paddingLeft: "1.25rem", display: "flex", flexDirection: "column", gap: "0.375rem" }}>
                    <li>Misuse, manipulation, or unauthorised access to systems or data</li>
                    <li>Reverse engineering, decompiling, or extracting source code</li>
                    <li>Transfer or sublicensing of access to third parties</li>
                    <li>Use of the software for anti-competitive purposes or to develop competing products</li>
                    <li>Processing of patient data or special categories of personal data via the platform</li>
                  </ul>
                </>
              )}
            </LegalSection>

            {/* 6. IP */}
            <LegalSection title={de ? "6. Geistiges Eigentum" : "6. Intellectual Property"}>
              {de ? (
                <p>Alle Rechte an Shape.Med – einschließlich Software, Design, Texte, Marken und sonstige Inhalte – liegen ausschließlich bei SHAPE Consulting UG oder deren Lizenzgebern. Der Nutzer erhält lediglich ein nicht übertragbares, nicht ausschließliches Recht zur Nutzung der Software im Rahmen dieser AGB. Es werden keine weiteren Rechte übertragen.</p>
              ) : (
                <p>All rights in Shape.Med — including software, design, text, trademarks, and other content — belong exclusively to SHAPE Consulting UG or its licensors. The user receives only a non-transferable, non-exclusive right to use the software within the scope of these GTC. No further rights are transferred.</p>
              )}
            </LegalSection>

            {/* 7. Liability */}
            <LegalSection title={de ? "7. Haftungsbeschränkung" : "7. Limitation of Liability"}>
              {de ? (
                <>
                  <p>SHAPE Consulting haftet unbeschränkt für Schäden aus der Verletzung des Lebens, des Körpers oder der Gesundheit sowie für Schäden, die auf vorsätzlichem oder grob fahrlässigem Verhalten beruhen.</p>
                  <p>Für leicht fahrlässige Verletzungen wesentlicher Vertragspflichten (Kardinalpflichten) ist die Haftung auf den vertragstypischen, vorhersehbaren Schaden begrenzt. Eine weitergehende Haftung für leichte Fahrlässigkeit ist ausgeschlossen.</p>
                  <p>Da Shape.Med derzeit kostenlos und als Demoversion zur Verfügung gestellt wird, übernimmt SHAPE Consulting keine Gewährleistung für eine bestimmte Verfügbarkeit, Fehlerfreiheit oder Eignung für einen bestimmten Zweck.</p>
                  <p>Shape.Med ist kein Medizinprodukt und ersetzt keine medizinische Fachberatung. SHAPE Consulting haftet nicht für Entscheidungen, die auf Basis von Shape.Med-Inhalten getroffen werden.</p>
                </>
              ) : (
                <>
                  <p>SHAPE Consulting is liable without limitation for damages arising from injury to life, body, or health, and for damages based on intentional or grossly negligent conduct.</p>
                  <p>For slightly negligent breaches of material contractual obligations (cardinal duties), liability is limited to the typical, foreseeable damage. Further liability for slight negligence is excluded.</p>
                  <p>As Shape.Med is currently provided free of charge as a demo version, SHAPE Consulting provides no warranty for any specific availability, freedom from defects, or fitness for a particular purpose.</p>
                  <p>Shape.Med is not a medical device and does not replace professional medical advice. SHAPE Consulting is not liable for decisions made on the basis of Shape.Med content.</p>
                </>
              )}
            </LegalSection>

            {/* 8. Termination */}
            <LegalSection title={de ? "8. Laufzeit und Kündigung" : "8. Term and Termination"}>
              {de ? (
                <>
                  <p>Das Nutzungsverhältnis beginnt mit der Freischaltung des Zugangs durch SHAPE Consulting und läuft auf unbestimmte Zeit, solange der Testzeitraum andauert.</p>
                  <p>Beide Parteien können das Nutzungsverhältnis jederzeit ohne Angabe von Gründen mit sofortiger Wirkung beenden.</p>
                  <p>SHAPE Consulting ist berechtigt, den Zugang fristlos zu sperren oder zu beenden, wenn der Nutzer gegen diese AGB verstößt oder ein wichtiger Grund vorliegt.</p>
                  <p>Nach Beendigung des Nutzungsverhältnisses werden sämtliche Zugangsdaten des Nutzers auf Anfrage gelöscht, soweit keine gesetzlichen Aufbewahrungspflichten entgegenstehen.</p>
                </>
              ) : (
                <>
                  <p>The user relationship commences upon activation of access by SHAPE Consulting and runs for an indefinite period for the duration of the trial period.</p>
                  <p>Either party may terminate the user relationship at any time without giving reasons, with immediate effect.</p>
                  <p>SHAPE Consulting is entitled to block or terminate access without notice if the user violates these GTC or if there is good cause.</p>
                  <p>Upon termination, all user access data will be deleted upon request, unless statutory retention obligations apply.</p>
                </>
              )}
            </LegalSection>

            {/* 9. Changes to GTC */}
            <LegalSection title={de ? "9. Änderungen der AGB" : "9. Changes to These Terms"}>
              {de ? (
                <p>SHAPE Consulting behält sich vor, diese AGB jederzeit zu ändern. Registrierte Nutzer werden über wesentliche Änderungen per E-Mail oder durch einen Hinweis bei der Anmeldung informiert. Sofern der Nutzer den Änderungen nicht innerhalb von 14 Tagen nach Bekanntgabe widerspricht und die Nutzung von Shape.Med fortsetzt, gelten die geänderten AGB als akzeptiert. Auf dieses Widerspruchsrecht und die Folgen des Schweigens wird bei der Bekanntgabe der Änderungen ausdrücklich hingewiesen.</p>
              ) : (
                <p>SHAPE Consulting reserves the right to amend these GTC at any time. Registered users will be notified of material changes by email or by a notice upon login. If the user does not object to the changes within 14 days of notification and continues to use Shape.Med, the amended GTC are deemed accepted. Users will be expressly informed of this right to object and the consequences of silence at the time of notification.</p>
              )}
            </LegalSection>

            {/* 10. Governing law */}
            <LegalSection title={de ? "10. Anwendbares Recht und Gerichtsstand" : "10. Governing Law and Jurisdiction"}>
              {de ? (
                <>
                  <p>Es gilt das Recht der Bundesrepublik Deutschland unter Ausschluss des UN-Kaufrechts (CISG).</p>
                  <p>Erfüllungsort und ausschließlicher Gerichtsstand für alle Streitigkeiten aus oder im Zusammenhang mit diesen AGB ist München, soweit der Nutzer Kaufmann, juristische Person des öffentlichen Rechts oder öffentlich-rechtliches Sondervermögen ist.</p>
                  <p>Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.</p>
                </>
              ) : (
                <>
                  <p>The laws of the Federal Republic of Germany apply, excluding the UN Convention on Contracts for the International Sale of Goods (CISG).</p>
                  <p>The place of performance and exclusive place of jurisdiction for all disputes arising from or in connection with these GTC is Munich, insofar as the user is a merchant, a legal entity under public law, or a special fund under public law.</p>
                  <p>We are not willing or obliged to participate in dispute resolution proceedings before a consumer arbitration board.</p>
                </>
              )}
            </LegalSection>

            {/* 11. Severability */}
            <LegalSection title={de ? "11. Salvatorische Klausel" : "11. Severability"}>
              {de ? (
                <p>Sollten einzelne Bestimmungen dieser AGB ganz oder teilweise unwirksam sein oder werden, berührt dies die Wirksamkeit der übrigen Bestimmungen nicht. Die unwirksame Bestimmung ist durch eine wirksame zu ersetzen, die dem wirtschaftlichen Zweck der unwirksamen Bestimmung am nächsten kommt.</p>
              ) : (
                <p>Should individual provisions of these GTC be or become wholly or partially invalid, this shall not affect the validity of the remaining provisions. The invalid provision shall be replaced by a valid one that comes closest to the economic purpose of the invalid provision.</p>
              )}
            </LegalSection>

          </div>
        </Container>
      </div>
    </motion.div>
  );
}
