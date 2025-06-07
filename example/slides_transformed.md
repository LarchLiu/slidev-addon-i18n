---
highlighter: shiki
css: unocss
colorSchema: dark
transition: fade-out
mdc: true
layout: center
glowSeed: 4
title: The New Powerful ESLint Config with Type Safety
monacoTypesIgnorePackages:
  - '@antfu/install-pkg'
  - '@clack/prompts'
  - '@typescript-eslint/*'
  - eslint-plugin-*
  - '*-eslint-parser'
  - find-up
  - parse-*
  - globals
  - pkg-types
  - mlly
  - local-pkg
  - yargs
  - fast-glob
  - debug
  - globby
  - estraverse
  - pathe
  - acorn
  - acorn-*
  - pico*
  - eslint-visitor-keys
addons:
  - slidev-addon-i18nb
i18n:
  autoTransform: false
  languages:
    - en
    - zh_CN
---

![](/af-logo-animated.svg){.w-30.mt--10.mb-5}

---
layout: intro
glowSeed: 15
glowOpacity: 0.3
class: pl-25
---

Anthony Fu<span font-jp lang="ja">・アンソニ</span>

<div class="[&>*]:important-leading-10 opacity-80">

{{ $t("coreTeamMember") }} {Vite} {Vue} and {Nuxt}<br>
{{ $t("creatorOf") }} {Vitest} {Slidev} {Type Challenges} {UnoCSS} {VueUse}<br>
{{ $t("maintainerOf") }} {ESLint Stylistic} {Shiki} {Twoslash}<br>
{{ $t("workingAt") }} {NuxtLabs}<br>

</div>

<div my-10 w-min flex="~ gap-1" items-center justify-center>
  <div i-ri-user-3-line op50 ma text-xl />
  <div><a href="https://antfu.me" target="_blank" class="border-none! font-300">antfu.me</a></div>
  <div i-ri-github-line op50 ma text-xl ml4/>
  <div><a href="https://github.com/antfu" target="_blank" class="border-none! font-300">antfu</a></div>
  <div i-ri-bluesky-line op50 ma text-xl ml4 />
  <div><a href="https://bsky.app/profile/antfu.me" target="_blank" class="border-none! font-300">antfu.me</a></div>
  <div i-ri-twitter-x-line op50 ma text-xl ml4/>
  <div ws-nowrap><a href="https://twitter.com/antfu7" target="_blank" class="border-none! font-300">antfujp</a><span op50 ws-nowrap text-sm w-max> {{ $t("japaneseNote") }}</span></div>
</div>

<img src="https://antfu.me/avatar.png" rounded-full w-35 abs-tr mt-32 mr-22 />

<div flex="~ gap2">

</div>

---
{}
---

<div lang="ja" font-jp text-4xl important-leading-14 mt30>
{{ $t("movedFromParisToTokyo") }}
</div>

<div lang="ja" font-jp v-click="2" text-2xl op75 pt10>
{{ $t("niceToMeetYou") }}
</div>

<img src="/tokyo-article.png" v-click="1" absolute top-0 right--12 w-140 />

---
layout: cover
---

<h1 flex="~ col">
<div mt1 forward:delay-300 text-white:50 ml10 flex="~ col">
  <span font-hand text-1.3em text-purple>{{ $t("theNew") }}</span>
  <span v-click flex="~ gap-2 items-center" text-hex-8080f2>
    <div i-logos-eslint />
    {{ $t("eslintConfig") }}
  </span>
  <span font-serif italic text-blue v-click><span font-hand op75>{{ $t("withText") }}</span> {{ $t("typeSafety") }}</span>
</div>
</h1>

<div abs-br mx-10 my-11 flex="~ col items-end" text-right v-click="2">
  <img src="/tskaigi-white.svg" alt="TSKaigi" w30 mb1 />
  <div text-xs opacity-75>{{ $t("date") }}</div>
</div>

---
layout: quote
---

# 🙋 {{ $t("mainQuestionPart1") }}<span text-hex-8080f2 font-bold><span v-mark="0">{{ $t("flatConfigTerm") }}</span></span>{{ $t("mainQuestionPart2") }}

<div lang="ja" font-jp text-4xl>
<span text-hex-8080f2 font-bold>{{ $t("japaneseFlatConfigTerm") }}</span>{{ $t("japaneseQuestionSuffix") }}
</div>

---
layout: quote
---

# 🙋 {{ $t("using") }} <span text-hex-8080f2 font-bold>Flat Config</span> {{ $t("already") }}

<div lang="ja" font-jp text-4xl>
<span text-hex-8080f2 font-bold>フラットコンフィグ</span> を使っていますか？
</div>

---
layout: center
glow: bottom
---

<div flex="~ col items-center justify-center w-full">

