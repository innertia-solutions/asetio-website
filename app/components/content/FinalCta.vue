<template>
  <section class="final-cta-section">
    <div class="glow glow-1" aria-hidden="true" />
    <div class="glow glow-2" aria-hidden="true" />

    <div class="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:py-28 lg:px-8">
      <div class="grid gap-10 lg:grid-cols-12 lg:items-center">
        <div class="lg:col-span-8">
          <p class="text-sm font-semibold tracking-wide text-sky-400">{{ eyebrow }}</p>
          <h2 class="mt-3 text-3xl font-semibold leading-tight text-white md:text-4xl lg:text-5xl">
            {{ title }}
          </h2>
          <p class="mt-4 max-w-xl text-base leading-7 text-slate-400">
            {{ description }}
          </p>
        </div>

        <div class="flex flex-col gap-3 sm:flex-row lg:col-span-4 lg:flex-col xl:flex-row xl:items-center xl:justify-end">
          <UButton
            :to="primaryButton.to"
            size="lg"
            trailing-icon="i-lucide-arrow-right"
            class="!bg-sky-500 !text-white hover:!bg-sky-400 !shadow-lg !shadow-sky-500/30"
          >
            {{ primaryButton.text }}
          </UButton>
          <UButton
            v-if="secondaryButton"
            :to="secondaryButton.to"
            external
            color="neutral"
            variant="outline"
            size="lg"
            icon="i-lucide-book-open"
            class="!border-slate-600 !text-slate-300 hover:!bg-slate-800 hover:!text-white"
          >
            {{ secondaryButton.text }}
          </UButton>
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
  secondaryButton?: { text: string; to: string }
}>()
</script>

<style scoped>
.final-cta-section {
  position: relative;
  overflow: hidden;
  background: linear-gradient(135deg, #0a1628 0%, #0e1e3d 55%, #071018 100%);
  border-top: 1px solid rgb(255 255 255 / 0.06);
}

.glow {
  position: absolute;
  border-radius: 50%;
  pointer-events: none;
  filter: blur(90px);
}

.glow-1 {
  top: -80px;
  left: 8%;
  width: 420px;
  height: 320px;
  background: radial-gradient(circle, rgb(14 165 233 / 0.20), transparent 70%);
}

.glow-2 {
  bottom: -100px;
  right: 4%;
  width: 500px;
  height: 380px;
  background: radial-gradient(circle, rgb(6 182 212 / 0.10), transparent 70%);
}
</style>
