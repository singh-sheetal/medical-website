import type { Metadata, Viewport } from "next";
import Script from "next/script";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CookieBanner } from "@/components/ui/CookieBanner";

const SITE_URL  = process.env.NEXT_PUBLIC_SITE_URL || "https://yourdomain.com";
const GA_ID     = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#F25E1B",
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "SHAPE Academy — AI Training for Healthcare Professionals",
    template: "%s | SHAPE Academy",
  },
  description:
    "SHAPE Academy by SHAPE Consulting helps doctors and healthcare teams build real AI confidence. Practical online courses, EU AI Act compliant, led by active medical professionals. Made in Germany.",
  keywords: [
    "AI training for doctors",
    "medical AI course",
    "EU AI Act healthcare",
    "AI fundamentals for GPs",
    "digital health training",
    "SHAPE Consulting",
    "Jan Baumann",
    "AI in medicine",
    "healthcare AI education",
    "Ärztefortbildung KI",
  ],
  authors:   [{ name: "SHAPE Consulting", url: "https://www.shapeconsulting.app" }],
  creator:   "SHAPE Consulting",
  publisher: "SHAPE Consulting",
  openGraph: {
    type:        "website",
    locale:      "en_US",
    url:         SITE_URL,
    siteName:    "SHAPE Academy",
    title:       "SHAPE Academy — AI Training for Healthcare Professionals",
    description: "Practical AI courses for doctors and healthcare teams. EU AI Act compliant. Led by Jan Baumann, SHAPE Consulting. Made in Germany.",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "SHAPE Academy — AI Training for Healthcare Professionals" }],
  },
  twitter: {
    card:        "summary_large_image",
    title:       "SHAPE Academy — AI Training for Healthcare Professionals",
    description: "Practical AI courses for doctors and healthcare teams. EU AI Act compliant. Made in Germany.",
    images:      ["/og-image.png"],
  },
  robots: {
    index: true, follow: true,
    googleBot: { index: true, follow: true, "max-video-preview": -1, "max-image-preview": "large", "max-snippet": -1 },
  },
  alternates: { canonical: SITE_URL },
  category:   "Healthcare Education",
  icons: {
    icon:  [{ url: "/favicon.svg", type: "image/svg+xml" }, { url: "/favicon.ico", sizes: "any" }],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body>
        <Navbar />
        {children}
        <Footer />
        <CookieBanner />
        {GA_ID && (
          <>
            <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} strategy="afterInteractive" />
            <Script id="ga-init" strategy="afterInteractive">{`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA_ID}', { page_path: window.location.pathname, anonymize_ip: true });
            `}</Script>
          </>
        )}
      </body>
    </html>
  );
}
