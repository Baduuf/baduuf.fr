<script lang="ts" setup>
const route = useRoute()
const { data: page } = await useAsyncData(route.path, () => {
  return queryCollection('content').path(route.path).first()
})
</script>

<template>
  <div class="container mx-auto px-4 lg:px-10 max-w-screen-md lg:max-w-screen-lg">
    <ContentRenderer v-if="page" :value="page" />
  </div>
</template>
