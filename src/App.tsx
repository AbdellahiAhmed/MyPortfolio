import { useState, useEffect } from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { useTranslation } from 'react-i18next';

import LoadingScreen from './components/LoadingScreen';
import CursorTrail from './components/CursorTrail';
import Footer from './components/Footer';
import LanguageSwitcher from './components/LanguageSwitcher';
import HomePage from './pages/HomePage';
import WorksPage from './pages/WorksPage';
import ProjectDetailPage from './pages/ProjectDetailPage';
import SpacedText from './components/utils/SpacedText';
import './i18n/i18n';

const Portfolio = () => {
  const { t } = useTranslation();
  const location = useLocation();
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
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  // Navigation items with spaced text (azizkhaldi.com style)
  const navItems = [
    { path: '/', label: 'Home', spaced: true },
    { path: '/#about', label: 'About', spaced: true },
    { path: '/works', label: 'Works', spaced: true },
    { path: '/#contact', label: 'Contact', spaced: false },
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleNavClick = (path: string) => {
    if (path.includes('#')) {
      const sectionId = path.split('#')[1];
      if (location.pathname === '/') {
        scrollToSection(sectionId);
      } else {
        window.location.href = path;
      }
    }
    setIsMenuOpen(false);
  };

  if (isLoading) {
    return <LoadingScreen onComplete={() => setIsLoading(false)} />;
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white relative overflow-x-hidden">
      {/* Custom Cursor */}
      <div className="hidden md:block">
        <CursorTrail />
      </div>

      {/* Scroll Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 z-[60] bg-transparent">
        <div
          className="h-full bg-gray-900 dark:bg-white transition-all duration-300"
          style={{ width: `${scrollProgress * 100}%` }}
        ></div>
      </div>

      {/* Navbar - Azizkhaldi.com Style */}
      <nav className="fixed top-0 w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl border-b border-gray-200/50 dark:border-gray-800/50 z-50 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link
              to="/"
              className="flex items-center space-x-3 group"
            >
              <span className="text-xl font-display font-bold text-gray-900 dark:text-white leading-none transition-colors">
                Abdellahi Ahmed
              </span>
            </Link>

            {/* Desktop Menu - Spaced Letters */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map(({ path, label, spaced }) => (
                path.includes('#') ? (
                  <button
                    key={path}
                    onClick={() => handleNavClick(path)}
                    className="text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-all duration-300"
                  >
                    {spaced ? <SpacedText text={label} /> : label}
                  </button>
                ) : (
                  <Link
                    key={path}
                    to={path}
                    className="text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-all duration-300"
                  >
                    {spaced ? <SpacedText text={label} /> : label}
                  </Link>
                )
              ))}

              <div className="flex items-center space-x-3">
                {/* Theme Switch */}
                <button
                  onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                  className="p-2.5 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300 text-gray-600 dark:text-gray-400"
                  aria-label="Toggle Theme"
                >
                  {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
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
        <div
          className={`md:hidden absolute top-20 left-0 w-full bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl border-b border-gray-200 dark:border-gray-800 transition-all duration-300 ease-in-out origin-top ${
            isMenuOpen ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-0 pointer-events-none'
          }`}
        >
          <div className="px-4 pt-2 pb-6 space-y-2">
            {navItems.map(({ path, label }) => (
              path.includes('#') ? (
                <button
                  key={path}
                  onClick={() => handleNavClick(path)}
                  className="flex items-center w-full px-4 py-3 rounded-lg text-base font-medium text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800"
                >
                  {label}
                </button>
              ) : (
                <Link
                  key={path}
                  to={path}
                  className="flex items-center w-full px-4 py-3 rounded-lg text-base font-medium text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800"
                >
                  {label}
                </Link>
              )
            ))}
            <div className="pt-4 border-t border-gray-200 dark:border-gray-800 mt-4">
              <div className="flex justify-center">
                <LanguageSwitcher />
              </div>
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
