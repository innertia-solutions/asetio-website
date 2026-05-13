<template>
  <section class="sj-section">
    <div class="sj-container">
      <!-- Header -->
      <div class="sj-header">
        <span class="sj-eyebrow terminal-font">[ señal en movimiento ]</span>
        <h2 class="sj-title">De un tag en terreno a una alerta en segundos.</h2>
        <p class="sj-subtitle">Cada paso trazado, cada responsable notificado.</p>
      </div>

      <!-- Body: sticky left + scrolling right -->
      <div class="sj-body">

        <!-- LEFT: sticky diagram -->
        <div class="sj-left">
          <div class="sj-diagram-wrap">
            <svg
              class="sj-svg"
              viewBox="0 0 220 520"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <!-- Track line (background) -->
              <line x1="110" y1="50" x2="110" y2="470" stroke="#1e293b" stroke-width="2" stroke-linecap="round"/>

              <!-- Progress fill: grows as steps complete -->
              <line
                x1="110" :y1="50" x2="110"
                :y2="progressY"
                stroke="url(#progressGrad)"
                stroke-width="2"
                stroke-linecap="round"
                class="sj-progress-line"
              />

              <defs>
                <linearGradient id="progressGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stop-color="#38bdf8"/>
                  <stop offset="100%" stop-color="#06b6d4"/>
                </linearGradient>
                <filter id="glow">
                  <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                  <feMerge>
                    <feMergeNode in="coloredBlur"/>
                    <feMergeNode in="SourceGraphic"/>
                  </feMerge>
                </filter>
              </defs>

              <!-- Step 0: Tag BLE — y=50 -->
              <g :class="['sj-node', nodeState(0)]" @click="() => {}">
                <circle cx="110" cy="50" r="26" :fill="nodeFill(0)" :stroke="nodeStroke(0)" stroke-width="2" :filter="activeStep === 0 ? 'url(#glow)' : 'none'"/>
                <text x="110" y="43" text-anchor="middle" font-size="9" font-weight="700" font-family="system-ui" :fill="nodeTextColor(0)" letter-spacing="0.06em">TAG</text>
                <text x="110" y="54" text-anchor="middle" font-size="9" font-weight="700" font-family="system-ui" :fill="nodeTextColor(0)" letter-spacing="0.06em">BLE</text>
                <text x="110" y="90" text-anchor="middle" font-size="10" font-family="system-ui" :fill="nodeLabelColor(0)">Tag BLE</text>
              </g>

              <!-- Connector dot 0→1 -->
              <circle cx="110" cy="105" r="3" :fill="activeStep >= 1 ? '#38bdf8' : '#1e293b'" class="sj-dot"/>

              <!-- Step 1: Gateway — y=155 -->
              <g :class="['sj-node', nodeState(1)]">
                <circle cx="110" cy="155" r="26" :fill="nodeFill(1)" :stroke="nodeStroke(1)" stroke-width="2" :filter="activeStep === 1 ? 'url(#glow)' : 'none'"/>
                <text x="110" y="151" text-anchor="middle" font-size="8" font-weight="700" font-family="system-ui" :fill="nodeTextColor(1)" letter-spacing="0.04em">GATE</text>
                <text x="110" y="162" text-anchor="middle" font-size="8" font-weight="700" font-family="system-ui" :fill="nodeTextColor(1)" letter-spacing="0.04em">WAY</text>
                <text x="110" y="195" text-anchor="middle" font-size="10" font-family="system-ui" :fill="nodeLabelColor(1)">Gateway BLE</text>
              </g>

              <!-- Connector dot 1→2 -->
              <circle cx="110" cy="210" r="3" :fill="activeStep >= 2 ? '#38bdf8' : '#1e293b'" class="sj-dot"/>

              <!-- Step 2: Asetio — y=260 -->
              <g :class="['sj-node', nodeState(2)]">
                <circle cx="110" cy="260" r="26" :fill="nodeFill(2)" :stroke="nodeStroke(2)" stroke-width="2" :filter="activeStep === 2 ? 'url(#glow)' : 'none'"/>
                <text x="110" y="263" text-anchor="middle" font-size="11" font-weight="800" font-family="system-ui" :fill="nodeTextColor(2)" letter-spacing="0.02em">A</text>
                <text x="110" y="300" text-anchor="middle" font-size="10" font-family="system-ui" :fill="nodeLabelColor(2)">Asetio</text>
              </g>

              <!-- Connector dot 2→3 -->
              <circle cx="110" cy="315" r="3" :fill="activeStep >= 3 ? '#38bdf8' : '#1e293b'" class="sj-dot"/>

              <!-- Step 3: Empresa — y=365 -->
              <g :class="['sj-node', nodeState(3)]">
                <circle cx="110" cy="365" r="26" :fill="nodeFill(3)" :stroke="nodeStroke(3)" stroke-width="2" :filter="activeStep === 3 ? 'url(#glow)' : 'none'"/>
                <text x="110" y="369" text-anchor="middle" font-size="8" font-weight="700" font-family="system-ui" :fill="nodeTextColor(3)" letter-spacing="0.04em">EMP.</text>
                <text x="110" y="405" text-anchor="middle" font-size="10" font-family="system-ui" :fill="nodeLabelColor(3)">Empresa</text>
              </g>

              <!-- Connector dot 3→4 -->
              <circle cx="110" cy="420" r="3" :fill="activeStep >= 4 ? '#38bdf8' : '#1e293b'" class="sj-dot"/>

              <!-- Step 4: Teléfono — y=470 -->
              <g :class="['sj-node', nodeState(4)]">
                <circle cx="110" cy="470" r="26" :fill="nodeFill(4)" :stroke="nodeStroke(4)" stroke-width="2" :filter="activeStep === 4 ? 'url(#glow)' : 'none'"/>
                <text x="110" y="474" text-anchor="middle" font-size="8" font-weight="700" font-family="system-ui" :fill="nodeTextColor(4)" letter-spacing="0.04em">📱</text>
                <text x="110" y="510" text-anchor="middle" font-size="10" font-family="system-ui" :fill="nodeLabelColor(4)">Teléfono</text>
              </g>
            </svg>

            <!-- Step indicator badge -->
            <div class="sj-step-badge">
              <span class="sj-step-badge-num terminal-font">{{ String(activeStep + 1).padStart(2, '0') }}</span>
              <span class="sj-step-badge-label">{{ steps[activeStep].shortLabel }}</span>
            </div>
          </div>
        </div>

        <!-- RIGHT: scrolling panels -->
        <div class="sj-right" ref="rightRef">
          <div
            v-for="(step, i) in steps"
            :key="i"
            :ref="el => { if (el) panelRefs[i] = el as HTMLElement }"
            :class="['sj-panel', { 'sj-panel--active': activeStep === i }]"
          >
            <div class="sj-panel-inner">
              <span class="sj-panel-num terminal-font">{{ String(i + 1).padStart(2, '0') }}</span>
              <span class="sj-panel-kicker">{{ step.kicker }}</span>
              <h3 class="sj-panel-title">{{ step.title }}</h3>
              <p class="sj-panel-desc">{{ step.description }}</p>
              <div v-if="step.badge" class="sj-panel-badge">
                <span class="sj-badge-dot" :class="`sj-badge-dot--${step.badgeColor}`"/>
                {{ step.badge }}
              </div>
              <div v-if="step.dataItems" class="sj-data-row">
                <div v-for="item in step.dataItems" :key="item.label" class="sj-data-item">
                  <span class="sj-data-label">{{ item.label }}</span>
                  <span class="sj-data-val">{{ item.value }}</span>
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
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'

