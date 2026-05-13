<template>
  <div class="hidden items-center gap-2 lg:flex">
    <UButton :to="docsPath" external color="neutral" variant="ghost" size="sm" icon="i-lucide-book-open">
      Docs
    </UButton>
    <UButton
      to="mailto:hola@asetio.com"
      size="sm"
      trailing-icon="i-lucide-arrow-right"
      class="!bg-sky-500 !text-white hover:!bg-sky-600 focus-visible:!outline-sky-500"
    >
      Solicitar demo
    </UButton>
  </div>
</template>

<script setup lang="ts">
const docsPath = '/docs/intro'
</script>
