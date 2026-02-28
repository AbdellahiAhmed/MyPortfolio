import { Download } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const ResumeSection = () => {
  const { t } = useTranslation();

  return (
    <section id="resume" className="py-20 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <span className="px-4 py-2 bg-blue-500/10 text-blue-600 dark:text-blue-400 rounded-full text-sm font-medium border border-blue-500/20 inline-block">
          {t("resume.section")}
        </span>

        <h2 className="text-4xl md:text-5xl font-bold mt-6 mb-6">
          <span className="bg-gradient-to-r from-blue-600 to-cyan-600 dark:from-blue-400 dark:to-cyan-400 bg-clip-text text-transparent">
            {t("resume.title")}
          </span>
        </h2>

        <p className="text-xl text-slate-600 dark:text-slate-300 mb-12 max-w-3xl mx-auto">
          {t("resume.description")}
        </p>

        <div className="glass-card p-8 rounded-2xl max-w-2xl mx-auto hover:border-blue-500/30 transition-all duration-300">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-xl flex items-center justify-center shadow-lg">
                <Download className="h-8 w-8 text-white" />
              </div>
              <div className="text-left">
                <h3 className="text-xl font-bold text-slate-800 dark:text-white">{t("resume.cardTitle")}</h3>
                <p className="text-slate-500 dark:text-slate-400 text-sm">{t("resume.lastUpdate")}</p>
              </div>
            </div>
            <a href="/CV.pdf" target="_blank" rel="noopener noreferrer">
              <button className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-xl transition-all duration-300 hover:bg-blue-700 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/30 flex items-center space-x-2">
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