const activeStep = ref(0)
const panelRefs = ref<HTMLElement[]>([])
const rightRef = ref<HTMLElement | null>(null)

// Node Y positions in SVG for progress line calculation
const nodeYs = [50, 155, 260, 365, 470]

const progressY = computed(() => {
  const current = nodeYs[activeStep.value] ?? 50
  return current
})

const steps = [
  {
    shortLabel: 'Tag BLE',
    kicker: 'Origen',
    title: 'El activo emite su señal.',
    description: 'Un tag BLE adherido al equipo transmite su identidad, batería y estado cada pocos segundos. Sin cables, sin intervención humana.',
    badge: 'Señal activa',
    badgeColor: 'blue',
    dataItems: [
      { label: 'ID', value: 'TAG-0042' },
      { label: 'Batería', value: '87%' },
      { label: 'Intervalo', value: '3 s' },
    ],
  },
  {
    shortLabel: 'Gateway',
    kicker: 'Captura',
    title: 'El gateway escucha y normaliza.',
    description: 'El gateway BLE capta la señal, valida el RSSI y la zona, y envía el dato normalizado a la plataforma en tiempo real.',
    badge: 'Dato normalizado',
    badgeColor: 'blue',
    dataItems: [
      { label: 'RSSI', value: '-68 dBm' },
      { label: 'Zona', value: 'Sala Técnica' },
      { label: 'Gateway', value: 'GW-03' },
    ],
  },
  {
    shortLabel: 'Asetio',
    kicker: 'Reglas',
    title: 'Asetio decide qué hacer.',
    description: 'La plataforma cruza la lectura con el inventario, la criticidad del activo y las reglas operacionales. Clasifica el evento y lo prioriza.',
    badge: 'Evento clasificado',
    badgeColor: 'amber',
    dataItems: [
      { label: 'Activo', value: 'Rack UPS' },
      { label: 'Estado', value: 'Fuera de zona' },
      { label: 'Prioridad', value: 'CRÍTICO' },
    ],
  },
  {
    shortLabel: 'Empresa',
    kicker: 'Asignación',
    title: 'El responsable correcto recibe el caso.',
    description: 'Se genera un caso con contexto completo: activo, historial, regla que lo disparó y responsable asignado. Sin pasos manuales.',
    badge: 'Caso abierto',
    badgeColor: 'amber',
    dataItems: [
      { label: 'Responsable', value: 'Carlos M.' },
      { label: 'Área', value: 'Ops' },
      { label: 'SLA', value: '30 min' },
    ],
  },
  {
    shortLabel: 'Teléfono',
    kicker: 'Alerta',
    title: 'La alerta llega en segundos.',
    description: 'El técnico recibe notificación push con el activo, la zona, la severidad y el historial. Todo para responder y cerrar el caso con evidencia.',
    badge: 'Alerta entregada',
    badgeColor: 'green',
    dataItems: [
      { label: 'Canal', value: 'Push / Email' },
      { label: 'Latencia', value: '< 8 s' },
      { label: 'Cierre', value: 'con evidencia' },
    ],
  },
]

