<h1 align="center">
slidev-addon-i18n
</h1>

<div align="center">

Auto transform slidev content to i18n format by AI.

<br>
</div>

[Vue i18n](https://github.com/intlify/vue-i18n) addon for [Slidev](https://sli.dev/).

[Demo](https://slidev-addon-i18n.vercel.app/)

## Installation

```bash
npm i slidev-addon-i18nb
```

## Usage

### Auto transform by AI

- Add the `addons` and `i18n` option in headmatter

  ```yaml
  ---
  addons:
    - slidev-addon-i18nb
  i18n:
    autoTransform: true
    languages:
      - en
      - ja
      - zh_CN
  ---
  ```

  `i18n` Configuration

  - autoTransform: Whether to automatically transform markdown content to i18n format.
  - languages: Specify the languages supported by the addon.


- Set env variables in .env file

  ```
  I18N_AI_BASE_URL=https://generativelanguage.googleapis.com/v1beta/openai/
  I18N_AI_API_KEY=GeminiApiKey
  I18N_AI_MODEL=gemini-2.5-flash-preview-05-20
  ```

- Run the command to transform the markdown content to i18n format: 

  ```
  npm run dev slides_auto.md
  ```

  Check the dir `locales_auto` for the generated translation files.

  And `slides_transformed.md` for the transformed slides info.

  PS. `slides_transformed.md` is just for reference, you can delete it after the translation is done.

### Manual translation

- Add the addon in headmatter

  ```yaml
  ---
  addons:
    - slidev-addon-i18nb
  ---
  ```

- Create `locales` directory in the root of your project, and add your locale files like `en.yml`, `zh.yml`, etc.

  ```yaml
  # locales/en.yml
  title: Slidev i18n addon
  intro:
    desc: This is a demo of Slidev i18n addon
  ```

- Use `{{ $t("<key>") }}` to write i18n.

  ````md
  # {{ $t("title") }}

  {{ $t("intro.desc") }}

  *{{ $t("intro.desc") }}*

  **{{ $t("intro.desc") }}**

  > {{ $t("intro.desc") }}

  ~~{{ $t("intro.desc") }}~~
  ````


### Default languages name:
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
