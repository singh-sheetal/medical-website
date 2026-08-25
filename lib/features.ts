import { Feature } from "@/types";

export const aiFeatures: Feature[] = [
  {
    id: "ai-fundamentals",
    badge: "Entry Course",
    headline: "AI Fundamentals — your first step into medical AI",
    description:
      "A practical 90-minute online session that gives you exactly what you need to start using AI confidently in your practice. No technical background required. Runs every Wednesday.",
    bullets: [
      "Build AI competence step by step — from terminology to real tools",
      "See AI in action along a real patient journey",
      "Understand legal foundations: GDPR, data protection, and the EU AI Act",
      "Certifiable as staff training under §4 of the European AI Regulation",
    ],
    ctaLabel: "Book this course — €49",
    ctaHref: "https://www.shapeconsulting.app/pricing-plans/plans-pricing",
    mediaType: "image",
    mediaSrc: "/images/features/ai-fundamentals-placeholder.png",
    mediaAlt: "AI Fundamentals course session showing curriculum overview",
    layout: "right",
  },
  {
    id: "course-series",
    badge: "Follow-up Series",
    headline: "Five deep-dive modules for your practice of tomorrow",
    description:
      "After the fundamentals, go deeper. Five evening sessions covering the AI tools, security, communication, and management strategies that actually matter for modern healthcare professionals.",
    bullets: [
      "LLMs & Prompting — give AI the right instructions, get better results",
      "AI Tools — scheduling, documentation, telemedicine, voice recognition",
      "Data & IT Security — protect your practice in a digital world",
      "Doctor–Patient Communication — talk to patients about AI with confidence",
      "Change & Innovation Management — lead your team into the future",
    ],
    ctaLabel: "Book the full series — €395",
    ctaHref: "https://www.shapeconsulting.app/pricing-plans/plans-pricing",
    mediaType: "image",
    mediaSrc: "/images/features/course-series-placeholder.png",
    mediaAlt: "Five module course series curriculum overview",
    layout: "left",
  },
  {
    id: "consulting",
    badge: "Individual Consulting",
    headline: "Tailored AI strategy for your practice or clinic",
    description:
      "Beyond courses, SHAPE Consulting works directly with practices, clinics, and healthcare organisations to develop and implement a personalised AI and digitalisation strategy.",
    bullets: [
      "Assess your current workflows and identify where AI adds real value",
      "Select and implement the right tools for your specific setup",
      "Lead your team through change — with coaching and structured support",
      "Ongoing guidance as your practice grows into AI-assisted care",
    ],
    ctaLabel: "Book a free discovery call",
    ctaHref: "https://www.shapeconsulting.app/kontakt",
    mediaType: "image",
    mediaSrc: "/images/features/consulting-placeholder.png",
    mediaAlt: "One-on-one consulting session with Jan Baumann",
    layout: "right",
  },
];
