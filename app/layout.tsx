import type { Metadata, Viewport } from "next";
import Script from "next/script";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CookieBanner } from "@/components/ui/CookieBanner";
import { I18nProvider } from "@/lib/i18n/context";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://yourdomain.com";
const GA_ID    = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#222222",
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Shape Consulting — Practice Operating System",
    template: "%s | Shape Consulting",
  },
  description:
    "Shape.Med is the Practice Operating System by SHAPE Consulting. Manage your team, SOPs, tasks, and communication — all in one place. Built by doctors for doctors. Made in Germany.",
  keywords: ["practice operating system", "Praxis-Betriebssystem", "SHAPE Consulting", "Shape.Med", "medical practice management", "SOP management", "competency management", "healthcare operations", "Praxishandbuch", "GDPR compliant"],
  authors:   [{ name: "SHAPE Consulting", url: "https://www.shapeconsulting.app" }],
  creator:   "SHAPE Consulting",
  publisher: "SHAPE Consulting",
  openGraph: {
    type: "website", locale: "en_US", url: SITE_URL,
    siteName: "Shape Consulting — Practice Operating System",
    title: "Shape Consulting — Practice Operating System",
    description: "Shape.Med gives doctors full visibility over their team, knowledge, and daily operations. Built by SHAPE Consulting. Made in Germany.",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Shape Consulting — Practice Operating System" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Shape Consulting — Practice Operating System",
    description: "Shape.Med: manage your team, SOPs, tasks, and communication. Built for modern medical practices.",
    images: ["/og-image.png"],
  },
  robots: { index: true, follow: true },
  alternates: { canonical: SITE_URL },
  category: "Healthcare Technology",
  icons: {
    icon:  [{ url: "/favicon.svg", type: "image/svg+xml" }, { url: "/favicon.ico", sizes: "any" }],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous"/>
      </head>
      <body>
        <I18nProvider>
          <Navbar />
          {children}
          <Footer />
          <CookieBanner />
        </I18nProvider>
        {GA_ID && (
          <>
            <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} strategy="afterInteractive"/>
            <Script id="ga-init" strategy="afterInteractive">{`
              window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}
              gtag('js',new Date());gtag('config','${GA_ID}',{page_path:window.location.pathname,anonymize_ip:true});
            `}</Script>
          </>
        )}
      </body>
    </html>
  );
}
