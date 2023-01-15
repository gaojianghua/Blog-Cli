import { defineNuxtPlugin } from '#app'
import Varlet, { StyleProvider, Themes, Locale } from '@varlet/ui'
import '@varlet/ui/es/style.js'
import '@varlet/touch-emulator'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(Varlet)
  if (process.client) {
    StyleProvider(null)
    Locale.add('en-US', Locale.enUS)
    localStorage.setItem('lang', 'en-US')
  }
})
