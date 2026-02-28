// src/components/LanguageSwitcher.tsx
import React from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
  };

  return (
    <div className="flex space-x-2 ml-4">
      <button
        onClick={() => changeLanguage('en')}
        className={`px-2 py-1 text-sm rounded transition-colors ${i18n.language === 'en' ? 'bg-emerald-600 text-white' : 'text-emerald-600 border border-emerald-500 hover:bg-emerald-50 dark:hover:bg-emerald-900/20'}`}
      >
        EN
      </button>
      <button
        onClick={() => changeLanguage('fr')}
        className={`px-2 py-1 text-sm rounded transition-colors ${i18n.language === 'fr' ? 'bg-emerald-600 text-white' : 'text-emerald-600 border border-emerald-500 hover:bg-emerald-50 dark:hover:bg-emerald-900/20'}`}
      >
        FR
      </button>
    </div>
  );
};

export default LanguageSwitcher;