function nodeFill(i: number) {
  if (activeStep.value === i) return '#0c4a6e'
  if (activeStep.value > i) return '#0e2d3d'
  return '#0f172a'
}

function nodeStroke(i: number) {
  if (activeStep.value === i) return '#38bdf8'
  if (activeStep.value > i) return '#164e63'
  return '#1e293b'
}

function nodeTextColor(i: number) {
  if (activeStep.value === i) return '#e0f2fe'
  if (activeStep.value > i) return '#475569'
  return '#334155'
}

function nodeLabelColor(i: number) {
  if (activeStep.value === i) return '#94a3b8'
  if (activeStep.value > i) return '#334155'
  return '#1e293b'
}

function nodeState(i: number) {
  if (activeStep.value === i) return 'sj-node--active'
  if (activeStep.value > i) return 'sj-node--done'
  return 'sj-node--idle'
}

let observer: IntersectionObserver | null = null

onMounted(() => {
  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const idx = panelRefs.value.indexOf(entry.target as HTMLElement)
          if (idx !== -1) {
            activeStep.value = idx
          }
        }
      })
    },
    {
      threshold: 0.5,
      rootMargin: '0px 0px -20% 0px',
    }
  )

  panelRefs.value.forEach((panel) => {
    if (panel) observer!.observe(panel)
  })
})

onBeforeUnmount(() => {
  observer?.disconnect()
})
</script>

<style scoped>
/* ── Section wrapper ── */
.sj-section {
  background: #020917;
  padding: 80px 0 120px;
  overflow: hidden;
}

.sj-container {
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 24px;
}

/* ── Header ── */
.sj-header {
  text-align: center;
  margin-bottom: 72px;
}

.sj-eyebrow {
  display: inline-block;
  font-size: 11px;
  letter-spacing: 0.12em;
  color: #38bdf8;
  margin-bottom: 16px;
  text-transform: uppercase;
}

.sj-title {
  font-size: clamp(1.75rem, 3.5vw, 2.5rem);
  font-weight: 700;
  color: #f1f5f9;
  line-height: 1.2;
  margin: 0 0 12px;
  letter-spacing: -0.02em;
}

.sj-subtitle {
  font-size: 1rem;
  color: #475569;
  margin: 0;
}

/* ── Body grid ── */
.sj-body {
  display: grid;
  grid-template-columns: 280px 1fr;
  gap: 0 48px;
  align-items: start;
}

