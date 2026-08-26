"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useI18n } from "@/lib/i18n/context";
import { images } from "@/lib/images";
import { Container } from "@/components/ui/Container";

const teamPhotos = [images.team.founder, images.team.ashutosh, images.team.eelco];

export function Team() {
  const { t } = useI18n();
  const team = t.team;

  return (
    <section id="about" style={{ paddingBlock: "var(--section-padding-y)", backgroundColor: "var(--color-bg-alt)" }}>
      <Container>
        <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
          <span className="eyebrow">{team.eyebrow}</span>
          <h2 style={{ fontFamily: "var(--font-display)", letterSpacing: "-0.025em", color: "var(--color-text-heading)", marginBottom: "1rem" }}>
            {team.heading}
          </h2>
          <p style={{ fontSize: "var(--text-lg)", color: "var(--color-text-muted)", maxWidth: "52ch", margin: "0 auto", fontFamily: "var(--font-sans)" }}>
            {team.sub}
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "2rem" }} className="team-grid">
          {team.members.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, ease: "easeOut", delay: i * 0.1 }}
              style={{
                backgroundColor: "var(--color-white)",
                borderRadius: "var(--radius-xl)",
                border: "1px solid var(--color-border)",
                overflow: "hidden", boxShadow: "var(--shadow-sm)",
              }}
            >
              <div style={{ position: "relative", width: "100%", aspectRatio: "1 / 1", backgroundColor: "var(--color-bg-alt)", overflow: "hidden" }}>
                <Image
                  src={teamPhotos[i]}
                  alt={`${member.name} — ${member.role}`}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  style={{ objectFit: "cover", objectPosition: "top center" }}
                />
              </div>
              <div style={{ padding: "1.5rem" }}>
                <div style={{ fontFamily: "var(--font-display)", fontSize: "var(--text-lg)", fontWeight: 700, color: "var(--color-text-heading)", marginBottom: "0.2rem", letterSpacing: "-0.01em" }}>
                  {member.name}
                </div>
                <div style={{ fontFamily: "var(--font-sans)", fontSize: "var(--text-xs)", fontWeight: 600, letterSpacing: "0.06em", textTransform: "uppercase" as const, color: "var(--color-highlight)", marginBottom: "0.75rem" }}>
                  {member.role}
                </div>
                <p style={{ fontFamily: "var(--font-sans)", fontSize: "var(--text-sm)", color: "var(--color-text-body)", lineHeight: 1.7, margin: 0 }}>
                  {member.bio}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>

      <style>{`
        @media (max-width: 768px) { .team-grid { grid-template-columns: 1fr !important; } }
        @media (min-width: 480px) and (max-width: 768px) { .team-grid { grid-template-columns: repeat(2,1fr) !important; } }
      `}</style>
    </section>
  );
}
