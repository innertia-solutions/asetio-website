<template>
  <section class="relative overflow-hidden bg-white text-slate-950">
    <div class="absolute inset-x-0 top-0 h-px bg-slate-200" />
    <div class="absolute inset-0 bg-[linear-gradient(180deg,#ffffff_0%,#f8fafc_64%,#ffffff_100%)]" />
    <div class="absolute inset-y-0 right-0 hidden w-1/2 bg-[radial-gradient(circle_at_48%_22%,rgba(14,165,233,0.15),transparent_38%),radial-gradient(circle_at_78%_64%,rgba(6,182,212,0.12),transparent_34%)] lg:block" />

    <div class="relative mx-auto grid max-w-7xl items-start gap-10 px-4 pb-14 pt-10 sm:px-6 lg:grid-cols-12 lg:px-8 lg:pb-20 lg:pt-12">
      <div class="lg:col-span-6 lg:pt-0">
        <h1 class="max-w-2xl text-4xl font-semibold leading-tight tracking-normal sm:text-5xl lg:text-6xl">
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
          <UButton v-if="secondaryButton" :to="secondaryButton.to" external color="neutral" variant="outline" size="lg" icon="i-lucide-book-open" class="hidden sm:flex">
            {{ secondaryButton.text }}
          </UButton>
        </div>
      </div>

      <div class="lg:col-span-6 lg:pt-0">
        <div class="hero-media">
          <!-- Desktop dashboard -->
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

          <!-- Phone mockup overlay -->
          <div class="phone-wrap" aria-hidden="true">
            <div class="phone-frame">
              <!-- Notch -->
              <div class="phone-notch" />

              <!-- Screen -->
              <div class="phone-screen">
                <!-- Status bar -->
                <div class="ph-statusbar">
                  <span>9:41</span>
                  <div class="ph-sb-icons">
                    <svg width="12" height="8" viewBox="0 0 12 8" fill="none"><rect x="0" y="2" width="2" height="6" rx="0.5" fill="currentColor" opacity="0.4"/><rect x="3" y="1" width="2" height="7" rx="0.5" fill="currentColor" opacity="0.6"/><rect x="6" y="0" width="2" height="8" rx="0.5" fill="currentColor"/><rect x="9.5" y="1" width="2" height="6" rx="1" fill="none" stroke="currentColor" stroke-width="0.8"/><rect x="9.9" y="2.5" width="1.2" height="3" rx="0.3" fill="currentColor"/></svg>
                  </div>
                </div>

                <!-- App header -->
                <div class="ph-appbar">
                  <div class="ph-app-logo">A</div>
                  <span class="ph-app-name">Asetio</span>
                  <div class="ph-bell">
                    <UIcon name="i-lucide-bell" class="size-3.5" />
                    <span class="ph-bell-badge">1</span>
                  </div>
                </div>

                <!-- Alert card -->
                <div class="ph-alert">
                  <div class="ph-alert-top">
                    <span class="ph-alert-badge">⚠ CRÍTICO</span>
                    <span class="ph-alert-time">ahora</span>
                  </div>
                  <p class="ph-alert-title">Rack UPS</p>
                  <p class="ph-alert-sub">Fuera de zona · Sala técnica</p>
                  <div class="ph-alert-footer">
                    <span class="ph-avatar">CM</span>
                    <span class="ph-alert-resp">Carlos M. · Ops</span>
                  </div>
                </div>

                <!-- Asset status -->
                <div class="ph-section-label">ACTIVOS (12)</div>
                <div class="ph-status-list">
                  <div class="ph-status-row">
                    <span class="ph-dot ph-dot-ok" />
                    <span class="ph-status-name">Online</span>
                    <span class="ph-status-count">10</span>
                  </div>
                  <div class="ph-status-row">
                    <span class="ph-dot ph-dot-warn" />
                    <span class="ph-status-name">Revisar</span>
                    <span class="ph-status-count">1</span>
                  </div>
                  <div class="ph-status-row">
                    <span class="ph-dot ph-dot-crit" />
                    <span class="ph-status-name">Crítico</span>
                    <span class="ph-status-count">1</span>
                  </div>
                </div>

                <!-- Bottom nav -->
                <div class="ph-bottomnav">
                  <div class="ph-nav-item ph-nav-active">
                    <UIcon name="i-lucide-layout-dashboard" class="size-3.5" />
                    <span>Inicio</span>
                  </div>
                  <div class="ph-nav-item">
                    <UIcon name="i-lucide-bell-ring" class="size-3.5" />
                    <span>Alertas</span>
                  </div>
                  <div class="ph-nav-item">
                    <UIcon name="i-lucide-wrench" class="size-3.5" />
                    <span>Mant.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps({
  title: { type: String, required: true },
  description: { type: String, required: true },
  primaryButton: { type: Object, required: true },
  secondaryButton: { type: Object, required: false, default: null },
  dashboardImage: { type: String, default: '/asetio-dashboard-hero.png' }
})
</script>

