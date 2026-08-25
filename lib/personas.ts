import { PersonaTab } from "@/types";

export const personas: PersonaTab[] = [
  {
    id: "doctors",
    label: "Doctors",
    headline: "Use AI confidently — starting this Wednesday",
    bullets: [
      "Learn which AI tools actually save time in your daily workflow",
      "Understand your legal obligations under the EU AI Act",
      "Get hands-on with documentation, letter generation, and patient communication tools",
      "Ask real questions in a small group of fellow practitioners",
      "Leave with a concrete plan — not just inspiration",
    ],
    imageUrl: "/images/personas/doctor-placeholder.png",
    imageAlt: "Doctor attending SHAPE Academy online course on laptop",
  },
  {
    id: "staff",
    label: "Practice Staff",
    headline: "Upskill your whole team — not just the doctor",
    bullets: [
      "Courses designed for MFAs, nurses, and practice coordinators too",
      "Learn how AI scheduling and patient communication tools work in practice",
      "Understand data security and patient consent in plain language",
      "Certifiable training for your team under the EU AI Regulation",
      "Build confidence with technology — without needing a technical background",
    ],
    imageUrl: "/images/personas/staff-placeholder.png",
    imageAlt: "Practice staff member completing SHAPE Academy training online",
  },
  {
    id: "clinics",
    label: "Clinics & Hospitals",
    headline: "A structured AI strategy for your whole institution",
    bullets: [
      "Individual workshops tailored to your departments and workflows",
      "AI integration consulting from assessment to implementation",
      "Change management support to bring your teams along",
      "Coaching on interprofessional collaboration and new ways of working",
      "The Shape.Med Portal — modular onboarding for large teams (coming soon)",
    ],
    imageUrl: "/images/personas/clinic-placeholder.png",
    imageAlt: "Hospital team in SHAPE Consulting workshop session",
  },
];
