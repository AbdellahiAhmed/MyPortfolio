import { ArrowDown, Github, Linkedin, Mail, Sparkles, Zap, Code2 } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';

const HeroSection = () => {
  const { t } = useTranslation();
  const [typedText, setTypedText] = useState('');
  const fullText = "Full Stack Developer & Network Architect";

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      setTypedText(fullText.slice(0, index + 1));
      index++;
      if (index > fullText.length) clearInterval(timer);
    }, 50);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-slate-500/20 rounded-full blur-3xl animate-pulse-slow delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-blue-500/10 to-amber-500/10 rounded-full blur-3xl animate-rotate-glow"></div>

        {/* Floating 3D Shapes */}
        <div className="absolute top-1/4 right-[15%] w-24 h-24 bg-gradient-to-br from-blue-400/20 to-slate-400/20 backdrop-blur-md rounded-xl border border-white/10 animate-float-3d"></div>
        <div className="absolute bottom-1/4 left-[15%] w-16 h-16 bg-gradient-to-br from-amber-400/20 to-orange-400/20 backdrop-blur-md rounded-full border border-white/10 animate-float-3d delay-1000"></div>
      </div>

      {/* Particle System */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute bg-white/30 rounded-full animate-particle-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 4 + 2}px`,
              height: `${Math.random() * 4 + 2}px`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${Math.random() * 10 + 10}s`
            }}
          ></div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">

          {/* Text Content */}
          <div className="flex-1 text-center md:text-left animate-slideInLeft">
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full mb-6 backdrop-blur-sm animate-bounce-in shadow-sm">
              <Sparkles className="h-4 w-4 text-amber-400" />
              <span className="text-sm font-semibold text-blue-700 dark:text-blue-200 drop-shadow-sm">Available for work</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
              <span className="block text-slate-800 dark:text-white mb-2">{t('hero.greeting')}</span>
              <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-amber-500 bg-clip-text text-transparent animate-gradient-shift">
                {t('hero.name')}
              </span>
            </h1>

            <div className="h-8 mb-8 flex items-center justify-center md:justify-start">
              <span className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 font-mono border-r-2 border-amber-500 pr-2 animate-pulse">
                {typedText}
              </span>
            </div>

            <p className="text-lg text-slate-600 dark:text-slate-400 mb-10 max-w-2xl leading-relaxed">
              {t('hero.description')}
            </p>

            <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6 justify-center md:justify-start">
              <a
                href="#projects"
                className="group relative px-8 py-4 bg-blue-600 text-white rounded-xl font-semibold shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 transition-all duration-300 hover:-translate-y-1 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer"></div>
                <span className="relative flex items-center space-x-2">
                  <span>{t('hero.cta')}</span>
                  <ArrowDown className="h-5 w-5 group-hover:translate-y-1 transition-transform" />
                </span>
              </a>

              <div className="flex items-center space-x-4">
                <a href="https://github.com/AbdellahiAhmed" target="_blank" rel="noopener noreferrer" className="p-4 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-xl border border-slate-200 dark:border-slate-700 hover:border-blue-500 hover:text-blue-500 dark:hover:text-blue-400 transition-all duration-300 hover:-translate-y-1 shadow-sm hover:shadow-md">
                  <Github className="h-6 w-6" />
                </a>
                <a href="https://www.linkedin.com/in/abdellahiahmedahmedbaba/" target="_blank" rel="noopener noreferrer" className="p-4 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-xl border border-slate-200 dark:border-slate-700 hover:border-blue-500 hover:text-blue-500 dark:hover:text-blue-400 transition-all duration-300 hover:-translate-y-1 shadow-sm hover:shadow-md">
                  <Linkedin className="h-6 w-6" />
                </a>
                <a href="mailto:AbdellahiAhmedAhmedBaba@gmail.com" className="p-4 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-xl border border-slate-200 dark:border-slate-700 hover:border-blue-500 hover:text-blue-500 dark:hover:text-blue-400 transition-all duration-300 hover:-translate-y-1 shadow-sm hover:shadow-md">
                  <Mail className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>

          {/* Profile Image & Visuals */}
          <div className="flex-1 relative animate-slideInRight mt-12 md:mt-0">
            <div className="relative w-72 h-72 md:w-96 md:h-96 mx-auto">
              {/* Rotating Rings */}
              <div className="absolute inset-0 rounded-full border-2 border-dashed border-blue-500/30 animate-spin-slow" style={{ animationDuration: '20s' }}></div>
              <div className="absolute -inset-4 rounded-full border border-slate-500/20 animate-spin-slow" style={{ animationDuration: '15s', animationDirection: 'reverse' }}></div>

              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-500 to-amber-500 rounded-full blur-2xl opacity-20 animate-pulse"></div>

              {/* Image Container */}
              <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white dark:border-slate-800 shadow-2xl group">
                <img
                  src="/MyProfile.PNG"
                  alt="Profile"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Floating Icons */}
              <div className="absolute -top-4 -right-4 p-4 bg-white dark:bg-slate-800 rounded-2xl shadow-xl animate-float delay-100">
                <Code2 className="h-8 w-8 text-blue-500" />
              </div>
              <div className="absolute bottom-8 -left-8 p-4 bg-white dark:bg-slate-800 rounded-2xl shadow-xl animate-float delay-300">
                <Zap className="h-8 w-8 text-amber-500" />
              </div>
            </div>
          </div>
        </div>



        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:flex flex-col items-center text-slate-400">
          <span className="text-xs mb-2 tracking-widest uppercase">Scroll Down</span>
          <ArrowDown className="h-5 w-5 text-blue-500" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
