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
const items = [
  { label: 'Producto', to: '/#producto' },
  { label: 'Monitoreo', to: '/#monitoreo' },
  { label: 'Mantenimiento', to: '/#mantenimiento' },
  { label: 'Docs', to: '/docs/intro', external: true }
]
</script>
