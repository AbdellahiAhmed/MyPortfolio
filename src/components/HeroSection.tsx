import React, { useEffect, useState } from 'react';
import { ChevronDown, Terminal, MessageSquare, Sparkles } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const HeroSection = () => {
  const { t } = useTranslation();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollTo = (elementId: string) => {
    document.getElementById(elementId)?.scrollIntoView({ 
      behavior: 'smooth' 
    });
  };

  return (
    <section id="home" className="pt-16 min-h-screen flex items-center justify-center relative bg-white dark:bg-transparent overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-20 h-20 bg-purple-400/20 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-cyan-400/20 rounded-full animate-bounce delay-1000"></div>
        <div className="absolute bottom-40 left-20 w-12 h-12 bg-purple-500/20 rounded-full animate-pulse delay-2000"></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 bg-cyan-500/20 rounded-full animate-bounce delay-3000"></div>
      </div>

      <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center relative z-10 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="mb-8">
          <div className="relative inline-block mb-8 group">
            <div className="w-32 h-32 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 p-1 mx-auto shadow-lg group-hover:shadow-2xl transition-all duration-500">
              <div className="w-full h-full rounded-full bg-white dark:bg-slate-900 flex items-center justify-center overflow-hidden">
                <img src="/profile.jpg" alt="Profile" className="w-full h-full object-cover rounded-full group-hover:scale-110 transition-transform duration-500" loading="lazy" width="128" height="128" />
              </div>
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/30 to-cyan-500/30 rounded-full blur-xl animate-pulse group-hover:blur-2xl transition-all duration-500"></div>
            <div className="absolute -top-2 -right-2">
              <Sparkles className="h-6 w-6 text-yellow-400 animate-spin" />
            </div>
          </div>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          <span className={`bg-gradient-to-r from-purple-600 to-cyan-500 bg-clip-text text-transparent dark:from-white dark:to-slate-300 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
            {t("hero.intro")} <span className="text-purple-700 dark:text-purple-400">Abdellahi</span>
          </span>
          <br />
          <span className={`bg-gradient-to-r from-purple-600 to-cyan-500 bg-clip-text text-transparent dark:from-purple-400 dark:to-cyan-400 transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
            {t("hero.title1")}
          </span>
          <br />
          <span className={`text-3xl md:text-4xl text-gray-800 dark:bg-gradient-to-r dark:from-slate-300 dark:to-slate-400 dark:bg-clip-text dark:text-transparent transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
            & {t("hero.title2")}
          </span>
        </h1>
        
        <p className={`text-xl md:text-2xl text-gray-800 dark:text-slate-300 mb-12 max-w-4xl mx-auto leading-relaxed transition-all duration-1000 delay-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
          {t("hero.description1")} <span className="text-cyan-700 dark:text-cyan-400 font-semibold">{t("hero.network")}</span>,
          <span className="text-purple-700 dark:text-purple-400 font-semibold"> {t("hero.linux")}</span>,
          <span className="text-cyan-700 dark:text-cyan-400 font-semibold"> {t("hero.backend")}</span>.
          {t("hero.description2")}
        </p>
        
        <div className={`flex flex-col sm:flex-row gap-6 justify-center items-center transition-all duration-1000 delay-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
          <button
            onClick={() => scrollTo('projects')}
            className="group px-8 py-4 bg-gradient-to-r from-purple-600 to-cyan-600 text-white rounded-xl font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/30 flex items-center space-x-3"
          >
            <Terminal className="h-5 w-5 group-hover:rotate-12 transition-transform" />
            <span>{t("hero.viewWork")}</span>
          </button>
          <button
            onClick={() => scrollTo('contact')}
            className="group px-8 py-4 border-2 border-purple-500/50 hover:border-purple-500 text-purple-700 dark:text-white rounded-xl font-semibold transition-all duration-300 hover:bg-purple-100/30 dark:hover:bg-purple-500/10 hover:scale-105 flex items-center space-x-3"
          >
            <MessageSquare className="h-5 w-5 group-hover:scale-110 transition-transform" />
            <span>{t("hero.contact")}</span>
          </button>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="h-8 w-8 text-slate-400 hover:text-purple-500 transition-colors cursor-pointer" onClick={() => scrollTo('about')} />
      </div>
    </section>
  );
};

export default HeroSection;

