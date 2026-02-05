import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

import fr from './locales/fr.json'
import en from './locales/en.json'

const getBrowserLanguage = (): string => {
  const browserLang = navigator.language.split('-')[0]
  return ['fr', 'en'].includes(browserLang) ? browserLang : 'fr'
}

const savedLanguage = localStorage.getItem('language') || getBrowserLanguage()

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
