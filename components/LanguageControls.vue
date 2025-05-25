<script setup lang="ts">
import MenuButton from '@slidev/client/internals/MenuButton.vue'
import { useI18n } from 'vue-i18n'
import { availableLocales } from '../setup/main'
import LanguageList from './LanguageList.vue'

const { t } = useI18n({
  inheritLocale: true,
  useScope: 'local',
})
</script>

<template>
  <MenuButton>
    <template #button>
      <button class="slidev-icon-btn" :title="t('toggle_langs')">
        <div i-carbon-ibm-watson-language-translator />
      </button>
    </template>
    <template #menu>
      <LanguageList :list="availableLocales!" />
    </template>
  </MenuButton>
</template>

<i18n lang="yml">
en:
  toggle_langs: 'Toggle languages'
zh_CN:
  toggle_langs: '切换语言'
zh_TW:
  toggle_langs: '切換語言'
zh:
  toggle_langs: '切换语言'
de:
  toggle_langs: 'Sprachen umschalten'
es:
  toggle_langs: 'Alternar idiomas'
fr:
  toggle_langs: 'Basculer les langues'
ko:
  toggle_langs: '언어 전환'
nl:
  toggle_langs: 'Talen schakelen'
it:
  toggle_langs: 'Alterna lingue'
ja:
  toggle_langs: '言語切り替え'
pt:
  toggle_langs: 'Alternar idiomas'
ru:
  toggle_langs: 'Переключить языки'
ar:
  toggle_langs: 'تبديل اللغات'
hi:
  toggle_langs: 'भाषाएँ बदलें'
</i18n>
