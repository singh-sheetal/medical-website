"use client";

import { motion } from "framer-motion";
import { useView } from "@/lib/view-context";
import { Container } from "@/components/ui/Container";

export function GdprView() {
  const { setView } = useView();

  return (
    <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3, ease: "easeOut" }}>
      <div style={{ backgroundColor: "var(--color-primary)", padding: "4rem 0 3rem" }}>
        <Container>
          <button onClick={() => setView("home")} style={{ display: "inline-flex", alignItems: "center", gap: "0.375rem", fontFamily: "var(--font-sans)", fontSize: "var(--text-sm)", color: "rgba(255,255,255,0.7)", background: "none", border: "none", cursor: "pointer", marginBottom: "1.5rem", padding: 0 }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"/></svg>
            Back
          </button>
          <p style={{ fontFamily: "var(--font-sans)", fontSize: "var(--text-xs)", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase" as const, color: "rgba(255,255,255,0.65)", marginBottom: "0.5rem" }}>Legal</p>
          <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2rem, 4vw, 2.75rem)", fontWeight: 700, color: "white", letterSpacing: "-0.025em", marginBottom: "0.375rem", lineHeight: 1.15 }}>GDPR</h1>
          <p style={{ fontFamily: "var(--font-sans)", fontSize: "var(--text-sm)", color: "rgba(255,255,255,0.65)" }}>DSGVO · General Data Protection Regulation compliance statement</p>
        </Container>
      </div>

      <div style={{ backgroundColor: "var(--color-bg)", paddingBlock: "4rem" }}>
        <Container>
          <div style={{ maxWidth: "760px" }}>
            <S title="Our Commitment">
              <p>SHAPE Consulting UG is fully committed to the General Data Protection Regulation (EU) 2016/679 (GDPR), implemented in Germany as the Datenschutz-Grundverordnung (DSGVO). We design our products and processes with data protection by design and by default (Art. 25 GDPR).</p>
            </S>
            <S title="Legal Bases for Processing">
              <p>All personal data we process has a defined legal basis under Art. 6 GDPR:</p>
              <ul style={{ paddingLeft: "1.25rem", display: "flex", flexDirection: "column", gap: "0.375rem" }}>
                <li><strong>Art. 6(1)(b)</strong> — Processing for pre-contractual or contractual purposes (demo requests)</li>
                <li><strong>Art. 6(1)(f)</strong> — Legitimate interests (server security, website stability)</li>
              </ul>
            </S>
            <S title="Data Minimisation">
              <p>We collect only the minimum data necessary for each specific purpose. Shape.Med does not process patient health data under any circumstances. No special category data (Art. 9 GDPR) is processed.</p>
            </S>
            <S title="Data Processing Agreement (DPA)">
              <p>Customers who use Shape.Med can request a Data Processing Agreement (Auftragsverarbeitungsvertrag / AVV) pursuant to Art. 28 GDPR. Please contact us at <a href="mailto:info@shapeconsulting.app" style={{ color: "var(--color-primary)" }}>info@shapeconsulting.app</a>.</p>
            </S>
            <S title="Security Measures (TOMs)">
              <p>We implement appropriate technical and organisational measures to ensure security appropriate to the risk:</p>
              <ul style={{ paddingLeft: "1.25rem", display: "flex", flexDirection: "column", gap: "0.375rem" }}>
                <li>Encryption of data in transit (TLS) and at rest</li>
                <li>Access controls and role-based permissions</li>
                <li>Regular security assessments</li>
                <li>Server infrastructure exclusively within Germany</li>
              </ul>
            </S>
            <S title="Data Subject Rights">
              <p>We fully support all rights of data subjects under Chapter III of the GDPR (Arts. 15–22). To submit a request, contact <a href="mailto:info@shapeconsulting.app" style={{ color: "var(--color-primary)" }}>info@shapeconsulting.app</a>. All requests are processed within 30 days.</p>
            </S>
            <S title="Supervisory Authority">
              <p><strong>Der Bundesbeauftragte für den Datenschutz und die Informationsfreiheit (BfDI)</strong><br />Graurheindorfer Str. 153, 53117 Bonn<br /><a href="https://www.bfdi.bund.de" target="_blank" rel="noopener noreferrer" style={{ color: "var(--color-primary)" }}>www.bfdi.bund.de</a></p>
            </S>
          </div>
        </Container>
      </div>
    </motion.div>
  );
}

function S({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div style={{ marginBottom: "2rem" }}>
      <h2 style={{ fontFamily: "var(--font-sans)", fontSize: "var(--text-lg)", fontWeight: 700, color: "var(--color-text-heading)", marginBottom: "0.75rem", paddingBottom: "0.5rem", borderBottom: "1px solid var(--color-border)" }}>{title}</h2>
      <div style={{ fontFamily: "var(--font-sans)", fontSize: "var(--text-base)", color: "var(--color-text-body)", lineHeight: 1.75, display: "flex", flexDirection: "column", gap: "0.625rem" }}>{children}</div>
    </div>
  );
}
