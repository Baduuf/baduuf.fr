<template>
  <p class="py-1 text-center md:text-left">
    <slot :use="$slots.default" unwrap="p" />
  </p>
</template>