<style scoped>
/* ── Hero media container ── */
.hero-media {
  position: relative;
}

/* ── Phone wrap: positioned bottom-right, hangs off dashboard ── */
.phone-wrap {
  position: absolute;
  bottom: -28px;
  right: -18px;
  z-index: 10;
  transform: rotate(3deg);
  filter: drop-shadow(0 24px 48px rgb(15 23 42 / 0.28));
}

/* ── Phone outer frame ── */
.phone-frame {
  position: relative;
  width: 148px;
  height: 298px;
  border-radius: 26px;
  background: #0c111d;
  border: 2px solid #1e293b;
  box-shadow:
    inset 0 0 0 1px rgb(255 255 255 / 0.06),
    0 0 0 1px #0a0f1a;
  overflow: hidden;
  padding: 10px 5px 5px;
}

/* ── Notch ── */
.phone-notch {
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 52px;
  height: 18px;
  background: #0c111d;
  border-radius: 0 0 12px 12px;
  z-index: 2;
}

/* ── Screen ── */
.phone-screen {
  width: 100%;
  height: 100%;
  border-radius: 20px;
  background: #0f172a;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}

/* ── Status bar ── */
.ph-statusbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 14px 10px 4px;
  color: white;
  font-size: 9px;
  font-weight: 600;
  font-family: system-ui;
  flex-shrink: 0;
}

.ph-sb-icons {
  color: white;
}

/* ── App bar ── */
.ph-appbar {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 4px 10px 6px;
  flex-shrink: 0;
}

.ph-app-logo {
  width: 20px;
  height: 20px;
  border-radius: 6px;
  background: #0284c7;
  color: white;
  font-size: 11px;
  font-weight: 800;
  display: grid;
  place-items: center;
  font-family: system-ui;
  flex-shrink: 0;
}

.ph-app-name {
  font-size: 12px;
  font-weight: 700;
  color: white;
  font-family: system-ui;
  flex: 1;
}

.ph-bell {
  position: relative;
  color: #94a3b8;
}

.ph-bell-badge {
  position: absolute;
  top: -4px;
  right: -5px;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: #ef4444;
  color: white;
  font-size: 6px;
  font-weight: 700;
  display: grid;
  place-items: center;
  font-family: system-ui;
}

/* ── Alert card ── */
.ph-alert {
  margin: 0 8px 8px;
  padding: 8px;
  border-radius: 10px;
  background: #1c1008;
  border: 1px solid #92400e;
  flex-shrink: 0;
}

.ph-alert-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 4px;
}

.ph-alert-badge {
  font-size: 7px;
  font-weight: 800;
  color: #f59e0b;
  font-family: system-ui;
  letter-spacing: 0.04em;
}

.ph-alert-time {
  font-size: 7px;
  color: #78716c;
  font-family: system-ui;
}

.ph-alert-title {
  font-size: 11px;
  font-weight: 700;
  color: white;
  margin: 0 0 2px;
  font-family: system-ui;
}

.ph-alert-sub {
  font-size: 9px;
  color: #a8a29e;
  margin: 0 0 6px;
  font-family: system-ui;
}

.ph-alert-footer {
  display: flex;
  align-items: center;
  gap: 5px;
}

.ph-avatar {
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background: #1d4ed8;
  color: white;
  font-size: 6px;
  font-weight: 700;
  display: grid;
  place-items: center;
  font-family: system-ui;
  flex-shrink: 0;
}

.ph-alert-resp {
  font-size: 8px;
  color: #78716c;
  font-family: system-ui;
}

/* ── Status section ── */
.ph-section-label {
  font-size: 7px;
  font-weight: 700;
  color: #475569;
  letter-spacing: 0.08em;
  padding: 0 10px 4px;
  font-family: system-ui;
  flex-shrink: 0;
}

.ph-status-list {
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding: 0 10px;
  flex-shrink: 0;
}

.ph-status-row {
  display: flex;
  align-items: center;
  gap: 6px;
}

.ph-dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  flex-shrink: 0;
}

.ph-dot-ok   { background: #22c55e; }
.ph-dot-warn { background: #f59e0b; }
.ph-dot-crit { background: #ef4444; }

.ph-status-name {
  font-size: 9px;
  color: #94a3b8;
  font-family: system-ui;
  flex: 1;
}

.ph-status-count {
  font-size: 9px;
  font-weight: 700;
  color: white;
  font-family: system-ui;
}

/* ── Bottom nav ── */
.ph-bottomnav {
  margin-top: auto;
  display: flex;
  border-top: 1px solid #1e293b;
  background: #0c111d;
  padding: 6px 0 10px;
  flex-shrink: 0;
}

.ph-nav-item {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2px;
  color: #475569;
  font-size: 7px;
  font-family: system-ui;
}

.ph-nav-active {
  color: #38bdf8;
}

/* ── Responsive: hide phone on very small screens ── */
@media (max-width: 639px) {
  .phone-wrap {
    display: none;
  }
}
</style>