<h2 flex="~ col" text-center>
<div text-center flex="~ col gap-2" transition duration-500 :class="$clicks < 2 ? 'translate-y-40' : ''">
  <span
    flex="~ gap-2 items-center justify-center"
    text-hex-8080f2 transition duration-500 text-1.5em
    :class="$clicks < 1 ? 'scale-150 translate-y' : ''"
  >
    <div i-logos-eslint />
    ESLint v9.0.0
  </span>
  <span v-click op75 forward:delay-400 text-2xl>{{ $t("released") }} <TimeAgo date="2024-04-05" /></span>
</div>
</h2>

<div grid="~ cols-2 gap-4" mt4>
  <div v-click forward:delay-400 flex="~ col items-center gap-2" transition duration-500 :class="$clicks < 3 ? 'translate-x-31' : ''">
    <img src="/eslint-v9.png" w-60 rounded-lg shadow  />
    <div text-sm op50>2024-04-05</div>
  </div>
  <div v-click forward:delay-400 flex="~ col items-center gap-2">
    <img src="/eslint-retrospective.png" w-60 rounded-lg shadow />
    <div text-sm op50>2025-05-22</div>
  </div>
</div>
</div>

---
layout: quote
disabled: true
---

# 🙋 {{ $t("heardAboutNewEslint") }} <span text-hex-8080f2 font-bold><span v-mark="0">Flat Config</span></span>?

---
layout: quote
disabled: true
---

# {{ $t("headingQuestionPart1") }}<span text-hex-8080f2 font-bold>{{ $t("headingQuestionFlatConfig") }}</span>{{ $t("headingQuestionPart2") }}

---
{}
---

<div grid="~ cols-2 gap-6" h-full>
<div>

## {{ $t("legacyConfig") }} <sup text-base op50 translate-y--2 inline-block>eslintrc config</sup>

<div mt-4 h-50>

<v-clicks at="3">

- {{ $t("multipleFormats") }} `.eslintrc`, `.eslintrc.js`, `.eslintrc.json`, `package.json`, {{ $t("etc") }}
- {{ $t("conventionBased") }} `extends`
- {{ $t("packageNameBased") }} `plugins`
- {{ $t("inheritanceTreeComplex") }}
- {{ $t("noTypes") }}

</v-clicks>

</div>
<div v-click="1" transition duration-800 :class="$clicks < 3 ? 'translate-y--200px' : $clicks < 6 ? 'translate-y--50px': ''">

```json {*|3-6|7-10|*}{at:4}
// .eslintrc.json
{
  "extends": [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended"
  ],
  "plugins": [
    "vue",
    "n"
  ],
  "rules": {
    "vue/html-indent": ["error", 2]
  },
  "overrides": [
    // ...
  ]
}
```

</div>
</div>
<div>

## {{ $t("flatConfig") }}

<div mt-4 h-50>

<v-clicks at="3">

- {{ $t("singleSource") }} <code text-sm>eslint.config.js</code> <sup op75>& `.mjs` `.cjs`</sup><br>{{ $t("alsoSupportsTsFile") }}
- {{ $t("explicitNativeImports") }}
- {{ $t("pluginsAreObjects") }} <sup op75>{{ $t("capabilityToRenamePlugins") }}</sup>
- {{ $t("composableEasierToTrace") }}
- {{ $t("typeScriptFriendly") }}

</v-clicks>

</div>
<div v-click="2" transition duration-800 delay-50 :class="$clicks < 3 ? 'translate-y--200px' : $clicks < 6 ? 'translate-y--50px': ''">

```js {*|2-3,8-9|4-5,11-14|*}{at:4}
// eslint.config.js
import typescript from '@eslint-typescript/eslint-plugin'
import eslint from '@eslint/js'
import n from 'eslint-plugin-n'
import vue from 'eslint-plugin-vue'

export default [ // export an array of configs
  eslint.configs.recommended,
  ...typescript.configs.recommended,
  {
    plugins: {
      vue,
      node: n, // do a rename here
    },
    rules: {
      'vue/html-indent': ['error', 2]
    }
  },
  // ...
]
```

</div>
</div>
</div>

---
{}
---

## {{ $t("flatConfigTitle") }}

<Timeline mt2 />

<v-clicks>

- {{ $t("rfcCreationDate") }}
- {{ $t("experimentalIn") }} `v8.21.0`
- {{ $t("stableSince") }} `v8.45.0`
- {{ $t("defaultSince") }} `v9.0.0`
- {{ $t("shipsTypeDeclarationsSince") }} `v9.10.0` (`@types/eslint` {{ $t("noLongerNeeded") }})
- {{ $t("supportsTypeScriptConfigSince") }} `v9.18.0` (`eslint.config.ts`)

</v-clicks>

---
{}
---

# {{ $t("migrationTitle") }} [`@eslint/migrate-config`](https://www.npmjs.com/package/@eslint/migrate-config)

{{ $t("cliToolDescription") }}

```bash
npx @eslint/migrate-config .eslintrc.json
```

<div grid="~ cols-[1fr_max-content_1fr] gap-4" mt-4 v-click>

