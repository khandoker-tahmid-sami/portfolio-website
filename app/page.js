import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import FooterSection from "@/components/FooterSection";
import HeroSection from "@/components/HeroSection";
import ProjectSection from "@/components/ProjectSection";

export default function HomePage() {
  return (
    <div className="mt-24 container mx-auto">
      <HeroSection />
      <AboutSection />
      <ProjectSection />
      <ContactSection />
      <FooterSection />
    </div>
  );
}
