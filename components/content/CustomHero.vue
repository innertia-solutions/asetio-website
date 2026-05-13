<template>
  <section class="relative overflow-hidden bg-white text-slate-950">
    <div class="absolute inset-x-0 top-0 h-px bg-slate-200" />
    <div class="absolute inset-0 bg-[linear-gradient(180deg,#ffffff_0%,#f8fafc_64%,#ffffff_100%)]" />
    <div class="absolute inset-y-0 right-0 hidden w-1/2 bg-[radial-gradient(circle_at_48%_22%,rgba(14,165,233,0.15),transparent_38%),radial-gradient(circle_at_78%_64%,rgba(6,182,212,0.12),transparent_34%)] lg:block" />

    <div class="relative mx-auto grid max-w-7xl items-start gap-10 px-4 pb-14 pt-10 sm:px-6 lg:grid-cols-12 lg:px-8 lg:pb-20 lg:pt-12">
      <div class="lg:col-span-5 lg:pt-0">
        <h1 class="max-w-4xl text-4xl font-semibold leading-tight tracking-normal sm:text-5xl lg:text-6xl">
          {{ title }}
        </h1>

        <p class="mt-5 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
          {{ description }}
        </p>

        <div class="mt-8 flex flex-col gap-3 sm:flex-row">
          <UButton
            :to="primaryButton.to"
            size="lg"
            trailing-icon="i-lucide-arrow-right"
            class="!bg-sky-500 !text-white hover:!bg-sky-600 focus-visible:!ring-2 focus-visible:!ring-sky-300"
          >
            {{ primaryButton.text }}
          </UButton>
          <UButton :to="secondaryButton.to" external color="neutral" variant="outline" size="lg" icon="i-lucide-book-open">
            {{ secondaryButton.text }}
          </UButton>
        </div>

        <dl class="mt-10 grid gap-4 border-y border-slate-200 py-6 sm:grid-cols-3">
          <div v-for="metric in metrics" :key="metric.label">
            <dt class="text-sm text-slate-500">{{ metric.label }}</dt>
            <dd class="mt-1 text-lg font-semibold text-slate-950">{{ metric.value }}</dd>
          </div>
        </dl>
      </div>

      <div class="lg:col-span-7 lg:pt-0">
        <figure class="overflow-hidden rounded-lg border border-slate-200 bg-white shadow-2xl shadow-sky-100/80">
          <div class="flex items-center justify-between border-b border-slate-200 bg-slate-50 px-4 py-3">
            <div class="flex items-center gap-2">
              <span class="size-2.5 rounded-full bg-rose-400" />
              <span class="size-2.5 rounded-full bg-amber-400" />
              <span class="size-2.5 rounded-full bg-sky-400" />
            </div>
            <div class="hidden items-center gap-2 rounded-md border border-slate-200 bg-white px-2.5 py-1 text-xs text-slate-500 sm:flex">
              <UIcon name="i-lucide-shield-check" class="size-3.5 text-sky-600" />
              ops.asetio.com/activos
            </div>
            <div class="rounded-full bg-sky-50 px-2.5 py-1 text-xs font-medium text-sky-700 ring-1 ring-sky-200">
              Monitoreo activo
            </div>
          </div>

          <img
            :src="dashboardImage"
            alt="Vista previa del dashboard operacional de Asetio"
            class="block w-full bg-slate-50 object-contain object-top"
            loading="eager"
            decoding="async"
          >
        </figure>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps({
  title: { type: String, required: true },
  description: { type: String, required: true },
  primaryButton: { type: Object, required: true },
  secondaryButton: { type: Object, required: true },
  dashboardImage: { type: String, default: '/asetio-dashboard-hero.png' }
})

const metrics = [
  { label: 'Visibilidad', value: 'Estado y ubicacion' },
  { label: 'Control', value: 'Alertas y responsables' },
  { label: 'Continuidad', value: 'Mantenimiento conectado' }
]
</script>
