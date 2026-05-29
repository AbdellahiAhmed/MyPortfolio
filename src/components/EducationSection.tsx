import { useTranslation } from 'react-i18next';
import { useState, useEffect } from 'react';

const EducationSection = () => {
  const { t } = useTranslation();
  const [isVisible, setIsVisible] = useState(false);

  const educationData = t('education.schools', { returnObjects: true }) as Array<{
    institution: string;
    degree: string;
    period: string;
    description: string;
    logo: string;
    link?: string;
  }>;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById('education');
    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  return (
    <section id="education" className="py-20 md:py-28 relative bg-white dark:bg-slate-950">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-10 relative z-10">

        {/* Section Header — editorial */}
        <div className={`mb-16 max-w-3xl transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <div className="flex items-center gap-4">
            <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400">
              06 — {t('education.label')}
            </span>
            <span className="h-px flex-1 max-w-[120px] bg-slate-300 dark:bg-slate-700" />
          </div>
          <h2 className="mt-6 font-serif text-4xl leading-tight text-slate-950 dark:text-white sm:text-5xl md:text-6xl">
            {t('education.heading')}
          </h2>
          <p className="mt-5 text-base leading-7 text-slate-500 dark:text-slate-400">
            {t('education.subtitle')}
          </p>
        </div>

        {/* Education Timeline - Vertical Editorial Layout */}
        <div className="space-y-10 md:space-y-16 lg:space-y-20">
          {educationData.map((edu, index) => (
            <article
              key={index}
              className={`group transition-all duration-700 ease-out ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              {/* Timeline Structure */}
              <div className="grid md:grid-cols-12 gap-4 md:gap-8 items-start">

                {/* Left — Period + tiny index */}
                <div className="md:col-span-3">
                  <div className="sticky top-32 space-y-2">
                    <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-slate-500 dark:text-slate-400">
                      {edu.period}
                    </p>
                    <div className="font-serif italic text-3xl text-slate-300 dark:text-slate-700 select-none leading-none">
                      0{index + 1}
                    </div>
                  </div>
                </div>

                {/* Right — Institution */}
                <div className="md:col-span-9 space-y-5">
                  <div>
                    <h3 className="font-serif text-2xl md:text-3xl lg:text-4xl leading-tight text-slate-950 dark:text-white mb-3">
                      {edu.institution}
                    </h3>
                    <p className="text-base text-slate-500 dark:text-slate-400 font-medium">
                      {edu.degree}
                    </p>
                  </div>

                  <p className="text-sm leading-7 text-slate-600 dark:text-slate-300 max-w-2xl">
                    {edu.description}
                  </p>

                  {edu.link && (
                    <a
                      href={edu.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/link inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.22em] text-slate-900 dark:text-white border-b border-slate-900 dark:border-white pb-0.5 hover:text-amber-700 dark:hover:text-amber-400 hover:border-amber-700 dark:hover:border-amber-400 transition-colors"
                    >
                      {t('education.view_certificate')}
                      <span aria-hidden="true">↗</span>
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Continuous learning — short, inline, no pill cloud */}
        <div className={`mt-20 md:mt-28 transition-all duration-700 ease-out delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <div className="border-t border-slate-200 dark:border-slate-800 pt-12 grid md:grid-cols-12 gap-4 md:gap-8">
            <div className="md:col-span-3">
              <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-slate-500 dark:text-slate-400">
                {t('education.continuous_growth')}
              </p>
            </div>
            <div className="md:col-span-9 space-y-4 max-w-2xl">
              <h3 className="font-serif text-2xl md:text-3xl leading-tight text-slate-950 dark:text-white">
                {t('education.lifelong')}
              </h3>
              <p className="text-sm leading-7 text-slate-600 dark:text-slate-300">
                {t('education.lifelong_description')}
              </p>
              <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">
                {(t('education.learning_areas', { returnObjects: true }) as string[]).join(' · ')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
