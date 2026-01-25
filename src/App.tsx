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
    { id: 'about', label: t('navbar.about'), icon: User },
    { id: 'experience', label: t('navbar.experience'), icon: Briefcase },
    { id: 'projects', label: t('navbar.projects'), icon: Terminal },
    { id: 'contact', label: t('navbar.contact'), icon: MessageSquare },
  ];

  if (isLoading) {
    return <LoadingScreen onComplete={() => setIsLoading(false)} />;
  }

  return (
    <div className="min-h-screen bg-black text-white relative overflow-x-hidden selection:bg-cyan-400 selection:text-black">
      {/* Custom Cursor */}
      <div className="hidden md:block">
        <CursorTrail />
      </div>

      {/* Scroll Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 z-[60] bg-transparent">
        <div
          className="h-full bg-gradient-to-r from-cyan-400 via-lime-400 to-amber-400 shadow-[0_0_10px_rgba(0,255,217,0.8)]"
          style={{ width: `${scrollProgress * 100}%` }}
        ></div>
      </div>

      {/* Background animation */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute inset-0 bg-black"></div>
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-lime-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      {/* Navbar */}
      <nav className="fixed top-0 w-full bg-black/80 backdrop-blur-xl border-b border-cyan-500/30 z-50 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div
              className="flex items-center space-x-3 cursor-pointer group"
              onClick={() => scrollTo('home')}
            >
              <div className="relative">
                <div className="absolute inset-0 bg-cyan-400 rounded-lg blur opacity-40 group-hover:opacity-60 transition-opacity duration-300"></div>
                <div className="relative w-10 h-10 bg-black border-2 border-cyan-400 rounded-lg flex items-center justify-center text-cyan-400 font-bold text-xl font-mono shadow-[0_0_20px_rgba(0,255,217,0.5)] group-hover:scale-105 transition-transform duration-300">
                  AA
                </div>
              </div>
              <div className="flex flex-col font-mono">
                <span className="text-lg font-bold text-white leading-none group-hover:text-cyan-400 transition-colors">
                  Abdellahi
                </span>
                <span className="text-xs font-medium text-cyan-400/70 tracking-wider">
                  $ ~/PORTFOLIO
                </span>
              </div>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-2">
              <div className="flex items-center bg-black/60 border border-white/10 rounded-lg p-1 backdrop-blur-sm">
                {navItems.map(({ id, label }) => (
                  <button
                    key={id}
                    onClick={() => scrollTo(id)}
                    className={`relative px-5 py-2 rounded-lg text-sm font-bold font-mono uppercase tracking-wider transition-all duration-300 ${activeSection === id
                      ? 'text-black bg-cyan-400 shadow-[0_0_20px_rgba(0,255,217,0.5)]'
                      : 'text-white/60 hover:text-white hover:bg-white/5'
                      }`}
                  >
                    {label}
                  </button>
                ))}
              </div>

              <div className="h-8 w-px bg-white/10 mx-4"></div>

              <div className="flex items-center space-x-3">
                {/* Theme Switch - Hidden for now since we're using dark theme */}
                <button
                  onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                  className="hidden p-2.5 rounded-lg bg-black/60 border border-white/10 hover:border-amber-400/50 transition-all duration-300 text-white/60 hover:text-amber-400"
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

                {/* Resume CTA */}
                <a
                  href="/CV.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hidden lg:flex items-center space-x-2 px-5 py-2.5 bg-lime-500/10 border-2 border-lime-500/50 text-lime-400 rounded-lg font-bold font-mono uppercase tracking-wider hover:shadow-[0_0_30px_rgba(57,255,20,0.5)] transition-all duration-300 transform hover:-translate-y-0.5"
                >
                  <span>Resume</span>
                  <Download className="h-4 w-4" />
                </a>
              </div>
            </div>

            {/* Mobile Menu Icon */}
            <div className="md:hidden flex items-center space-x-4">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 rounded-lg border border-white/20 text-white hover:border-cyan-400 hover:text-cyan-400 transition-all"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden absolute top-20 left-0 w-full bg-black/95 backdrop-blur-xl border-b border-cyan-500/30 transition-all duration-300 ease-in-out origin-top ${isMenuOpen ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-0 pointer-events-none'
          }`}>
          <div className="px-4 pt-2 pb-6 space-y-2">
            {navItems.map(({ id, label, icon: Icon }) => (
              <button
                key={id}
                onClick={() => scrollTo(id)}
                className={`flex items-center space-x-3 w-full px-4 py-3 rounded-lg text-base font-bold font-mono uppercase transition-all ${activeSection === id
                  ? 'bg-cyan-500/10 border border-cyan-500/50 text-cyan-400 shadow-[0_0_20px_rgba(0,255,217,0.3)]'
                  : 'text-white/60 hover:bg-white/5 hover:text-white border border-transparent'
                  }`}
              >
                <Icon className="h-5 w-5" />
                <span>{label}</span>
              </button>
            ))}
            <div className="pt-4 border-t border-white/10 mt-4 flex flex-col space-y-4">
              <div className="flex justify-center">
                <LanguageSwitcher />
              </div>
              <a
                href="/CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center space-x-2 px-5 py-3 bg-lime-500/10 border-2 border-lime-500/50 text-lime-400 rounded-lg font-bold font-mono uppercase tracking-wider hover:shadow-[0_0_30px_rgba(57,255,20,0.5)] transition-all"
              >
                <span>Download Resume</span>
                <Download className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Sections */}
      <main className="relative z-10">
        <HeroSection />
        <AboutSection />
        <Suspense fallback={<SectionLoader />}>
          <ExperienceSection />
          <SkillsSection />
          <ProjectsSection />
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
