import { Suspense } from 'react';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import MarqueeSection from '../components/MarqueeSection';
import ExperienceSection from '../components/ExperienceSection';
import SkillsSection from '../components/SkillsSection';
import ProjectsSection from '../components/ProjectsSection';
import EducationSection from '../components/EducationSection';
import ResumeSection from '../components/ResumeSection';
import ContactSection from '../components/ContactSection';

const SectionLoader = () => (
  <div className="py-20 flex justify-center items-center">
    <div className="w-6 h-6 border border-slate-300 dark:border-slate-700 border-t-slate-900 dark:border-t-white rounded-full animate-spin" />
  </div>
);

const HomePage = () => {
  return (
    <main className="relative z-10">
      <HeroSection />
      <AboutSection />
      <Suspense fallback={<SectionLoader />}>
        <MarqueeSection />
        <ExperienceSection />
        <SkillsSection />
        <ProjectsSection />
        <EducationSection />
        <MarqueeSection variant="secondary" />
        <ResumeSection />
        <ContactSection />
      </Suspense>
    </main>
  );
};

export default HomePage;
