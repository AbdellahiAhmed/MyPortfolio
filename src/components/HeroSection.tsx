import { ArrowRight, Download, Github, Linkedin, Mail, MapPin, ShieldCheck, Sparkles, Workflow } from 'lucide-react';
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
      className="relative min-h-screen overflow-hidden bg-[radial-gradient(circle_at_top_left,_rgba(59,130,246,0.16),_transparent_30%),radial-gradient(circle_at_80%_20%,_rgba(14,165,233,0.14),_transparent_24%),linear-gradient(180deg,_#f8fbff_0%,_#ffffff_45%,_#f7f9fc_100%)] pt-20 dark:bg-[radial-gradient(circle_at_top_left,_rgba(59,130,246,0.2),_transparent_30%),radial-gradient(circle_at_80%_20%,_rgba(14,165,233,0.16),_transparent_24%),linear-gradient(180deg,_#020617_0%,_#0f172a_45%,_#111827_100%)]"
    >
      <div
        className="absolute inset-0 opacity-40 dark:opacity-20"
        style={{
          backgroundImage:
            'linear-gradient(rgba(148,163,184,0.18) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,0.18) 1px, transparent 1px)',
          backgroundSize: '72px 72px',
          maskImage: 'linear-gradient(180deg, rgba(0,0,0,0.95), rgba(0,0,0,0.2))',
        }}
      />

      <div className="absolute left-[-10%] top-24 h-64 w-64 rounded-full bg-blue-500/15 blur-3xl dark:bg-blue-500/20" />
      <div className="absolute right-[-8%] top-32 h-72 w-72 rounded-full bg-cyan-400/10 blur-3xl dark:bg-cyan-400/15" />

      <div className="relative z-10 mx-auto grid min-h-[calc(100vh-5rem)] max-w-7xl items-center gap-12 px-4 py-12 sm:px-6 lg:grid-cols-[minmax(0,1.15fr)_minmax(320px,0.85fr)] lg:px-8 lg:py-16">
        <div className="max-w-4xl">
          <div
            className={`transition-all duration-700 ease-out ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          >
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-200/70 bg-white/80 px-4 py-2 text-sm font-semibold text-slate-700 shadow-lg shadow-blue-100/50 backdrop-blur dark:border-blue-400/20 dark:bg-slate-900/70 dark:text-slate-200 dark:shadow-blue-950/30">
              <Sparkles className="h-4 w-4 text-blue-600 dark:text-blue-400" />
              <span>{t('hero.badge')}</span>
            </div>

            <h1 className="max-w-4xl font-display text-5xl font-extrabold leading-[0.95] tracking-[-0.04em] text-slate-950 dark:text-white sm:text-6xl md:text-7xl lg:text-[5.5rem]">
              <span className="mb-3 block text-base font-semibold uppercase tracking-[0.28em] text-slate-500 dark:text-slate-400 sm:text-lg">
                {t('hero.greeting')}
              </span>
              <span className="block">{t('hero.name')}</span>
            </h1>
          </div>

          <div
            className={`mt-8 flex flex-wrap gap-3 transition-all duration-700 ease-out delay-150 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          >
            {[t('hero.subtitle1'), t('hero.subtitle2')].map((label, index) => (
              <span
                key={label}
                className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-semibold shadow-sm backdrop-blur ${
                  index === 0
                    ? 'border-slate-900/10 bg-slate-900 text-white dark:border-white/10 dark:bg-white dark:text-slate-950'
                    : 'border-slate-300/80 bg-white/80 text-slate-700 dark:border-slate-700 dark:bg-slate-900/70 dark:text-slate-200'
                }`}
              >
                {index === 0 ? <Workflow className="h-4 w-4" /> : <ShieldCheck className="h-4 w-4" />}
                <span>{label}</span>
              </span>
            ))}
          </div>

          <div
            className={`mt-8 max-w-3xl transition-all duration-700 ease-out delay-300 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          >
            <p className="text-lg leading-8 text-slate-600 dark:text-slate-300 md:text-xl">
              {t('hero.description')}
            </p>
          </div>

          <div
            className={`mt-10 flex flex-col gap-4 transition-all duration-700 ease-out delay-500 sm:flex-row ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          >
            <a
              href="#projects"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-slate-950 px-7 py-4 text-base font-semibold text-white shadow-xl shadow-slate-900/15 transition-all duration-300 hover:-translate-y-0.5 hover:bg-slate-800 dark:bg-white dark:text-slate-950 dark:shadow-white/10 dark:hover:bg-slate-100"
            >
              <span>{t('hero.cta')}</span>
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-300/80 bg-white/85 px-7 py-4 text-base font-semibold text-slate-700 shadow-lg shadow-slate-200/60 backdrop-blur transition-all duration-300 hover:-translate-y-0.5 hover:border-slate-400 hover:text-slate-950 dark:border-slate-700 dark:bg-slate-900/70 dark:text-slate-200 dark:shadow-slate-950/30 dark:hover:border-slate-500 dark:hover:text-white"
            >
              <span>{t('hero.cta_contact')}</span>
              <Mail className="h-4 w-4" />
            </a>
            <a
              href="/CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-transparent px-4 py-4 text-sm font-semibold text-slate-500 transition-colors hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
            >
              <Download className="h-4 w-4" />
              <span>{t('resume.button')}</span>
            </a>
          </div>

          <div
            className={`mt-10 flex flex-col gap-4 transition-all duration-700 ease-out delay-700 sm:flex-row sm:items-center sm:justify-between ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-slate-200/80 bg-white/80 px-4 py-2 text-sm text-slate-600 shadow-md shadow-slate-200/40 backdrop-blur dark:border-slate-800 dark:bg-slate-900/70 dark:text-slate-300 dark:shadow-slate-950/30">
              <MapPin className="h-4 w-4 text-blue-600 dark:text-blue-400" />
              <span>{t('hero.metric_location_value')}</span>
            </div>

            <div className="flex items-center gap-3">
              <a
                href="https://github.com/AbdellahiAhmed"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-slate-200/80 bg-white/80 p-3 text-slate-600 shadow-md shadow-slate-200/40 backdrop-blur transition-all duration-300 hover:-translate-y-0.5 hover:text-slate-950 dark:border-slate-800 dark:bg-slate-900/70 dark:text-slate-300 dark:shadow-slate-950/30 dark:hover:text-white"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/abdellahiahmedahmedbaba/"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-slate-200/80 bg-white/80 p-3 text-slate-600 shadow-md shadow-slate-200/40 backdrop-blur transition-all duration-300 hover:-translate-y-0.5 hover:text-slate-950 dark:border-slate-800 dark:bg-slate-900/70 dark:text-slate-300 dark:shadow-slate-950/30 dark:hover:text-white"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="mailto:AbdellahiAhmedAhmedBaba@gmail.com"
                className="rounded-full border border-slate-200/80 bg-white/80 p-3 text-slate-600 shadow-md shadow-slate-200/40 backdrop-blur transition-all duration-300 hover:-translate-y-0.5 hover:text-slate-950 dark:border-slate-800 dark:bg-slate-900/70 dark:text-slate-300 dark:shadow-slate-950/30 dark:hover:text-white"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div
          className={`transition-all duration-700 ease-out delay-300 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
          }`}
        >
          <div className="relative overflow-hidden rounded-[2rem] border border-white/70 bg-white/80 p-6 shadow-[0_30px_80px_-30px_rgba(15,23,42,0.35)] backdrop-blur dark:border-white/10 dark:bg-slate-900/75 dark:shadow-[0_30px_80px_-30px_rgba(2,6,23,0.8)] sm:p-8">
            <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-blue-500 via-cyan-400 to-slate-900 dark:to-white" />
            <div className="space-y-6">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-blue-600 dark:text-blue-400">
                  {t('hero.panelTitle')}
                </p>
                <p className="mt-3 text-base leading-7 text-slate-600 dark:text-slate-300">
                  {t('hero.panelText')}
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-slate-200/80 bg-slate-50/90 p-5 dark:border-slate-800 dark:bg-slate-950/60">
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-400 dark:text-slate-500">
                    {t('about.years_experience')}
                  </p>
                  <p className="mt-3 text-4xl font-display font-extrabold text-slate-950 dark:text-white">2+</p>
                </div>
                <div className="rounded-2xl border border-slate-200/80 bg-slate-50/90 p-5 dark:border-slate-800 dark:bg-slate-950/60">
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-400 dark:text-slate-500">
                    {t('about.projects_completed')}
                  </p>
                  <p className="mt-3 text-4xl font-display font-extrabold text-slate-950 dark:text-white">15+</p>
                </div>
              </div>

              <div className="rounded-2xl border border-slate-200/80 bg-slate-50/90 p-5 dark:border-slate-800 dark:bg-slate-950/60">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-400 dark:text-slate-500">
                  {t('hero.metric_role')}
                </p>
                <p className="mt-3 text-lg font-semibold text-slate-900 dark:text-white">
                  {t('hero.metric_role_value')}
                </p>
              </div>

              <div className="rounded-2xl border border-blue-200/70 bg-gradient-to-br from-blue-50 via-white to-cyan-50 p-5 dark:border-blue-500/20 dark:bg-gradient-to-br dark:from-blue-950/40 dark:via-slate-950/50 dark:to-cyan-950/30">
                <p className="text-sm leading-7 text-slate-600 dark:text-slate-300">
                  {t('skills.badge')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute bottom-8 left-1/2 z-10 hidden -translate-x-1/2 md:block">
        <div className="flex flex-col items-center gap-3 text-slate-400 dark:text-slate-500">
          <span className="text-xs font-semibold uppercase tracking-[0.3em]">{t('hero.scroll_down')}</span>
          <div className="h-14 w-px bg-gradient-to-b from-slate-300 to-transparent dark:from-slate-700" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
