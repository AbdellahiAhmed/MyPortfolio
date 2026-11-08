import { useState, useEffect } from 'react';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, Sun, Moon, ArrowDownToLine } from 'lucide-react';
import { useTranslation } from 'react-i18next';

import LoadingScreen from './components/LoadingScreen';
import Footer from './components/Footer';
import LanguageSwitcher from './components/LanguageSwitcher';
import HomePage from './pages/HomePage';
import WorksPage from './pages/WorksPage';
import ProjectDetailPage from './pages/ProjectDetailPage';
import './i18n/i18n';

const Portfolio = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { t } = useTranslation();
  const [activeSection, setActiveSection] = useState('');
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [theme, setTheme] = useState<'dark' | 'light'>(() => {
    return (localStorage.getItem('theme') as 'dark' | 'light') || 'dark';
  });

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
      setScrolled(totalScroll > 8);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const navItems = [
    { path: '/#about', label: t('nav.about') },
    { path: '/#experience', label: t('nav.experience') },
    { path: '/#projects', label: t('nav.projects') },
    { path: '/#resume', label: t('nav.resume') },
    { path: '/#contact', label: t('nav.contact') },
  ];

  // Highlight the section in view; the band in the middle of the screen decides.
  useEffect(() => {
    if (location.pathname !== '/' || isLoading) return;
    const ids = ['about', 'experience', 'projects', 'resume', 'contact'];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: '-45% 0px -50% 0px' }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [location.pathname, isLoading]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleNavClick = (path: string) => {
    if (path === '/') {
      if (location.pathname === '/') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        navigate('/');
      }
    } else if (path.includes('#')) {
      const sectionId = path.split('#')[1];
      if (location.pathname === '/') {
        scrollToSection(sectionId);
      } else {
        navigate('/', { state: { scrollTo: sectionId } });
      }
    } else {
      navigate(path);
    }
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const state = location.state as { scrollTo?: string } | null;
    if (location.pathname === '/' && state?.scrollTo) {
      setTimeout(() => scrollToSection(state.scrollTo!), 80);
    }
  }, [location]);

  if (isLoading) {
    return <LoadingScreen onComplete={() => setIsLoading(false)} />;
  }

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-gray-900 text-gray-900 dark:text-white relative overflow-x-hidden">
      {/* Scroll Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 z-[60] bg-transparent">
        <div
          className="h-full bg-gray-900 dark:bg-white transition-all duration-300"
          style={{ width: `${scrollProgress * 100}%` }}
        ></div>
      </div>

      {/* Navbar */}
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-slate-50/90 dark:bg-slate-950/85 backdrop-blur-xl border-b border-slate-200/80 dark:border-slate-800/80 shadow-[0_1px_12px_rgba(15,23,42,0.06)]'
            : 'bg-transparent border-b border-transparent'
        }`}
      >
        <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-10">
          <div className="flex justify-between items-center h-16 md:h-[72px]">
            <button
              type="button"
              onClick={() => handleNavClick('/')}
              className="flex items-center gap-3"
              aria-label="Home"
            >
              <span className="grid h-9 w-9 place-items-center rounded-full bg-slate-950 dark:bg-white font-serif text-[15px] italic text-white dark:text-slate-950">
                A
              </span>
              <span className="text-left leading-tight">
                <span className="block font-serif text-[19px] text-slate-950 dark:text-white">Abdellahi Ahmed</span>
                <span className="hidden sm:block text-[12px] text-slate-600 dark:text-slate-400">Software · Network · Security</span>
              </span>
            </button>

            <div className="hidden md:flex items-center gap-1 rounded-full border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/60 p-1">
              {navItems.map(({ path, label }) => {
                const isActive = location.pathname === '/' && activeSection === path.split('#')[1];
                return (
                  <button
                    key={path}
                    onClick={() => handleNavClick(path)}
                    aria-current={isActive ? 'true' : undefined}
                    className={`rounded-full px-4 py-1.5 text-[14px] font-medium transition-colors duration-200 ${
                      isActive
                        ? 'bg-slate-950 text-white dark:bg-white dark:text-slate-950'
                        : 'text-slate-700 hover:text-slate-950 hover:bg-slate-100 dark:text-slate-300 dark:hover:text-white dark:hover:bg-slate-800'
                    }`}
                  >
                    {label}
                  </button>
                );
              })}
            </div>

            <div className="hidden md:flex items-center gap-2">
              <button
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                className="grid h-9 w-9 place-items-center rounded-full text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                aria-label="Toggle Theme"
              >
                {theme === 'dark' ? <Sun className="h-[18px] w-[18px]" /> : <Moon className="h-[18px] w-[18px]" />}
              </button>
              <LanguageSwitcher />
              <a
                href="/cv.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="ml-1 inline-flex items-center gap-1.5 rounded-full bg-amber-500 px-4 py-2 text-[14px] font-semibold text-slate-950 hover:bg-amber-400 transition-colors"
              >
                <ArrowDownToLine className="h-4 w-4" strokeWidth={2} />
                {t('nav.cv')}
              </a>
            </div>

            <div className="md:hidden flex items-center gap-1">
              <button
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                className="grid h-10 w-10 place-items-center rounded-full text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                aria-label="Toggle Theme"
              >
                {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </button>
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="grid h-10 w-10 place-items-center rounded-full text-slate-950 dark:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                aria-label={t('nav.menu')}
                aria-expanded={isMenuOpen}
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        <div
          className={`md:hidden absolute top-16 left-0 w-full bg-slate-50/97 dark:bg-slate-950/97 backdrop-blur-xl border-b border-slate-200 dark:border-slate-800 transition-all duration-300 ease-in-out origin-top ${
            isMenuOpen ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-0 pointer-events-none'
          }`}
        >
          <div className="px-5 pt-3 pb-6 space-y-1">
            {navItems.map(({ path, label }) => (
              <button
                key={path}
                onClick={() => handleNavClick(path)}
                className="flex items-center w-full px-4 py-3 rounded-xl text-[17px] font-medium text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-900"
              >
                {label}
              </button>
            ))}
            <div className="flex items-center justify-between gap-3 pt-4 mt-3 border-t border-slate-200 dark:border-slate-800">
              <LanguageSwitcher />
              <a
                href="/cv.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-full bg-amber-500 px-4 py-2 text-[15px] font-semibold text-slate-950"
              >
                <ArrowDownToLine className="h-4 w-4" strokeWidth={2} />
                {t('nav.cv')}
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Routes */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/works" element={<WorksPage />} />
        <Route path="/project/:slug" element={<ProjectDetailPage />} />
      </Routes>

      <Footer />
    </div>
  );
};

export default Portfolio;
