<template>
    <div class="relative border-l-2 border-gray-200 pb-8 pl-8 last:border-l-0 last:pb-0">
        <!-- Timeline Dot with Status Color and Pulse for In Progress -->
        <div class="absolute -left-[9px] top-0">
            <span v-if="status === 'in-progress'" class="relative flex size-4">
                <span
                    class="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span class="relative inline-flex size-4 rounded-full border-4 border-white"
                    :class="statusColor"></span>
            </span>
            <div v-else class="size-4 rounded-full border-4 border-white" :class="statusColor">
            </div>
        </div>

        <!-- Header -->
        <div class="mb-3">
            <div class="flex items-center gap-3 mb-2">
                <span class="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold"
                    :class="statusBadgeClass">
                    {{ statusText }}
                </span>
                <span class="text-sm text-gray-500">{{ quarter }}</span>
            </div>
            <h3 class="text-xl font-bold text-gray-800">{{ title }}</h3>
        </div>

        <!-- Content Slot -->
        <div class="prose prose-gray max-w-none">
            <slot />
        </div>
    </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps({
    title: {
        type: String,
        required: true
    },
    quarter: {
        type: String,
        required: true
    },
    status: {
        type: String as () => 'completed' | 'in-progress' | 'planned',
        default: 'planned'
    }
})

const statusColor = computed(() => {
    switch (props.status) {
        case 'completed':
            return 'bg-sky-600'
        case 'in-progress':
            return 'bg-blue-600'
        case 'planned':
            return 'bg-gray-400'
        default:
            return 'bg-gray-400'
    }
})

const statusBadgeClass = computed(() => {
    switch (props.status) {
        case 'completed':
            return 'bg-sky-100 text-sky-800'
        case 'in-progress':
            return 'bg-blue-100 text-blue-800'
        case 'planned':
            return 'bg-gray-100 text-gray-800'
        default:
            return 'bg-gray-100 text-gray-800'
    }
})

const statusText = computed(() => {
    switch (props.status) {
        case 'completed':
            return 'Completado'
        case 'in-progress':
            return 'En Progreso'
        case 'planned':
            return 'Planificado'
        default:
            return 'Planificado'
    }
})
</script>
