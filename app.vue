<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script>
import '~/assets/styles/main.scss'

// Cloudflare Web Analytics
useHead({
  script: [
    {
      defer: true,
      src: 'https://static.cloudflareinsights.com/beacon.min.js',
      'data-cf-beacon': '{"token": "65806219a33145ce8f476086e69d9799"}'
    }
  ]
})
</script>