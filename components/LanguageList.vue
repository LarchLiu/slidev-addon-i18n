<script setup lang="ts">
import type { SelectionItem } from '@slidev/client/internals/types'
import SelectList from '@slidev/client/internals/SelectList.vue'
import { useStorage } from '@vueuse/core'
import { computed, watch } from 'vue'
import { useI18n } from 'vue-i18n'
import { setI18nLanguage } from '../setup/main'

const props = defineProps<{ list: string[] }>()

const currentLang = useStorage<string>('slidev-lang', 'en')

const { t } = useI18n({
  inheritLocale: true,
  useScope: 'local',
})

type LangNameType = {
  [K in 'zh_CN' | 'zh_TW' | 'zh' | 'ar' | 'en' | 'de' | 'es' | 'fr' | 'ko' | 'nl' | 'it' | 'ja' | 'pt' | 'ru' | 'hi']: string
}

const langName: LangNameType = {
  ar: 'العربية',
  de: 'Deutsch',
  en: 'English',
  es: 'Español',
  fr: 'Français',
  hi: 'हिन्दी',
  it: 'Italiano',
  ja: '日本語',
  ko: '한국어',
  nl: 'Nederlands',
  pt: 'Português',
  ru: 'Русский',
  zh: '中文',
  zh_CN: '简体中文',
  zh_TW: '繁體中文',
}

function getLangName(str: string) {
  return (langName as Record<string, string>)[str] || str
}

const languagesItems = computed<SelectionItem<string>[]>(() => [
  ...props.list.map(v => ({
    value: v,
    display: getLangName(v),
  })),
])

watch(currentLang, (lang) => {
  setI18nLanguage(lang)
})
</script>

<template>
  <div class="text-sm">
    <SelectList v-model="currentLang" :title="t('languages')" :items="languagesItems" />
  </div>
</template>

<i18n lang="yml">
en:
  languages: 'Languages'
zh_CN:
  languages: '选择语言'
zh_TW:
  languages: '選擇語言'
zh:
  languages: '选择语言'
de:
  languages: 'Sprachen'
es:
  languages: 'Idiomas'
fr:
  languages: 'Langues'
ko:
  languages: '언어'
nl:
  languages: 'Talen'
it:
  languages: 'Lingue'
ja:
  languages: '言語'
pt:
  languages: 'Idiomas'
ru:
  languages: 'Языки'
ar:
  languages: 'اللغات'
hi:
  languages: 'भाषाएँ'
</i18n>
