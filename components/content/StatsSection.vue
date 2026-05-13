<template>
  <section class="bg-white">
    <div class="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 gap-3 sm:grid-cols-3">
      <div
        v-for="(stat, index) in stats"
        :key="index"
        class="rounded-lg border border-slate-200 bg-slate-50 p-5 shadow-sm"
      >
        <h4 class="text-xl font-semibold text-slate-950">
          {{ stat.value }}
        </h4>
        <p class="mt-2 text-sm leading-6 text-slate-600">
          {{ stat.label }}
        </p>
      </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps({
  stats: {
    type: Array,
    required: true
  }
})
</script>
