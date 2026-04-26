import { ArrowUpRight, User } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useState, useEffect } from 'react';
import AnimatedCounter from './utils/AnimatedCounter';

const AboutSection = () => {
  const { t } = useTranslation();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById('about');
    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  const strengths = [
    { title: t('about.card1.title'), description: t('about.card1.desc') },
    { title: t('about.card2.title'), description: t('about.card2.desc') },
    { title: t('about.card3.title'), description: t('about.card3.desc') },
    { title: t('about.card4.title'), description: t('about.card4.desc') },
  ];

  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[linear-gradient(180deg,_#ffffff_0%,_#f8fafc_100%)] py-16 dark:bg-[linear-gradient(180deg,_#0f172a_0%,_#020617_100%)] md:py-20 lg:py-24"
    >
      <div className="absolute inset-0 opacity-50 dark:opacity-20" aria-hidden="true">
        <div className="absolute left-0 top-20 h-72 w-72 rounded-full bg-blue-100 blur-3xl dark:bg-blue-900/30" />
        <div className="absolute right-0 top-1/3 h-80 w-80 rounded-full bg-cyan-100 blur-3xl dark:bg-cyan-900/20" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div
          className={`mx-auto mb-10 max-w-3xl text-center transition-all duration-700 ease-out md:mb-16 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-4 py-2 text-sm font-semibold text-slate-600 shadow-sm backdrop-blur dark:border-slate-800 dark:bg-slate-900/70 dark:text-slate-300">
            <User className="h-4 w-4" />
            <span>{t('about.section')}</span>
          </span>
          <h2 className="mt-5 text-4xl font-display font-extrabold tracking-[-0.04em] text-slate-950 dark:text-white sm:text-5xl md:text-6xl">
            {t('about.my_short_story')}
          </h2>
          <p className="mt-5 text-lg leading-8 text-slate-600 dark:text-slate-300">
            {t('about.subtitle')}
          </p>
        </div>

        <div className="grid items-start gap-8 lg:grid-cols-[minmax(320px,0.9fr)_minmax(0,1.1fr)] lg:gap-14">
          <div
            className={`transition-all duration-700 ease-out delay-150 ${
              isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
            }`}
          >
            <div className="relative overflow-hidden rounded-[2rem] border border-white/70 bg-white/80 p-4 shadow-[0_25px_70px_-30px_rgba(15,23,42,0.4)] backdrop-blur dark:border-white/10 dark:bg-slate-900/70 dark:shadow-[0_25px_70px_-30px_rgba(2,6,23,0.85)]">
              <img
                src="/me.heic"
                alt="Abdellahi Ahmed"
                className="h-full w-full rounded-[1.5rem] object-cover"
              />

              <div className="absolute inset-x-6 bottom-6 rounded-[1.5rem] border border-white/60 bg-slate-950/85 p-5 text-white shadow-2xl backdrop-blur dark:border-white/10 dark:bg-slate-950/75">
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-slate-300">
                  {t('hero.panelTitle')}
                </p>
                <p className="mt-3 text-sm leading-6 text-slate-200">
                  {t('hero.panelText')}
                </p>
              </div>
            </div>
          </div>

          <div
            className={`space-y-8 transition-all duration-700 ease-out delay-300 ${
              isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
            }`}
          >
            <div className="grid gap-4 md:grid-cols-3">
              <div className="rounded-3xl border border-slate-200/80 bg-white/80 p-6 shadow-lg shadow-slate-200/40 backdrop-blur dark:border-slate-800 dark:bg-slate-900/70 dark:shadow-slate-950/30">
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-slate-400 dark:text-slate-500">
                  {t('about.years_experience')}
                </p>
                <div className="mt-4 text-4xl font-display font-extrabold text-slate-950 dark:text-white">
                  <AnimatedCounter end={2} suffix="+" />
                </div>
              </div>
              <div className="rounded-3xl border border-slate-200/80 bg-white/80 p-6 shadow-lg shadow-slate-200/40 backdrop-blur dark:border-slate-800 dark:bg-slate-900/70 dark:shadow-slate-950/30">
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-slate-400 dark:text-slate-500">
                  {t('about.projects_completed')}
                </p>
                <div className="mt-4 text-4xl font-display font-extrabold text-slate-950 dark:text-white">
                  <AnimatedCounter end={15} suffix="+" />
                </div>
              </div>
              <div className="rounded-3xl border border-blue-200/70 bg-gradient-to-br from-blue-50 via-white to-cyan-50 p-6 shadow-lg shadow-blue-100/50 backdrop-blur dark:border-blue-500/20 dark:bg-gradient-to-br dark:from-blue-950/30 dark:via-slate-900/70 dark:to-cyan-950/20 dark:shadow-blue-950/20">
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-blue-700 dark:text-blue-300">
                  {t('hero.metric_role')}
                </p>
                <p className="mt-4 text-sm font-semibold leading-6 text-slate-700 dark:text-slate-200">
                  {t('hero.metric_role_value')}
                </p>
              </div>
            </div>

            <div className="grid gap-4">
              {[t('about.story1'), t('about.story2'), t('about.story3')].map((paragraph) => (
                <div
                  key={paragraph}
                  className="rounded-3xl border border-slate-200/80 bg-white/75 p-6 shadow-lg shadow-slate-200/30 backdrop-blur dark:border-slate-800 dark:bg-slate-900/65 dark:shadow-slate-950/30"
                >
                  <p className="text-base leading-8 text-slate-600 dark:text-slate-300">{paragraph}</p>
                </div>
              ))}
            </div>

            <div className="rounded-[2rem] border border-slate-200/80 bg-slate-950 p-6 text-white shadow-[0_25px_70px_-35px_rgba(15,23,42,0.8)] dark:border-white/10">
              <div className="mb-6 flex items-center justify-between gap-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.28em] text-slate-400">
                    {t('about.strengths')}
                  </p>
                  <h3 className="mt-3 text-2xl font-display font-bold">{t('about.title')}</h3>
                </div>
                <ArrowUpRight className="h-5 w-5 text-slate-400" />
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                {strengths.map((strength) => (
                  <div
                    key={strength.title}
                    className="rounded-2xl border border-white/10 bg-white/5 p-5"
                  >
                    <h4 className="text-lg font-semibold text-white">{strength.title}</h4>
                    <p className="mt-2 text-sm leading-6 text-slate-300">{strength.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
