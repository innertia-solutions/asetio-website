<template>
  <nav class="hidden items-center justify-center gap-1 lg:flex">
    <UButton
      v-for="item in items"
      :key="item.label"
      :to="item.to"
      :external="item.external"
      color="neutral"
      variant="ghost"
      size="sm"
    >
      {{ item.label }}
    </UButton>
  </nav>
</template>

<script setup lang="ts">
const route = useRoute()
const localePrefix = computed(() => route.path.startsWith('/en') ? '/en' : '/es')

const items = computed(() => [
  { label: 'Producto', to: `${localePrefix.value}#producto` },
  { label: 'Monitoreo', to: `${localePrefix.value}#monitoreo` },
  { label: 'Mantenimiento', to: `${localePrefix.value}#mantenimiento` },
  { label: 'Docs', to: `${localePrefix.value}/docs/intro`, external: true }
])
</script>
