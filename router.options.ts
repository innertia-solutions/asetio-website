import type { RouterConfig } from '@nuxt/schema'

export default <RouterConfig>{
  routes: routes => [
    {
      name: 'asetio-docs-es-index',
      path: '/es/docs',
      component: () => import('./app/pages/docs/index.vue'),
    },
    {
      name: 'asetio-docs-en-index',
      path: '/en/docs',
      component: () => import('./app/pages/docs/index.vue'),
    },
    {
      name: 'asetio-docs-es-slug',
      path: '/es/docs/:slug(.*)*',
      component: () => import('./app/pages/docs/[...slug].vue'),
    },
    {
      name: 'asetio-docs-en-slug',
      path: '/en/docs/:slug(.*)*',
      component: () => import('./app/pages/docs/[...slug].vue'),
    },
    ...routes,
  ],
}
