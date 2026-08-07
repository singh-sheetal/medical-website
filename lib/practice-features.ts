export type BentoFeature = {
  id: string;
  size: "large" | "medium" | "small";
  iconPath: string; // SVG path data
  badge?: string;
  heading: string;
  body: string;
  accent: "primary" | "accent" | "success" | "dark";
};

export const practiceFeatures: BentoFeature[] = [
  {
    id: "scheduling",
    size: "large",
    iconPath: "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z",
    badge: "Online Booking",
    heading: "Scheduling that runs itself",
    body: "Patients book, reschedule, and cancel appointments online 24/7. Automated reminders cut no-shows by up to 60%. Your calendar always stays organised — without any manual work.",
    accent: "primary",
  },
  {
    id: "integrations",
    size: "medium",
    iconPath: "M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1",
    badge: "Integrations",
    heading: "Connects with tools you already use",
    body: "Works seamlessly with your existing lab systems, pharmacy networks, and insurance providers. No rip-and-replace required.",
    accent: "accent",
  },
  {
    id: "contracts",
    size: "medium",
    iconPath: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
    badge: "Digital Forms",
    heading: "Paperless from day one",
    body: "Send consent forms, intake questionnaires, and contracts digitally. Patients complete them before they arrive — you walk in prepared.",
    accent: "success",
  },
  {
    id: "anamnesis",
    size: "medium",
    iconPath: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z",
    badge: "Patient History",
    heading: "Complete patient picture, instantly",
    body: "All records, lab results, past visits, and medications in one place. Always up to date, always at your fingertips.",
    accent: "dark",
  },
  {
    id: "billing",
    size: "medium",
    iconPath: "M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z",
    badge: "Billing",
    heading: "Billing without the headache",
    body: "Generate invoices, process payments, and submit insurance claims automatically. Track outstanding balances with one glance.",
    accent: "primary",
  },
];
