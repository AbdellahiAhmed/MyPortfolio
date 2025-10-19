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
        className={`px-2 py-1 text-sm rounded ${i18n.language === 'en' ? 'bg-cyan-600 text-white' : 'text-cyan-600 border border-cyan-500'}`}
      >
        EN
      </button>
      <button
        onClick={() => changeLanguage('fr')}
        className={`px-2 py-1 text-sm rounded ${i18n.language === 'fr' ? 'bg-purple-600 text-white' : 'text-purple-600 border border-purple-500'}`}
      >
        FR
      </button>
    </div>
  );
};

export default LanguageSwitcher;
