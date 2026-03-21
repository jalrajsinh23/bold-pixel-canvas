import CursorGlow from "@/components/CursorGlow";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProjectsSection from "@/components/ProjectsSection";
import SkillsSection from "@/components/SkillsSection";
import JourneySection from "@/components/JourneySection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <div className="relative overflow-x-hidden">
      <CursorGlow />
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <SkillsSection />
      <JourneySection />
      <ContactSection />
    </div>
  );
};

export default Index;
