import { defineStore } from 'pinia'
import { computed, ref } from 'vue'
import { useCookie } from '#app'

export const useLocaleStore = defineStore('localeStore', () => {
  const locale = ref(useCookie('locale'))
  function setLocale(val) {
    return this.locale = val
  }
  const getLocale = computed(() => {
    return locale.value
  })

  return { locale, setLocale, getLocale }
})
