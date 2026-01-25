import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';


const HeroSection = () => {
  const { t } = useTranslation();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="flex flex-col items-center justify-center text-center space-y-8">

          {/* Main Heading - Aziz Khaldi Style */}
          <div className={`space-y-4 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tight" style={{ fontFamily: "'Righteous', cursive" }}>
              <span className="block text-gray-900 dark:text-white mb-2">
                Hi! i'm {t('hero.name')}
              </span>
            </h1>
          </div>

          {/* Subtitle */}
          <div className={`space-y-3 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <p className="text-3xl md:text-5xl font-bold text-gray-800 dark:text-gray-200" style={{ fontFamily: "'Righteous', cursive" }}>
              Full-stack Developer
            </p>
            <p className="text-2xl md:text-4xl font-bold text-gray-600 dark:text-gray-400" style={{ fontFamily: "'Righteous', cursive" }}>
              Network Engineer
            </p>
          </div>

          {/* Description */}
          <div className={`max-w-2xl transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 leading-relaxed">
              {t('hero.description')}
            </p>
          </div>

          {/* CTA Buttons */}
          <div className={`flex flex-col sm:flex-row items-center gap-4 transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <a
              href="#about"
              className="px-8 py-4 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-full font-semibold text-lg hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              About Me
            </a>
            <a
              href="#projects"
              className="px-8 py-4 border-2 border-gray-900 dark:border-white text-gray-900 dark:text-white rounded-full font-semibold text-lg hover:scale-105 transition-all duration-300"
            >
              View Works
            </a>
          </div>

          {/* Social Links */}
          <div className={`flex items-center space-x-6 transition-all duration-1000 delay-900 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <a
              href="https://github.com/AbdellahiAhmed"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
              aria-label="GitHub"
            >
              <Github className="h-6 w-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/abdellahiahmedahmedbaba/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a
              href="mailto:AbdellahiAhmedAhmedBaba@gmail.com"
              className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
              aria-label="Email"
            >
              <Mail className="h-6 w-6" />
            </a>
          </div>

          {/* Scroll Indicator */}
          <div className={`absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce transition-all duration-1000 delay-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            <div className="flex flex-col items-center space-y-2">
              <span className="text-sm text-gray-500 dark:text-gray-400 uppercase tracking-widest">scroll down</span>
              <ArrowDown className="h-5 w-5 text-gray-500 dark:text-gray-400" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
