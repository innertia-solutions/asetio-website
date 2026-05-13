<template>
  <section class="bg-white">

    <!-- ── Desktop: 2-col (diagram left, text right) ── -->
    <div class="sfw-desktop">

      <!-- Left: diagram -->
      <div class="sfw-right">
        <div class="diag-wrap">

          <!-- 1. Three asset cards -->
          <div class="diag-assets">
            <div v-for="asset in assets" :key="asset.title" class="da-card">
              <!-- Icon + name + location -->
              <div class="da-body">
                <div class="da-icon-wrap">
                  <UIcon :name="asset.icon" class="size-5" />
                </div>
                <div>
                  <h3 class="da-name">{{ asset.title }}</h3>
                  <p class="da-loc">{{ asset.detail }}</p>
                </div>
              </div>
              <!-- Tag chip overlapping the bottom -->
              <div class="da-tag-chip">
                <UIcon name="i-lucide-bluetooth" class="size-3" />
                {{ asset.tag }}
              </div>
            </div>
          </div>

          <!-- 2. Funnel SVG: uniform scale so dots stay circular -->
          <svg
            class="diag-funnel"
            viewBox="0 0 600 64"
            fill="none"
            aria-hidden="true"
          >
            <defs>
              <filter id="dot-glow">
                <feGaussianBlur stdDeviation="2.5" result="blur"/>
                <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
              </filter>
            </defs>
            <path class="df-path" d="M150,0 C150,44 300,52 300,64" />
            <path class="df-path" d="M450,0 C450,44 300,52 300,64" />
            <!-- Dots travel 0-68% of cycle, fade 48-68%, then gateway traveler fires at 70% -->
            <circle class="df-dot" r="5" filter="url(#dot-glow)">
              <animateMotion dur="2.4s" repeatCount="indefinite"
                keyPoints="0;1;1" keyTimes="0;0.68;1" calcMode="linear"
                path="M150,0 C150,44 300,52 300,64" />
              <animate attributeName="opacity" dur="2.4s" repeatCount="indefinite"
                keyTimes="0;0.48;0.68;1" values="1;1;0;0" calcMode="linear" />
            </circle>
            <circle class="df-dot" r="5" filter="url(#dot-glow)">
              <animateMotion dur="2.4s" repeatCount="indefinite"
                keyPoints="0;1;1" keyTimes="0;0.68;1" calcMode="linear"
                path="M450,0 C450,44 300,52 300,64" />
              <animate attributeName="opacity" dur="2.4s" repeatCount="indefinite"
                keyTimes="0;0.48;0.68;1" values="1;1;0;0" calcMode="linear" />
            </circle>
          </svg>

          <!-- 3. Gateway: circular icon only -->
          <div class="diag-center-row">
            <div class="diag-node-circle">
              <UIcon :name="steps[1]?.icon" class="size-6" />
            </div>
          </div>

          <!-- 4. Vertical connector: single line, no seam -->
          <div class="diag-vconn diag-vconn-gw">
            <div class="dvc-line dvc-line-single" />
            <div class="dvc-traveler" />
          </div>

          <!-- 5. Asetio: centered, equal icons -->
          <div class="diag-center-row">
            <div class="diag-node diag-node-asetio">
              <div class="diag-node-icons">
                <div class="diag-icon-eq diag-icon-brand">
                  <img src="/favicon.png" alt="Asetio" class="h-5 w-auto" />
                </div>
                <span class="diag-node-label">Gestión de alertas</span>
                <div class="diag-icon-eq diag-icon-bell">
                  <UIcon name="i-lucide-bell-ring" class="size-5 text-amber-500" />
                </div>
              </div>
            </div>
          </div>

          <!-- 6. Cross: single wrapper — vline spans all the way to Empresa top -->
          <div class="diag-cross-wrap">
            <!-- vertical amber line running full height including bottom padding -->
            <div class="diag-cross-vline" aria-hidden="true" />
            <!-- single traveler covers the entire vertical stretch -->
            <div class="diag-amber-vdot" aria-hidden="true" />

            <!-- horizontal row: Email — dot — Push -->
            <div class="diag-cross-hrow">
              <div class="diag-channel-icon diag-channel-email">
                <UIcon name="i-lucide-mail" class="size-5" />
              </div>
              <div class="diag-cross-hline" aria-hidden="true" />
              <div class="diag-cross-dot" aria-hidden="true" />
              <div class="diag-cross-hline" aria-hidden="true" />
              <div class="diag-channel-icon diag-channel-push">
                <UIcon name="i-lucide-smartphone" class="size-5" />
              </div>
            </div>
          </div>

          <!-- 8. Empresa -->
          <div class="diag-center-row">
            <div class="diag-node diag-node-empresa">
              <div class="diag-node-centered">
                <div class="diag-icon-eq diag-icon-slate">
                  <UIcon :name="steps[3]?.icon" class="size-5" />
                </div>
                <span class="diag-node-label">Tu empresa</span>
              </div>
            </div>
          </div>

        </div>
      </div>

      <!-- Right: header text -->
      <!-- Right: title + 4 feature cards -->
      <div class="sfw-left">
        <h2 class="sfw-title">
          <span class="sfw-typing">{{ displayText }}<span class="sfw-cursor" :class="{ 'sfw-cursor--blink': isCursorBlinking }">|</span></span>
          <br>
          <span class="sfw-static">que convierte datos de terreno en decisiones operacionales.</span>
        </h2>
        <div class="sfw-cards">

          <div class="sfw-card">
            <div class="sfw-card-icon sfw-card-icon--blue">
              <UIcon name="i-lucide-zap" class="size-4" />
            </div>
            <h3 class="sfw-card-title">Sin pasos manuales</h3>
            <p class="sfw-card-desc">Cada señal genera la alerta y el caso correcto de forma automática, sin intervención del equipo.</p>
          </div>

          <div class="sfw-card">
            <div class="sfw-card-icon sfw-card-icon--blue">
              <UIcon name="i-lucide-user-check" class="size-4" />
            </div>
            <h3 class="sfw-card-title">Responsable definido</h3>
            <p class="sfw-card-desc">Cada alerta tiene un dueño asignado según el activo, la zona y la criticidad del evento.</p>
          </div>

          <div class="sfw-card">
            <div class="sfw-card-icon sfw-card-icon--amber">
              <UIcon name="i-lucide-layers" class="size-4" />
            </div>
            <h3 class="sfw-card-title">Contexto completo</h3>
            <p class="sfw-card-desc">El equipo recibe historial, ubicación y condición del activo antes de llegar a terreno.</p>
          </div>

          <div class="sfw-card">
            <div class="sfw-card-icon sfw-card-icon--amber">
              <UIcon name="i-lucide-shield-check" class="size-4" />
            </div>
            <h3 class="sfw-card-title">Historial auditable</h3>
            <p class="sfw-card-desc">Cada acción queda registrada con evidencia, responsable y resultado para auditoría.</p>
          </div>

        </div>
      </div>

    </div>

    <!-- ── Mobile / Tablet ── -->
    <div class="sfw-mobile">
      <div class="sfw-mobile-header">
        <h2 class="mt-0 text-3xl font-semibold leading-tight text-slate-950">{{ title }}</h2>
        <p class="mt-3 text-sm leading-6 text-slate-500">{{ description }}</p>
      </div>

      <div class="mobile-flow">
        <div class="m-assets">
          <div v-for="asset in assets" :key="asset.title" class="m-asset-card">
            <div class="m-node-icon m-icon-sky">
              <UIcon :name="asset.icon" class="size-4" />
            </div>
            <p class="m-kicker">Activo</p>
            <h3 class="m-title-sm">{{ asset.title }}</h3>
            <p class="m-detail-sm">{{ asset.detail }}</p>
            <span class="m-tag">
              <UIcon name="i-lucide-bluetooth" class="size-3 shrink-0" />
              {{ asset.tag }}
            </span>
          </div>
        </div>

        <div class="m-conn" aria-hidden="true">
          <div class="m-conn-line" /><div class="m-conn-dot" /><div class="m-conn-line" />
        </div>

        <div class="m-gw-circle">
          <UIcon :name="steps[1]?.icon" class="size-5" />
        </div>

        <div class="m-conn" aria-hidden="true">
          <div class="m-conn-line" /><div class="m-conn-dot" /><div class="m-conn-line" />
        </div>

        <div class="m-card m-card-row">
          <div class="m-node-icon m-icon-brand">
            <img src="/favicon.png" alt="" class="h-5 w-auto" />
          </div>
          <span class="m-title-md" style="flex:1">Gestión de alertas</span>
          <UIcon name="i-lucide-bell-ring" class="size-5 text-amber-500 shrink-0" />
        </div>

        <div class="m-conn" aria-hidden="true">
          <div class="m-conn-line" /><div class="m-conn-dot" /><div class="m-conn-line" />
        </div>

        <!-- Two channels -->
        <div class="m-channels">
          <div class="m-channel-card">
            <div class="m-channel-icon m-ch-email">
              <UIcon name="i-lucide-mail" class="size-4" />
            </div>
            <p class="m-kicker" style="text-align:center;margin-top:6px">Canal</p>
            <span class="m-title-sm" style="text-align:center">Email</span>
          </div>
          <div class="m-channel-card">
            <div class="m-channel-icon m-ch-push">
              <UIcon name="i-lucide-smartphone" class="size-4" />
            </div>
            <p class="m-kicker" style="text-align:center;margin-top:6px">Canal</p>
            <span class="m-title-sm" style="text-align:center">Push</span>
          </div>
        </div>

        <div class="m-conn m-conn-amber" aria-hidden="true">
          <div class="m-conn-line m-conn-line-amber" /><div class="m-conn-dot m-conn-dot-amber" /><div class="m-conn-line m-conn-line-amber" />
        </div>

        <!-- Empresa -->
        <div class="m-card m-card-row">
          <div class="m-node-icon m-icon-slate">
            <UIcon :name="steps[3]?.icon" class="size-5" />
          </div>
          <div>
            <p class="m-kicker">{{ steps[3]?.badge }}</p>
            <h3 class="m-title-md">{{ steps[3]?.title }}</h3>
          </div>
        </div>
      </div>
    </div>

  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const words = ['Monitoreo continuo', 'Observabilidad continua', 'Alertas en tiempo real']
