<template>
    <div class="relative border-l-2 border-gray-200 pb-8 pl-8 last:border-l-0 last:pb-0">
        <!-- Timeline Dot -->
        <div
            class="absolute -left-[9px] top-0 size-4 rounded-full border-4 border-white bg-blue-600">
        </div>

        <!-- Version Badge -->
        <div class="flex items-center gap-3 mb-3">
            <span
                class="inline-flex items-center rounded-full bg-blue-100 px-3 py-1 text-sm font-semibold text-blue-800">
                {{ version }}
            </span>
            <span class="text-sm text-gray-500">{{ date }}</span>
        </div>

        <!-- Content Slot -->
        <div class="prose prose-gray max-w-none">
            <slot />
        </div>
    </div>
</template>

<script setup lang="ts">
defineProps({
    version: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    }
})
</script>