```json
// .eslintrc.json
{
  "env": {
    "node": true,
    "es6": true
  },
  "parserOptions": {
    "ecmaVersion": 2020,
    "sourceType": "module"
  },
  "extends": [
    "eslint:recommended",
    "plugin:ava/recommended",
    "prettier"
  ],
  "plugins": ["prettier", "import"],
  "rules": {
    "prettier/prettier": 2,
    "ava/no-ignored-test-files": 0,
    "ava/no-import-test-files": 0,
    "import/no-unresolved": [
      2,
      {
        "ignore": ["ava", "got"]
      }
    ],
    "import/no-unused-modules": 2,
    "import/order": [
      2,
      {
        "newlines-between": "never"
      }
    ]
  }
}
```

<span i-carbon:arrow-right mt-40 />

```js
// eslint.config.mjs
import { FlatCompat } from '@eslint/eslintrc'
import _import from 'eslint-plugin-import'
import prettier from 'eslint-plugin-prettier'

const compat = new FlatCompat()
export default [
  ...compat.extends(
    'eslint:recommended',
    'plugin:ava/recommended',
    'prettier'
  ),
  {
    plugins: {
      prettier,
      import: _import,
    },
    languageOptions: {
      ecmaVersion: 2020,
      sourceType: 'module',
    },
    rules: {
      'prettier/prettier': 2,
      'ava/no-ignored-test-files': 0,
      'ava/no-import-test-files': 0,

      'import/no-unresolved': [2, {
        ignore: ['ava', 'got'],
      }],
      'import/no-unused-modules': 2,
      'import/order': [2, {
        'newlines-between': 'never',
      }],
    },
  },
]
```

</div>

---
layout: fact
---

# {{ $t("toolingsTitle") }}{.important-text-3em}
{{ $t("newToolsDescription") }} Flat Config

---
glow: left
---

<div w="40%">

## Config Inspector <sup text-purple bg-purple:15 px1.5 rounded text-sm>{{ $t("official") }}</sup>

<div mt-4 />
<v-click>

```bash
eslint --inspect-config
```

</v-click>
<div mt-4 />

<v-clicks>

- {{ $t("visualizeConfig") }}
- {{ $t("understandComposition") }}
- {{ $t("inPlaceDocumentations") }}
- {{ $t("filePathTester") }}

</v-clicks>
<div mt-4 />
<v-click>

<<< ./eslint.demo.config.ts {monaco-write}{height:'220px'}

</v-click>
</div>

<InspectorIframe v-click="1" />

<div v-show="false">
<!-- This block is for type discovery -->

```ts {monaco}
import antfu from '@antfu/eslint-config'
```

</div>

---
{}
---

<div grid="~ cols-2 gap-8">

<div flex="~ col gap-2">

### {{ $t("legacyConfigTitle") }}

```json {*|3-7|*|10-14|*}{at:1}
{
  "extends": [
    "@antfu/eslint-config",
    "@antfu/eslint-config-ts",
    "@antfu/eslint-config-vue",
    "@antfu/eslint-config-vue-ts"
    // ...provide every combination?
  ],
  "rules": {
    // ...a lot overrides
    "indent": ["error", 4],
    "@typescript-eslint/indent": ["error", 4],
    "jsx-indent": ["error", 4],
    "vue/indent": ["error", 4]
  }
}
```

</div>
<div flex="~ col gap-2">

### {{ $t("flatConfigTitle") }}

```ts {*|4-5|*|*|6-8|*}{at:1}
import antfu from '@antfu/eslint-config'

export default antfu({
  vue: true,
  typescript: true,
  stylistic: {
    indent: 4
  }
  // ...
})
```

<div flex="~ col gap-2" mt-3>

<div v-click class="slidev-vclick-target" :class="$clicks === 1 ? 'text-green' : ''">
  <div i-ph-check-circle-duotone text-green inline-block translate-y-2px />
  {{ $t("sharedConfigsAcceptOptions") }}
</div>

<div v-click class="slidev-vclick-target" :class="$clicks === 2 ? 'text-green' : ''">
  <div i-ph-check-circle-duotone text-green inline-block translate-y-2px />
  {{ $t("oneConfigAdaptsAllProjects") }}
</div>

<div v-click class="slidev-vclick-target" :class="$clicks === 3 ? 'text-green' : ''">
  <div i-ph-check-circle-duotone text-green inline-block translate-y-2px />
  {{ $t("typeSafeInlineJsdocs") }}
</div>

<div v-click class="slidev-vclick-target" :class="$clicks === 4 ? 'text-green' : ''" >
  <div i-ph-check-circle-duotone text-green inline-block translate-y-2px />
  <span v-mark.green.delay400="6">
    {{ $t("simpleConfigLikePrettier") }}
  </span>
</div>

<div v-click class="slidev-vclick-target">
  <div i-ph-check-circle-duotone text-green inline-block translate-y-2px />
  <span v-mark.green.delay400="6">
    {{ $t("powerfulFlexibleLikeEslint") }}
  </span>
</div>

</div>
</div>

</div>

