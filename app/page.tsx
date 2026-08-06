import { Hero }          from "@/components/sections/Hero";
import { LogoStrip }     from "@/components/sections/LogoStrip";
import { AIFeatures }    from "@/components/sections/AIFeatures";
import { BentoGrid }     from "@/components/sections/BentoGrid";
import { Testimonials }  from "@/components/sections/Testimonials";

export default function Home() {
  return (
    <main>
      <Hero />
      <LogoStrip />
      <AIFeatures />
      <BentoGrid />
      <Testimonials />
    </main>
  );
}
