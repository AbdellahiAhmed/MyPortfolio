import { User, Code, Globe, Coffee, Quote } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const AboutSection = () => {
  const { t } = useTranslation();

  return (
    <section id="about" className="py-20 relative overflow-hidden bg-slate-50 dark:bg-slate-900/50">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-amber-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 animate-slide-up-fade">
          <span className="px-4 py-2 bg-blue-500/10 text-blue-600 dark:text-blue-400 rounded-full text-sm font-medium border border-blue-500/20 inline-block">
            {t('about.section')}
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-6 mb-6">
            <span className="bg-gradient-to-r from-slate-800 to-slate-600 dark:from-white dark:to-slate-300 bg-clip-text text-transparent">
              {t('about.title')}
            </span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left Column - Story */}
          <div className="space-y-8 animate-slideInLeft">
            <div className="glass-card p-8 rounded-3xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500/10 to-transparent rounded-bl-full transition-transform duration-500 group-hover:scale-110"></div>

              <h3 className="text-2xl font-bold mb-6 flex items-center space-x-3 text-slate-800 dark:text-white">
                <User className="h-6 w-6 text-blue-500" />
                <span>{t('about.storyTitle')}</span>
              </h3>

              <div className="space-y-4 text-slate-600 dark:text-slate-300 leading-relaxed">
                <p>
                  {t('about.story1')}
                </p>
                <p>
                  {t('about.story2')}
                </p>
                <p>
                  {t('about.story3')}
                </p>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                {['Problem Solver', 'Team Player', 'Continuous Learner', 'Tech Enthusiast'].map((tag, i) => (
                  <span key={i} className="px-3 py-1 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 rounded-full text-sm font-medium border border-slate-200 dark:border-slate-700">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Quote Section */}
            <div className="glass-card p-8 rounded-3xl bg-gradient-to-br from-blue-600 to-indigo-700 text-white relative overflow-hidden transform transition-transform hover:scale-[1.02] duration-300">
              <Quote className="absolute top-4 right-4 h-12 w-12 text-white/10" />
              <blockquote className="relative z-10">
                <p className="text-lg font-medium italic mb-4">
                  "Innovation distinguishes between a leader and a follower. Quality is not an act, it is a habit."
                </p>
                <footer className="text-blue-100 font-medium">
                  — Steve Jobs / Aristotle
                </footer>
              </blockquote>
            </div>
          </div>

          {/* Right Column - Bento Grid */}
          <div className="grid grid-cols-2 gap-4 animate-slideInRight">
            <div className="glass-card p-6 rounded-3xl flex flex-col items-center justify-center text-center hover:bg-white/50 dark:hover:bg-slate-800/50 transition-colors duration-300">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-2xl flex items-center justify-center mb-4 text-blue-600 dark:text-blue-400">
                <Code className="h-6 w-6" />
              </div>
              <h4 className="font-bold text-slate-800 dark:text-white mb-1">Clean Code</h4>
              <p className="text-sm text-slate-500 dark:text-slate-400">Maintainable & Scalable</p>
            </div>

            <div className="glass-card p-6 rounded-3xl flex flex-col items-center justify-center text-center hover:bg-white/50 dark:hover:bg-slate-800/50 transition-colors duration-300 mt-8">
              <div className="w-12 h-12 bg-amber-100 dark:bg-amber-900/30 rounded-2xl flex items-center justify-center mb-4 text-amber-600 dark:text-amber-400">
                <Globe className="h-6 w-6" />
              </div>
              <h4 className="font-bold text-slate-800 dark:text-white mb-1">Global Mindset</h4>
              <p className="text-sm text-slate-500 dark:text-slate-400">International Standards</p>
            </div>

            <div className="glass-card p-6 rounded-3xl flex flex-col items-center justify-center text-center hover:bg-white/50 dark:hover:bg-slate-800/50 transition-colors duration-300 -mt-8">
              <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-900/30 rounded-2xl flex items-center justify-center mb-4 text-emerald-600 dark:text-emerald-400">
                <Coffee className="h-6 w-6" />
              </div>
              <h4 className="font-bold text-slate-800 dark:text-white mb-1">Dedicated</h4>
              <p className="text-sm text-slate-500 dark:text-slate-400">Committed to Excellence</p>
            </div>

            <div className="glass-card p-6 rounded-3xl flex flex-col items-center justify-center text-center hover:bg-white/50 dark:hover:bg-slate-800/50 transition-colors duration-300">
              <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-900/30 rounded-2xl flex items-center justify-center mb-4 text-indigo-600 dark:text-indigo-400">
                <User className="h-6 w-6" />
              </div>
              <h4 className="font-bold text-slate-800 dark:text-white mb-1">User Centric</h4>
              <p className="text-sm text-slate-500 dark:text-slate-400">Experience First</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
