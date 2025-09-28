<template>
  <p class="py-1 text-center md:text-left">
    <ContentSlot :use="$slots.default" unwrap="p" />
  </p>
</template>
