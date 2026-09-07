"use client";

import { motion } from "framer-motion";
import { useView } from "@/lib/view-context";
import { Container } from "@/components/ui/Container";

export function ImprintView() {
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
          <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2rem, 4vw, 2.75rem)", fontWeight: 700, color: "white", letterSpacing: "-0.025em", marginBottom: "0.375rem", lineHeight: 1.15 }}>Imprint</h1>
          <p style={{ fontFamily: "var(--font-sans)", fontSize: "var(--text-sm)", color: "rgba(255,255,255,0.65)" }}>Impressum · Information pursuant to § 5 TMG</p>
        </Container>
      </div>

      <div style={{ backgroundColor: "var(--color-bg)", paddingBlock: "4rem" }}>
        <Container>
          <div style={{ maxWidth: "760px" }}>
            <S title="Company">
              <p><strong>SHAPE Consulting UG (haftungsbeschränkt)</strong><br />Musterstraße 12<br />80331 Munich, Germany</p>
            </S>
            <S title="Contact">
              <p>Phone: +49 175 959 67 81<br />Email: <a href="mailto:info@shapeconsulting.app" style={{ color: "var(--color-primary)" }}>info@shapeconsulting.app</a><br />Website: <a href="https://www.shapeconsulting.app" target="_blank" rel="noopener noreferrer" style={{ color: "var(--color-primary)" }}>www.shapeconsulting.app</a></p>
            </S>
            <S title="Managing Director">
              <p>Dr. Thomas Weber</p>
            </S>
            <S title="Commercial Register">
              <p>Registergericht: Amtsgericht München<br />Registernummer: HRB 000000 <em style={{ color: "var(--color-text-muted)", fontSize: "var(--text-sm)" }}>(placeholder — to be updated)</em></p>
            </S>
            <S title="VAT Identification Number">
              <p>Umsatzsteuer-Identifikationsnummer gemäß § 27a UStG:<br />DE 000 000 000 <em style={{ color: "var(--color-text-muted)", fontSize: "var(--text-sm)" }}>(placeholder — to be updated)</em></p>
            </S>
            <S title="Dispute Resolution">
              <p>The EU Commission provides a platform for online dispute resolution: <a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noopener noreferrer" style={{ color: "var(--color-primary)" }}>ec.europa.eu/consumers/odr</a>. We are not obliged to participate in dispute resolution proceedings before a consumer arbitration board.</p>
            </S>
            <S title="Liability for Content">
              <p>As a service provider we are responsible for our own content under general legislation (§ 7(1) TMG). We are not obligated to monitor third-party information transmitted or stored. Upon becoming aware of legal infringements we will remove relevant content immediately.</p>
            </S>
            <S title="Copyright">
              <p>The content and works created by the site operators on these pages are subject to German copyright law. Duplication, processing, or distribution beyond the scope of copyright law requires prior written consent.</p>
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
