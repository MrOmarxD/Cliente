import i18n from "i18next";
import detector from "i18next-browser-languagedetector";
import { reactI18nextModule } from "react-i18next";

import translationEN from './locales/en/translation.json';
import translationDE from './locales/de/translation.json';
import translationES from './locales/es/translation.json';
import translationEU from './locales/eu/translation.json';

// the translations
const resources = {
  de: {
    translation: translationDE
      },
  en: {
    translation: translationEN
  },
  es: {
    translation: translationES
  },
  eu: {
    translation: translationEU
  }
};

i18n
  .use(reactI18nextModule) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "de",

    keySeparator: false, // we do not use keys in form messages.welcome

    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

export default i18n;