<template>
  <article class="flex flex-col md:flex-row items-start md:space-x-6 space-y-4 md:space-y-0 mb-6">
    <nuxt-img 
      v-if="src && imagePosition == 'left'" 
      :src="src"
      :alt="alt"
      class="w-48 h-auto rounded-lg mx-auto md:mx-0"
      :class="{
        grayscale
      }"
      :width="w"
      :height="h"
    />
    <div class="text-base leading-relaxed text-center md:text-left">
      <slot />
    </div>
    <nuxt-img 
      v-if="src && imagePosition == 'right'" 
      :src="src"
      :alt="alt"
      class="w-48 h-auto rounded-lg mx-auto md:mx-0"
      :class="{
        grayscale
      }"
      :width="w"
      :height="h"
    />
  </article>
</template>

<script lang="ts" setup>
const {
  imagePosition = 'left',
  grayscale = false
} = defineProps<{
  src?: string
  alt?: string
  imagePosition?: string
  grayscale?: boolean
  w?: number
  h?: number
}>()
</script>

<style>
</style>
