"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { LegalHeader, LegalSection } from "./LegalHeader";
import { useI18n } from "@/lib/i18n/context";

export function ImprintView() {
  const { lang } = useI18n();
  const de = lang === "de";

  return (
    <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3, ease: "easeOut" }}>
      <LegalHeader
        title={de ? "Impressum" : "Imprint"}
        subtitle={de ? "Angaben gemäß § 5 TMG" : "Information pursuant to § 5 TMG"}
      />
      <div style={{ backgroundColor: "var(--color-bg)", paddingBlock: "4rem" }}>
        <Container>
          <div style={{ maxWidth: "760px" }}>

            <LegalSection title={de ? "Unternehmen" : "Company"}>
              <p>
                <strong>SHAPE Consulting UG (haftungsbeschränkt)</strong><br />
                Musterstraße 12<br />
                {de ? "80331 München" : "80331 Munich"}<br />
                {de ? "Deutschland" : "Germany"}
              </p>
            </LegalSection>

            <LegalSection title={de ? "Kontakt" : "Contact"}>
              <p>
                {de ? "Telefon" : "Phone"}: +49 175 959 67 81<br />
                E-Mail: <a href="mailto:info@shapeconsulting.app" style={{ color: "var(--color-primary)" }}>info@shapeconsulting.app</a><br />
                Website: <a href="https://ashutosh.de" target="_blank" rel="noopener noreferrer" style={{ color: "var(--color-primary)" }}>ashutosh.de</a>
              </p>
            </LegalSection>

            <LegalSection title={de ? "Geschäftsführer" : "Managing Director"}>
              <p>
                {de
                  ? <em style={{ color: "var(--color-text-muted)" }}>Wird ergänzt</em>
                  : <em style={{ color: "var(--color-text-muted)" }}>To be completed</em>
                }
              </p>
            </LegalSection>

            <LegalSection title={de ? "Handelsregister" : "Commercial Register"}>
              <p>
                {de ? "Registergericht:" : "Registry court:"} Amtsgericht München<br />
                {de ? "Registernummer:" : "Registration number:"}{" "}
                <em style={{ color: "var(--color-text-muted)", fontSize: "var(--text-sm)" }}>
                  {de ? "Wird ergänzt" : "To be completed"}
                </em>
              </p>
            </LegalSection>

            <LegalSection title={de ? "Umsatzsteuer-Identifikationsnummer" : "VAT Identification Number"}>
              <p>
                {de
                  ? "Umsatzsteuer-Identifikationsnummer gemäß § 27a UStG:"
                  : "VAT identification number pursuant to § 27a UStG:"
                }<br />
                <em style={{ color: "var(--color-text-muted)", fontSize: "var(--text-sm)" }}>
                  {de ? "Wird ergänzt" : "To be completed"}
                </em>
              </p>
            </LegalSection>

            <LegalSection title={de ? "Streitschlichtung" : "Dispute Resolution"}>
              {de ? (
                <p>Die EU-Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: <a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noopener noreferrer" style={{ color: "var(--color-primary)" }}>ec.europa.eu/consumers/odr</a>.<br /><br />Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen. Unsere Angebote richten sich ausschließlich an Unternehmer im Sinne des § 14 BGB.</p>
              ) : (
                <p>The EU Commission provides a platform for online dispute resolution (ODR): <a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noopener noreferrer" style={{ color: "var(--color-primary)" }}>ec.europa.eu/consumers/odr</a>.<br /><br />We are not willing or obliged to participate in dispute resolution proceedings before a consumer arbitration board. Our services are directed exclusively at businesses within the meaning of § 14 BGB.</p>
              )}
            </LegalSection>

            <LegalSection title={de ? "Haftung für Inhalte" : "Liability for Content"}>
              {de ? (
                <p>Als Diensteanbieter sind wir gemäß § 7 Abs. 1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.</p>
              ) : (
                <p>As a service provider we are responsible for our own content under general legislation (§ 7(1) TMG). Under §§ 8–10 TMG we are not obligated to monitor third-party information transmitted or stored. Upon becoming aware of legal infringements we will remove the relevant content immediately.</p>
              )}
            </LegalSection>

            <LegalSection title={de ? "Urheberrecht" : "Copyright"}>
              {de ? (
                <p>Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung oder jede Art der Verwertung außerhalb der Grenzen des Urheberrechts bedürfen der schriftlichen Zustimmung des jeweiligen Autors.</p>
              ) : (
                <p>The content and works created by the site operators on these pages are subject to German copyright law. Reproduction, editing, distribution, or any form of use beyond the scope of copyright law requires the prior written consent of the respective author.</p>
              )}
            </LegalSection>

          </div>
        </Container>
      </div>
    </motion.div>
  );
}
