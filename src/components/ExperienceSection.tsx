import { Network, Code, Server, ExternalLink, Star, Calendar, MapPin, Briefcase } from 'lucide-react';
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
    <section id="experience" className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-emerald-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-teal-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-slide-up-fade">
          <span className="px-4 py-2 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 rounded-full text-sm font-medium border border-emerald-500/20 inline-block">
            {t('experience.section')}
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-6 mb-6">
            <span className="bg-gradient-to-r from-emerald-600 to-teal-600 dark:from-emerald-400 dark:to-teal-400 bg-clip-text text-transparent">
              {t('experience.title')}
            </span>
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
            {t('experience.description')}
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-emerald-500 via-teal-500 to-slate-500 rounded-full opacity-30"></div>

          <div className="space-y-12">
            {experiences.map((job, index) => {
              const Icon = logos[job.logo] || Network;
              const isEven = index % 2 === 0;

              return (
                <div
                  key={index}
                  className={`relative flex items-center ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} animate-slide-up-fade`}
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  {/* Timeline Dot */}
                  <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-12 h-12 bg-white dark:bg-slate-900 rounded-full items-center justify-center border-4 border-emerald-100 dark:border-slate-800 shadow-lg z-10">
                    <div className="w-4 h-4 bg-emerald-600 rounded-full animate-pulse"></div>
                  </div>

                  {/* Content Card */}
                  <div className={`w-full md:w-5/12 ${isEven ? 'md:pr-12' : 'md:pl-12'}`}>
                    <div className="glass-card p-6 rounded-2xl hover:border-emerald-500/30 transition-all duration-300 group">
                      {/* Company Header */}
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center space-x-3">
                          <div className="md:hidden w-10 h-10 bg-emerald-100 dark:bg-emerald-900/30 rounded-lg flex items-center justify-center">
                            <Icon className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
                          </div>
                          <div>
                            <h3 className="text-xl font-bold text-slate-800 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                              {job.company}
                            </h3>
                            <p className="text-emerald-600 dark:text-emerald-400 font-semibold">{job.role}</p>
                          </div>
                        </div>

                        {job.link && (
                          <a
                            href={job.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-slate-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
                            title="View more"
                          >
                            <ExternalLink className="h-5 w-5" />
                          </a>
                        )}
                      </div>

                      {/* Period and Type */}
                      <div className="flex items-center space-x-3 mb-4">
                        <div className="flex items-center space-x-2 text-sm text-slate-500 dark:text-slate-400">
                          <Calendar className="h-4 w-4" />
                          <span>{job.period}</span>
                        </div>
                        <span className="px-3 py-1 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 rounded-full text-xs font-medium border border-slate-200 dark:border-slate-700">
                          {job.type}
                        </span>
                      </div>

                      {/* Description */}
                      <p className="text-slate-600 dark:text-slate-300 mb-4 leading-relaxed">
                        {job.description}
                      </p>

                      {/* Achievements */}
                      <div className="space-y-2">
                        {job.achievements.map((achievement, i) => (
                          <div key={i} className="flex items-start space-x-2">
                            <Star className="h-4 w-4 text-amber-500 mt-0.5 flex-shrink-0" />
                            <span className="text-sm text-slate-600 dark:text-slate-300 leading-snug">
                              {achievement}
                            </span>
                          </div>
                        ))}
                      </div>
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
