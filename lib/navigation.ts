import { NavItem } from "@/types";

export const navItems: NavItem[] = [
  {
    label: "Features",
    href: "#features",
    children: [
      {
        label: "AI Documentation",
        href: "#ai-documentation",
        children: undefined,
      },
      {
        label: "Smart Scheduling",
        href: "#scheduling",
        children: undefined,
      },
      {
        label: "Patient Portal",
        href: "#patient-portal",
        children: undefined,
      },
      {
        label: "Billing & Invoicing",
        href: "#billing",
        children: undefined,
      },
      {
        label: "Telemedicine",
        href: "#telemedicine",
        children: undefined,
      },
    ],
  },
  {
    label: "Specialties",
    href: "#specialties",
  },
  {
    label: "Testimonials",
    href: "#testimonials",
  },
  {
    label: "About",
    href: "#about",
  },
  {
    label: "Pricing",
    href: "#pricing",
  },
];

export const announcementMessages = [
  "🩺 AI-powered documentation — save 2+ hours every day",
  "✅ GDPR compliant · Data hosted securely in Europe",
  "📅 Book a free 30-minute demo with our team",
  "⭐ Trusted by 5,000+ healthcare professionals worldwide",
  "🚀 New: Telemedicine built right into your workflow",
];

export const contactPhone = "+1 (800) 123-4567";
export const bookingUrl  = process.env.NEXT_PUBLIC_BOOKING_URL || "#book-demo";
