import { Server, Code, Terminal, BookOpen } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const AboutSection = () => {
  const { t } = useTranslation();

  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <span className="px-4 py-2 bg-purple-500/20 text-purple-500 rounded-full text-sm font-medium border border-purple-500/30">
            {t("about.section")}
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-6 mb-6">
            <span className="bg-gradient-to-r from-purple-600 to-cyan-500 bg-clip-text text-transparent dark:from-white dark:to-slate-300">
              {t("about.title")}
            </span>
          </h2>
          <p className="text-xl text-gray-800 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed">
            {t("about.subtitle")}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="bg-white/70 dark:bg-slate-800/50 backdrop-blur-sm p-8 rounded-2xl border border-slate-300 dark:border-slate-700/50 shadow-md dark:shadow-none">
              <h3 className="text-2xl font-bold mb-6 text-purple-700 dark:bg-gradient-to-r dark:from-purple-400 dark:to-cyan-400 dark:bg-clip-text dark:text-transparent">
                {t("about.storyTitle")}
              </h3>
              <div className="space-y-4 text-gray-800 dark:text-slate-300 leading-relaxed">
                <p>{t("about.story1")}</p>
                <p>{t("about.story2")}</p>
                <p>{t("about.story3")}</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {[
              { icon: Server, color: 'purple', title: t("about.card1.title"), desc: t("about.card1.desc") },
              { icon: Code, color: 'cyan', title: t("about.card2.title"), desc: t("about.card2.desc") },
              { icon: Terminal, color: 'green', title: t("about.card3.title"), desc: t("about.card3.desc") },
              { icon: BookOpen, color: 'orange', title: t("about.card4.title"), desc: t("about.card4.desc") },
            ].map(({ icon: Icon, color, title, desc }, i) => (
              <div
                key={i}
                className={`bg-white/70 dark:bg-slate-800/50 backdrop-blur-sm p-6 rounded-2xl border border-slate-300 dark:border-slate-700/50 group hover:border-${color}-500/50 transition-all duration-300 shadow-sm`}
              >
                <div className="mb-4 relative">
                  <Icon className={`h-12 w-12 text-${color}-500 group-hover:scale-110 transition-transform`} />
                  <div className={`absolute inset-0 bg-${color}-500/10 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity`}></div>
                </div>
                <h4 className="font-semibold text-gray-800 dark:text-white mb-2">{title}</h4>
                <p className="text-sm text-gray-600 dark:text-slate-400">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
