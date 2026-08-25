export type BentoFeature = {
  id: string;
  size: "large" | "medium" | "small";
  icon: string;
  badge?: string;
  heading: string;
  body: string;
  accent: "primary" | "accent" | "dark";
};

export const practiceFeatures: BentoFeature[] = [
  {
    id: "wednesday-sessions",
    size: "large",
    icon: "📅",
    badge: "Live Online",
    heading: "Wednesday sessions — every week, from anywhere",
    body: "All courses run online every Wednesday — afternoon and evening slots available. Join from your practice, your home, or anywhere with a connection. Each session is 90 minutes: 45 min presentation, 45 min open discussion with the expert.",
    accent: "primary",
  },
  {
    id: "eu-ai-act",
    size: "medium",
    icon: "⚖️",
    badge: "EU AI Act",
    heading: "Legally compliant from day one",
    body: "The AI Fundamentals course is certifiable as staff training under §4 of the European AI Regulation — so your documentation is covered too.",
    accent: "accent",
  },
  {
    id: "peer-led",
    size: "medium",
    icon: "👨‍⚕️",
    badge: "By Doctors",
    heading: "Taught by practitioners, not theorists",
    body: "Jan Baumann is a doctor himself. Guest experts are active specialists who bring real, current practice experience — not slides from a textbook.",
    accent: "dark",
  },
  {
    id: "small-groups",
    size: "medium",
    icon: "👥",
    badge: "Max 25",
    heading: "Small groups, real discussion",
    body: "Every session is capped at 25 participants so every question gets answered. This is a conversation, not a lecture.",
    accent: "accent",
  },
  {
    id: "shape-med",
    size: "medium",
    icon: "🚀",
    badge: "Coming Soon",
    heading: "Shape.Med Portal — AI onboarding for your whole team",
    body: "A modular competency and onboarding platform for interprofessional healthcare teams. Currently in development — register your interest now.",
    accent: "primary",
  },
];
