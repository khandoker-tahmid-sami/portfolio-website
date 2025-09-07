import HeroSection from "@/components/HeroSection";
import ProjectSection from "@/components/ProjectSection";

export default function HomePage() {
  return (
    <div className="mt-24">
      <HeroSection />
      {/* <AboutSection /> */}
      <ProjectSection />
    </div>
  );
}
