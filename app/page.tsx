import type { Metadata } from "next";
import { Hero }        from "@/components/sections/Hero";
import { Modules }     from "@/components/sections/Modules";
import { Features }    from "@/components/sections/Features";
import { FAQ }         from "@/components/sections/FAQ";
import { About }       from "@/components/sections/About";
import { Contact }     from "@/components/sections/Contact";
import { Legal }       from "@/components/sections/Legal";
import { LazySection } from "@/components/ui/LazySection";

export const metadata: Metadata = {
  title: "Shape Consulting — Practice Operating System",
  description: "Shape.Med is the Practice Operating System for modern medical practices.",
  alternates: { canonical: "/" },
};

export default function Home() {
  return (
    <main>
      <Hero />
      <LazySection><Modules /></LazySection>
      <LazySection><Features /></LazySection>
      <LazySection><FAQ /></LazySection>
      <LazySection><About /></LazySection>
      <LazySection><Contact /></LazySection>
      <LazySection><Legal /></LazySection>
    </main>
  );
}
