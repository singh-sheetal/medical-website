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
  title: "SHAPE Academy — AI Training for Healthcare Professionals",
  description:
    "Practical AI courses for doctors and healthcare teams. EU AI Act §4 compliant. Led by Jan Baumann, SHAPE Consulting. Every Wednesday online. From €49.",
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
