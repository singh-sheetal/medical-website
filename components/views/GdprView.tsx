"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { LegalHeader, LegalSection } from "./LegalHeader";

export function GdprView() {
  return (
    <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3, ease: "easeOut" }}>
      <LegalHeader title="GDPR" subtitle="DSGVO · General Data Protection Regulation compliance statement" />
      <div style={{ backgroundColor: "var(--color-bg)", paddingBlock: "4rem" }}>
        <Container>
          <div style={{ maxWidth: "760px" }}>
            <LegalSection title="Our Commitment">
              <p>SHAPE Consulting UG is fully committed to the General Data Protection Regulation (EU) 2016/679 (GDPR), implemented in Germany as the Datenschutz-Grundverordnung (DSGVO). We design our products and processes with data protection by design and by default (Art. 25 GDPR).</p>
            </LegalSection>
            <LegalSection title="Legal Bases for Processing">
              <p>All personal data we process has a defined legal basis under Art. 6 GDPR:</p>
              <ul style={{ paddingLeft: "1.25rem", display: "flex", flexDirection: "column", gap: "0.375rem" }}>
                <li><strong>Art. 6(1)(b)</strong> — Processing for pre-contractual or contractual purposes (demo requests)</li>
                <li><strong>Art. 6(1)(f)</strong> — Legitimate interests (server security, website stability)</li>
              </ul>
            </LegalSection>
            <LegalSection title="Data Minimisation">
              <p>We collect only the minimum data necessary for each specific purpose. Shape.Med does not process patient health data under any circumstances. No special category data (Art. 9 GDPR) is processed.</p>
            </LegalSection>
            <LegalSection title="Data Processing Agreement (DPA)">
              <p>Customers who use Shape.Med can request a Data Processing Agreement (Auftragsverarbeitungsvertrag / AVV) pursuant to Art. 28 GDPR. Please contact us at <a href="mailto:info@shapeconsulting.app" style={{ color: "var(--color-primary)" }}>info@shapeconsulting.app</a>.</p>
            </LegalSection>
            <LegalSection title="Security Measures (TOMs)">
              <p>We implement appropriate technical and organisational measures to ensure security appropriate to the risk:</p>
              <ul style={{ paddingLeft: "1.25rem", display: "flex", flexDirection: "column", gap: "0.375rem" }}>
                <li>Encryption of data in transit (TLS) and at rest</li>
                <li>Access controls and role-based permissions</li>
                <li>Regular security assessments</li>
                <li>Server infrastructure exclusively within Germany</li>
              </ul>
            </LegalSection>
            <LegalSection title="Data Subject Rights">
              <p>We fully support all rights of data subjects under Chapter III of the GDPR (Arts. 15–22). To submit a request, contact <a href="mailto:info@shapeconsulting.app" style={{ color: "var(--color-primary)" }}>info@shapeconsulting.app</a>. All requests are processed within 30 days.</p>
            </LegalSection>
            <LegalSection title="Supervisory Authority">
              <p><strong>Der Bundesbeauftragte für den Datenschutz und die Informationsfreiheit (BfDI)</strong><br />Graurheindorfer Str. 153, 53117 Bonn<br /><a href="https://www.bfdi.bund.de" target="_blank" rel="noopener noreferrer" style={{ color: "var(--color-primary)" }}>www.bfdi.bund.de</a></p>
            </LegalSection>
          </div>
        </Container>
      </div>
    </motion.div>
  );
}
