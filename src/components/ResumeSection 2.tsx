import { Download } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const ResumeSection = () => {
  const { t } = useTranslation();

  return (
    <section id="resume" className="py-12 md:py-16 lg:py-20 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <span className="px-4 py-2 bg-blue-500/10 text-blue-600 dark:text-blue-400 rounded-full text-sm font-medium border border-blue-500/20 inline-block">
          {t("resume.section")}
        </span>

        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mt-4 md:mt-6 mb-4 md:mb-6">
          <span className="bg-gradient-to-r from-blue-600 to-cyan-600 dark:from-blue-400 dark:to-cyan-400 bg-clip-text text-transparent">
            {t("resume.title")}
          </span>
        </h2>

        <p className="text-base md:text-xl text-slate-600 dark:text-slate-300 mb-8 md:mb-12 max-w-3xl mx-auto">
          {t("resume.description")}
        </p>

        <div className="glass-card p-4 sm:p-6 md:p-8 rounded-2xl max-w-2xl mx-auto hover:border-blue-500/30 transition-all duration-300">
          <div className="flex flex-col sm:flex-row items-center sm:justify-between gap-4">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-xl flex items-center justify-center shadow-lg shrink-0">
                <Download className="h-6 w-6 md:h-8 md:w-8 text-white" />
              </div>
              <div className="text-left">
                <h3 className="text-lg md:text-xl font-bold text-slate-800 dark:text-white">{t("resume.cardTitle")}</h3>
                <p className="text-slate-500 dark:text-slate-400 text-sm">{t("resume.lastUpdate")}</p>
              </div>
            </div>
            <a href="/CV.pdf" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
              <button className="w-full sm:w-auto px-6 py-3 bg-blue-600 text-white font-semibold rounded-xl transition-all duration-300 hover:bg-blue-700 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/30 flex items-center justify-center space-x-2">
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
