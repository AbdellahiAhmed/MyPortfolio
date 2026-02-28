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
        className={`px-2 py-1 text-sm rounded transition-colors ${i18n.language === 'en' ? 'bg-blue-600 text-white' : 'text-blue-600 border border-blue-500 hover:bg-blue-50 dark:hover:bg-blue-900/20'}`}
      >
        EN
      </button>
      <button
        onClick={() => changeLanguage('fr')}
        className={`px-2 py-1 text-sm rounded transition-colors ${i18n.language === 'fr' ? 'bg-blue-600 text-white' : 'text-blue-600 border border-blue-500 hover:bg-blue-50 dark:hover:bg-blue-900/20'}`}
      >
        FR
      </button>
    </div>
  );
};

export default LanguageSwitcher;
