import { Network, Code, Server, Globe, ExternalLink } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

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

const companyLogos: Record<string, string> = {
  'MCS Consulting': '/logos/mcs-consulting.png',
  'A2 Holding': '/logos/a2-holding.png',
  'Moov Mauritel': '/logos/moov-mauritel.png',
  'Google DSC ISCAE': '/logos/iscae.png',
};

const fallbackIcons: Record<string, React.ElementType> = {
  Network,
  Server,
  Code,
  Web: Globe,
};

const ExperienceSection = () => {
  const { t } = useTranslation();

  // Stored oldest first; shown newest first so the current role leads.
  const experiences = [...(t('experience.jobs', { returnObjects: true }) as unknown as Experience[])].reverse();

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

        <VerticalTimeline lineColor="" className="experience-timeline">
          {experiences.map((job) => {
            const logo = companyLogos[job.company];
            const Icon = fallbackIcons[job.logo] || Network;

            return (
              <VerticalTimelineElement
                key={job.company}
                date={`${job.period} · ${job.type}`}
                icon={
                  logo ? (
                    <img src={logo} alt={job.company} loading="lazy" className="h-[62%] w-[62%] object-contain" />
                  ) : (
                    <Icon className="h-[45%] w-[45%] text-slate-700" strokeWidth={1.5} aria-hidden="true" />
                  )
                }
              >
                <div className="flex items-start justify-between gap-3">
                  <h3 className="font-serif text-2xl leading-tight text-slate-950 dark:text-white">{job.company}</h3>
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
                <p className="!mt-1 !text-sm !font-medium text-amber-700 dark:text-amber-500">{job.role}</p>
                <p className="!mt-4 !text-sm !leading-7 !font-normal text-slate-600 dark:text-slate-300">{job.description}</p>
                <ul className="mt-5 space-y-2">
                  {job.achievements.map((achievement, i) => (
                    <li key={i} className="grid grid-cols-[auto_1fr] gap-x-3 items-baseline">
                      <span className="font-mono text-[10px] text-slate-400 dark:text-slate-600">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <span className="text-sm leading-6 text-slate-600 dark:text-slate-300">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </VerticalTimelineElement>
            );
          })}
        </VerticalTimeline>
      </div>
    </section>
  );
};

export default ExperienceSection;
