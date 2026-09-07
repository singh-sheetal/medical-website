"use client";

import { Hero }         from "@/components/sections/Hero";
import { Modules }      from "@/components/sections/Modules";
import { Features }     from "@/components/sections/Features";
import { FAQ }          from "@/components/sections/FAQ";
import { About }        from "@/components/sections/About";
import { Contact }      from "@/components/sections/Contact";
import { LazySection }  from "@/components/ui/LazySection";
import { PrivacyView }  from "@/components/views/PrivacyView";
import { ImprintView }  from "@/components/views/ImprintView";
import { GdprView }     from "@/components/views/GdprView";
import { useView }      from "@/lib/view-context";

export default function Home() {
  const { view } = useView();

  if (view === "privacy") return <PrivacyView />;
  if (view === "imprint") return <ImprintView />;
  if (view === "gdpr")    return <GdprView />;

  return (
    <main>
      <Hero />
      <LazySection><Modules /></LazySection>
      <LazySection><Features /></LazySection>
      <LazySection><FAQ /></LazySection>
      <LazySection><About /></LazySection>
      <LazySection><Contact /></LazySection>
    </main>
  );
}
