import { useTranslation } from 'react-i18next';
import { useState, useEffect, useRef, useCallback } from 'react';
import SpacedText from './utils/SpacedText';

const SkillsSection = () => {
  const { t } = useTranslation();
  const [isVisible, setIsVisible] = useState(false);
  const [toolchainVisible, setToolchainVisible] = useState(false);
  const [canTilt, setCanTilt] = useState(false);
  const [pillarBorders, setPillarBorders] = useState<boolean[]>([false, false, false]);
  const toolchainRef = useRef<HTMLDivElement>(null);
  const pillarRefs = useRef<(HTMLElement | null)[]>([]);

  // Detect pointer device for 3D tilt
  useEffect(() => {
    const mq = window.matchMedia('(hover: hover) and (pointer: fine)');
    setCanTilt(mq.matches);
    const handler = (e: MediaQueryListEvent) => setCanTilt(e.matches);
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);

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

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setToolchainVisible(true);
        }
      },
      { threshold: 0.15 }
    );

    const el = toolchainRef.current;
    if (el) observer.observe(el);

    return () => {
      if (el) observer.unobserve(el);
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

  // 3D Tilt handler for toolchain cards
  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLElement>) => {
      if (!canTilt) return;
      const el = e.currentTarget;
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = ((y - centerY) / centerY) * -5;
      const rotateY = ((x - centerX) / centerX) * 5;
      el.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02,1.02,1.02)`;
      const shine = el.querySelector('[data-shine]') as HTMLElement;
      if (shine) {
        const px = (x / rect.width) * 100;
        const py = (y / rect.height) * 100;
        shine.style.background = `radial-gradient(circle at ${px}% ${py}%, rgba(255,255,255,0.15), transparent 50%)`;
        shine.style.opacity = '1';
      }
    },
    [canTilt]
  );

  const handleMouseLeave = useCallback(
    (e: React.MouseEvent<HTMLElement>) => {
      if (!canTilt) return;
      e.currentTarget.style.transform = '';
      const shine = e.currentTarget.querySelector('[data-shine]') as HTMLElement;
      if (shine) shine.style.opacity = '0';
    },
    [canTilt]
  );

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

  const stacks = [
    {
      title: t('skills.stacks.automation.title'),
      subtitle: t('skills.stacks.automation.subtitle'),
      tags: t('skills.stacks.automation.tags', { returnObjects: true }) as string[],
    },
    {
      title: t('skills.stacks.cloud.title'),
      subtitle: t('skills.stacks.cloud.subtitle'),
      tags: t('skills.stacks.cloud.tags', { returnObjects: true }) as string[],
    },
    {
      title: t('skills.stacks.observability.title'),
      subtitle: t('skills.stacks.observability.subtitle'),
      tags: t('skills.stacks.observability.tags', { returnObjects: true }) as string[],
    },
    {
      title: t('skills.stacks.frontend.title'),
      subtitle: t('skills.stacks.frontend.subtitle'),
      tags: t('skills.stacks.frontend.tags', { returnObjects: true }) as string[],
    },
  ];

  // Split subtitle into pills (comma or slash separated)
  const splitSubtitle = (subtitle: string) =>
    subtitle.split(/[,\/]/).map((s) => s.trim()).filter(Boolean);

  return (
    <section id="skills" className="py-32 relative overflow-hidden bg-white dark:bg-gray-900">
      {/* Subtle background texture */}
      <div
        className="absolute inset-0 opacity-[0.015] dark:opacity-[0.03]"
        style={{
          backgroundImage: 'radial-gradient(circle, currentColor 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header - Editorial Style */}
        <div className={`mb-12 transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <p className="text-sm uppercase tracking-wide text-gray-500 dark:text-gray-500 mb-4">
            {t('skills.section')}
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-gray-900 dark:text-white mb-6 max-w-4xl">
            {t('skills.title')}
          </h2>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl">
            {t('skills.subtitle')}
          </p>
        </div>

        {/* Separator */}
        <div className={`mb-20 transition-all duration-700 delay-100 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
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

              <div className="py-16 md:py-20 relative">
                {/* Animated left accent border */}
                <div
                  className="absolute left-0 top-0 w-0.5 bg-gradient-to-b from-accent via-accent to-accent/30 transition-all duration-1000 ease-out"
                  style={{
                    height: pillarBorders[index] ? '100%' : '0%',
                    transitionDelay: `${index * 300}ms`,
                  }}
                />

                <div className="grid md:grid-cols-12 gap-8 items-start pl-6 md:pl-8">

                  {/* Left Column - Number */}
                  <div className="md:col-span-2">
                    <div className="sticky top-32">
                      <div
                        className="text-8xl md:text-9xl font-display font-bold select-none leading-none transition-all duration-500 text-gray-900/10 dark:text-white/10 group-hover:text-transparent"
                        style={{
                          backgroundImage: 'linear-gradient(135deg, #10B981, #059669, #10B981)',
                          WebkitBackgroundClip: 'text',
                          backgroundClip: 'text',
                          WebkitTextFillColor: undefined,
                        }}
                      >
                        <span className="group-hover:invisible">{pillar.number}</span>
                        <span
                          className="absolute inset-0 invisible group-hover:visible text-8xl md:text-9xl font-display font-bold leading-none"
                          style={{
                            background: 'linear-gradient(135deg, #10B981, #059669, #34D399)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                          }}
                        >
                          {pillar.number}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Right Column - Pillar Details */}
                  <div className="md:col-span-10 space-y-6">
                    <div>
                      <h3 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-gray-900 dark:text-white mb-4 group-hover:text-accent dark:group-hover:text-accent transition-colors duration-300">
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

        {/* Delivery Toolchain */}
        <div
          ref={toolchainRef}
          className={`mt-32 transition-all duration-700 ease-out ${toolchainVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          <div className="border-t border-gray-200 dark:border-gray-800 pt-20">
            <div className="grid md:grid-cols-12 gap-8 mb-16">
              <div className="md:col-span-3">
                <p className="text-sm uppercase tracking-wide text-gray-500 dark:text-gray-500">
                  {t('skills.stacks.title')}
                </p>
              </div>
              <div className="md:col-span-9">
                <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400">
                  {t('skills.stacks.subtitle')}
                </p>
              </div>
            </div>

            {/* Stacks Grid - 3D Tilt Cards */}
            <div className="grid md:grid-cols-2 gap-8 lg:gap-10">
              {stacks.map((stack, index) => (
                <div
                  key={index}
                  className={`transition-all ease-out ${
                    toolchainVisible ? 'opacity-100 translate-y-0 duration-600' : 'opacity-0 translate-y-8 duration-200'
                  }`}
                  style={{ transitionDelay: toolchainVisible ? `${200 + index * 150}ms` : '0ms' }}
                >
                  <div
                    onMouseMove={handleMouseMove}
                    onMouseLeave={handleMouseLeave}
                    className="group/stack relative p-8 rounded-2xl bg-gray-50 dark:bg-gray-800/50 border border-transparent hover:border-gray-200 dark:hover:border-gray-700 hover:shadow-2xl"
                    style={{
                      transition: 'transform 0.2s ease-out, box-shadow 0.5s ease, border-color 0.3s ease',
                      transformStyle: 'preserve-3d',
                      willChange: 'transform',
                    }}
                  >
                    {/* Shine overlay */}
                    <div
                      data-shine
                      className="absolute inset-0 rounded-2xl pointer-events-none opacity-0 transition-opacity duration-300 z-10"
                    />

                    {/* Card number indicator */}
                    <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-gray-200/60 dark:bg-gray-700/60 flex items-center justify-center group-hover/stack:bg-accent/20 transition-colors duration-300">
                      <span className="text-xs font-display font-bold text-gray-400 dark:text-gray-500 group-hover/stack:text-accent transition-colors duration-300">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                    </div>

                    <h4 className="text-xl md:text-2xl font-display font-bold text-gray-900 dark:text-white mb-2 group-hover/stack:text-accent transition-colors duration-300 relative z-20">
                      {stack.title}
                    </h4>
                    <p className="text-sm text-gray-500 dark:text-gray-500 mb-6 relative z-20">
                      {stack.subtitle}
                    </p>
                    <div className="flex flex-wrap gap-2 relative z-20">
                      {stack.tags.map((tag, i) => (
                        <span
                          key={i}
                          className="px-3 py-1.5 text-sm bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 rounded-full font-medium border border-gray-100 dark:border-gray-800 hover:border-accent/40 hover:text-accent hover:bg-accent/5 dark:hover:bg-accent/10 transition-all duration-300 cursor-default"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Badge - Premium accent style */}
            <div
              className={`mt-16 flex justify-center transition-all duration-700 ease-out ${
                toolchainVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
              style={{ transitionDelay: '900ms' }}
            >
              <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full border border-accent/20 bg-accent/5 dark:bg-accent/10">
                <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                <p className="text-sm font-medium text-gray-700 dark:text-gray-300 tracking-wide">
                  {t('skills.badge')}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className={`text-center mt-32 transition-all duration-700 ease-out delay-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-block">
            <a
              href="#contact"
              className="group/cta inline-flex flex-col items-center"
            >
              <span className="text-sm mb-2 text-gray-500 dark:text-gray-500">
                Let's Work Together
              </span>
              <span className="text-2xl md:text-3xl font-display font-bold text-gray-900 dark:text-white group-hover/cta:text-accent transition-colors duration-300">
                <SpacedText text="Get In Touch" />
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
