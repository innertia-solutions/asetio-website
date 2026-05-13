import { fileURLToPath } from 'node:url'

const docsIndexPage = fileURLToPath(new URL('./app/pages/docs/index.vue', import.meta.url))
const docsSlugPage = fileURLToPath(new URL('./app/pages/docs/[...slug].vue', import.meta.url))

export default defineNuxtConfig({
  extends: '@nuxt-themes/docus',

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
    '@nuxt/icon'
  ],

  css: ['~/assets/css/custom.css'],

  colorMode: {
    preference: 'light',
    fallback: 'light',
    storageKey: 'asetio-color-mode',
  },

  hooks: {
    'pages:extend'(pages) {
      pages.push({
        name: 'asetio-docs',
        path: '/docs',
        file: docsIndexPage,
      })

      pages.push({
        name: 'asetio-docs-slug',
        path: '/docs/:slug(.*)*',
        file: docsSlugPage,
      })
    },
  },
})
