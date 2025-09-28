<template>
  <footer class="py-8">
    <div class="container mx-auto flex justify-center space-x-6">
      <a v-if="youtube" :href="youtube" target="_blank" rel="noopener noreferrer" class="flex items-center space-x-2">
        <nuxt-img src="/networks/youtube.png" alt="YouTube" class="w-8 h-8"/>
      </a>
      <a v-if="instagram" :href="instagram" target="_blank" rel="noopener noreferrer" class="flex items-center space-x-2">
        <nuxt-img src="/networks/instagram.png" alt="Instagram" class="w-8 h-8"/>
      </a>
      <a v-if="tiktok" :href="tiktok" target="_blank" rel="noopener noreferrer" class="flex items-center space-x-2">
        <nuxt-img src="/networks/tiktok.png" alt="TikTok" class="w-8 h-8"/>
      </a>
    </div>
    <p class="text-center mt-5">
      <slot mdc-unwrap="p" />
    </p>
  </footer>
</template>

<script setup lang="ts">
defineProps<{
  youtube?: string,
  instagram?: string,
  tiktok?: string
}>()
</script>

<style>
/* Ajoute des styles personnalisés ici si nécessaire */
</style>
