import type { Locale } from 'vue-i18n'
import messages from '@intlify/unplugin-vue-i18n/messages'
import { defineAppSetup } from '@slidev/types'
import { useStorage } from '@vueuse/core'
import { createI18n } from 'vue-i18n'

const i18n = createI18n({
  legacy: false,
  fallbackLocale: 'en',
  locale: '',
  messages,
})

export const availableLocales = Object.keys(messages!)

const currentLang = useStorage<string>('slidev-lang', (availableLocales && availableLocales.length && availableLocales[0]) || 'en')

if (!availableLocales.includes(currentLang.value)) {
  currentLang.value = (availableLocales && availableLocales.length && availableLocales[0]) || 'en'
}

export function setI18nLanguage(lang: Locale) {
  i18n.global.locale.value = lang as any
  if (typeof document !== 'undefined')
    document.querySelector('html')?.setAttribute('lang', lang)
  return lang
}

export default defineAppSetup(({ app }) => {
  app.use(i18n)
  setI18nLanguage(currentLang.value)
})
