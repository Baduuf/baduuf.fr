<template>
  <div 
    class="relative w-full max-w-1/2 h-96 md:h-[500px] overflow-hidden p-6 mx-auto bg-gray-200 rounded-lg my-6" 
    :style="{ 
      backgroundImage: `url(${src})`, 
      backgroundSize: 'cover', 
      backgroundPosition: 'center', 
      backgroundRepeat: 'no-repeat' 
    }"
  >
    <div class="absolute inset-0 flex items-center justify-center p-10">
      <div class="bg-black bg-opacity-50 p-6 rounded-lg text-center max-w-3xl mx-auto">
        <p class="text-lg leading-relaxed text-white">
          <slot mdc-unwrap="p" />
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  src: string
}>()
</script>
