<script setup lang="ts">
const menuOpen = ref(false)
</script>

<template>
  <header class="sticky top-0 z-50 border-b border-slate-200 bg-white/80">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="flex h-16 items-center gap-4">
        <NuxtLink to="/" class="shrink-0">
          <AppHeaderLogo class="h-6 w-auto" />
        </NuxtLink>

        <div class="flex-1">
          <AppHeaderCenter />
        </div>

        <AppHeaderCTA />

        <button
          class="p-2 text-slate-600 hover:text-slate-900 lg:hidden"
          aria-label="Toggle menu"
          @click="menuOpen = !menuOpen"
        >
          <svg v-if="!menuOpen" xmlns="http://www.w3.org/2000/svg" class="size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
          <svg v-else xmlns="http://www.w3.org/2000/svg" class="size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>

    <div v-if="menuOpen" class="border-t border-slate-200 bg-white lg:hidden">
      <AppHeaderBody />
    </div>
  </header>
</template>
