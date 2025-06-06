import type { AIResponseData, I18nConfig } from './types'
import fs from 'node:fs'
import { definePreparserSetup } from '@slidev/types'
import yaml from 'js-yaml'
import OpenAI from 'openai'
import { loadEnv } from 'vite'

const sysPrompt = `
你是一个翻译助手，能够将文本翻译成多种语言。现在需要为 vue 应用提供多语言支持。
实现步骤：
- 请根据 Vue I18n 的规则将文本分段翻译，并将翻译文本替换为 \`{{ $t("key") }}\` 的形式。
- 请将翻译结果存储在一个对象中，键为每行的 \`key\` ，值为翻译后的文本。
- 请确保翻译结果符合 i18n 的规范，并且能够被 Vue I18n 解析。

规则说明：
- 如果文本中包含 HTML 标签，需要把该行分段翻译，请保留标签不变，只翻译文本内容。
- 如果文本中包含变量或占位符，请保留变量或占位符不变，只翻译其他文本。
- 如果是代码块，请保留所有代码不变，只翻译代码块外的文本。
- 如果是 vue 组件，请保留组件名称和属性不变，只翻译文本内容。
- 如果一行中包含 \`inline code\`, 需要把该行分段翻译，保留 \`inline code\` 不变。
- 如果一行中包含 markdown 格式, 需要把该行分段翻译，请保留 markdown 原有格式，只翻译文本内容。
- 翻译后的文本中不可以有 markdown 格式, 不可以自行添加 markdown 格式。
- 原文语言的文本不需要翻译。
- 键值 key 必须为英文，并且不能包含空格或特殊字符，而且保证唯一性。
- 仅返回 json 格式的翻译结果，不要包含其他内容。json 格式如下：
{
"slide": "slide content with $t('key') placeholders",
"i18n": {
 "en": {
  "key1": "Translated text 1",
  "key2": "Translated text 2",
  ...
},
  "zh_CN": {
    "key1": "翻译后的文本1",
    "key2": "翻译后的文本2",
    ...
  }
}
}
**i18n 中的键值要与给定的翻译语言完全一致, 翻译的语言为{languages}**
**必须保证原文不做任何改动, 不可以自主添加任何 markdown 格式**
**始终记得不要把 markdown 格式中的 \`#,*,~,-,\`,{,},>,<\` 等字符带入翻译文本**
**始终记得不要把 html 标签带入翻译文本**
`
function getSystemPrompt(languages: string[]) {
  return sysPrompt.replace('{languages}', languages.join(', '))
}

export default definePreparserSetup(({ headmatter, mode }) => {
  return [
    {
      async transformSlide(content, frontmatter) {
        const env = loadEnv(mode!, process.cwd(), 'I18N_')
        const i18nConfig = headmatter.i18n as I18nConfig

        if (!i18nConfig || !i18nConfig.autoTransform) {
          return content
        }
        if (!env || !env.I18N_AI_BASE_URL || !env.I18N_AI_API_KEY || !env.I18N_AI_MODEL) {
          return content
        }

        async function autoGetI18n(content: string) {
          const openai = new OpenAI({
            apiKey: env.I18N_AI_API_KEY,
            baseURL: env.I18N_AI_BASE_URL,
          })

          const response = await openai.chat.completions.create({
            model: env.I18N_AI_MODEL,
            reasoning_effort: "high",
            messages: [
              { role: 'system', content: getSystemPrompt(i18nConfig.languages) },
              {
                role: 'user',
                content,
              },
            ],
          })
          let data = response.choices[0].message.content || ''

          if (data.startsWith('```json')) {
            data = data.replace(/^```json\n/, '').replace(/```$/, '')
          }
          return JSON.parse(data) as AIResponseData
        }

        const startTime = Date.now()
        try {
          const data = await autoGetI18n(content)
          if (!data || !data.i18n || !data.slide) {
            return content
          }
          const endTime = Date.now()
          console.warn(`Translation took ${endTime - startTime} ms`)
          for (const [key, value] of Object.entries(data.i18n)) {
            const path = `./locales_auto/${key}.yml`
            if (fs.existsSync(path)) {
              // If file exists, read existing content and merge with new data
              const existingContent = yaml.load(fs.readFileSync(path, 'utf-8')) as Record<string, unknown>
              if (existingContent && typeof existingContent === 'object') {
                const mergedContent = Object.assign({}, existingContent, value)
                fs.writeFileSync(path, yaml.dump(mergedContent), 'utf-8')
              }
              else {
                fs.writeFileSync(path, yaml.dump(value), 'utf-8')
              }
            }
            else {
              // If file doesn't exist, create directory if needed and write new file
              const dir = './locales_auto'
              if (!fs.existsSync(dir)) {
                fs.mkdirSync(dir, { recursive: true })
              }
              fs.writeFileSync(path, yaml.dump(value), 'utf-8')
            }
          }

          const path = './slides_transformed.md'
          const matter = JSON.parse(JSON.stringify(frontmatter))
          if (matter.i18n && matter.i18n.autoTransform) {
            matter.i18n.autoTransform = false
          }
          const slide = `---\n${yaml.dump(matter)}---\n\n${data.slide}\n\n`
          if (fs.existsSync(path)) {
            const existingContent = (fs.readFileSync(path, 'utf-8'))
            if (existingContent) {
              fs.writeFileSync(path, (`${existingContent}${slide}`), 'utf-8')
            }
            else {
              fs.writeFileSync(path, slide, 'utf-8')
            }
          }
          else {
            fs.writeFileSync(path, slide, 'utf-8')
          }

          return data.slide
        }
        catch (error) {
          const endTime = Date.now()
          console.warn(`Translation error took ${endTime - startTime} ms`)
          console.error('Error fetching i18n data:', error)
          return content
        }
      },
    },
  ]
})
