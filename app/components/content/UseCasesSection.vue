<template>
  <section id="casos" class="bg-slate-50">
    <div class="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div class="mb-10 flex flex-col justify-between gap-5 lg:flex-row lg:items-end">
        <div class="max-w-3xl">
          <p class="text-sm font-semibold text-sky-700">{{ eyebrow }}</p>
          <h2 class="mt-2 text-3xl font-semibold leading-tight text-slate-950 md:text-4xl">
            {{ title }}
          </h2>
        </div>
        <p v-if="description" class="max-w-md text-sm leading-6 text-slate-600">{{ description }}</p>
      </div>

      <div class="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <div
          v-for="useCase in useCases"
          :key="useCase.title"
          class="rounded-lg border border-slate-200 bg-slate-50 p-5 shadow-sm"
        >
          <div class="grid size-10 place-items-center rounded-md bg-white text-slate-700 ring-1 ring-slate-200">
            <UIcon :name="useCase.icon" class="size-5" />
          </div>
          <h3 class="mt-5 font-semibold text-slate-950">{{ useCase.title }}</h3>
          <p class="mt-2 text-sm leading-6 text-slate-600">{{ useCase.description }}</p>
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
  useCases: Array<{
    icon: string
    title: string
    description: string
  }>
}>()
</script>
