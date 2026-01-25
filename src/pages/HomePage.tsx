import { Suspense } from 'react';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import MarqueeSection from '../components/MarqueeSection';
import WaveAnimation from '../components/WaveAnimation';
import ExperienceSection from '../components/ExperienceSection';
import SkillsSection from '../components/SkillsSection';
import ProjectsSection from '../components/ProjectsSection';
import EducationSection from '../components/EducationSection';
import ResumeSection from '../components/ResumeSection';
import ContactSection from '../components/ContactSection';

const SectionLoader = () => (
  <div className="py-20 flex justify-center items-center">
    <div className="w-10 h-10 border-4 border-accent/30 border-t-accent rounded-full animate-spin"></div>
  </div>
);

const HomePage = () => {
  return (
    <main className="relative z-10">
      <HeroSection />
      <WaveAnimation />
      <MarqueeSection />
      <AboutSection />
      <WaveAnimation />
      <Suspense fallback={<SectionLoader />}>
        <ExperienceSection />
        <SkillsSection />
        <WaveAnimation />
        <MarqueeSection variant="secondary" />
        <ProjectsSection />
        <WaveAnimation />
        <EducationSection />
        <ResumeSection />
        <ContactSection />
      </Suspense>
    </main>
  );
};

export default HomePage;
