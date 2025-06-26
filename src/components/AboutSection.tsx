import { Server, Code, Terminal, BookOpen } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const AboutSection = () => {
  const { t } = useTranslation();

  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <span className="px-4 py-2 bg-purple-500/20 text-purple-400 rounded-full text-sm font-medium border border-purple-500/30">
            {t("about.section")}
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-6 mb-6">
            <span className="text-black dark:bg-gradient-to-r dark:from-white dark:to-slate-300 dark:bg-clip-text dark:text-transparent">
              {t("about.title")}
            </span>
          </h2>
          <p className="text-xl text-black dark:text-slate-300 max-w-3xl mx-auto">
            {t("about.subtitle")}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-2xl border border-slate-700/50">
              <h3 className="text-2xl font-bold mb-6 text-black dark:bg-gradient-to-r dark:from-purple-400 dark:to-cyan-400 dark:bg-clip-text dark:text-transparent">
                {t("about.storyTitle")}
              </h3>
              <div className="space-y-4 text-black dark:text-slate-300 leading-relaxed">
                <p>{t("about.story1")}</p>
                <p>{t("about.story2")}</p>
                <p>{t("about.story3")}</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {/* Card 1 */}
            <div className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-2xl border border-slate-700/50 hover:border-purple-500/50 transition-all duration-300 group">
              <div className="mb-4 relative">
                <Server className="h-12 w-12 text-purple-400 group-hover:scale-110 transition-transform" />
                <div className="absolute inset-0 bg-purple-400/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
              <h4 className="font-semibold text-black dark:text-white mb-2">{t("about.card1.title")}</h4>
              <p className="text-sm text-slate-700 dark:text-slate-400">{t("about.card1.desc")}</p>
            </div>

            {/* Card 2 */}
            <div className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-2xl border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300 group">
              <div className="mb-4 relative">
                <Code className="h-12 w-12 text-cyan-400 group-hover:scale-110 transition-transform" />
                <div className="absolute inset-0 bg-cyan-400/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
              <h4 className="font-semibold text-black dark:text-white mb-2">{t("about.card2.title")}</h4>
              <p className="text-sm text-slate-700 dark:text-slate-400">{t("about.card2.desc")}</p>
            </div>

            {/* Card 3 */}
            <div className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-2xl border border-slate-700/50 hover:border-green-500/50 transition-all duration-300 group">
              <div className="mb-4 relative">
                <Terminal className="h-12 w-12 text-green-400 group-hover:scale-110 transition-transform" />
                <div className="absolute inset-0 bg-green-400/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
              <h4 className="font-semibold text-black dark:text-white mb-2">{t("about.card3.title")}</h4>
              <p className="text-sm text-slate-700 dark:text-slate-400">{t("about.card3.desc")}</p>
            </div>

            {/* Card 4 */}
            <div className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-2xl border border-slate-700/50 hover:border-orange-500/50 transition-all duration-300 group">
              <div className="mb-4 relative">
                <BookOpen className="h-12 w-12 text-orange-400 group-hover:scale-110 transition-transform" />
                <div className="absolute inset-0 bg-orange-400/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
              <h4 className="font-semibold text-black dark:text-white mb-2">{t("about.card4.title")}</h4>
              <p className="text-sm text-slate-700 dark:text-slate-400">{t("about.card4.desc")}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
