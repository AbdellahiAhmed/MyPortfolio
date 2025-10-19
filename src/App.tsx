import React, { useState, useEffect, useRef } from 'react';
import {
  Menu,
  X,
  Network,
  User,
  Briefcase,
  Code,
  Terminal,
  GraduationCap,
  FileText,
  MessageSquare,
  Sun,
  Moon
} from 'lucide-react';
import { useTranslation } from 'react-i18next';

import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ExperienceSection from './components/ExperienceSection';
import SkillsSection from './components/SkillsSection';
import ProjectsSection from './components/ProjectsSection';
import EducationSection from './components/EducationSection';
import ResumeSection from './components/ResumeSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import LanguageSwitcher from './components/LanguageSwitcher';
import AutoNetConfigShowcase from './components/AutoNetConfigShowcase';
import LMDSystemShowcase from './components/LMDSystemShowcase';
import './i18n/i18n';

const Portfolio = () => {
  const { t } = useTranslation();
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState<'portfolio' | 'autonetconfig' | 'lmd-system'>('portfolio');
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

  useEffect(() => {
    // Only set up observer when on portfolio page
    if (currentPage !== 'portfolio') return;

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
  }, [currentPage]);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
    setActiveSection(id); // Manually set active section when clicking
  };

  const navigateToAutoNetConfig = () => {
    setCurrentPage('autonetconfig');
  };

  const navigateToLMDSystem = () => {
    setCurrentPage('lmd-system');
  };

  const navigateBackToPortfolio = () => {
    setCurrentPage('portfolio');
    setActiveSection('home'); // Reset to home section
  };

  const navItems = [
    { id: 'home', label: t('navbar.home'), icon: User },
    { id: 'about', label: t('navbar.about'), icon: User },
    { id: 'experience', label: t('navbar.experience'), icon: Briefcase },
    { id: 'skills', label: t('navbar.skills'), icon: Code },
    { id: 'projects', label: t('navbar.projects'), icon: Terminal },
    { id: 'education', label: t('navbar.education'), icon: GraduationCap },
    { id: 'resume', label: t('navbar.resume'), icon: FileText },
    { id: 'contact', label: t('navbar.contact'), icon: MessageSquare },
  ];

  return (
    <div className="min-h-screen bg-white text-black dark:bg-slate-900 dark:text-white relative overflow-x-hidden">
      {currentPage === 'autonetconfig' ? (
        <AutoNetConfigShowcase onBack={navigateBackToPortfolio} />
      ) : currentPage === 'lmd-system' ? (
        <LMDSystemShowcase onBack={navigateBackToPortfolio} />
      ) : (
        <>
          {/* Background animation */}
          <div className="fixed inset-0 overflow-hidden pointer-events-none">
            <div className="absolute inset-0 bg-gradient-to-br from-slate-100 via-purple-100/20 to-slate-100 dark:from-slate-900 dark:via-purple-900/20 dark:to-slate-900"></div>
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-400/10 dark:bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-400/10 dark:bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          </div>

          {/* Navbar */}
          <nav className="fixed top-0 w-full bg-white/80 dark:bg-slate-900/80 backdrop-blur-lg border-b border-slate-200 dark:border-slate-800 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex justify-between items-center h-16">
                {/* Logo */}
                <div className="flex items-center space-x-3">
                  <Network className="h-8 w-8 text-cyan-500 dark:text-cyan-400" />
                  <span className="text-xl font-bold bg-gradient-to-r from-purple-600 to-cyan-600 dark:from-purple-400 dark:to-cyan-400 bg-clip-text text-transparent">
                    Dev
                  </span>
                </div>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center space-x-1">
                  {navItems.map(({ id, label, icon: Icon }) => (
                    <button
                      key={id}
                      onClick={() => scrollTo(id)}
                      className={`flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                        activeSection === id
                          ? 'bg-gradient-to-r from-purple-400/20 to-cyan-400/20 dark:from-purple-500/20 dark:to-cyan-500/20 text-cyan-600 dark:text-cyan-400 border border-cyan-400/30 dark:border-cyan-500/30'
                          : 'text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200/50 dark:hover:bg-slate-800/50'
                      }`}
                    >
                      <Icon className="h-4 w-4" />
                      <span>{label}</span>
                    </button>
                  ))}

                  {/* Theme Switch */}
                  <button
                    onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                    className="ml-4 p-2 rounded-lg border border-slate-300 dark:border-slate-700 bg-slate-100/70 dark:bg-slate-800/50 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
                  >
                    {theme === 'dark' ? (
                      <Sun className="h-5 w-5 text-yellow-400" />
                    ) : (
                      <Moon className="h-5 w-5 text-slate-700" />
                    )}
                  </button>

                  {/* Language Switcher */}
                  <LanguageSwitcher />
                </div>

                {/* Mobile Menu Icon */}
                <div className="md:hidden">
                  <button
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className="p-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800/50"
                  >
                    {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                  </button>
                </div>
              </div>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
              <div className="md:hidden bg-slate-900/95 backdrop-blur-lg border-t border-slate-800">
                <div className="px-4 pt-2 pb-3 space-y-1">
                  {navItems.map(({ id, label, icon: Icon }) => (
                    <button
                      key={id}
                      onClick={() => scrollTo(id)}
                      className={`flex items-center space-x-3 w-full px-3 py-3 rounded-lg text-base font-medium transition-all ${
                        activeSection === id
                          ? 'bg-gradient-to-r from-purple-500/20 to-cyan-500/20 text-cyan-400'
                          : 'text-slate-300 hover:text-white hover:bg-slate-800/50'
                      }`}
                    >
                      <Icon className="h-5 w-5" />
                      <span>{label}</span>
                    </button>
                  ))}
                  <div className="flex justify-center py-3">
                    <button
                      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                      className="p-2 rounded-lg border border-slate-700 bg-slate-800/70 hover:bg-slate-700 transition-colors"
                    >
                      {theme === 'dark' ? (
                        <Sun className="h-5 w-5 text-yellow-400" />
                      ) : (
                        <Moon className="h-5 w-5 text-slate-300" />
                      )}
                    </button>
                  </div>
                  <div className="flex justify-center mt-4 pb-4">
                    <LanguageSwitcher />
                  </div>
                </div>
              </div>
            )}
          </nav>

          {/* Main Sections */}
          <HeroSection />
          <AboutSection />
          <ExperienceSection />
          <SkillsSection />
          <ProjectsSection onNavigateToAutoNetConfig={navigateToAutoNetConfig} onNavigateToLMDSystem={navigateToLMDSystem} />
          <EducationSection />
          <ResumeSection />
          <ContactSection />
          <Footer />
        </>
      )}
    </div>
  );
};

export default Portfolio;
