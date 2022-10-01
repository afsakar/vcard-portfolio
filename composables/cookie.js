import { defineStore } from 'pinia'
import { computed, ref } from 'vue'
import { inject } from '@vue/composition-api'
import { useCookie } from '#app'

export const useCookieStore = defineStore('cookieStore', () => {
  const cookie = ref(useCookie('accept-cookie'))
  const $cookies = inject('$cookies')

  function setCookie() {
    $cookies.set('accept-cookie', true, '30d')
    return this.cookie = true
  }
  const getCookie = computed(() => {
    return cookie.value
  })

  return { cookie, setCookie, getCookie }
})
