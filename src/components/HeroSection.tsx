import { Github, Linkedin, Mail } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  const { t } = useTranslation();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center justify-start relative overflow-hidden pt-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full py-20">
        <div className="flex flex-col items-start justify-center space-y-8 max-w-5xl">

          {/* Main Heading - Pixel-Perfect Azizkhaldi.com Style */}
          <div className={`transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h1 className="font-display font-normal leading-tight text-gray-900 dark:text-white">
              <span className="block text-hero-sm md:text-hero-md lg:text-hero">
                Hi! i'm
              </span>
              <span className="block text-hero-sm md:text-hero-md lg:text-hero">
                {t('hero.name')}
              </span>
            </h1>
          </div>

          {/* Subtitle - Two Lines */}
          <div className={`space-y-3 transition-all duration-700 ease-out delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <p className="text-3xl md:text-4xl lg:text-5xl font-display font-normal text-gray-800 dark:text-gray-200 leading-tight">
              Full-stack Developer
            </p>
            <p className="text-2xl md:text-3xl lg:text-4xl font-display font-normal text-gray-600 dark:text-gray-400 leading-tight">
              Network Engineer
            </p>
          </div>

          {/* Small Name Line - Azizkhaldi.com has "I'm Aziz—aFullStackDevelopercrafting..." style */}
          <div className={`max-w-3xl transition-all duration-700 ease-out delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 leading-relaxed">
              {t('hero.description')}
            </p>
          </div>

          {/* CTA Button */}
          <div className={`transition-all duration-700 ease-out delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <a
              href="#about"
              className="inline-block px-8 py-4 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-full font-medium text-base hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              About Me
            </a>
            <p className="text-xs uppercase tracking-widest text-gray-500 dark:text-gray-500 mt-4">
              Scroll to Explore
            </p>
          </div>

          {/* Social Links - Positioned inline */}
          <div className={`flex items-center space-x-6 transition-all duration-700 ease-out delay-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <a
              href="https://github.com/AbdellahiAhmed"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors duration-300"
              aria-label="GitHub"
            >
              <Github className="h-6 w-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/abdellahiahmedahmedbaba/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a
              href="mailto:AbdellahiAhmedAhmedBaba@gmail.com"
              className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors duration-300"
              aria-label="Email"
            >
              <Mail className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator - Bottom Center */}
      <div className={`absolute bottom-12 left-1/2 transform -translate-x-1/2 transition-all duration-700 delay-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
        <div className="flex flex-col items-center space-y-3">
          <span className="text-xs uppercase tracking-widest text-gray-500 dark:text-gray-500">scroll down</span>
          <div className="h-12 w-px bg-gray-300 dark:bg-gray-700 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
