import type { Metadata } from "next";
import { Hero }         from "@/components/sections/Hero";
import { AIFeatures }   from "@/components/sections/AIFeatures";
import { BentoGrid }    from "@/components/sections/BentoGrid";
import { Testimonials } from "@/components/sections/Testimonials";
import { PersonaTabs }  from "@/components/sections/PersonaTabs";
import { CTABanner }    from "@/components/sections/CTABanner";
import { FAQ }          from "@/components/sections/FAQ";
import { JsonLd }       from "@/components/seo/JsonLd";
import { LazySection }  from "@/components/ui/LazySection";

export const metadata: Metadata = {
  title: "MedicalOS — AI-Powered Practice Management Software",
  description:
    "MedicalOS automates clinical notes, scheduling, prescriptions, and billing for modern medical practices. Save 2+ hours daily. GDPR compliant. Free 30-day trial.",
  alternates: { canonical: "/" },
};

export default function Home() {
  return (
    <>
      <JsonLd />
      <main>
        <Hero />
        <LazySection><AIFeatures /></LazySection>
        <LazySection><BentoGrid /></LazySection>
        <LazySection><Testimonials /></LazySection>
        <LazySection><PersonaTabs /></LazySection>
        <LazySection><CTABanner /></LazySection>
        <LazySection><FAQ /></LazySection>
      </main>
    </>
  );
}
