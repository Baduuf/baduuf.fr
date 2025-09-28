<template>
  <h2 :id="props.id" class="text-4xl py-10" :style="{
    backgroundImage: `url('/h2-line.svg')`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: '100px',
    backgroundPosition: '0% 80%'
  }">
    <a
      v-if="props.id && generate"
      :href="`#${props.id}`"
    >
      <slot />
    </a>
    <slot v-else />
  </h2>
</template>

<script setup lang="ts">
import { computed, useRuntimeConfig } from '#imports'

const props = defineProps<{ id?: string }>()

const { headings } = useRuntimeConfig().public.mdc
const generate = computed(() => props.id && ((typeof headings?.anchorLinks === 'boolean' && headings?.anchorLinks === true) || (typeof headings?.anchorLinks === 'object' && headings?.anchorLinks?.h2)))
</script>

<style scoped lang="scss">
</style>