import { Feature } from "@/types";

export const aiFeatures: Feature[] = [
  {
    id: "clinical-notes",
    badge: "AI Documentation",
    headline: "Clinical notes that write themselves",
    description:
      "Stop typing during consultations. MedicalOS listens, understands context, and generates structured clinical notes in real time — ready for your review the moment the appointment ends.",
    bullets: [
      "Transcribes and structures notes during the consultation",
      "Understands medical terminology and context automatically",
      "Drafts referral letters and follow-up summaries instantly",
      "One-click approval — edit only what needs changing",
    ],
    ctaLabel: "See how it works",
    ctaHref: "#ai-documentation",
    mediaType: "image",
    mediaSrc: "/images/features/clinical-notes-placeholder.png",
    mediaAlt: "Clinical note generation interface showing AI transcription in real time",
    layout: "right",
  },
  {
    id: "prescription",
    badge: "Smart Prescriptions",
    headline: "Prescriptions with built-in intelligence",
    description:
      "MedicalOS checks interactions, flags contraindications, and suggests dosage guidance based on patient history — so every prescription is safer, faster, and fully documented.",
    bullets: [
      "Automatic drug interaction and allergy checks",
      "Dosage suggestions based on patient age, weight, and history",
      "Digital prescriptions sent directly to the pharmacy",
      "Full audit trail for every prescription issued",
    ],
    ctaLabel: "Explore smart prescriptions",
    ctaHref: "#prescription",
    mediaType: "image",
    mediaSrc: "/images/features/prescription-placeholder.png",
    mediaAlt: "Smart prescription interface showing drug interaction checks",
    layout: "left",
  },
  {
    id: "document-digitisation",
    badge: "Document Digitisation",
    headline: "Turn any document into structured data",
    description:
      "Upload paper records, lab results, referral letters, or old patient files. MedicalOS extracts, categorises, and links every piece of information directly to the right patient record.",
    bullets: [
      "Scan and digitise paper records in seconds",
      "AI extracts key data — dates, diagnoses, medications, results",
      "Automatically matched to the correct patient profile",
      "Searchable, shareable, and always accessible",
    ],
    ctaLabel: "Discover document digitisation",
    ctaHref: "#document-digitisation",
    mediaType: "image",
    mediaSrc: "/images/features/document-placeholder.png",
    mediaAlt: "Document digitisation showing uploaded records being processed by AI",
    layout: "right",
  },
];
