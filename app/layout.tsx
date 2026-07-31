import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "MedicalOS — AI-Powered Practice Management",
    template: "%s | MedicalOS",
  },
  description:
    "Documentation, appointments, billing, patient communication — all in one platform, all automated. Built for modern medical practices.",
  metadataBase: new URL("https://yourdomain.com"), // ← update in M15
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "MedicalOS",
  },
  twitter: {
    card: "summary_large_image",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
