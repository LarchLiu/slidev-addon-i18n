import path from 'node:path'
import VueI18nPlugin from '@intlify/unplugin-vue-i18n/vite'
import { defineVitePluginsSetup } from '@slidev/types'

export default defineVitePluginsSetup((options) => {
  return [
    VueI18nPlugin({
      include: [path.join(options.userRoot, './locales/**')],
    }),
  ]
})
