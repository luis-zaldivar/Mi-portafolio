import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import translationEN from './locales/en/translation.json'; // Traducciones en inglés
import translationES from './locales/es/translation.json'; // Traducciones en español
import translationDE from './locales/de/translation.json'; // Traducciones en alemán
import translationJA from './locales/ja/translation.json'; // Traducciones en japonés
import translationPT from './locales/pt/translation.json'; // Traducciones en portugués
import translationRU from './locales/ru/translation.json'; // Traducciones en ruso

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: translationEN,
      },
      es: {
        translation: translationES,
      },
      de: {
        translation: translationDE,
      },
      ja: {
        translation: translationJA,
      },
      pt: {
        translation: translationPT,
      },
      ru: {
        translation: translationRU,
      }
    },
    lng: 'ja', // Establece el inglés como el idioma por defecto
    fallbackLng: 'ja', // Establece inglés como el idioma de reserva
    interpolation: {
      escapeValue: false, // React ya se encarga de la seguridad
    },
  });

export default i18n;