/* ── Left sticky ── */
.sj-left {
  position: sticky;
  top: 0;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.sj-diagram-wrap {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
}

.sj-svg {
  width: 220px;
  height: 520px;
  overflow: visible;
}

.sj-node {
  cursor: default;
  transition: filter 0.4s ease;
}

.sj-node circle {
  transition: fill 0.4s ease, stroke 0.4s ease;
}

.sj-progress-line {
  transition: y2 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}

.sj-dot {
  transition: fill 0.4s ease;
}

/* Step badge */
.sj-step-badge {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  background: #0f172a;
  border: 1px solid #1e293b;
  border-radius: 12px;
  padding: 10px 20px;
  min-width: 120px;
  text-align: center;
}

.sj-step-badge-num {
  font-size: 22px;
  font-weight: 700;
  color: #38bdf8;
  line-height: 1;
}

.sj-step-badge-label {
  font-size: 11px;
  color: #475569;
  font-family: system-ui, sans-serif;
}

/* ── Right panels ── */
.sj-right {
  display: flex;
  flex-direction: column;
}

.sj-panel {
  min-height: 80vh;
  display: flex;
  align-items: center;
  opacity: 0.3;
  transition: opacity 0.4s ease;
}

.sj-panel--active {
  opacity: 1;
}

.sj-panel-inner {
  padding: 48px 0;
  max-width: 480px;
}

.sj-panel-num {
  display: block;
  font-size: 48px;
  font-weight: 700;
  color: #0c2d44;
  line-height: 1;
  margin-bottom: 8px;
}

.sj-panel-kicker {
  display: inline-block;
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #38bdf8;
  font-family: system-ui, sans-serif;
  margin-bottom: 12px;
}

.sj-panel-title {
  font-size: clamp(1.5rem, 2.5vw, 2rem);
  font-weight: 700;
  color: #f1f5f9;
  line-height: 1.25;
  margin: 0 0 16px;
  letter-spacing: -0.02em;
}

.sj-panel-desc {
  font-size: 1rem;
  color: #64748b;
  line-height: 1.75;
  margin: 0 0 24px;
}

/* Badge */
.sj-panel-badge {
  display: inline-flex;
  align-items: center;
  gap: 7px;
  font-size: 12px;
  font-weight: 600;
  color: #94a3b8;
  font-family: system-ui, sans-serif;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  margin-bottom: 20px;
}

.sj-badge-dot {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  flex-shrink: 0;
}

.sj-badge-dot--blue  { background: #38bdf8; box-shadow: 0 0 6px #38bdf8; }
.sj-badge-dot--amber { background: #f59e0b; box-shadow: 0 0 6px #f59e0b; }
.sj-badge-dot--green { background: #22c55e; box-shadow: 0 0 6px #22c55e; }

/* Data row */
.sj-data-row {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
}

.sj-data-item {
  display: flex;
  flex-direction: column;
  gap: 3px;
  background: #0f172a;
  border: 1px solid #1e293b;
  border-radius: 8px;
  padding: 8px 14px;
  min-width: 90px;
}

.sj-data-label {
  font-size: 10px;
  font-weight: 600;
  letter-spacing: 0.08em;
  color: #334155;
  text-transform: uppercase;
  font-family: system-ui, sans-serif;
}

.sj-data-val {
  font-size: 13px;
  font-weight: 700;
  color: #e2e8f0;
  font-family: system-ui, sans-serif;
}

/* ── Mobile: disable sticky, show stacked list ── */
@media (max-width: 767px) {
  .sj-body {
    grid-template-columns: 1fr;
    gap: 0;
  }

  .sj-left {
    position: relative;
    height: auto;
    padding: 0 0 32px;
  }

  .sj-svg {
    width: 160px;
    height: 380px;
  }

  .sj-panel {
    min-height: auto;
    opacity: 1;
  }

  .sj-panel-inner {
    padding: 32px 0;
    border-top: 1px solid #1e293b;
  }

  .sj-panel:first-child .sj-panel-inner {
    border-top: none;
  }

  .sj-panel-num {
    font-size: 32px;
  }

  .sj-panel-title {
    font-size: 1.25rem;
  }
}

/* ── Tablet: tighten columns ── */
@media (min-width: 768px) and (max-width: 1023px) {
  .sj-body {
    grid-template-columns: 220px 1fr;
    gap: 0 32px;
  }

  .sj-svg {
    width: 180px;
    height: 450px;
  }
}
</style>
