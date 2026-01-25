import React, { useState, useEffect, useRef, Suspense } from 'react';
import {
  Menu,
  X,
  User,
  Briefcase,
  Terminal,
  MessageSquare,
  Sun,
  Moon,
  Download
} from 'lucide-react';
import { useTranslation } from 'react-i18next';

import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import LoadingScreen from './components/LoadingScreen';
import CursorTrail from './components/CursorTrail';
import Footer from './components/Footer';
import LanguageSwitcher from './components/LanguageSwitcher';
import MarqueeSection from './components/MarqueeSection';
import WaveAnimation from './components/WaveAnimation';
import './i18n/i18n';

// Lazy load heavy sections for performance
const ExperienceSection = React.lazy(() => import('./components/ExperienceSection'));
const SkillsSection = React.lazy(() => import('./components/SkillsSection'));
const ProjectsSection = React.lazy(() => import('./components/ProjectsSection'));
const EducationSection = React.lazy(() => import('./components/EducationSection'));
const ResumeSection = React.lazy(() => import('./components/ResumeSection'));
const ContactSection = React.lazy(() => import('./components/ContactSection'));

// Section Loader Component
const SectionLoader = () => (
  <div className="py-20 flex justify-center items-center">
    <div className="w-10 h-10 border-4 border-blue-500/30 border-t-blue-600 rounded-full animate-spin"></div>
  </div>
);

const Portfolio = () => {
  const { t } = useTranslation();
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [theme, setTheme] = useState<'dark' | 'light'>(() => {
    return (localStorage.getItem('theme') as 'dark' | 'light') || 'dark';
  });

  // 👇 Suivi de scroll actif avec IntersectionObserver
  const sectionIds = ['home', 'about', 'experience', 'skills', 'projects', 'education', 'resume', 'contact'];
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({});

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  // Scroll Progress Handler
  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scroll = `${totalScroll / windowHeight}`;
      setScrollProgress(Number(scroll));
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        // Find the entry with the highest intersection ratio
        let mostVisible = entries[0];
        for (const entry of entries) {
          if (entry.intersectionRatio > mostVisible.intersectionRatio) {
            mostVisible = entry;
          }
        }

        if (mostVisible.isIntersecting) {
          setActiveSection(mostVisible.target.id);
        }
      },
      {
        threshold: [0.1, 0.3, 0.5, 0.7, 0.9],
        rootMargin: '-20% 0px -20% 0px'
      }
    );

    // Small delay to ensure DOM is ready
    const timeoutId = setTimeout(() => {
      sectionIds.forEach((id) => {
        const el = document.getElementById(id);
        if (el) {
          sectionRefs.current[id] = el;
          observer.observe(el);
        }
      });
    }, 200);

    return () => {
      clearTimeout(timeoutId);
      sectionIds.forEach((id) => {
        const el = sectionRefs.current[id];
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
    setActiveSection(id); // Manually set active section when clicking
  };

  // Simplified Nav Items for cleaner header
  const navItems = [
    { id: 'home', label: 'Home', icon: User },
    { id: 'about', label: 'About', icon: User },
    { id: 'projects', label: 'Works', icon: Terminal },
    { id: 'contact', label: 'Contact', icon: MessageSquare },
  ];

  if (isLoading) {
    return <LoadingScreen onComplete={() => setIsLoading(false)} />;
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white relative overflow-x-hidden selection:bg-gray-900 selection:text-white dark:selection:bg-white dark:selection:text-gray-900">
      {/* Custom Cursor */}
      <div className="hidden md:block">
        <CursorTrail />
      </div>

      {/* Scroll Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 z-[60] bg-transparent">
        <div
          className="h-full bg-gray-900 dark:bg-white"
          style={{ width: `${scrollProgress * 100}%` }}
        ></div>
      </div>

      {/* Navbar */}
      <nav className="fixed top-0 w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl border-b border-gray-200 dark:border-gray-800 z-50 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div
              className="flex items-center space-x-3 cursor-pointer group"
              onClick={() => scrollTo('home')}
            >
              <div className="flex flex-col">
                <span className="text-xl font-bold text-gray-900 dark:text-white leading-none transition-colors" style={{ fontFamily: "'Righteous', cursive" }}>
                  Abdellahi Ahmed
                </span>
              </div>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map(({ id, label }) => (
                <button
                  key={id}
                  onClick={() => scrollTo(id)}
                  className={`text-sm font-medium transition-all duration-300 ${activeSection === id
                    ? 'text-gray-900 dark:text-white font-semibold'
                    : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
                    }`}
                >
                  {label}
                </button>
              ))}

              <div className="flex items-center space-x-3">
                {/* Theme Switch */}
                <button
                  onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                  className="p-2.5 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300 text-gray-600 dark:text-gray-400"
                  aria-label="Toggle Theme"
                >
                  {theme === 'dark' ? (
                    <Sun className="h-5 w-5" />
                  ) : (
                    <Moon className="h-5 w-5" />
                  )}
                </button>

                {/* Language Switcher */}
                <LanguageSwitcher />
              </div>
            </div>

            {/* Mobile Menu Icon */}
            <div className="md:hidden flex items-center space-x-4">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 rounded-lg text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 transition-all"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden absolute top-20 left-0 w-full bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl border-b border-gray-200 dark:border-gray-800 transition-all duration-300 ease-in-out origin-top ${isMenuOpen ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-0 pointer-events-none'
          }`}>
          <div className="px-4 pt-2 pb-6 space-y-2">
            {navItems.map(({ id, label, icon: Icon }) => (
              <button
                key={id}
                onClick={() => scrollTo(id)}
                className={`flex items-center space-x-3 w-full px-4 py-3 rounded-lg text-base font-medium transition-all ${activeSection === id
                  ? 'bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white'
                  : 'text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800'
                  }`}
              >
                <Icon className="h-5 w-5" />
                <span>{label}</span>
              </button>
            ))}
            <div className="pt-4 border-t border-gray-200 dark:border-gray-800 mt-4">
              <div className="flex justify-center">
                <LanguageSwitcher />
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Sections */}
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
      <Footer />
    </div>
  );
};

export default Portfolio;
