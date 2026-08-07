import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const SITE_URL  = process.env.NEXT_PUBLIC_SITE_URL || "https://yourdomain.com";
const SITE_NAME = "MedicalOS";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#3D5A9E",
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  title: {
    default: `${SITE_NAME} — AI-Powered Practice Management`,
    template: `%s | ${SITE_NAME}`,
  },

  description:
    "MedicalOS automates clinical notes, scheduling, prescriptions, and billing for modern medical practices. Save 2+ hours daily. GDPR compliant. Free 30-day trial.",

  keywords: [
    "medical practice management software",
    "AI clinical notes",
    "smart scheduling for doctors",
    "digital prescription management",
    "GDPR compliant medical software",
    "healthcare practice automation",
    "electronic health records",
    "telemedicine software",
    "medical billing software",
    "AI documentation for doctors",
  ],

  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  publisher: SITE_NAME,

  openGraph: {
    type:      "website",
    locale:    "en_US",
    url:       SITE_URL,
    siteName:  SITE_NAME,
    title:     `${SITE_NAME} — AI-Powered Practice Management`,
    description:
      "Automate clinical notes, scheduling, prescriptions, and billing. Built for modern medical practices. Free 30-day trial.",
    images: [
      {
        url:    "/og-image.png",
        width:  1200,
        height: 630,
        alt:    `${SITE_NAME} — AI-Powered Practice Management`,
      },
    ],
  },

  twitter: {
    card:        "summary_large_image",
    title:       `${SITE_NAME} — AI-Powered Practice Management`,
    description: "Automate clinical notes, scheduling, prescriptions, and billing. Built for modern medical practices.",
    images:      ["/og-image.png"],
  },

  robots: {
    index:              true,
    follow:             true,
    googleBot: {
      index:            true,
      follow:           true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet":    -1,
    },
  },

  alternates: {
    canonical: SITE_URL,
  },

  category: "Healthcare Technology",

  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180" },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
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
      </body>
    </html>
  );
}
