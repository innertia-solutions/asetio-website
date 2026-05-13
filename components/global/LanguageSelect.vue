<script setup lang="ts">
const { locale, locales } = useI18n()
const switchLocalePath = useSwitchLocalePath()

const availableLocales = computed(() => {
    return locales.value as Array<{ code: string; name: string }>
})

const currentLocale = computed(() => {
    return availableLocales.value.find((i) => i.code === locale.value)
})
</script>

<template>
    <div class="relative group">
        <button
            class="flex items-center gap-x-2 rounded-md px-3 py-2 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-100 hover:text-gray-900">
            <span>{{ currentLocale?.code.toUpperCase() }}</span>
            <svg class="w-4 h-4 transition-transform group-hover:rotate-180" fill="none" stroke="currentColor"
                viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
            </svg>
        </button>

        <div
            class="absolute right-0 z-10 mt-2 rounded-md border border-gray-200 bg-white shadow-lg opacity-0 invisible transition-all duration-200 group-hover:opacity-100 group-hover:visible">
            <div class="py-1">
                <NuxtLink v-for="loc in availableLocales" :key="loc.code" :to="switchLocalePath(loc.code)"
                    :class="[
                        'block px-4 py-2 text-sm transition-colors',
                        locale === loc.code
                            ? 'bg-sky-50 text-sky-600 font-medium'
                            : 'text-gray-700 hover:bg-gray-100'
                    ]">
                    {{ loc.name }}
                </NuxtLink>
            </div>
        </div>
    </div>
</template>
