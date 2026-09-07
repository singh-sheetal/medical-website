"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { LegalHeader, LegalSection } from "./LegalHeader";

export function ImprintView() {
  return (
    <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3, ease: "easeOut" }}>
      <LegalHeader title="Imprint" subtitle="Impressum · Information pursuant to § 5 TMG" />
      <div style={{ backgroundColor: "var(--color-bg)", paddingBlock: "4rem" }}>
        <Container>
          <div style={{ maxWidth: "760px" }}>
            <LegalSection title="Company">
              <p><strong>SHAPE Consulting UG (haftungsbeschränkt)</strong><br />Musterstraße 12<br />80331 Munich, Germany</p>
            </LegalSection>
            <LegalSection title="Contact">
              <p>Phone: +49 175 959 67 81<br />Email: <a href="mailto:info@shapeconsulting.app" style={{ color: "var(--color-primary)" }}>info@shapeconsulting.app</a><br />Website: <a href="https://www.shapeconsulting.app" target="_blank" rel="noopener noreferrer" style={{ color: "var(--color-primary)" }}>www.shapeconsulting.app</a></p>
            </LegalSection>
            <LegalSection title="Managing Director">
              <p>Dr. Thomas Weber</p>
            </LegalSection>
            <LegalSection title="Commercial Register">
              <p>Registergericht: Amtsgericht München<br />Registernummer: HRB 000000 <em style={{ color: "var(--color-text-muted)", fontSize: "var(--text-sm)" }}>(placeholder — to be updated)</em></p>
            </LegalSection>
            <LegalSection title="VAT Identification Number">
              <p>Umsatzsteuer-Identifikationsnummer gemäß § 27a UStG:<br />DE 000 000 000 <em style={{ color: "var(--color-text-muted)", fontSize: "var(--text-sm)" }}>(placeholder — to be updated)</em></p>
            </LegalSection>
            <LegalSection title="Dispute Resolution">
              <p>The EU Commission provides a platform for online dispute resolution: <a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noopener noreferrer" style={{ color: "var(--color-primary)" }}>ec.europa.eu/consumers/odr</a>. We are not obliged to participate in dispute resolution proceedings before a consumer arbitration board.</p>
            </LegalSection>
            <LegalSection title="Liability for Content">
              <p>As a service provider we are responsible for our own content under general legislation (§ 7(1) TMG). We are not obligated to monitor third-party information transmitted or stored. Upon becoming aware of legal infringements we will remove relevant content immediately.</p>
            </LegalSection>
            <LegalSection title="Copyright">
              <p>The content and works created by the site operators on these pages are subject to German copyright law. Duplication, processing, or distribution beyond the scope of copyright law requires prior written consent.</p>
            </LegalSection>
          </div>
        </Container>
      </div>
    </motion.div>
  );
}
