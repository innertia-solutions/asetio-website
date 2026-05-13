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
const route = useRoute()
const localePrefix = computed(() => route.path.startsWith('/en') ? '/en' : '/es')

const items = computed(() => [
  { label: 'Producto', to: `${localePrefix.value}#producto` },
  { label: 'Monitoreo', to: `${localePrefix.value}#monitoreo` },
  { label: 'Mantenimiento', to: `${localePrefix.value}#mantenimiento` },
  { label: 'Documentacion', to: `${localePrefix.value}/docs/intro`, external: true }
])
</script>
