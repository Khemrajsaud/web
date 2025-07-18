import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import translationEN from './locales/en/translation.json';
import translationNP from './locales/np/translation.json';

const resources = {
  en: { translation: translationEN },
  np: { translation: translationNP },
};

i18n
  .use(LanguageDetector)  // detects browser language automatically
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;
