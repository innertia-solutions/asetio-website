<template>
  <section class="bg-white">
    <div class="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div class="mb-10 grid gap-5 lg:grid-cols-12 lg:items-end">
        <div class="lg:col-span-7">
          <p class="text-sm font-semibold text-sky-700">{{ eyebrow }}</p>
          <h2 class="mt-2 text-3xl font-semibold leading-tight text-slate-950 md:text-4xl">
            {{ title }}
          </h2>
        </div>
        <p class="text-sm leading-6 text-slate-600 lg:col-span-5">
          {{ description }}
        </p>
      </div>

      <div class="signal-diagram" aria-label="Flujo de senal Asetio">
        <svg class="flow-layer" viewBox="0 0 1200 860" fill="none" aria-hidden="true">
          <defs>
            <marker id="flow-arrow" markerWidth="14" markerHeight="14" refX="11" refY="7" orient="auto" markerUnits="userSpaceOnUse">
              <path d="M2 2L10 6L2 10" stroke="#0284c7" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" />
            </marker>
          </defs>

          <path class="flow-path flow-ble flow-ble-1" d="M250 178 L250 238 C250 294 316 336 506 348" />
          <path class="flow-path flow-ble flow-ble-2" d="M600 178 L600 348" />
          <path class="flow-path flow-ble flow-ble-3" d="M950 178 L950 238 C950 294 884 336 694 348" />
          <path class="flow-system" d="M600 408 L600 506" />
          <path class="flow-system-pulse" pathLength="1" d="M600 408 L600 506" />
          <path class="flow-path flow-company" d="M600 662 L600 728" marker-end="url(#flow-arrow)" />

          <circle class="flow-dot" r="7">
            <animateMotion dur="3.2s" repeatCount="indefinite" path="M250 178 L250 238 C250 294 316 336 506 348" />
          </circle>
          <circle class="flow-dot" r="7">
            <animateMotion dur="1.5s" repeatCount="indefinite" path="M600 178 L600 348" />
          </circle>
          <circle class="flow-dot" r="7">
            <animateMotion dur="3.2s" repeatCount="indefinite" path="M950 178 L950 238 C950 294 884 336 694 348" />
          </circle>
        </svg>

        <div
          v-for="asset in assets"
          :key="asset.title"
          class="asset-node"
          :class="asset.class"
        >
          <div class="asset-main">
            <div class="node-icon bg-sky-50 text-sky-700">
              <UIcon :name="asset.icon" class="size-6" />
            </div>
            <div>
              <p class="node-kicker">Activo</p>
              <h3>{{ asset.title }}</h3>
              <p>{{ asset.detail }}</p>
            </div>
          </div>
          <div class="tag-chip">
            <UIcon name="i-lucide-bluetooth" class="size-4" />
            {{ asset.tag }}
          </div>
        </div>

        <div class="gateway-orbit">
          <span />
          <span />
        </div>

        <div class="node node-gateway">
          <div class="node-icon bg-cyan-50 text-cyan-700">
            <UIcon :name="steps[1]?.icon" class="size-6" />
          </div>
          <div>
            <h3>Gateway</h3>
          </div>
        </div>

        <div class="node node-asetio">
          <div class="node-asetio-main">
            <div class="node-brand">
              <img src="/isologo.png" alt="" class="h-7 w-auto" />
            </div>
            <div>
              <p class="node-kicker">{{ steps[2]?.badge }}</p>
              <h3>{{ steps[2]?.title }}</h3>
              <p>{{ steps[2]?.signal }}</p>
            </div>
          </div>
          <div class="asetio-alert">
            <div class="grid size-10 place-items-center rounded-lg bg-amber-50 text-amber-700">
              <UIcon name="i-lucide-bell-ring" class="size-5" />
            </div>
            <div>
              <p class="node-kicker">Alerta</p>
              <h4>{{ outcomeBadge }}</h4>
            </div>
          </div>
        </div>

        <div class="node node-client">
          <div class="node-icon bg-slate-100 text-slate-700">
            <UIcon :name="steps[3]?.icon" class="size-7" />
          </div>
          <div>
            <p class="node-kicker">{{ steps[3]?.badge }}</p>
            <h3>{{ steps[3]?.title }}</h3>
            <p>{{ steps[3]?.signal }}</p>
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
  outcomeTitle: string
  outcomeDescription: string
  outcomeBadge: string
  steps: Array<{
    title: string
    badge: string
    description: string
    signalLabel: string
    signal: string
    icon: string
  }>
}>()

const assets = [
  {
    title: 'Rack UPS',
    detail: 'Sala tecnica',
    tag: 'tag A-17',
    icon: 'i-lucide-server',
    class: 'asset-one'
  },
  {
    title: 'Caja herramientas',
    detail: 'Bodega',
    tag: 'tag B-08',
    icon: 'i-lucide-package-check',
    class: 'asset-two'
  },
  {
    title: 'Generador',
    detail: 'Patio servicio',
    tag: 'tag C-21',
    icon: 'i-lucide-zap',
    class: 'asset-three'
  }
]
</script>

<style scoped>
.signal-diagram {
  position: relative;
  min-height: 860px;
  overflow: hidden;
  background: transparent;
}

.flow-layer {
  position: absolute;
  inset: 0;
  z-index: 1;
  width: 100%;
  height: 100%;
}