const displayText = ref('')
const isCursorBlinking = ref(false)
let currentWord = 0
let timeout: ReturnType<typeof setTimeout> | null = null

const typewriter = () => {
  const word = words[currentWord]
  let i = 0
  isCursorBlinking.value = false

  const type = () => {
    if (i <= word.length) {
      displayText.value = word.slice(0, i)
      i++
      timeout = setTimeout(type, 55)
    } else {
      isCursorBlinking.value = true
      timeout = setTimeout(erase, 2000)
    }
  }

  const erase = () => {
    isCursorBlinking.value = false
    if (displayText.value.length > 0) {
      displayText.value = displayText.value.slice(0, -1)
      timeout = setTimeout(erase, 35)
    } else {
      currentWord = (currentWord + 1) % words.length
      timeout = setTimeout(typewriter, 400)
    }
  }

  type()
}

onMounted(() => { typewriter() })
onUnmounted(() => { if (timeout) clearTimeout(timeout) })

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
  { title: 'Rack UPS',  detail: 'Sala técnica', tag: 'tag A-17', icon: 'i-lucide-server' },
  { title: 'Generador', detail: 'Sala técnica', tag: 'tag C-21', icon: 'i-lucide-zap' }
]
</script>

<style scoped>

/* ════════════════════════════════
   SECTION SHELL
════════════════════════════════ */

