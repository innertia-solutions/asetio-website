<template>
  <section class="bg-white">
    <div class="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div class="overflow-hidden rounded-lg border border-sky-200 bg-sky-50 p-8 shadow-xl shadow-slate-200 md:p-10">
        <div class="grid gap-8 lg:grid-cols-12 lg:items-center">
          <div class="lg:col-span-8">
            <p class="text-sm font-semibold text-sky-700">{{ eyebrow }}</p>
            <h2 class="mt-3 text-3xl font-semibold leading-tight text-slate-950 md:text-4xl">{{ title }}</h2>
            <p class="mt-4 max-w-2xl text-base leading-7 text-slate-700">{{ description }}</p>
          </div>
          <div class="flex flex-col gap-3 sm:flex-row lg:col-span-4 lg:justify-end">
            <UButton :to="primaryButton.to" size="lg" trailing-icon="i-lucide-arrow-right" class="!bg-sky-500 !text-white hover:!bg-sky-600 focus-visible:!ring-2 focus-visible:!ring-sky-300">
              {{ primaryButton.text }}
            </UButton>
            <UButton :to="secondaryButton.to" external color="neutral" variant="outline" size="lg" icon="i-lucide-book-open">
              {{ secondaryButton.text }}
            </UButton>
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
  primaryButton: { text: string; to: string }
  secondaryButton: { text: string; to: string }
}>()
</script>