.flow-path {
  stroke: #0284c7;
  stroke-width: 3;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-dasharray: 12 22;
  animation: flow-pulse 2.8s linear infinite;
  filter: drop-shadow(0 0 6px rgb(14 165 233 / 0.22));
}

.flow-ble {
  stroke: #7dd3fc;
  stroke-width: 4;
  stroke-dasharray: 12 24;
  opacity: 0.86;
}

.flow-system {
  stroke: #0284c7;
  stroke-width: 5;
  stroke-linecap: round;
  stroke-linejoin: round;
  filter: drop-shadow(0 0 7px rgb(2 132 199 / 0.20));
}

.flow-system-pulse {
  stroke: #bae6fd;
  stroke-width: 8;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-dasharray: 0.16 0.84;
  animation: system-pulse 1.35s linear infinite;
  filter: drop-shadow(0 0 12px rgb(14 165 233 / 0.62));
}

.flow-company {
  stroke-width: 4;
  animation-delay: -0.9s;
}

.flow-dot {
  fill: #0284c7;
  filter: drop-shadow(0 0 10px rgb(14 165 233 / 0.48));
}

@keyframes flow-pulse {
  from {
    stroke-dashoffset: 0;
  }

  to {
    stroke-dashoffset: -34;
  }
}

@keyframes system-pulse {
  from {
    stroke-dashoffset: 1;
  }

  to {
    stroke-dashoffset: 0;
  }
}

.node,
.asset-node {
  position: absolute;
  z-index: 2;
  border: 1px solid rgb(226 232 240);
  border-radius: 18px;
  background: rgb(255 255 255 / 0.94);
  box-shadow: 0 18px 44px rgb(15 23 42 / 0.08);
  backdrop-filter: blur(12px);
}

.node {
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 14px;
  align-items: center;
  padding: 20px;
}

.asset-node {
  width: 300px;
  padding: 16px;
}

.asset-main {
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 13px;
  align-items: center;
}

.node h3,
.asset-node h3 {
  margin: 0;
  color: #020617;
  font-size: 22px;
  font-weight: 750;
  letter-spacing: 0;
}

.node p,
.asset-node p {
  margin: 4px 0 0;
  color: #64748b;
  font-size: 13px;
  line-height: 1.45;
}

.node .node-kicker,
.asset-node .node-kicker {
  margin: 0 0 2px;
  color: #0284c7;
  font-size: 12px;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.node-icon,
.node-brand {
  display: grid;
  width: 50px;
  height: 50px;
  place-items: center;
  border-radius: 13px;
}

.node-brand {
  background: #f8fafc;
  border: 1px solid #e2e8f0;
}

.asset-one {
  top: 48px;
  left: 5%;
}

.asset-two {
  top: 48px;
  left: 50%;
  transform: translateX(-50%);
}

.asset-three {
  top: 48px;
  right: 5%;
}

.tag-chip {
  position: absolute;
  right: 16px;
  bottom: -20px;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  border: 1px solid #bae6fd;
  border-radius: 999px;
  background: #f0f9ff;
  padding: 8px 12px;
  color: #0369a1;
  font-size: 13px;
  font-weight: 800;
  box-shadow: 0 12px 28px rgb(14 165 233 / 0.16);
}

.gateway-orbit {
  position: absolute;
  z-index: 1;
  top: 274px;
  left: 50%;
  width: 300px;
  height: 190px;
  border-radius: 999px;
  background: radial-gradient(circle, rgb(14 165 233 / 0.10), transparent 62%);
  transform: translateX(-50%);
}

.gateway-orbit span {
  position: absolute;
  inset: 20px;
  border: 1px solid rgb(14 165 233 / 0.10);
  border-radius: inherit;
}

.gateway-orbit span + span {
  inset: 52px;
}

.node-gateway {
  top: 314px;
  left: 50%;
  width: 190px;
  min-height: 72px;
  gap: 10px;
  padding: 14px;
  transform: translateX(-50%);
}

.node-gateway h3 {
  font-size: 18px;
}

.node-asetio {
  top: 500px;
  left: 50%;
  width: 440px;
  grid-template-columns: 1fr;
  gap: 16px;
  transform: translateX(-50%);
}

.node-asetio-main,
.asetio-alert {
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 14px;
  align-items: center;
}

.asetio-alert {
  border-top: 1px solid #e2e8f0;
  padding-top: 14px;
}

.asetio-alert h4 {
  margin: 0;
  color: #020617;
  font-size: 18px;
  font-weight: 750;
}

.node-client {
  top: 728px;
  left: 50%;
  width: 520px;
  min-height: 112px;
  padding: 24px;
  transform: translateX(-50%);
}

.node-client .node-icon {
  width: 58px;
  height: 58px;
}

.node-client h3 {
  font-size: 28px;
}

@media (max-width: 1023px) {
  .signal-diagram {
    display: grid;
    min-height: auto;
    gap: 16px;
    padding: 0;
    background: transparent;
  }

  .flow-layer,
  .gateway-orbit {
    display: none;
  }

  .node,
  .asset-node {
    position: static;
    width: auto;
    transform: none;
  }

  .asset-node {
    display: grid;
    gap: 12px;
  }

  .tag-chip {
    position: static;
    justify-self: start;
  }

}
</style>
