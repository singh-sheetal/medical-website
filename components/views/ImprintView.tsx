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
              <p><strong>SHAPE Consulting UG (haftungsbeschränkt)</strong><br />Musterstraße 12<br />{de ? "80331 München, Deutschland" : "80331 Munich, Germany"}</p>
            </LegalSection>

            <LegalSection title={de ? "Kontakt" : "Contact"}>
              <p>{de ? "Telefon" : "Phone"}: +49 175 959 67 81<br />E-Mail: <a href="mailto:info@shapeconsulting.app" style={{ color: "var(--color-primary)" }}>info@shapeconsulting.app</a><br />Website: <a href="https://www.shapeconsulting.app" target="_blank" rel="noopener noreferrer" style={{ color: "var(--color-primary)" }}>www.shapeconsulting.app</a></p>
            </LegalSection>

            <LegalSection title={de ? "Geschäftsführer" : "Managing Director"}>
              <p>Dr. Thomas Weber</p>
            </LegalSection>

            <LegalSection title={de ? "Handelsregister" : "Commercial Register"}>
              <p>Registergericht: Amtsgericht München<br />Registernummer: HRB 000000 <em style={{ color: "var(--color-text-muted)", fontSize: "var(--text-sm)" }}>{de ? "(Platzhalter – wird aktualisiert)" : "(placeholder — to be updated)"}</em></p>
            </LegalSection>

            <LegalSection title={de ? "Umsatzsteuer-Identifikationsnummer" : "VAT Identification Number"}>
              <p>{de ? "Umsatzsteuer-Identifikationsnummer gemäß § 27a UStG:" : "VAT identification number pursuant to § 27a UStG:"}<br />DE 000 000 000 <em style={{ color: "var(--color-text-muted)", fontSize: "var(--text-sm)" }}>{de ? "(Platzhalter – wird aktualisiert)" : "(placeholder — to be updated)"}</em></p>
            </LegalSection>

            <LegalSection title={de ? "Streitschlichtung" : "Dispute Resolution"}>
              {de ? (
                <p>Die EU-Kommission stellt eine Plattform zur Online-Streitbeilegung bereit: <a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noopener noreferrer" style={{ color: "var(--color-primary)" }}>ec.europa.eu/consumers/odr</a>. Wir sind nicht verpflichtet und nicht bereit, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.</p>
              ) : (
                <p>The EU Commission provides a platform for online dispute resolution: <a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noopener noreferrer" style={{ color: "var(--color-primary)" }}>ec.europa.eu/consumers/odr</a>. We are not obliged to participate in dispute resolution proceedings before a consumer arbitration board.</p>
              )}
            </LegalSection>

            <LegalSection title={de ? "Haftung für Inhalte" : "Liability for Content"}>
              {de ? (
                <p>Als Diensteanbieter sind wir gemäß § 7 Abs. 1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht unter der Auflage, übermittelte oder gespeicherte fremde Informationen zu überwachen. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.</p>
              ) : (
                <p>As a service provider we are responsible for our own content under general legislation (§ 7(1) TMG). We are not obligated to monitor third-party information transmitted or stored. Upon becoming aware of legal infringements we will remove relevant content immediately.</p>
              )}
            </LegalSection>

            <LegalSection title={de ? "Urheberrecht" : "Copyright"}>
              {de ? (
                <p>Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.</p>
              ) : (
                <p>The content and works created by the site operators on these pages are subject to German copyright law. Duplication, processing, or distribution beyond the scope of copyright law requires prior written consent.</p>
              )}
            </LegalSection>
          </div>
        </Container>
      </div>
    </motion.div>
  );
}
