import type { Metadata } from "next";
import { Hero }        from "@/components/sections/Hero";
import { Modules }     from "@/components/sections/Modules";
import { Features }    from "@/components/sections/Features";
import { Contact }     from "@/components/sections/Contact";
import { LazySection } from "@/components/ui/LazySection";

export const metadata: Metadata = {
  title: "Shape Consulting — Practice Operating System",
  description:
    "Shape.Med is the Practice Operating System for modern medical practices. Manage team competencies, SOPs, tasks, and communication — all in one place.",
  alternates: { canonical: "/" },
};

export default function Home() {
  return (
    <main>
      <Hero />
      <LazySection><Modules /></LazySection>
      <LazySection><Features /></LazySection>
      <LazySection><Contact /></LazySection>
    </main>
  );
}
