import { Hero } from "@/components/sections/Hero";
import { LogoStrip } from "@/components/sections/LogoStrip";
import { AIFeatures } from "@/components/sections/AIFeatures";

export default function Home() {
  return (
    <main>
      <Hero />
      <LogoStrip />
      <AIFeatures />
    </main>
  );
}
