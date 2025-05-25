---
theme: seriph
title: i18n addon for Slidev
background: https://cover.sli.dev
mdc: true
transition: fade
addons:
  - slidev-addon-i18nb
---

# {{ $t("title") }}

<div
  v-click
  v-motion
    :initial="{ opacity: 1, x: -80 }"
    :enter="{ x: 0 }"
    :click-5="{ opacity: 0, transition: { duration: 500 } }"
>

{{ $t("intro.desc") }} {.mt-8!}

</div>

<div
  v-click
  v-motion
    :initial="{ opacity: 1, y: -80 }"
    :enter="{ y: 0 }"
    :click-5="{ opacity: 0, transition: { delay: 300, duration: 500 } }"
>

*{{ $t("intro.desc") }}*

</div>

<div
  v-click
  v-motion
    :initial="{ opacity: 1, x: 100 }"
    :enter="{ x: 0 }"
    :click-5="{ opacity: 0, transition: { delay: 600, duration: 500 } }"
>

**{{ $t("intro.desc") }}**

</div>

<div
  v-click
  v-motion
    :initial="{ opacity: 1, y: 100 }"
    :enter="{ y: 0 }"
    :click-5="{ opacity: 0, transition: { delay: 900, duration: 500 } }"
>

> {{ $t("intro.desc") }}

</div>

<div
  v-click
  v-motion
    :initial="{ opacity: 1 }"
    :click-5="{ opacity: 0, transition: { delay: 1200, duration: 500 } }"
>

~~{{ $t("intro.desc") }}~~

</div>

<div @click="$slidev.nav.next" class="abs-b mb-1 w-1/2 cursor-pointer rounded-lg mx-auto flex flex-row justify-center items-center gap-1" bg="white op-10" hover:bg="op-20"
  v-motion
    :initial="{ opacity: 1 }"
    :click-5="{ opacity: 0, transition: { delay: 1200, duration: 500 } }"
>

  <div>

  **{{ $t("intro.next") }}**

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

<div v-if="$clicks === 5" class="absolute left-1/2 top-1/2"
  v-motion
    :initial="{ opacity: 0, scale: 1, y: -200 }"
    :click-5="{ opacity: 1, scale: 8, y: 0, transition: { delay: 1500, duration: 1000 } }"
>
  <a href="https://github.com/LarchLiu/slidev-addon-i18n" target="_blank" class="slidev-icon-btn">
    <carbon:logo-github />
  </a>
</div>
<!--
This is note
-->
