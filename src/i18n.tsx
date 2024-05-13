import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import translationES from './locales/es/translation.json';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      es: {
        translation: translationES,
      },
    },
    lng: 'es', // Idioma por defecto
    fallbackLng: 'es',
    interpolation: {
      escapeValue: false, // React ya se encarga de la seguridad
    },
  });

export default i18n;
