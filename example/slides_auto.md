---
theme: seriph
title: i18n addon for Slidev
background: https://cover.sli.dev
mdc: true
transition: fade
addons:
  - slidev-addon-i18nb
i18n:
  autoTransform: true
  languages:
    - en
    - ja
    - zh_CN
---

# Slidev i18n addon

<div v-click>

The Slidev i18n addon is a powerful plugin designed to bring comprehensive internationalization capabilities to your Slidev presentations. {.mt-8!}

</div>

<div @click="$slidev.nav.next" class="abs-b mb-1 w-1/2 cursor-pointer rounded-lg mx-auto flex flex-row justify-center items-center gap-1" bg="white op-10" hover:bg="op-20"
>

  <div>

  **Press Space or Click Me**

  </div>

  <div>
    <carbon:interface-usage />
  </div>

  <div mb-2>
    <kbd>space</kbd><sub ml-1>or</sub>
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

## Installation

```bash
npm i slidev-addon-i18nb
```

Then add the `addons` option in [headmatter](https://sli.dev/custom/#headmatter):

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

# Usage

## Manual translation  {.mt-8!}

- Create `locales` directory in the root of your project, and add your locale files like `en.yml`, `zh.yml`, etc.

  ```yaml
  # locales/en.yml
  title: Slidev i18n addon
  intro:
    desc: This is a demo of Slidev i18n addon
  ```

::right::

- Use `{{ $t("<key>") }}` to write i18n.

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

## Auto transform

### I18n Configuration  {.mt-8!}

<v-click>

- autoTransform: Whether to automatically transform markdown content to i18n format.
- languages: Specify the languages supported by the addon.

</v-click>

<v-click>

### Add the `i18n` option in [headmatter](https://sli.dev/custom/#headmatter):  {.mt-8!}

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

### Set env variables in .env file

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

## Auto transform

```
npm run dev slides_auto.md
```

Check the dir `locales_auto` for the generated translation files.

And `slides_transformed.md` for the transformed slides info.

PS. `slides_transformed.md` is just for reference, you can delete it after the translation is done.

---

# Default languages name

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
