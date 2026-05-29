import { ArrowRight, Download, Github, Linkedin, Mail, MapPin, Sparkles } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';

const HeroSection = () => {
  const { t } = useTranslation();
  const [isVisible, setIsVisible] = useState(false);
  const resumeHref = '/cv.pdf?v=2026-05-28';

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const proofPoints = [
    t('hero.proof_appstore'),
    t('hero.proof_modules'),
    t('hero.proof_ccna'),
    t('hero.proof_stack'),
  ];

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
            <div className="flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-2 rounded-full border border-emerald-200/80 bg-emerald-50 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-emerald-700 dark:border-emerald-500/30 dark:bg-emerald-500/10 dark:text-emerald-300">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                </span>
                {t('hero.availability_pill')}
              </span>
              <span className="text-xs font-semibold uppercase tracking-[0.26em] text-slate-500 dark:text-slate-400">
                {t('hero.greeting')} Abdellahi Ahmed
              </span>
            </div>

            <h1 className="mt-6 max-w-5xl font-display text-4xl font-extrabold leading-[0.98] tracking-[-0.04em] text-slate-950 dark:text-white sm:text-5xl md:text-6xl lg:text-7xl">
              {t('hero.headline_lead')}
              <span className="text-slate-400 dark:text-slate-500"> — </span>
              <span className="bg-gradient-to-r from-blue-600 via-cyan-600 to-emerald-500 bg-clip-text text-transparent dark:from-blue-400 dark:via-cyan-400 dark:to-emerald-400">
                {t('hero.headline_highlight')}
              </span>
            </h1>
          </div>

          <div
            className={`mt-8 transition-all duration-700 ease-out delay-100 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`}
          >
            <p className="text-base font-semibold uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400 sm:text-lg">
              {t('hero.subtitle1')} <span className="mx-3 text-slate-300 dark:text-slate-600">/</span> {t('hero.subtitle2')}
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

          {/* Proof strip — what makes this candidate concrete */}
          <div
            className={`mt-8 transition-all duration-700 ease-out delay-300 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`}
          >
            <div className="flex flex-wrap items-center gap-2">
              {proofPoints.map((point) => (
                <span
                  key={point}
                  className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-white/70 px-3 py-1.5 text-xs font-semibold text-slate-700 backdrop-blur dark:border-slate-700/70 dark:bg-slate-900/60 dark:text-slate-200"
                >
                  <Sparkles className="h-3 w-3 text-blue-500 dark:text-blue-400" />
                  {point}
                </span>
              ))}
            </div>
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
              href={resumeHref}
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
