export default defineNuxtConfig({
  pages: true,

  app: {
    rootId: 'asetio',
    head: {
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico?v=2' },
        { rel: 'icon', type: 'image/png', href: '/favicon.png?v=2' },
        { rel: 'shortcut icon', type: 'image/x-icon', href: '/favicon.ico?v=2' },
        { rel: 'apple-touch-icon', href: '/apple-touch-icon.png?v=2' },
      ],
    },
  },

  future: {
    compatibilityVersion: 4
  },

  modules: [
    '@nuxt/ui',
    '@nuxt/icon',
  ],

  css: ['~/assets/css/custom.css'],

  colorMode: {
    preference: 'light',
    fallback: 'light',
    storageKey: 'asetio-color-mode',
  },
})
