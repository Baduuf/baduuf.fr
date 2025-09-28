<template>
  <div class="w-full flex justify-center my-6">
    <a :href="href" rel="nofollow" :alt="alt">
      <nuxt-img :src="src" :alt="alt" class="mx-auto w-32 h-auto" />
    </a>
  </div>
</template>

<script lang="ts" setup>
defineProps<{
  src: string
  href: string
  alt: string
}>()
</script>

<style>

</style>
