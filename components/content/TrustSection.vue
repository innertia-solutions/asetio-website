<template>
  <section class="bg-slate-50">
    <div class="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div class="grid gap-8 lg:grid-cols-12 lg:items-start">
        <div class="lg:col-span-4">
          <p class="text-sm font-semibold text-sky-700">{{ eyebrow }}</p>
          <h2 class="mt-2 text-3xl font-semibold leading-tight text-slate-950 md:text-4xl">{{ title }}</h2>
          <p class="mt-4 text-base leading-7 text-slate-600">{{ description }}</p>
        </div>

        <div class="grid gap-4 lg:col-span-8 md:grid-cols-2">
          <div
            v-for="item in items"
            :key="item.title"
            class="rounded-lg border border-slate-200 bg-white p-5 shadow-sm"
          >
            <div class="grid size-10 place-items-center rounded-md bg-slate-50 text-slate-700 ring-1 ring-slate-200">
              <UIcon :name="item.icon" class="size-5" />
            </div>
            <h3 class="mt-5 font-semibold text-slate-950">{{ item.title }}</h3>
            <p class="mt-2 text-sm leading-6 text-slate-600">{{ item.description }}</p>
          </div>
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
  items: Array<{
    icon: string
    title: string
    description: string
  }>
}>()
</script>
