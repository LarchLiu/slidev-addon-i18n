import type { I18nConfig } from './types'
import path from 'node:path'
import VueI18nPlugin from '@intlify/unplugin-vue-i18n/vite'
import { defineVitePluginsSetup } from '@slidev/types'

export default defineVitePluginsSetup((options) => {
  const headmatter = options.data.headmatter
  const i18nConfig = headmatter.i18n as I18nConfig
  const dirs = [path.join(options.userRoot, './locales/**')]
  if (i18nConfig) {
    dirs.push(path.join(options.userRoot, './locales_auto/**'))
  }
  return [
    VueI18nPlugin({
      include: dirs,
    }),
  ]
})
