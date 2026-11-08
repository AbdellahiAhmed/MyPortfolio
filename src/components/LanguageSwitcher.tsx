import { useTranslation } from 'react-i18next';

const languages = ['en', 'fr'] as const;

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  return (
    <div className="flex items-center rounded-full border border-slate-200 dark:border-slate-800 p-0.5" role="group" aria-label="Language">
      {languages.map((lang) => {
        const isActive = i18n.language?.startsWith(lang);
        return (
          <button
            key={lang}
            onClick={() => i18n.changeLanguage(lang)}
            aria-pressed={isActive}
            className={`rounded-full px-2.5 py-1 text-[13px] font-semibold uppercase transition-colors ${
              isActive
                ? 'bg-slate-950 text-white dark:bg-white dark:text-slate-950'
                : 'text-slate-600 hover:text-slate-950 dark:text-slate-400 dark:hover:text-white'
            }`}
          >
            {lang}
          </button>
        );
      })}
    </div>
  );
};

export default LanguageSwitcher;
