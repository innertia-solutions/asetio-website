<template>
  <section class="stats-strip">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="steps-row">
        <template v-for="(stat, index) in stats" :key="index">

          <div class="step">
            <div v-if="stat.icon" class="step-icon">
              <UIcon :name="stat.icon" class="size-5" />
            </div>
            <div>
              <h3 class="step-title">{{ stat.value }}</h3>
              <p class="step-label">{{ stat.label }}</p>
            </div>
          </div>

          <div v-if="index < stats.length - 1" class="step-divider" aria-hidden="true">
            <UIcon name="i-lucide-chevron-right" class="size-5 text-slate-300" />
          </div>

        </template>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps({
  stats: {
    type: Array as () => Array<{ value: string; label: string; icon?: string }>,
    required: true
  }
})
</script>

<style scoped>
.stats-strip {
  background: #f8fafc;
  border-top: 1px solid #e2e8f0;
  border-bottom: 1px solid #e2e8f0;
}

.steps-row {
  display: flex;
  align-items: center;
  padding: 24px 0;
  gap: 0;
}

.step {
  display: flex;
  align-items: center;
  gap: 14px;
  flex: 1;
  padding: 0 20px;
}

.step:first-child { padding-left: 0; }
.step:last-child  { padding-right: 0; }


.step-icon {
  display: grid;
  place-items: center;
  width: 40px;
  height: 40px;
  border-radius: 10px;
  background: #e0f2fe;
  color: #0284c7;
  flex-shrink: 0;
}

.step-title {
  font-size: 15px;
  font-weight: 700;
  color: #020617;
  margin: 0;
  line-height: 1.3;
}

.step-label {
  font-size: 12px;
  color: #64748b;
  margin: 3px 0 0;
  line-height: 1.45;
}

.step-divider {
  flex-shrink: 0;
  display: flex;
  align-items: center;
  padding: 0 4px;
}

@media (max-width: 639px) {
  .steps-row {
    flex-direction: column;
    align-items: stretch;
    gap: 0;
    padding: 0;
  }

  .step {
    padding: 18px 0;
    border-bottom: 1px solid #e2e8f0;
  }

  .step:last-child {
    border-bottom: none;
  }

  .step-divider {
    display: none;
  }

}
</style>
