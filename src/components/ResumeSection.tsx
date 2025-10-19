import { Download } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const ResumeSection = () => {
  const { t } = useTranslation();

  return (
    <section id="resume" className="py-20 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <span className="px-4 py-2 bg-purple-500/20 text-purple-500 rounded-full text-sm font-medium border border-purple-500/30">
          {t("resume.section")}
        </span>

        <h2 className="text-4xl md:text-5xl font-bold mt-6 mb-6">
          <span className="bg-gradient-to-r from-purple-600 to-cyan-500 bg-clip-text text-transparent dark:from-purple-400 dark:to-cyan-400">
            {t("resume.title")}
          </span>
        </h2>

        <p className="text-xl text-gray-800 dark:text-slate-300 mb-12 max-w-3xl mx-auto">
          {t("resume.description")}
        </p>

        <div className="bg-white/70 dark:bg-slate-800/50 backdrop-blur-sm p-8 rounded-2xl border border-slate-300 dark:border-slate-700/50 max-w-2xl mx-auto shadow-md">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-xl flex items-center justify-center shadow-inner">
                <Download className="h-8 w-8 text-white" />
              </div>
              <div className="text-left">
                <h3 className="text-xl font-bold text-gray-800 dark:text-white">{t("resume.cardTitle")}</h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm">{t("resume.lastUpdate")}</p>
              </div>
            </div>
            <a href="/CV.pdf" target="_blank" rel="noopener noreferrer">
              <button className="px-6 py-3 bg-gradient-to-r from-purple-500 to-cyan-500 text-white font-semibold rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/30 flex items-center space-x-2">
                <span>{t("resume.button")}</span>
                <Download className="h-4 w-4" />
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResumeSection;
