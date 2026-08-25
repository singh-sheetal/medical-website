import { NavItem } from "@/types";

export const navItems: NavItem[] = [
  {
    label: "Courses",
    href: "#courses",
    children: [
      { label: "AI Fundamentals",        href: "#ai-fundamentals" },
      { label: "LLMs & Prompting",       href: "#llms-prompting" },
      { label: "AI Tools for Practices", href: "#ai-tools" },
      { label: "Data & IT Security",     href: "#it-security" },
      { label: "Doctor–Patient Communication", href: "#communication" },
      { label: "Change Management",      href: "#change-management" },
    ],
  },
  { label: "About Us",     href: "#about" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "FAQ",          href: "#faq" },
  { label: "Contact",      href: "#contact" },
];

export const announcementMessages = [
  "🩺 New Wednesday sessions now available — limited to 25 participants",
  "✅ EU AI Act compliant — certifiable under §4 of the AI Regulation",
  "📅 Book your free discovery call with Jan Baumann",
  "⭐ By doctors, for doctors — practical AI training you can use immediately",
  "🚀 Follow-up course series now available from January",
];

export const contactPhone   = "+49 175 959 67 81";
export const contactEmail   = "info@shapeconsulting.app";
export const bookingUrl     = process.env.NEXT_PUBLIC_BOOKING_URL || "https://www.shapeconsulting.app/pricing-plans/plans-pricing";
export const brandName      = "SHAPE Academy";
export const brandCompany   = "SHAPE Consulting";
