<template>
  <section id="producto" class="bg-white">
    <div class="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
    <div class="mb-10 max-w-3xl">
      <p class="mb-2 text-sm font-semibold text-sky-700">
        {{ title }}
      </p>
      <h2 class="font-semibold text-2xl md:text-4xl text-slate-950">
        {{ subtitle }}
      </h2>
    </div>
    <!-- End Heading -->

    <!-- Grid -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <!-- Icon Block -->
      <div v-for="(feature, index) in features" :key="index" class="rounded-lg border border-slate-200 bg-slate-50 p-5 shadow-sm">
        <div class="mb-5 inline-flex size-10 items-center justify-center rounded-md bg-white text-slate-700 shadow-sm ring-1 ring-slate-200">
          <UIcon :name="feature.icon" class="shrink-0 size-5" />
        </div>
        <h4 class="font-semibold text-slate-950">
          {{ feature.title }}
        </h4>
        <div class="mt-2">
          <p class="text-sm leading-6 text-slate-600">
            {{ feature.description }}
          </p>
        </div>
      </div>
      <!-- End Icon Block -->
    </div>
    <!-- End Grid -->
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps({
  title: {
    type: String,
    required: true
  },
  subtitle: {
    type: String,
    required: true
  },
  features: {
    type: Array,
    required: true
  }
})
</script>
