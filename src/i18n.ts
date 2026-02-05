import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

import fr from './locales/fr.json'
import en from './locales/en.json'

// Default to French unless the user explicitly chose a language
const savedLanguage = localStorage.getItem('language') || 'fr'

i18n
  .use(initReactI18next)
  .init({
    resources: {
      fr: { translation: fr },
      en: { translation: en }
    },
    lng: savedLanguage,
    fallbackLng: 'fr',
    interpolation: {
      escapeValue: false
    }
  })

export default i18n