/* Mobile: single column — same diagram, scaled down */
.sfw-desktop {
  display: flex;
  flex-direction: column;
  gap: 36px;
  padding: 40px 20px 52px;
}
.sfw-mobile { display: none; }

@media (min-width: 1024px) {
  .sfw-desktop {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0 56px;
    align-items: start;
    max-width: 1200px;
    margin: 0 auto;
    padding: 72px 40px 72px 40px;
  }

  .sfw-left {
    padding-top: 0 !important;
    margin-top: 0 !important;
  }
}

/* ── Right column: title + cards ── */
.sfw-left {
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding-right: 0;
  padding-top: 0;
  margin-top: 0;
  align-self: start;
}

.sfw-title {
  margin: 0;
  margin-block-start: 0;
  margin-block-end: 0;
  padding: 0;
  font-family: inherit;
  font-style: normal;
  font-size: clamp(1.6rem, 2.4vw, 2.4rem);
  font-weight: 600;
  line-height: 1.25;
  letter-spacing: -0.01em;
  color: #020617;
}

.sfw-typing {
  color: #0284c7;
}

.sfw-cursor {
  display: inline-block;
  color: #0284c7;
  font-weight: 300;
  margin-left: 1px;
  opacity: 1;
}

.sfw-cursor--blink {
  animation: cursor-blink 0.8s step-end infinite;
}

