// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "@nuxt/content", "@nuxt/image", "@nuxt/fonts", "nuxt-gtag"],
  typescript: {
    typeCheck: true
  },
  app: {
    head: {
      title: 'Baduuf',
      meta: [
        {
          name: 'description',
          content: 'Coach de tennis'
        }
      ],
      link: [
        {
          rel: 'canonical',
          href: 'https://baduuf.fr'
        },
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ],
      htmlAttrs: {
        lang: 'fr'
      },
      script: [
        {
          src: 'https://js.stripe.com/v3/pricing-table.js',
          async: true
        }
      ]
    }
  },
  vue: {
    compilerOptions: {
      isCustomElement: (tag) => ['stripe-pricing-table'].includes(tag)
    }
  },
  fonts: {
    defaults: {
      weights: [100, 200, 300, 400, 500, 600, 700, 800, 900],
    },
  },
  gtag: {
    id: 'G-ZZ45111LQR'
  }
})