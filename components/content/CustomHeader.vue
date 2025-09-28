<template>
  <div class="flex justify-center items-start mb-6">
    <nuxt-img v-if="src" :src="src" class="max-h-32"/>
    <h1 class="text-center text-6xl p-10">
      <ContentSlot :use="$slots.default" unwrap="p"/>
    </h1>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  src?: string
}>()
</script>

<style lang="scss" scoped>
h1 {
  font-family: "Dancing Script", cursive;
  color: #ea580c
}
</style>