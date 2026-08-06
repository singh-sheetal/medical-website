export type BentoFeature = {
  id: string;
  size: "large" | "medium" | "small";
  icon: string;
  badge?: string;
  heading: string;
  body: string;
  accent: "primary" | "accent" | "success" | "dark";
};

export const practiceFeatures: BentoFeature[] = [
  {
    id: "scheduling",
    size: "large",
    icon: "📅",
    badge: "Online Booking",
    heading: "Scheduling that runs itself",
    body: "Patients book, reschedule, and cancel appointments online 24/7. Automated reminders cut no-shows by up to 60%. Your calendar always stays organised — without any manual work.",
    accent: "primary",
  },
  {
    id: "integrations",
    size: "medium",
    icon: "🔗",
    badge: "Integrations",
    heading: "Connects with tools you already use",
    body: "Works seamlessly with your existing lab systems, pharmacy networks, and insurance providers. No rip-and-replace required.",
    accent: "accent",
  },
  {
    id: "contracts",
    size: "medium",
    icon: "✍️",
    badge: "Digital Forms",
    heading: "Paperless from day one",
    body: "Send consent forms, intake questionnaires, and contracts digitally. Patients complete them before they arrive — you walk in prepared.",
    accent: "success",
  },
  {
    id: "anamnesis",
    size: "medium",
    icon: "🩺",
    badge: "Patient History",
    heading: "Complete patient picture, instantly",
    body: "All records, lab results, past visits, and medications in one place. Always up to date, always at your fingertips.",
    accent: "dark",
  },
  {
    id: "billing",
    size: "medium",
    icon: "💳",
    badge: "Billing",
    heading: "Billing without the headache",
    body: "Generate invoices, process payments, and submit insurance claims automatically. Track outstanding balances with one glance.",
    accent: "primary",
  },
];
