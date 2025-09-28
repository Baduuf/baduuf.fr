<template>
  <NuxtLink
    class="underline"
    :href="props.href"
    :target="props.target"
  >
    <slot />
  </NuxtLink>
</template>

<script setup lang="ts">
import type { PropType } from 'vue'

const props = defineProps({
  href: {
    type: String,
    default: ''
  },
  target: {
    type: String as PropType<'_blank' | '_parent' | '_self' | '_top' | (string & object) | null | undefined>,
    default: undefined,
    required: false
  }
})
</script>

<style lang="scss">
.underline {
  text-decoration: underline !important; // TODO: Clean
}
</style>