import { useTranslation } from 'react-i18next';
import { useState, useEffect, useRef } from 'react';
import SpacedText from './utils/SpacedText';

const SkillsSection = () => {
  const { t } = useTranslation();
  const [isVisible, setIsVisible] = useState(false);
  const [toolchainVisible, setToolchainVisible] = useState(false);
  const toolchainRef = useRef<HTMLDivElement>(null);

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

  const pillars = [
    {
      number: '01',
      title: t('skills.pillars.network.title'),
      subtitle: t('skills.pillars.network.subtitle'),
      points: t('skills.pillars.network.points', { returnObjects: true }) as string[],
    },
    {
      number: '02',
      title: t('skills.pillars.automation.title'),
      subtitle: t('skills.pillars.automation.subtitle'),
      points: t('skills.pillars.automation.points', { returnObjects: true }) as string[],
    },
    {
      number: '03',
      title: t('skills.pillars.frontend.title'),
      subtitle: t('skills.pillars.frontend.subtitle'),
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

  return (
    <section id="skills" className="py-32 relative overflow-hidden bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header - Editorial Style */}
        <div className={`mb-20 transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
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

        {/* Core Pillars - Numbered Editorial Layout */}
        <div className="space-y-24">
          {pillars.map((pillar, index) => (
            <article
              key={index}
              className={`group transition-all duration-700 ease-out ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className="grid md:grid-cols-12 gap-8 items-start">

                {/* Left Column - Number */}
                <div className="md:col-span-2">
                  <div className="sticky top-32">
                    <div className="text-8xl md:text-9xl font-display font-bold text-gray-900/10 dark:text-white/10 select-none leading-none">
                      {pillar.number}
                    </div>
                  </div>
                </div>

                {/* Right Column - Pillar Details */}
                <div className="md:col-span-10 space-y-6">
                  <div>
                    <h3 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-gray-900 dark:text-white mb-3 group-hover:text-accent dark:group-hover:text-accent transition-colors duration-300">
                      {pillar.title}
                    </h3>
                    <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 font-medium">
                      {pillar.subtitle}
                    </p>
                  </div>

                  {/* Key Points */}
                  {pillar.points && pillar.points.length > 0 && (
                    <div className="space-y-3 pt-4">
                      {pillar.points.map((point, i) => (
                        <div key={i} className="flex items-start gap-4 group/item">
                          <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2.5 group-hover/item:scale-150 transition-transform duration-300"></div>
                          <p className="text-base text-gray-600 dark:text-gray-400 leading-relaxed flex-1">
                            {point}
                          </p>
                        </div>
                      ))}
                    </div>
                  )}
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

            {/* Stacks Grid */}
            <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
              {stacks.map((stack, index) => (
                <div
                  key={index}
                  className={`group/stack p-8 rounded-2xl bg-gray-50 dark:bg-gray-800/50 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-500 ${
                    toolchainVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                  }`}
                  style={{ transitionDelay: `${200 + index * 150}ms` }}
                >
                  <h4 className="text-xl md:text-2xl font-display font-bold text-gray-900 dark:text-white mb-2 group-hover/stack:text-accent transition-colors duration-300">
                    {stack.title}
                  </h4>
                  <p className="text-sm text-gray-500 dark:text-gray-500 mb-6">
                    {stack.subtitle}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {stack.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="px-3 py-1.5 text-sm bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 rounded-full font-medium hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Badge */}
            <div className={`mt-12 text-center transition-all duration-700 ease-out ${toolchainVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`} style={{ transitionDelay: '800ms' }}>
              <p className="text-sm text-gray-500 dark:text-gray-500 tracking-wide">
                {t('skills.badge')}
              </p>
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
              <div className="h-px bg-gray-900 dark:bg-white mt-2 w-0 group-hover/cta:w-full transition-all duration-500 ease-out"></div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
