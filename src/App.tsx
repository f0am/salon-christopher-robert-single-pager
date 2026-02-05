import { useState } from 'react'
import { useTranslation } from 'react-i18next'

function App() {
  const { t, i18n } = useTranslation()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleLanguage = () => {
    const newLang = i18n.language === 'fr' ? 'en' : 'fr'
    i18n.changeLanguage(newLang)
    localStorage.setItem('language', newLang)
  }

  const serviceKeys = ['coiffure', 'barbier', 'esthetique', 'maquillage', 'percage', 'ongles', 'botox'] as const

  const productCategories = [
    { key: 'hairCare', icon: 'hair', brands: ['Biolage', 'Moroccanoil', 'Nioxin'] },
    { key: 'styling', icon: 'styling', brands: ['Schwarzkopf', 'Catwalk', 'Cynos'] },
    { key: 'skincare', icon: 'skincare', brands: ['Yonka'] }
  ]

  const hours = [
    { dayKey: 'monTue', hours: '9h - 17h30' },
    { dayKey: 'wed', hours: '9h - 18h' },
    { dayKey: 'thuFri', hours: '9h - 21h' },
    { dayKey: 'sat', hours: '9h - 17h' },
    { dayKey: 'sun', hours: '10h - 17h' },
  ]

  return (
    <div className="min-h-screen bg-(--color-cream) text-(--color-charcoal)">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-sm z-50">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <a href="#" className="flex items-center gap-3">
            <img src="/logo.svg" alt="Salon Christopher Robert" className="h-12 w-auto rounded-full" style={{ filter: 'brightness(0)' }} />
            <span className="font-serif text-xl font-semibold hidden sm:block">Salon Christopher Robert</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#services" className="text-sm font-medium hover:text-(--color-gold) transition-colors">{t('nav.services')}</a>
            <a href="#produits" className="text-sm font-medium hover:text-(--color-gold) transition-colors">{t('nav.products')}</a>
            <a href="#horaire" className="text-sm font-medium hover:text-(--color-gold) transition-colors">{t('nav.hours')}</a>
            <a href="#contact" className="text-sm font-medium hover:text-(--color-gold) transition-colors">{t('nav.contact')}</a>
            <button
              onClick={toggleLanguage}
              className="text-sm font-medium hover:text-(--color-gold) transition-colors uppercase"
            >
              {i18n.language === 'fr' ? 'EN' : 'FR'}
            </button>
            <a href="tel:819-243-5234" className="bg-(--color-charcoal) text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-(--color-gold) transition-colors">
              819-243-5234
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2"
            aria-label="Menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-4 py-4 space-y-4">
              <a href="#services" onClick={() => setIsMenuOpen(false)} className="block text-sm font-medium">{t('nav.services')}</a>
              <a href="#produits" onClick={() => setIsMenuOpen(false)} className="block text-sm font-medium">{t('nav.products')}</a>
              <a href="#horaire" onClick={() => setIsMenuOpen(false)} className="block text-sm font-medium">{t('nav.hours')}</a>
              <a href="#contact" onClick={() => setIsMenuOpen(false)} className="block text-sm font-medium">{t('nav.contact')}</a>
              <button
                onClick={toggleLanguage}
                className="block text-sm font-medium text-(--color-gold)"
              >
                {i18n.language === 'fr' ? 'English' : 'Français'}
              </button>
              <a href="tel:819-243-5234" className="block bg-(--color-charcoal) text-white px-4 py-2 rounded-full text-sm font-medium text-center">
                819-243-5234
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1560066984-138dadb4c035?ixlib=rb-4.0.3&auto=format&fit=crop&w=1974&q=80)',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60"></div>
        </div>

        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <img src="/logo.svg" alt="Salon Christopher Robert" className="h-32 md:h-40 w-auto mx-auto mb-8 rounded-full shadow-2xl" />
          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-semibold mb-6">
            {t('hero.title')}
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            {t('hero.subtitle')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:819-243-5234"
              className="bg-white text-(--color-charcoal) px-8 py-3 rounded-full font-medium hover:bg-(--color-gold) hover:text-white transition-colors"
            >
              {t('hero.callUs')}
            </a>
            <a
              href="#services"
              className="border-2 border-white text-white px-8 py-3 rounded-full font-medium hover:bg-white hover:text-(--color-charcoal) transition-colors"
            >
              {t('hero.ourServices')}
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 md:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-5xl font-semibold mb-4">{t('services.title')}</h2>
            <div className="w-16 h-0.5 bg-(--color-gold) mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-8">
            {serviceKeys.map((key) => (
              <div
                key={key}
                className="flex justify-between items-baseline py-4 border-b border-gray-200"
              >
                <h3 className="font-serif text-xl font-medium">
                  {t(`services.items.${key}.name`)}
                </h3>
                <span className="text-gray-500 text-sm ml-4">
                  {t(`services.items.${key}.description`)}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Break */}
      <section className="relative h-64 md:h-96">
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{
            backgroundImage: 'url(/barber-cut.jpg)',
          }}
        >
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        <div className="relative z-10 h-full flex items-center justify-center text-white text-center px-4">
          <p className="font-serif text-2xl md:text-4xl font-light italic max-w-3xl">
            "{t('quote')}"
          </p>
        </div>
      </section>

      {/* Products Section */}
      <section id="produits" className="py-20 md:py-28 bg-(--color-cream)">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-5xl font-semibold mb-4">{t('products.title')}</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {t('products.subtitle')}
            </p>
          </div>

          {/* Categories Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {productCategories.map((cat) => (
              <div
                key={cat.key}
                className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 p-8 text-center group"
              >
                {/* Category Icon */}
                <div className="w-16 h-16 mx-auto mb-6 bg-(--color-cream) rounded-full flex items-center justify-center group-hover:bg-(--color-gold) transition-colors">
                  {cat.icon === 'hair' && (
                    <svg className="w-8 h-8 text-(--color-gold) group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                    </svg>
                  )}
                  {cat.icon === 'styling' && (
                    <svg className="w-8 h-8 text-(--color-gold) group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                    </svg>
                  )}
                  {cat.icon === 'skincare' && (
                    <svg className="w-8 h-8 text-(--color-gold) group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  )}
                </div>

                {/* Category Title */}
                <h3 className="font-serif text-2xl font-semibold text-(--color-charcoal) mb-2">
                  {t(`products.categories.${cat.key}.name`)}
                </h3>
                <p className="text-gray-500 text-sm mb-6">{t(`products.categories.${cat.key}.description`)}</p>

                {/* Brands */}
                <div className="space-y-3">
                  {cat.brands.map((brand) => (
                    <div
                      key={brand}
                      className="py-2 px-4 bg-(--color-cream) rounded-full text-(--color-charcoal) font-medium"
                    >
                      {brand}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* More Products Note */}
          <div className="text-center mt-12">
            <p className="inline-flex items-center gap-2 text-(--color-gold) font-medium">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
              {t('products.moreProducts')}
            </p>
          </div>
        </div>
      </section>

      {/* Hours & Location Section */}
      <section id="horaire" className="py-20 md:py-28 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16">
            {/* Hours */}
            <div>
              <h2 className="font-serif text-3xl md:text-4xl font-semibold mb-8">{t('hours.title')}</h2>
              <div className="space-y-4">
                {hours.map((item) => (
                  <div
                    key={item.dayKey}
                    className="flex justify-between items-center py-3 border-b border-gray-200"
                  >
                    <span className="font-medium">{t(`hours.days.${item.dayKey}`)}</span>
                    <span className="text-gray-600">{item.hours}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Location */}
            <div>
              <h2 className="font-serif text-3xl md:text-4xl font-semibold mb-8">{t('location.title')}</h2>
              <div className="bg-(--color-cream) rounded-2xl p-6 md:p-8 mb-6">
                <p className="font-medium text-lg mb-2">{t('location.entrance')}</p>
                <p className="text-gray-600 mb-4">
                  1100 Boul. Maloney O.<br />
                  Gatineau, QC J8T 6G3
                </p>
                <a
                  href="https://maps.google.com/?q=1100+Boulevard+Maloney+O,+Gatineau,+QC+J8T+6G3"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-(--color-gold) font-medium hover:underline"
                >
                  {t('location.getDirections')}
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </div>

              {/* Map */}
              <div className="rounded-2xl overflow-hidden h-64">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2798.5!2d-75.7383!3d45.4669!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cce04f9d9b0d4f5%3A0x8e4c5e6f7a8b9c0d!2sLes%20Promenades%20Gatineau!5e0!3m2!1sfr!2sca!4v1700000000000"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Emplacement du salon"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section id="contact" className="py-20 md:py-28 bg-(--color-charcoal) text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="font-serif text-3xl md:text-5xl font-semibold mb-6">{t('cta.title')}</h2>
          <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
            {t('cta.subtitle')}
          </p>
          <a
            href="tel:819-243-5234"
            className="inline-flex items-center gap-3 bg-(--color-gold) text-white px-8 py-4 rounded-full text-xl font-medium hover:bg-(--color-gold-light) transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            819-243-5234
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-(--color-charcoal) text-gray-400 py-8 border-t border-gray-700">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <img src="/logo.svg" alt="Salon Christopher Robert" className="h-10 w-auto rounded-full opacity-90" />
              <span className="font-serif text-white">Salon Christopher Robert</span>
            </div>
            <p className="text-sm">
              © {new Date().getFullYear()} Salon Christopher Robert. {t('footer.rights')}
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
