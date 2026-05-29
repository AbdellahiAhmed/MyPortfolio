import { useTranslation } from 'react-i18next';
import { useState, useEffect, useRef } from 'react';

const SkillsSection = () => {
  const { t } = useTranslation();
  const [isVisible, setIsVisible] = useState(false);
  const [pillarBorders, setPillarBorders] = useState<boolean[]>([false, false, false]);
  const pillarRefs = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById('skills');
    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  // Observe individual pillars for border animation
  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    pillarRefs.current.forEach((ref, index) => {
      if (!ref) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setPillarBorders((prev) => {
              const next = [...prev];
              next[index] = true;
              return next;
            });
          }
        },
        { threshold: 0.3 }
      );
      obs.observe(ref);
      observers.push(obs);
    });

    return () => observers.forEach((obs) => obs.disconnect());
  }, [isVisible]);

  const pillars = [
    {
      number: '01',
      title: t('skills.pillars.network.title'),
      subtitle: t('skills.pillars.network.subtitle'),
      metrics: t('skills.pillars.network.metrics', { returnObjects: true }) as string[],
      points: t('skills.pillars.network.points', { returnObjects: true }) as string[],
    },
    {
      number: '02',
      title: t('skills.pillars.automation.title'),
      subtitle: t('skills.pillars.automation.subtitle'),
      metrics: t('skills.pillars.automation.metrics', { returnObjects: true }) as string[],
      points: t('skills.pillars.automation.points', { returnObjects: true }) as string[],
    },
    {
      number: '03',
      title: t('skills.pillars.frontend.title'),
      subtitle: t('skills.pillars.frontend.subtitle'),
      metrics: t('skills.pillars.frontend.metrics', { returnObjects: true }) as string[],
      points: t('skills.pillars.frontend.points', { returnObjects: true }) as string[],
    },
  ];

  // Split subtitle into pills (comma or slash separated)
  const splitSubtitle = (subtitle: string) =>
    subtitle.split(/[,\/]/).map((s) => s.trim()).filter(Boolean);

  return (
    <section id="skills" className="py-20 md:py-28 relative bg-white dark:bg-slate-950">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-10 relative z-10">

        {/* Section Header — editorial */}
        <div className={`mb-16 max-w-3xl transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <div className="flex items-center gap-4">
            <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400">
              04 — {t('skills.section')}
            </span>
            <span className="h-px flex-1 max-w-[120px] bg-slate-300 dark:bg-slate-700" />
          </div>
          <h2 className="mt-6 font-serif text-4xl leading-tight text-slate-950 dark:text-white sm:text-5xl md:text-6xl">
            {t('skills.title')}
          </h2>
          <p className="mt-5 text-base leading-7 text-slate-500 dark:text-slate-400">
            {t('skills.subtitle')}
          </p>
        </div>

        {/* Separator */}
        <div className={`mb-10 md:mb-20 transition-all duration-700 delay-100 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <div className="h-px bg-gray-200 dark:bg-gray-800" />
        </div>

        {/* Core Pillars - Interactive Editorial Layout */}
        <div className="space-y-0">
          {pillars.map((pillar, index) => (
            <article
              key={index}
              ref={(el) => { pillarRefs.current[index] = el; }}
              className={`group relative transition-all duration-700 ease-out ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${200 + index * 200}ms` }}
            >
              {/* Separator between pillars */}
              {index > 0 && (
                <div className="h-px bg-gray-200 dark:bg-gray-800 mx-0" />
              )}

              <div className="py-10 md:py-14 relative">
                {/* Left accent — calm, slate */}
                <div
                  className="absolute left-0 top-0 w-px bg-slate-900 dark:bg-white transition-all duration-1000 ease-out"
                  style={{
                    height: pillarBorders[index] ? '100%' : '0%',
                    transitionDelay: `${index * 250}ms`,
                  }}
                />

                <div className="grid md:grid-cols-12 gap-4 md:gap-8 items-start pl-4 md:pl-8">

                  {/* Number — serif, restrained */}
                  <div className="md:col-span-2">
                    <div className="sticky top-32 font-serif italic text-5xl md:text-6xl leading-none text-slate-300 dark:text-slate-700 select-none">
                      {pillar.number}
                    </div>
                  </div>

                  {/* Pillar Details */}
                  <div className="md:col-span-10 space-y-5">
                    <div>
                      <h3 className="font-serif text-3xl md:text-4xl leading-tight text-slate-950 dark:text-white mb-4">
                        {pillar.title}
                      </h3>

                      {/* Subtitle as plain text — no chips */}
                      <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400 mb-3">
                        {splitSubtitle(pillar.subtitle).join(' · ')}
                      </p>

                      {/* Metrics row */}
                      {pillar.metrics && pillar.metrics.length > 0 && (
                        <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-slate-900 dark:text-slate-200">
                          {pillar.metrics.join(' / ')}
                        </p>
                      )}
                    </div>

                    {/* Key Points — numbered, clean */}
                    {pillar.points && pillar.points.length > 0 && (
                      <ul className="space-y-3 pt-2 max-w-2xl">
                        {pillar.points.map((point, i) => (
                          <li key={i} className="grid grid-cols-[auto_1fr] gap-x-4 items-baseline">
                            <span className="font-mono text-[10px] text-slate-400 dark:text-slate-600">
                              {String(i + 1).padStart(2, '0')}
                            </span>
                            <p className="text-sm leading-7 text-slate-600 dark:text-slate-300">
                              {point}
                            </p>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* CTA — editorial inline link */}
        <div className={`mt-20 md:mt-28 max-w-3xl transition-all duration-700 ease-out delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-slate-500 dark:text-slate-400 mb-3">
            {t('skills.cta_subtitle')}
          </p>
          <a
            href="#contact"
            className="group inline-flex items-baseline gap-3 font-serif text-3xl md:text-4xl italic text-slate-950 dark:text-white border-b border-slate-950 dark:border-white pb-1 transition-colors hover:text-amber-700 dark:hover:text-amber-400 hover:border-amber-700 dark:hover:border-amber-400"
          >
            {t('skills.cta_text')}
            <span className="text-2xl" aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
