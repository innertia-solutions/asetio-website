<template>
  <section class="bg-white">
    <div class="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div class="grid gap-10 lg:grid-cols-12 lg:items-start">
        <div class="lg:col-span-5">
          <p class="text-sm font-semibold text-rose-700">{{ eyebrow }}</p>
          <h2 class="mt-2 text-3xl font-semibold leading-tight text-slate-950 md:text-4xl">
            {{ title }}
          </h2>
          <p class="mt-5 text-base leading-7 text-slate-600">
            {{ description }}
          </p>
        </div>

        <div class="grid gap-3 lg:col-span-7">
          <div
            v-for="item in problems"
            :key="item.title"
            class="grid gap-4 rounded-lg border border-slate-200 bg-slate-50 p-5 shadow-sm sm:grid-cols-[auto_1fr]"
          >
            <div class="grid size-10 place-items-center rounded-md bg-white text-rose-700 ring-1 ring-slate-200">
              <UIcon :name="item.icon" class="size-5" />
            </div>
            <div>
              <h3 class="font-semibold text-slate-950">{{ item.title }}</h3>
              <p class="mt-2 text-sm leading-6 text-slate-600">{{ item.description }}</p>
            </div>
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
  problems: Array<{
    icon: string
    title: string
    description: string
  }>
}>()
</script>
