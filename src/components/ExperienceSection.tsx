import { Network, Code, Server, ExternalLink } from 'lucide-react';
import { useTranslation } from 'react-i18next';

interface Experience {
  company: string;
  role: string;
  period: string;
  type: string;
  description: string;
  achievements: string[];
  logo: string;
  link?: string;
}

const ExperienceSection = () => {
  const { t } = useTranslation();

  const experiences = t('experience.jobs', {
    returnObjects: true,
  }) as unknown as Experience[];

  const logos: Record<string, React.ElementType> = {
    Network,
    Server,
    Code,
  };

  return (
    <section id="experience" className="bg-white dark:bg-slate-950 py-20 md:py-28 relative">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-10 relative z-10">
        {/* Section Header — editorial */}
        <div className="mb-16 max-w-3xl">
          <div className="flex items-center gap-4">
            <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400">
              03 — {t('experience.section')}
            </span>
            <span className="h-px flex-1 max-w-[120px] bg-slate-300 dark:bg-slate-700" />
          </div>
          <h2 className="mt-6 font-serif text-4xl leading-tight text-slate-950 dark:text-white sm:text-5xl md:text-6xl">
            {t('experience.title')}
          </h2>
          <p className="mt-5 text-base leading-7 text-slate-500 dark:text-slate-400 max-w-2xl">
            {t('experience.description')}
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line — restrained, slate */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-px h-full bg-slate-200 dark:bg-slate-800"></div>

          <div className="space-y-6 md:space-y-12">
            {experiences.map((job, index) => {
              const Icon = logos[job.logo] || Network;
              const isEven = index % 2 === 0;

              return (
                <div
                  key={index}
                  className={`relative flex items-center ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} animate-slide-up-fade`}
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  {/* Timeline Dot — small, calm, slate */}
                  <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-3 h-3 bg-white dark:bg-slate-950 rounded-full items-center justify-center border border-slate-300 dark:border-slate-600 z-10">
                    <div className="w-1.5 h-1.5 bg-slate-900 dark:bg-white rounded-full"></div>
                  </div>

                  {/* Content — editorial, no card, no glow */}
                  <div className={`w-full md:w-5/12 ${isEven ? 'md:pr-16' : 'md:pl-16'}`}>
                    <div className="group">
                      {/* Period — mono, eyebrow */}
                      <div className="flex items-center gap-3 mb-3">
                        <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-slate-500 dark:text-slate-400">
                          {job.period}
                        </span>
                        <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-slate-400 dark:text-slate-600">
                          · {job.type}
                        </span>
                      </div>

                      {/* Company + Role */}
                      <div className="flex items-start justify-between gap-3 mb-3">
                        <div className="flex items-baseline gap-3">
                          <div className="md:hidden text-slate-400 dark:text-slate-500">
                            <Icon className="h-4 w-4" strokeWidth={1.5} />
                          </div>
                          <h3 className="font-serif text-2xl leading-tight text-slate-950 dark:text-white">
                            {job.company}
                          </h3>
                        </div>

                        {job.link && (
                          <a
                            href={job.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-slate-400 transition-colors hover:text-slate-950 dark:hover:text-white"
                            aria-label={`Visit ${job.company}`}
                          >
                            <ExternalLink className="h-4 w-4" strokeWidth={1.5} />
                          </a>
                        )}
                      </div>

                      <p className="text-sm font-medium text-slate-500 dark:text-slate-400 mb-4">
                        {job.role}
                      </p>

                      {/* Description */}
                      <p className="text-sm leading-7 text-slate-600 dark:text-slate-300 mb-5">
                        {job.description}
                      </p>

                      {/* Achievements */}
                      <ul className="space-y-2">
                        {job.achievements.map((achievement, i) => (
                          <li key={i} className="grid grid-cols-[auto_1fr] gap-x-3 items-baseline">
                            <span className="font-mono text-[10px] text-slate-400 dark:text-slate-600">
                              {String(i + 1).padStart(2, '0')}
                            </span>
                            <span className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                              {achievement}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
