# slidev-addon-i18n

[Vue i18n](https://github.com/intlify/vue-i18n) addon for [Slidev](https://sli.dev/).

[demo](https://slidev-addon-i18n.vercel.app/)

## Installation

```bash
npm i slidev-addon-i18nb
```

Then add the `addons` option in your [headmatter](https://sli.dev/custom/#headmatter):

```yaml
---
addons:
  - slidev-addon-i18nb
---
```

## Usage

> You can see the example code [here](./example)

- Create `locales` directory in the root of your project, and add your locale files like `en.yml`, `zh.yml`, etc.

  ```yaml
  # locales/en.yml
  title: Slidev i18n addon
  intro:
    desc: This is a demo of Slidev i18n addon
  ```

  Supported languages:
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

- Use `{{ $t("<key>") }}` to write i18n.

  ````md
  # {{ $t("title") }}

  {{ $t("intro.desc") }}

  *{{ $t("intro.desc") }}*

  **{{ $t("intro.desc") }}**

  > {{ $t("intro.desc") }}

  ~~{{ $t("intro.desc") }}~~
  ````
