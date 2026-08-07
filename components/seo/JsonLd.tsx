import { faqItems } from "@/lib/faq";

const SITE_URL  = process.env.NEXT_PUBLIC_SITE_URL || "https://yourdomain.com";
const SITE_NAME = "MedicalOS";

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: SITE_NAME,
  url: SITE_URL,
  logo: `${SITE_URL}/logo.png`,
  description:
    "MedicalOS is an AI-powered practice management platform for modern healthcare professionals. It automates clinical notes, scheduling, prescriptions, and billing.",
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+1-800-123-4567",
    contactType: "customer support",
    availableLanguage: "English",
  },
  sameAs: [
    "https://linkedin.com/company/medicalos",
    "https://twitter.com/medicalos",
  ],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: SITE_NAME,
  url: SITE_URL,
  description:
    "AI-powered practice management software for modern medical practices.",
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: `${SITE_URL}/search?q={search_term_string}`,
    },
    "query-input": "required name=search_term_string",
  },
};

const softwareSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: SITE_NAME,
  applicationCategory: "HealthApplication",
  operatingSystem: "Web, iOS, Android",
  description:
    "AI-powered practice management platform that automates clinical notes, scheduling, prescriptions, billing, and patient communication.",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
    description: "Free 30-day trial, no credit card required",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    ratingCount: "5000",
    bestRating: "5",
    worstRating: "1",
  },
  featureList: [
    "AI Clinical Note Generation",
    "Smart Prescription Management",
    "Document Digitisation",
    "Online Appointment Scheduling",
    "Digital Patient Intake Forms",
    "Automated Billing and Invoicing",
    "Telemedicine Video Consultations",
    "GDPR Compliant Data Storage",
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

export function JsonLd() {
  const schemas = [
    organizationSchema,
    websiteSchema,
    softwareSchema,
    faqSchema,
  ];

  return (
    <>
      {schemas.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  );
}
