import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import en from './translate/en.json';
import ru from './translate/ru.json';
import hy from './translate/hy.json';

const resources = {
  en: { common: en },
  ru: { common: ru },
  hy: { common: hy },
};

i18next
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    defaultNS: 'common',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18next;
