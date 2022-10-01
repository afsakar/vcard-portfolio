import { createI18n } from 'vue-i18n'
import { useLocaleStore } from '../composables/locale'

export default defineNuxtPlugin(() => {
  createI18n({
    legacy: false,
    inheritLocale: false,
    globalInjection: true,
    localeDir: 'locales',
    fallbackLocale: useLocaleStore().getLocale || 'tr',
    locale: useLocaleStore().getLocale || 'tr',
  })
})
