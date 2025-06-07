---
theme: seriph
title: i18n addon for Slidev
background: https://cover.sli.dev
mdc: true
transition: fade
addons:
  - slidev-addon-i18nb
i18n:
  autoTransform: false
  languages:
    - en
    - ja
    - zh_CN
---

# {{ $t("slidev_i18n_addon_title") }}

<div v-click>

{{ $t("addon_description") }} {.mt-8!}

</div>

<div @click="$slidev.nav.next" class="abs-b mb-1 w-1/2 cursor-pointer rounded-lg mx-auto flex flex-row justify-center items-center gap-1" bg="white op-10" hover:bg="op-20">

  <div>

  **{{ $t("call_to_action_space_click") }}**

  </div>

  <div>
    <carbon:interface-usage />
  </div>

  <div mb-2>
    <kbd>space</kbd><sub ml-1>{{ $t("or_subscript") }}</sub>
  </div>

  <div>
    <lucide:mouse-pointer-click />
  </div>

</div>

<div class="abs-br m-6 text-xl">
  <a href="https://github.com/slidevjs/slidev" target="_blank" class="slidev-icon-btn">
    <carbon:logo-github />
  </a>
</div>

---
layout: image-right
image: https://cover.sli.dev
---

## {{ $t("installationHeading") }}

```bash
npm i slidev-addon-i18nb
```

{{ $t("thenAddThePrefix") }}`addons`{{ $t("optionInSuffix") }}[headmatter](https://sli.dev/custom/#headmatter):

```yaml
---
addons:
  - slidev-addon-i18nb
---
```

---
layout: two-cols
layoutClass: gap-16
---

# {{ $t("usageTitle") }}

## {{ $t("manualTranslationTitle") }} {.mt-8!}

- {{ $t("createLocalesDirPart1") }}`locales`{{ $t("createLocalesDirPart2") }}`en.yml`, `zh.yml`{{ $t("createLocalesDirPart3") }}

  ```yaml
  # locales/en.yml
  title: Slidev i18n addon
  intro:
    desc: This is a demo of Slidev i18n addon
  ```

::right::

- {{ $t("useI18nPlaceholderPart1") }}`{{ $t("<key>") }}`{{ $t("useI18nPlaceholderPart2") }}

  ````md
  # {{ $t("title") }}

  {{ $t("intro.desc") }}

  *{{ $t("intro.desc") }}*

  **{{ $t("intro.desc") }}**

  > {{ $t("intro.desc") }}

  ~~{{ $t("intro.desc") }}~~
  ````

---
layout: two-cols
layoutClass: gap-16
---

## {{ $t("autoTransformTitle") }}

### {{ $t("i18nConfigurationTitle") }} {.mt-8!}

<v-click>

- autoTransform: {{ $t("autoTransformDescription") }}
- languages: {{ $t("languagesDescription") }}

</v-click>

<v-click>

### {{ $t("addThe") }} `i18n` {{ $t("optionIn") }} [headmatter](https://sli.dev/custom/#headmatter): {.mt-8!}

```
i18n:
  autoTransform: true
  languages:
    - en
    - ja
    - zh_CN
```

</v-click>

::right::

<v-click>

### {{ $t("setEnvVariablesTitle") }}

```
I18N_AI_BASE_URL=https://generativelanguage.googleapis.com/v1beta/openai/
I18N_AI_API_KEY=GeminiApiKey
I18N_AI_MODEL=gemini-2.5-flash-preview-05-20
```

</v-click>

---
layout: image-left
image: https://cover.sli.dev
---

## {{ $t("autoTransformTitle") }}

```
npm run dev slides_auto.md
```

{{ $t("checkDir") }}`locales_auto`{{ $t("generatedTranslationFiles") }}

{{ $t("and") }}`slides_transformed.md`{{ $t("transformedSlidesInfo") }}

{{ $t("ps") }}`slides_transformed.md`{{ $t("justForReferenceDelete") }}

---
{}
---

# {{ $t("defaultLanguagesName") }}

```
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
```

