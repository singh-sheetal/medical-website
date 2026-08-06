import { PersonaTab } from "@/types";

export const personas: PersonaTab[] = [
  {
    id: "doctors",
    label: "Doctors",
    headline: "More time for medicine, less time on paperwork",
    bullets: [
      "AI writes clinical notes during the consultation — not after",
      "Prescription safety checks catch interactions automatically",
      "Full patient history visible before every appointment",
      "Referral letters and reports drafted in seconds",
      "Works on any device — desktop, tablet, or mobile",
    ],
    imageUrl: "/images/personas/doctor-placeholder.png",
    imageAlt: "Doctor using MedicalOS on a tablet during a consultation",
  },
  {
    id: "staff",
    label: "Practice Staff",
    headline: "Run the practice without the admin chaos",
    bullets: [
      "Online booking handles scheduling automatically 24/7",
      "Automated reminders reduce no-shows by up to 60%",
      "Digital intake forms completed before patients arrive",
      "Insurance claims submitted and tracked in one place",
      "Real-time dashboard shows today's schedule at a glance",
    ],
    imageUrl: "/images/personas/staff-placeholder.png",
    imageAlt: "Practice staff member managing appointments on MedicalOS",
  },
  {
    id: "patients",
    label: "Patients",
    headline: "Healthcare that fits around your life",
    bullets: [
      "Book, reschedule, or cancel appointments anytime online",
      "Receive reminders via SMS or email before every visit",
      "Complete intake forms from your phone before arriving",
      "Access your own records and test results securely",
      "Video consultations available when you can't come in",
    ],
    imageUrl: "/images/personas/patient-placeholder.png",
    imageAlt: "Patient booking an appointment on their phone using MedicalOS",
  },
];
