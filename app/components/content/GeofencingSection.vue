<template>
  <section id="geocerca" class="bg-white py-16">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

      <!-- Header -->
      <div class="mb-10">
        <p class="text-sm font-semibold text-amber-600">Gestión de incidencias</p>
        <h2 class="mt-2 text-3xl font-semibold text-slate-950">Activos con restricción</h2>
        <p class="mt-3 max-w-2xl text-sm leading-6 text-slate-600">
          Sin GPS, sin cámaras. Marca un gateway como cerco, configura qué tags están restringidos ahí,
          y Asetio dispara la alerta cada vez que uno aparece en esa zona.
        </p>
      </div>

      <!-- Geofencing diagram -->
      <div class="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
        <svg viewBox="0 0 800 400" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-full"
          aria-label="Diagrama de geocerca BLE: gateways habilitados y gateway cerco con tag restringido detectado">
          <defs>
            <pattern id="gc-grid" width="24" height="24" patternUnits="userSpaceOnUse">
              <circle cx="12" cy="12" r="0.65" fill="#e2e8f0" />
            </pattern>
          </defs>

          <!-- Background -->
          <rect width="800" height="400" fill="#f8fafc" />
          <rect width="800" height="400" fill="url(#gc-grid)" />

          <!-- Cerco zone tint (right half) -->
          <rect x="400" y="0" width="400" height="400" fill="#fffbeb" fill-opacity="0.7" />

          <!-- Zone divider dashed line -->
          <line x1="400" y1="0" x2="400" y2="400"
            stroke="#f59e0b" stroke-width="1.5" stroke-opacity="0.5" stroke-dasharray="8,5" />

          <!-- Zone labels -->
          <text x="200" y="36" text-anchor="middle" font-size="9" fill="#94a3b8"
            font-family="system-ui, sans-serif" font-weight="700" letter-spacing="0.08em">ZONA HABILITADA</text>
          <text x="600" y="36" text-anchor="middle" font-size="9" fill="#b45309"
            font-family="system-ui, sans-serif" font-weight="700" letter-spacing="0.08em">CERCO ACTIVO</text>

          <!-- GW-1 safe circle -->
          <circle cx="150" cy="130" r="130"
            fill="#22c55e" fill-opacity="0.025" stroke="#22c55e" stroke-width="1" stroke-opacity="0.1">
            <animate attributeName="stroke-opacity" values="0.1;0.18;0.1" dur="3s" repeatCount="indefinite" begin="0s" />
          </circle>
          <!-- GW-2 safe circle -->
          <circle cx="150" cy="310" r="120"
            fill="#22c55e" fill-opacity="0.025" stroke="#22c55e" stroke-width="1" stroke-opacity="0.1">
            <animate attributeName="stroke-opacity" values="0.1;0.18;0.1" dur="3s" repeatCount="indefinite" begin="1s" />
          </circle>
          <!-- GW-Cerco alarm circle -->
          <circle cx="650" cy="160" r="170"
            fill="#f59e0b" fill-opacity="0.04" stroke="#f59e0b" stroke-width="1" stroke-opacity="0.2">
            <animate attributeName="stroke-opacity" values="0.2;0.4;0.2" dur="1.5s" repeatCount="indefinite" />
          </circle>
          <!-- GW-Cerco ripple -->
          <circle cx="650" cy="160" fill="none" stroke="#ef4444" stroke-width="1.2">
            <animate attributeName="r" from="12" to="170" dur="2.2s" repeatCount="indefinite" begin="0s" calcMode="spline" keySplines="0.2 0 0.8 1" />
            <animate attributeName="stroke-opacity" from="0.3" to="0" dur="2.2s" repeatCount="indefinite" begin="0s" />
          </circle>
          <circle cx="650" cy="160" fill="none" stroke="#ef4444" stroke-width="1.2">
            <animate attributeName="r" from="12" to="170" dur="2.2s" repeatCount="indefinite" begin="1.1s" calcMode="spline" keySplines="0.2 0 0.8 1" />
            <animate attributeName="stroke-opacity" from="0.3" to="0" dur="2.2s" repeatCount="indefinite" begin="1.1s" />
          </circle>

          <!-- GW-1 ripple (safe) -->
          <circle cx="150" cy="130" fill="none" stroke="#22c55e" stroke-width="1.2">
            <animate attributeName="r" from="10" to="130" dur="3.2s" repeatCount="indefinite" begin="0s" calcMode="spline" keySplines="0.2 0 0.8 1" />
            <animate attributeName="stroke-opacity" from="0.22" to="0" dur="3.2s" repeatCount="indefinite" begin="0s" />
          </circle>
          <circle cx="150" cy="130" fill="none" stroke="#22c55e" stroke-width="1.2">
            <animate attributeName="r" from="10" to="130" dur="3.2s" repeatCount="indefinite" begin="1.6s" calcMode="spline" keySplines="0.2 0 0.8 1" />
            <animate attributeName="stroke-opacity" from="0.22" to="0" dur="3.2s" repeatCount="indefinite" begin="1.6s" />
          </circle>
          <!-- GW-2 ripple (safe) -->
          <circle cx="150" cy="310" fill="none" stroke="#22c55e" stroke-width="1.2">
            <animate attributeName="r" from="10" to="120" dur="3.2s" repeatCount="indefinite" begin="1.6s" calcMode="spline" keySplines="0.2 0 0.8 1" />
            <animate attributeName="stroke-opacity" from="0.22" to="0" dur="3.2s" repeatCount="indefinite" begin="1.6s" />
          </circle>
          <circle cx="150" cy="310" fill="none" stroke="#22c55e" stroke-width="1.2">
            <animate attributeName="r" from="10" to="120" dur="3.2s" repeatCount="indefinite" begin="3.2s" calcMode="spline" keySplines="0.2 0 0.8 1" />
            <animate attributeName="stroke-opacity" from="0.22" to="0" dur="3.2s" repeatCount="indefinite" begin="3.2s" />
          </circle>

          <!-- Dashed path: tag came from safe zone -->
          <line x1="280" y1="222" x2="460" y2="222"
            stroke="#f59e0b" stroke-width="1.2" stroke-opacity="0.5" stroke-dasharray="5,4" />
          <polygon points="460,218 470,222 460,226" fill="#f59e0b" fill-opacity="0.5" />

          <!-- GW-1: Entrada -->
          <rect x="95" y="102" width="110" height="56" rx="10" fill="white" stroke="#e2e8f0" stroke-width="1" />
          <rect x="105" y="112" width="30" height="30" rx="7" fill="#e0f2fe" />
          <rect x="113" y="132" width="14" height="3" rx="1" fill="#0284c7" />
          <path d="M 115,129 Q 120,124 125,129" stroke="#0284c7" stroke-width="1.5" fill="none" stroke-linecap="round" />
          <path d="M 112,126 Q 120,119 128,126" stroke="#0284c7" stroke-width="1.2" fill="none" stroke-linecap="round" stroke-opacity="0.6" />
          <circle cx="120" cy="133" r="1.5" fill="#0284c7" />
          <text x="143" y="122" font-size="10" fill="#0f172a" font-family="system-ui, sans-serif" font-weight="700">GW-1</text>
          <text x="143" y="136" font-size="8.5" fill="#64748b" font-family="system-ui, sans-serif">Entrada</text>
          <circle cx="195" cy="109" r="4" fill="#22c55e" />
          <circle cx="195" cy="109" r="4" fill="#22c55e" fill-opacity="0.4">
            <animate attributeName="r" values="4;8;4" dur="2.2s" repeatCount="indefinite" />
            <animate attributeName="fill-opacity" values="0.4;0;0.4" dur="2.2s" repeatCount="indefinite" />
          </circle>

          <!-- GW-2: Producción -->
          <rect x="95" y="282" width="110" height="56" rx="10" fill="white" stroke="#e2e8f0" stroke-width="1" />
          <rect x="105" y="292" width="30" height="30" rx="7" fill="#e0f2fe" />
          <rect x="113" y="312" width="14" height="3" rx="1" fill="#0284c7" />
          <path d="M 115,309 Q 120,304 125,309" stroke="#0284c7" stroke-width="1.5" fill="none" stroke-linecap="round" />
          <path d="M 112,306 Q 120,299 128,306" stroke="#0284c7" stroke-width="1.2" fill="none" stroke-linecap="round" stroke-opacity="0.6" />
          <circle cx="120" cy="313" r="1.5" fill="#0284c7" />
          <text x="143" y="302" font-size="10" fill="#0f172a" font-family="system-ui, sans-serif" font-weight="700">GW-2</text>
          <text x="143" y="316" font-size="8.5" fill="#64748b" font-family="system-ui, sans-serif">Producción</text>
          <circle cx="195" cy="289" r="4" fill="#22c55e" />
          <circle cx="195" cy="289" r="4" fill="#22c55e" fill-opacity="0.4">
            <animate attributeName="r" values="4;8;4" dur="2.2s" repeatCount="indefinite" begin="0.7s" />
            <animate attributeName="fill-opacity" values="0.4;0;0.4" dur="2.2s" repeatCount="indefinite" begin="0.7s" />
          </circle>

          <!-- GW-Cerco: Bodega A — ALARM -->
          <rect x="595" y="132" width="120" height="56" rx="10" fill="white" stroke="#fca5a5" stroke-width="1.5" />
          <rect x="605" y="142" width="30" height="30" rx="7" fill="#fef2f2" />
          <rect x="613" y="162" width="14" height="3" rx="1" fill="#ef4444" />
          <path d="M 615,159 Q 620,154 625,159" stroke="#ef4444" stroke-width="1.5" fill="none" stroke-linecap="round" />
          <path d="M 612,156 Q 620,149 628,156" stroke="#ef4444" stroke-width="1.2" fill="none" stroke-linecap="round" stroke-opacity="0.6" />
          <circle cx="620" cy="163" r="1.5" fill="#ef4444" />
          <text x="643" y="152" font-size="9" fill="#b45309" font-family="system-ui, sans-serif" font-weight="800" letter-spacing="0.02em">CERCO</text>
          <text x="643" y="165" font-size="10" fill="#0f172a" font-family="system-ui, sans-serif" font-weight="700">Bodega A</text>
          <circle cx="705" cy="139" r="4" fill="#ef4444" />
          <circle cx="705" cy="139" r="4" fill="#ef4444" fill-opacity="0.4">
            <animate attributeName="r" values="4;9;4" dur="1s" repeatCount="indefinite" />
            <animate attributeName="fill-opacity" values="0.4;0;0.4" dur="1s" repeatCount="indefinite" />
          </circle>

          <!-- Restricted tag card (in cerco zone) -->
          <circle cx="530" cy="222" r="30" stroke="#ef4444" stroke-width="1" stroke-dasharray="3,3" fill="none">
            <animate attributeName="r" values="28;46;28" dur="2s" repeatCount="indefinite" />
            <animate attributeName="stroke-opacity" values="0.3;0.05;0.3" dur="2s" repeatCount="indefinite" />
          </circle>
          <rect x="450" y="190" width="160" height="64" rx="12" fill="white" stroke="#fca5a5" stroke-width="1.5" />
          <rect x="460" y="200" width="32" height="32" rx="7" fill="#fef2f2" />
          <rect x="465" y="205" width="22" height="5" rx="1.5" fill="#ef4444" fill-opacity="0.6" />
          <rect x="465" y="213" width="22" height="5" rx="1.5" fill="#ef4444" fill-opacity="0.4" />
          <rect x="465" y="221" width="14" height="5" rx="1.5" fill="#ef4444" fill-opacity="0.25" />
          <text x="502" y="212" font-size="10.5" fill="#0f172a" font-family="system-ui, sans-serif" font-weight="700">Laptop Dell</text>
          <text x="502" y="225" font-size="8.5" fill="#64748b" font-family="system-ui, sans-serif">Activo restringido</text>
          <rect x="502" y="230" width="58" height="14" rx="7" fill="#fef2f2" stroke="#fca5a5" stroke-width="1" />
          <text x="531" y="240" text-anchor="middle" font-size="7.5" fill="#dc2626"
            font-family="ui-monospace, monospace" font-weight="600">tag C-21</text>

          <!-- Alert card -->
          <rect x="440" y="290" width="280" height="62" rx="12" fill="white" stroke="#fca5a5" stroke-width="1.5" />
          <rect x="452" y="303" width="30" height="30" rx="8" fill="#fef2f2" />
          <text x="467" y="323" text-anchor="middle" font-size="11" fill="#dc2626"
            font-family="system-ui, sans-serif" font-weight="900">P2</text>
          <text x="492" y="314" font-size="9.5" fill="#0f172a" font-family="system-ui, sans-serif" font-weight="700">Tag detectado en cerco</text>
          <text x="492" y="328" font-size="8.5" fill="#64748b" font-family="system-ui, sans-serif">tag C-21 · Bodega A · ahora</text>
          <rect x="688" y="303" width="30" height="30" rx="8" fill="#fffbeb" />
          <path d="M 703,310 C 700,310 698,312 698,315 L 698,320 L 695,320 L 695,322 L 711,322 L 711,320 L 708,320 L 708,315 C 708,312 706,310 703,310 Z"
            fill="#d97706" fill-opacity="0.8" />
          <circle cx="703" cy="324" r="2" fill="#d97706" fill-opacity="0.8" />

        </svg>
      </div>

      <!-- Bottom summary -->
      <div class="mt-6 overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
        <div class="grid gap-0 lg:grid-cols-3">
          <div v-for="(item, i) in useCases" :key="item.title"
            class="p-5"
            :class="i < useCases.length - 1 ? 'border-b border-slate-200 lg:border-b-0 lg:border-r' : ''">
            <p class="text-sm font-semibold text-slate-950">{{ item.title }}</p>
            <p class="mt-2 text-sm text-slate-600">{{ item.description }}</p>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup lang="ts">
const useCases = [
  {
    title: 'Activos que no deben salir',
    description: 'Laptop, herramienta especializada o equipo de valor detectado en gateway "Portería" fuera de horario genera alerta inmediata.',
  },
  {
    title: 'Zonas de acceso restringido',
    description: 'Activos o materiales que no deben ingresar a salas técnicas, bodegas críticas o áreas de riesgo quedan vigilados sin cámaras.',
  },
  {
    title: 'Presencia fuera de horario',
    description: 'Cualquier tag detectado en un gateway marcado como cerco fuera del horario permitido genera un caso de alerta automáticamente.',
  },
]
</script>
