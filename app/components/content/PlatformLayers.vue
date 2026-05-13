<template>
  <section id="plataforma" class="bg-slate-50">
    <div class="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div class="mb-10 max-w-3xl">
        <p class="text-sm font-semibold text-sky-700">{{ eyebrow }}</p>
        <h2 class="mt-2 text-3xl font-semibold leading-tight text-slate-950 md:text-4xl">
          {{ title }}
        </h2>
        <p class="mt-4 text-base leading-7 text-slate-600">{{ description }}</p>
      </div>

      <div class="grid gap-4 lg:grid-cols-3">
        <div
          v-for="(layer, index) in layers"
          :key="layer.title"
          class="rounded-lg border border-slate-200 bg-white p-5 shadow-sm"
        >
          <div class="flex items-center gap-3">
            <span class="grid size-9 place-items-center rounded-md bg-sky-600 text-sm font-semibold text-white">
              {{ index + 1 }}
            </span>
            <div class="grid size-10 place-items-center rounded-md bg-sky-50 text-sky-700">
              <UIcon :name="layer.icon" class="size-5" />
            </div>
          </div>
          <h3 class="mt-6 text-lg font-semibold text-slate-950">{{ layer.title }}</h3>
          <p class="mt-3 text-sm leading-6 text-slate-600">{{ layer.description }}</p>
          <ul class="mt-5 space-y-2">
            <li v-for="point in layer.points" :key="point" class="flex gap-2 text-sm text-slate-700">
              <UIcon name="i-lucide-check" class="mt-0.5 size-4 shrink-0 text-sky-700" />
              <span>{{ point }}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps<{
  eyebrow: string
  title: string
  description: string
  layers: Array<{
    icon: string
    title: string
    description: string
    points: string[]
  }>
}>()
</script>
