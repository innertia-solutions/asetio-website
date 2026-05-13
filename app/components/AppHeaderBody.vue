<template>
  <div class="space-y-3 p-4">
    <UButton
      v-for="item in items"
      :key="item.label"
      :to="item.to"
      :external="item.external"
      color="neutral"
      variant="ghost"
      block
    >
      {{ item.label }}
    </UButton>
    <USeparator />
    <UButton
      to="mailto:hola@asetio.com"
      block
      trailing-icon="i-lucide-arrow-right"
      class="!bg-sky-500 !text-white hover:!bg-sky-600 focus-visible:!outline-sky-500"
    >
      Solicitar demo
    </UButton>
  </div>
</template>

<script setup lang="ts">
const items = [
  { label: 'Producto', to: '/#producto' },
  { label: 'Monitoreo', to: '/#monitoreo' },
  { label: 'Mantenimiento', to: '/#mantenimiento' },
  { label: 'Documentacion', to: '/docs/intro', external: true }
]
</script>
