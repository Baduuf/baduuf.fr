<template>
  <div class="-mx-4 my-1">
    <div class="w-full">
      <stripe-pricing-table :pricing-table-id="id"
        publishable-key="pk_live_51Q4Nr8KnUwkVHh01oE64hXwVkHCTgTsqvZV2m4lSTt6bbmw9cJVMe9TIs8JNDgtmEDlxi1b3ok1Rh2q9vpTsHKLm002tBTUPMH">
      </stripe-pricing-table>
    </div>
  </div>
</template>

<script lang="ts" setup>
defineProps<{
  id: string
}>()
</script>

<style>

</style>