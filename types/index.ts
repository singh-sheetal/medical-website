// ─── Shared TypeScript types ───────────────────────────────
// Populated as components are built in M3+

export type NavItem = {
  label: string;
  href: string;
  children?: NavItem[];
};

export type Testimonial = {
  id: string;
  quote: string;
  name: string;
  title: string;
  company: string;
  avatarUrl?: string;
};

export type Feature = {
  id: string;
  badge: string;
  headline: string;
  description: string;
  bullets: string[];
  ctaLabel: string;
  ctaHref: string;
  mediaType: "image" | "video";
  mediaSrc: string;
  mediaAlt?: string;
  layout: "left" | "right";
};

export type FAQItem = {
  question: string;
  answer: string;
};

export type PersonaTab = {
  id: string;
  label: string;
  headline: string;
  bullets: string[];
  imageUrl: string;
  imageAlt: string;
};