@keyframes cursor-blink {
  0%, 100% { opacity: 1; }
  50%       { opacity: 0; }
}

.sfw-static {
  color: #020617;
}

.sfw-cards {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
}

.sfw-card {
  padding: 18px;
  border: 1px solid #e2e8f0;
  border-radius: 14px;
  background: #fff;
  box-shadow: 0 2px 12px rgb(15 23 42 / 0.05);
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.sfw-card-icon {
  width: 34px;
  height: 34px;
  border-radius: 9px;
  display: grid;
  place-items: center;
  flex-shrink: 0;
}

.sfw-card-icon--blue {
  background: #f0f9ff;
  color: #0284c7;
}

.sfw-card-icon--amber {
  background: #fffbeb;
  color: #b45309;
}

.sfw-card-title {
  font-size: 13px;
  font-weight: 700;
  color: #020617;
  margin: 0;
  line-height: 1.3;
}

.sfw-card-desc {
  font-size: 12px;
  color: #64748b;
  line-height: 1.6;
  margin: 0;
}

/* ── Right: diagram column ── */
.sfw-right { width: 100%; }

/* ════════════════════════════════
   DIAGRAM — normal flow, no absolute
════════════════════════════════ */

.diag-wrap {
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: 0;
  max-width: 420px;
  margin-left: 0;
  margin-right: auto;
  width: 100%;
}

/* Mobile: scale the diagram to fit the screen */
@media (max-width: 1023px) {
  .diag-wrap {
    zoom: 0.78;
    margin: 0 auto;
    transform-origin: top center;
  }
}

/* 2-column asset grid */
.diag-assets {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 12px;
}

/* ── Asset cards ── */
.da-card {
  position: relative;
  padding: 14px;
  padding-bottom: 20px; /* space so chip doesn't clip content */
  border: 1px solid #e2e8f0;
  border-radius: 16px;
  background: #fff;
  box-shadow: 0 2px 16px rgb(15 23 42 / 0.07);
  margin-bottom: 8px; /* room for the overhanging chip */
}

.da-body {
  display: flex;
  align-items: center;
  gap: 10px;
}

.da-icon-wrap {
  width: 40px;
  height: 40px;
  border-radius: 10px;
  background: #f0f9ff;
  color: #0369a1;
  display: grid;
  place-items: center;
  flex-shrink: 0;
}

.da-name {
  font-size: 14px;
  font-weight: 700;
  color: #020617;
  margin: 0 0 2px;
  line-height: 1.2;
}

.da-loc {
  font-size: 11px;
  color: #94a3b8;
  margin: 0;
}

/* Tag chip: overlaps the bottom edge of the card */
.da-tag-chip {
  position: absolute;
  bottom: -13px;
  left: 50%;
  transform: translateX(-50%);
  display: inline-flex;
  align-items: center;
  gap: 4px;
  padding: 4px 10px;
  background: #f0f9ff;
  border: 1px solid #bae6fd;
  border-radius: 999px;
  color: #0369a1;
  font-size: 10px;
  font-weight: 700;
  white-space: nowrap;
  box-shadow: 0 2px 8px rgb(14 165 233 / 0.15);
  z-index: 2;
  font-family: system-ui, sans-serif;
}

/* Keep these for other nodes that still use them */
.diag-icon {
  width: 40px;
  height: 40px;
  border-radius: 10px;
  display: grid;
  place-items: center;
  flex-shrink: 0;
}

.diag-icon-sky   { background: #f0f9ff; color: #0369a1; }
.diag-icon-cyan  { background: #ecfeff; color: #0e7490; }
.diag-icon-slate { background: #f1f5f9; color: #475569; }
.diag-icon-brand { background: #f8fafc; border: 1px solid #e2e8f0; }

.diag-kicker {
  font-size: 10px;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.07em;
  color: #0284c7;
  margin: 0 0 2px;
  line-height: 1;
}

/* Funnel SVG — height:auto keeps aspect ratio so dots stay circular */
.diag-funnel {
  margin-top: 4px;
  width: 100%;
  height: auto;
  display: block;
}

.df-path {
  stroke: #7dd3fc;
  stroke-width: 2.5;
  stroke-dasharray: 8 14;
  animation: df-flow 2.4s linear infinite;
  filter: drop-shadow(0 0 4px rgb(14 165 233 / 0.22));
}

.df-dot {
  fill: #0284c7;
  filter: drop-shadow(0 0 6px rgb(14 165 233 / 0.5));
}

@keyframes df-flow {
  from { stroke-dashoffset: 0; }
  to   { stroke-dashoffset: -22; }
}

/* Centered node rows */
.diag-center-row {
  display: flex;
  justify-content: center;
}

.diag-node {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 14px 18px;
  border: 1px solid #e2e8f0;
  border-radius: 16px;
  background: #fff;
  box-shadow: 0 6px 24px rgb(15 23 42 / 0.07);
}

.diag-node-label {
  font-size: 16px;
  font-weight: 700;
  color: #020617;
  white-space: nowrap;
}

.diag-node-circle {
  width: 64px;
  height: 64px;
  border-radius: 50%;
  background: #ecfeff;
  border: 2px solid #a5f3fc;
  color: #0e7490;
  display: grid;
  place-items: center;
  box-shadow: 0 0 0 6px rgb(14 165 233 / 0.08), 0 6px 20px rgb(14 165 233 / 0.12);
}
.diag-node-asetio  { width: 300px; padding: 16px 20px; }
.diag-node-empresa { width: 220px; padding: 16px 20px; }

/* ── Cross layout: CSS-only, no SVG ── */
.diag-cross-wrap {
  position: relative;
  display: flex;
  align-items: center;
  padding: 32px 0 28px;
}

/* Vertical amber solid line — absolutely centered, full height of wrapper */
.diag-cross-vline {
  position: absolute;
  left: 50%;
  top: 0;
  bottom: 0;
  width: 2px;
  transform: translateX(-50%);
  background: linear-gradient(to bottom, #fde68a, #f59e0b);
  opacity: 0.5;
}

/* Amber pulse traveler on the cross vertical line — same 1.6s cycle as connector */
.diag-amber-vdot {
  position: absolute;
  left: 50%;
  top: 0%;
  transform: translateX(-50%);
  width: 9px;
  height: 9px;
  border-radius: 50%;
  background: #f59e0b;
  box-shadow: 0 0 0 3px rgb(245 158 11 / 0.25), 0 0 8px rgb(245 158 11 / 0.5);
  z-index: 2;
  animation: amber-vtravel 1.6s linear infinite;
  pointer-events: none;
}

@keyframes amber-vtravel {
  0%   { top: 0%;   opacity: 0; }
  8%   { top: 4%;   opacity: 1; }
  88%  { top: 96%;  opacity: 1; }
  100% { top: 100%; opacity: 0; }
}

/* Amber short connector below cross */
.dvc-amber-short {
  height: 16px !important;
}

/* Horizontal row: [icon][hline][dot][hline][icon] */
.diag-cross-hrow {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  gap: 0;
  position: relative;
  z-index: 1;
}

.diag-cross-hline {
  width: 36px;
  flex-shrink: 0;
  height: 2px;
  background: linear-gradient(to right, #fde68a, #f59e0b);
  opacity: 0.7;
}

.diag-cross-dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: #f59e0b;
  box-shadow: 0 0 0 4px rgb(245 158 11 / 0.18);
  flex-shrink: 0;
  z-index: 2;
}

/* Channel cards inside the cross row */
.diag-channels {
  display: flex;
  justify-content: center;
  gap: 16px;
}

.diag-channel-icon {
  width: 52px;
  height: 52px;
  border-radius: 50%;
  display: grid;
  place-items: center;
  flex-shrink: 0;
  box-shadow: 0 4px 14px rgb(15 23 42 / 0.08);
  position: relative;
  z-index: 1; /* sit above the hlines */
}

.diag-channel-email {
  background: #eff6ff;
  color: #1d4ed8;
  border: 1.5px solid #bfdbfe;
}

.diag-channel-push {
  background: #f0fdf4;
  color: #15803d;
  border: 1.5px solid #bbf7d0;
}


/* Asetio: row — equal icons flanking centered text */
.diag-node-icons {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  width: 100%;
}

/* Empresa: column, all centered */
.diag-node-centered {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
  width: 100%;
  text-align: center;
}

/* Equal-size icon containers */
.diag-icon-eq {
  width: 36px;
  height: 36px;
  border-radius: 9px;
  display: grid;
  place-items: center;
  flex-shrink: 0;
}

.diag-icon-bell {
  background: #fffbeb;
  border: 1px solid #fde68a;
}

/* Vertical connectors between nodes */
.diag-vconn {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0;
}

/* Gateway → Asetio connector */
.diag-vconn-gw {
  position: relative;
}

.dvc-line {
  width: 2px;
  height: 28px;
  background: linear-gradient(to bottom, #bae6fd, #7dd3fc);
  border-radius: 0;
}

/* Single seamless line for gateway→Asetio */
.dvc-line-single {
  height: 56px;
}

/* Traveler dot: synced to 2.4s cycle, fires at 70% matching funnel fade-out */
.dvc-traveler {
  position: absolute;
  width: 9px;
  height: 9px;
  border-radius: 50%;
  background: #0284c7;
  left: 50%;
  transform: translateX(-50%);
  top: 0;
  box-shadow:
    0 0 0 3px rgb(14 165 233 / 0.25),
    0 0 10px rgb(14 165 233 / 0.55);
  animation: gw-travel 2.4s linear infinite;
  pointer-events: none;
}

@keyframes gw-travel {
  0%   { top: 0px;  opacity: 0; }
  69%  { top: 0px;  opacity: 0; }
  74%  { top: 4px;  opacity: 1; }
  94%  { top: 52px; opacity: 1; }
  100% { top: 56px; opacity: 0; }
}

.dvc-dot {
  width: 9px; height: 9px;
  border-radius: 50%;
  background: #0284c7;
  box-shadow: 0 0 0 3px rgb(14 165 233 / 0.2);
  animation: vconn-pulse 1.6s ease-in-out infinite;
}

@keyframes vconn-pulse {
  0%, 100% { box-shadow: 0 0 0 3px rgb(14 165 233 / 0.2); }
  50%       { box-shadow: 0 0 0 6px rgb(14 165 233 / 0.08); }
}

/* Amber variants for connectors below Asetio */
.dvc-amber {
  background: linear-gradient(to bottom, #fde68a, #f59e0b);
  opacity: 0.5;
}


/* ════════════════════════════════
   MOBILE FLOW
════════════════════════════════ */

.sfw-mobile-header {
  max-width: 560px;
  margin: 0 auto;
  padding-bottom: 28px;
}

.mobile-flow {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0;
}

.m-assets {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
  width: 100%;
  max-width: 420px;
}

.m-asset-card {
  display: flex;
  flex-direction: column;
  gap: 5px;
  padding: 12px 10px;
  border: 1px solid #e2e8f0;
  border-radius: 14px;
  background: #fff;
  box-shadow: 0 4px 14px rgb(15 23 42 / 0.06);
}

.m-card {
  width: 100%;
  max-width: 480px;
  border: 1px solid #e2e8f0;
  border-radius: 16px;
  background: #fff;
  box-shadow: 0 6px 20px rgb(15 23 42 / 0.07);
  padding: 14px 16px;
}

.m-card-row {
  display: flex;
  align-items: center;
  gap: 12px;
}

.m-node-icon {
  display: grid;
  place-items: center;
  width: 36px; height: 36px;
  border-radius: 9px;
  flex-shrink: 0;
}

.m-icon-sky   { background: #f0f9ff; color: #0369a1; }
.m-icon-cyan  { background: #ecfeff; color: #0e7490; }
.m-icon-slate { background: #f1f5f9; color: #475569; }
.m-icon-brand { background: #f8fafc; border: 1px solid #e2e8f0; }

.m-gw-circle {
  width: 52px;
  height: 52px;
  border-radius: 50%;
  background: #ecfeff;
  border: 2px solid #a5f3fc;
  color: #0e7490;
  display: grid;
  place-items: center;
  box-shadow: 0 0 0 5px rgb(14 165 233 / 0.08);
}

.m-kicker {
  font-size: 10px;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: #0284c7;
  line-height: 1;
  margin: 0;
}

.m-title-sm {
  font-size: 13px;
  font-weight: 700;
  color: #020617;
  margin: 2px 0 0;
  line-height: 1.3;
}

.m-title-md {
  font-size: 16px;
  font-weight: 700;
  color: #020617;
  margin: 0;
}

.m-detail-sm {
  font-size: 11px;
  color: #64748b;
  margin: 0;
}

.m-tag {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  padding: 3px 7px;
  border: 1px solid #bae6fd;
  border-radius: 999px;
  background: #f0f9ff;
  color: #0369a1;
  font-size: 10px;
  font-weight: 700;
}

.m-conn {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 3px 0;
}

.m-conn-line {
  width: 2px; height: 12px;
  background: linear-gradient(to bottom, #bae6fd, #7dd3fc);
  border-radius: 1px;
}

.m-conn-dot {
  width: 9px; height: 9px;
  border-radius: 50%;
  background: #0284c7;
  box-shadow: 0 0 0 3px rgb(14 165 233 / 0.18);
  animation: conn-pulse 1.6s ease-in-out infinite;
}

@keyframes conn-pulse {
  0%, 100% { box-shadow: 0 0 0 3px rgb(14 165 233 / 0.18); }
  50%       { box-shadow: 0 0 0 6px rgb(14 165 233 / 0.08); }
}

.m-channels {
  display: flex;
  gap: 12px;
  width: 100%;
  max-width: 480px;
}

.m-channel-card {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 14px 12px;
  border: 1px solid #e2e8f0;
  border-radius: 14px;
  background: #fff;
  box-shadow: 0 4px 14px rgb(15 23 42 / 0.06);
}

.m-channel-icon {
  width: 38px;
  height: 38px;
  border-radius: 50%;
  display: grid;
  place-items: center;
}

.m-ch-email { background: #eff6ff; color: #1d4ed8; border: 1.5px solid #bfdbfe; }
.m-ch-push  { background: #f0fdf4; color: #15803d; border: 1.5px solid #bbf7d0; }

.m-conn-line-amber {
  background: linear-gradient(to bottom, #fde68a, #f59e0b);
}

.m-conn-dot-amber {
  background: #f59e0b;
  box-shadow: 0 0 0 3px rgb(245 158 11 / 0.2);
  animation: conn-pulse-amber 1.6s ease-in-out infinite;
}

@keyframes conn-pulse-amber {
  0%, 100% { box-shadow: 0 0 0 3px rgb(245 158 11 / 0.2); }
  50%       { box-shadow: 0 0 0 6px rgb(245 158 11 / 0.08); }
}

@media (max-width: 420px) {
  .m-assets { gap: 6px; }
  .m-asset-card { padding: 10px 8px; }
}
</style>
