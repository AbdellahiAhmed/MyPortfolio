import { ArrowRight, Download, Github, Linkedin, Mail, MapPin } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';

const HeroSection = () => {
  const { t } = useTranslation();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-white pt-20 dark:bg-slate-950"
    >
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent dark:via-slate-700" />
      <div className="absolute right-0 top-0 h-80 w-80 rounded-full bg-blue-100/70 blur-3xl dark:bg-blue-900/20" />
      <div className="absolute left-0 top-1/3 h-64 w-64 rounded-full bg-slate-100 blur-3xl dark:bg-slate-900/40" />

      <div className="relative z-10 mx-auto flex min-h-[calc(100vh-5rem)] max-w-7xl items-center px-4 py-16 sm:px-6 lg:px-8">
        <div className="w-full max-w-5xl">
          <div
            className={`transition-all duration-700 ease-out ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`}
          >
            <p className="text-sm font-semibold uppercase tracking-[0.26em] text-slate-500 dark:text-slate-400">
              {t('hero.greeting')}
            </p>

            <h1 className="mt-5 max-w-4xl font-display text-5xl font-extrabold leading-[0.94] tracking-[-0.05em] text-slate-950 dark:text-white sm:text-6xl md:text-7xl lg:text-[5.25rem]">
              {t('hero.name')}
            </h1>
          </div>

          <div
            className={`mt-8 transition-all duration-700 ease-out delay-100 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`}
          >
            <p className="text-base font-semibold uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400 sm:text-lg">
              {t('hero.subtitle1')} / {t('hero.subtitle2')}
            </p>
          </div>

          <div
            className={`mt-8 max-w-3xl transition-all duration-700 ease-out delay-200 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`}
          >
            <p className="text-lg leading-8 text-slate-600 dark:text-slate-300 md:text-xl">
              {t('hero.description')}
            </p>
          </div>

          <div
            className={`mt-12 flex flex-col gap-4 transition-all duration-700 ease-out delay-300 sm:flex-row sm:flex-wrap sm:items-center ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`}
          >
            <a
              href="#projects"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-slate-950 px-7 py-4 text-base font-semibold text-white transition-colors duration-300 hover:bg-slate-800 dark:bg-white dark:text-slate-950 dark:hover:bg-slate-100"
            >
              <span>{t('hero.cta')}</span>
              <ArrowRight className="h-4 w-4" />
            </a>

            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-300 px-7 py-4 text-base font-semibold text-slate-700 transition-colors duration-300 hover:border-slate-950 hover:text-slate-950 dark:border-slate-700 dark:text-slate-200 dark:hover:border-slate-300 dark:hover:text-white"
            >
              <span>{t('hero.cta_contact')}</span>
              <Mail className="h-4 w-4" />
            </a>

            <a
              href="/CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-2 py-4 text-sm font-semibold text-slate-500 transition-colors duration-300 hover:text-slate-950 dark:text-slate-400 dark:hover:text-white"
            >
              <Download className="h-4 w-4" />
              <span>{t('resume.button')}</span>
            </a>
          </div>

          <div
            className={`mt-16 flex flex-col gap-8 border-t border-slate-200 pt-8 transition-all duration-700 ease-out delay-500 dark:border-slate-800 md:flex-row md:items-start md:justify-between ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`}
          >
            <div className="max-w-xl space-y-3">
              <div className="inline-flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
                <MapPin className="h-4 w-4" />
                <span>{t('hero.metric_location_value')}</span>
              </div>
              <p className="text-sm leading-7 text-slate-500 dark:text-slate-400">
                {t('hero.panelText')}
              </p>
            </div>

            <div className="flex items-center gap-3">
              <a
                href="https://github.com/AbdellahiAhmed"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-slate-200 p-3 text-slate-500 transition-colors duration-300 hover:border-slate-950 hover:text-slate-950 dark:border-slate-800 dark:text-slate-400 dark:hover:border-slate-300 dark:hover:text-white"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/abdellahiahmedahmedbaba/"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-slate-200 p-3 text-slate-500 transition-colors duration-300 hover:border-slate-950 hover:text-slate-950 dark:border-slate-800 dark:text-slate-400 dark:hover:border-slate-300 dark:hover:text-white"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="mailto:AbdellahiAhmedAhmedBaba@gmail.com"
                className="rounded-full border border-slate-200 p-3 text-slate-500 transition-colors duration-300 hover:border-slate-950 hover:text-slate-950 dark:border-slate-800 dark:text-slate-400 dark:hover:border-slate-300 dark:hover:text-white"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
