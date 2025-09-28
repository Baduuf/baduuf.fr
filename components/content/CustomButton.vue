<template>
  <div class="w-full text-center my-6">
    <a :href="href" rel="nofollow" class="focus:outline-none text-white bg-orange-600 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-lg px-5 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900">
      <slot mdc-unwrap="p" />
    </a>
  </div>
</template>

<script lang="ts" setup>
defineProps<{
  href: string
}>()
</script>