import { Network, Code, Server, ExternalLink, Star } from 'lucide-react';
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
    <section id="experience" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <span className="px-4 py-2 bg-cyan-500/20 text-cyan-500 rounded-full text-sm font-medium border border-cyan-500/30">
            {t('experience.section')}
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-6 mb-6">
            <span className="bg-gradient-to-r from-cyan-600 to-blue-500 bg-clip-text text-transparent dark:from-white dark:to-slate-300">
              {t('experience.title')}
            </span>
          </h2>
        </div>

        <div className="space-y-8">
          {experiences.map((job, index) => {
            const Icon = logos[job.logo] || Network;

            return (
              <div
                key={index}
                className="bg-white/70 dark:bg-slate-800/50 backdrop-blur-sm p-8 rounded-2xl border border-slate-200 dark:border-slate-700/50 shadow-md transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-xl flex items-center justify-center border border-purple-500/30">
                      <Icon className="h-8 w-8 text-purple-500 dark:text-purple-400" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-800 dark:text-white">{job.company}</h3>
                      <p className="text-purple-700 dark:text-purple-400 font-medium">{job.role}</p>
                      <div className="flex items-center space-x-3 mt-1">
                        <span className="text-sm text-gray-600 dark:text-slate-400">{job.period}</span>
                        <span className="px-2 py-1 bg-cyan-100 text-cyan-700 dark:bg-cyan-500/20 dark:text-cyan-400 rounded-full text-xs border border-cyan-200 dark:border-cyan-500/30">
                          {job.type}
                        </span>
                      </div>
                    </div>
                  </div>

                  {job.link ? (
                    <a
                      href={job.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-cyan-500 dark:hover:text-white transition-colors"
                      title="Voir plus"
                    >
                      <ExternalLink className="h-5 w-5" />
                    </a>
                  ) : (
                    <ExternalLink className="h-5 w-5 text-gray-300 dark:text-slate-500" title="Aucun lien disponible" />
                  )}
                </div>

                <p className="text-gray-800 dark:text-slate-300 mb-4 leading-relaxed">{job.description}</p>

                <div className="space-y-2">
                  {job.achievements.map((achievement, i) => (
                    <div key={i} className="flex items-start space-x-2">
                      <Star className="h-4 w-4 text-yellow-500 mt-1" />
                      <span className="text-sm text-gray-800 dark:text-slate-300 leading-snug">{achievement}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
