import { useTranslation } from 'react-i18next';
import { useState, useEffect } from 'react';

const AboutSection = () => {
  const { t } = useTranslation();
  const [isVisible, setIsVisible] = useState(false);
  const profileImageSrc = '/me.jpg?v=2026-04-26-profile';

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

  return (
    <section
      id="about"
      className="relative overflow-hidden bg-white py-20 dark:bg-slate-950 md:py-28"
    >
      <div className="relative z-10 mx-auto max-w-6xl px-6 sm:px-8 lg:px-10">
        <div
          className={`mb-16 transition-all duration-700 ease-out ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
          }`}
        >
          <div className="flex items-center gap-4">
            <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400">
              02 — {t('about.section')}
            </span>
            <span className="h-px flex-1 max-w-[120px] bg-slate-300 dark:bg-slate-700" />
          </div>
          <h2 className="mt-6 font-serif text-4xl leading-tight text-slate-950 dark:text-white sm:text-5xl md:text-6xl">
            {t('about.my_short_story')}
          </h2>
        </div>

        <div className="grid items-start gap-12 lg:grid-cols-[minmax(300px,0.85fr)_minmax(0,1.15fr)] lg:gap-16">
          <div
            className={`transition-all duration-700 ease-out delay-150 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
            }`}
          >
            <figure className="relative">
              <img
                src={profileImageSrc}
                alt="Abdellahi Ahmed"
                className="block aspect-[4/5] w-full object-cover border border-slate-200 dark:border-slate-800"
              />
              <figcaption className="mt-3 font-mono text-[10px] uppercase tracking-[0.22em] text-slate-500 dark:text-slate-400">
                Abdellahi Ahmed Ahmed Baba — Nouakchott, MR
              </figcaption>
            </figure>
          </div>

          <div
            className={`space-y-6 max-w-xl transition-all duration-700 ease-out delay-300 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
            }`}
          >
            {[t('about.story1'), t('about.story2'), t('about.story3')].map((paragraph) => (
              <p
                key={paragraph}
                className="text-base leading-[1.75] text-slate-600 dark:text-slate-300"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
