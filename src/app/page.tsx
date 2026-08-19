import { Footer } from "@/components/landing/Footer";
import { Hero } from "@/components/landing/Hero";
import { Projects } from "@/components/landing/Projects";
import { SkillsGrid } from "@/components/landing/SkillsGrid";
import { Timeline } from "@/components/landing/Timeline";
import { VestigioCta } from "@/components/landing/VestigioCta";

export default function Home() {
  return (
    <main>
      <Hero />
      <VestigioCta />
      <Projects />
      <Timeline />
      <SkillsGrid />
      <Footer />
    </main>
  );
}
