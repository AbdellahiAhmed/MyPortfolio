import { useTranslation } from 'react-i18next';
import { useState, useEffect, useRef } from 'react';
import SpacedText from './utils/SpacedText';

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
    <section id="skills" className="py-16 md:py-24 lg:py-32 relative overflow-hidden bg-white dark:bg-gray-900">
      {/* Subtle background texture */}
      <div
        className="absolute inset-0 opacity-[0.015] dark:opacity-[0.03]"
        style={{
          backgroundImage: 'radial-gradient(circle, currentColor 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className={`mb-6 md:mb-12 transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <p className="text-sm uppercase tracking-wide text-gray-500 dark:text-gray-500 mb-4">
            {t('skills.section')}
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold text-gray-900 dark:text-white mb-6 max-w-4xl">
            {t('skills.title')}
          </h2>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl">
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

              <div className="py-8 md:py-12 lg:py-16 relative">
                {/* Animated left accent border */}
                <div
                  className="absolute left-0 top-0 w-0.5 bg-gradient-to-b from-accent via-accent to-accent/30 transition-all duration-1000 ease-out"
                  style={{
                    height: pillarBorders[index] ? '100%' : '0%',
                    transitionDelay: `${index * 300}ms`,
                  }}
                />

                <div className="grid md:grid-cols-12 gap-4 md:gap-8 items-start pl-3 md:pl-6 lg:pl-8">

                  {/* Left Column - Number */}
                  <div className="md:col-span-2">
                    <div className="sticky top-32">
                      <div
                        className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-display font-bold select-none leading-none transition-all duration-500 opacity-10 group-hover:opacity-100"
                        style={{
                          background: 'linear-gradient(135deg, #3b82f6, #2563eb, #60a5fa)',
                          WebkitBackgroundClip: 'text',
                          WebkitTextFillColor: 'transparent',
                          backgroundClip: 'text',
                        }}
                      >
                        {pillar.number}
                      </div>
                    </div>
                  </div>

                  {/* Right Column - Pillar Details */}
                  <div className="md:col-span-10 space-y-6">
                    <div>
                      <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold text-gray-900 dark:text-white mb-4 group-hover:text-accent dark:group-hover:text-accent transition-colors duration-300">
                        {pillar.title}
                      </h3>

                      {/* Subtitle as pills/tags */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {splitSubtitle(pillar.subtitle).map((tool, i) => (
                          <span
                            key={i}
                            className="px-3 py-1 text-xs font-medium rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-gray-700 group-hover:border-accent/30 group-hover:bg-accent/5 dark:group-hover:bg-accent/10 transition-all duration-300"
                          >
                            {tool}
                          </span>
                        ))}
                      </div>

                      {/* Metrics row */}
                      {pillar.metrics && pillar.metrics.length > 0 && (
                        <div className="flex flex-wrap gap-4 mb-2">
                          {pillar.metrics.map((metric, i) => (
                            <span
                              key={i}
                              className="text-xs font-medium uppercase tracking-wider text-accent"
                            >
                              {metric}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* Key Points with animated dots */}
                    {pillar.points && pillar.points.length > 0 && (
                      <div className="space-y-4 pt-2">
                        {pillar.points.map((point, i) => (
                          <div key={i} className="flex items-start gap-4 group/item">
                            <div className="relative mt-2">
                              <div className="w-2 h-2 rounded-full bg-accent group-hover/item:scale-150 transition-transform duration-300" />
                              <div className="absolute inset-0 w-2 h-2 rounded-full bg-accent opacity-0 group-hover/item:opacity-40 group-hover/item:animate-ping" />
                            </div>
                            <p className="text-base text-gray-600 dark:text-gray-400 leading-relaxed flex-1 group-hover/item:text-gray-900 dark:group-hover/item:text-gray-200 transition-colors duration-300">
                              {point}
                            </p>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* CTA */}
        <div className={`text-center mt-16 md:mt-24 lg:mt-32 transition-all duration-700 ease-out delay-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-block">
            <a
              href="#contact"
              className="group/cta inline-flex flex-col items-center"
            >
              <span className="text-sm mb-2 text-gray-500 dark:text-gray-500">
                {t('skills.cta_subtitle')}
              </span>
              <span className="text-2xl md:text-3xl font-display font-bold text-gray-900 dark:text-white group-hover/cta:text-accent transition-colors duration-300">
                <SpacedText text={t('skills.cta_text')} />
              </span>
              <div className="h-px bg-gray-900 dark:bg-white mt-2 w-0 group-hover/cta:w-full transition-all duration-500 ease-out" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
