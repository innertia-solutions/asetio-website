<template>
  <section id="producto" class="bg-white">
    <div class="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">

      <div class="mb-10 max-w-2xl">
        <p class="mb-1.5 text-sm font-semibold text-sky-700">{{ title }}</p>
        <h2 class="text-2xl font-semibold text-slate-950 md:text-3xl">{{ subtitle }}</h2>
      </div>

      <div class="grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-slate-200">
        <div v-for="group in groups" :key="group.pillar" class="py-6 md:py-0 md:px-8 first:md:pl-0 last:md:pr-0">

          <!-- Pillar header -->
          <div class="flex items-center gap-2 mb-5">
            <UIcon :name="group.icon" class="size-4 shrink-0" :class="group.color" />
            <span class="text-sm font-semibold text-slate-900">{{ group.pillar }}</span>
          </div>

          <!-- Feature list -->
          <ul class="flex flex-col gap-2.5">
            <li v-for="feat in group.features" :key="feat" class="flex items-center gap-2.5">
              <UIcon name="i-lucide-check" class="size-3.5 shrink-0 text-slate-400" />
              <span class="text-sm text-slate-600">{{ feat }}</span>
            </li>
          </ul>

        </div>
      </div>

    </div>
  </section>
</template>

<script setup lang="ts">
defineProps<{
  title: string
  subtitle: string
  groups: Array<{
    pillar: string
    icon: string
    color: string
    features: string[]
  }>
}>()
</script>
