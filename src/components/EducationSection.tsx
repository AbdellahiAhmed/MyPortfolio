import { GraduationCap, Award, ExternalLink, Calendar, BookOpen, Trophy } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const EducationSection = () => {
  const { t } = useTranslation();

  const educationData = t('education.schools', { returnObjects: true }) as Array<{
    institution: string;
    degree: string;
    period: string;
    description: string;
    logo: string;
    link?: string;
  }>;

  const logos: any = {
    GraduationCap,
    Award
  };

  return (
    <section id="education" className="py-20 relative overflow-hidden bg-slate-50 dark:bg-slate-900/50">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-72 h-72 bg-indigo-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-slide-up-fade">
          <span className="px-4 py-2 bg-blue-500/10 text-blue-600 dark:text-blue-400 rounded-full text-sm font-medium border border-blue-500/20 inline-block">
            {t("education.section")}
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-6 mb-6">
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 bg-clip-text text-transparent">
              {t("education.title")}
            </span>
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
            Academic background and continuous learning
          </p>
        </div>

        {/* Education Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {educationData.map((edu, index) => {
            const Icon = logos[edu.logo] || GraduationCap;

            return (
              <div
                key={index}
                className="glass-card p-8 rounded-2xl hover:border-blue-500/30 transition-all duration-500 group animate-slide-up-fade"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {/* Header with Icon */}
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-500/10 to-indigo-500/10 rounded-xl flex items-center justify-center border border-blue-500/20 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                      <Icon className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-800 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        {edu.institution}
                      </h3>
                      <p className="text-indigo-600 dark:text-indigo-400 font-semibold mt-1">{edu.degree}</p>
                    </div>
                  </div>

                  {edu.link && (
                    <a
                      href={edu.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                      aria-label="External link"
                    >
                      <ExternalLink className="h-5 w-5" />
                    </a>
                  )}
                </div>

                {/* Period */}
                <div className="flex items-center space-x-2 mb-4 text-slate-500 dark:text-slate-400">
                  <Calendar className="h-4 w-4" />
                  <span className="text-sm font-medium">{edu.period}</span>
                </div>

                {/* Description */}
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                  {edu.description}
                </p>

                {/* Decorative Element */}
                <div className="mt-6 pt-6 border-t border-slate-200 dark:border-slate-700">
                  <div className="flex items-center space-x-2 text-sm text-slate-500 dark:text-slate-400">
                    <BookOpen className="h-4 w-4" />
                    <span className="font-medium">Academic Excellence</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Additional Info Card */}
        <div className="mt-12 text-center animate-slide-up-fade delay-500">
          <div className="glass-card p-8 rounded-2xl max-w-2xl mx-auto bg-gradient-to-br from-slate-50 to-white dark:from-slate-800 dark:to-slate-900 border border-amber-500/20">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <Trophy className="h-8 w-8 text-amber-500" />
              <h3 className="text-2xl font-bold text-slate-800 dark:text-white">
                Lifelong Learner
              </h3>
            </div>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
              Continuously expanding knowledge through online courses, certifications, and hands-on projects in networking, automation, and software development.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
