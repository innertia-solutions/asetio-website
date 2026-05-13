<template>
  <section id="monitoreo" class="bg-slate-50 py-16">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

      <!-- Header -->
      <div class="mb-10">
        <p class="text-sm font-semibold text-sky-700">Monitoreo continuo</p>
        <h2 class="mt-2 text-3xl font-semibold text-slate-950">Triangulación BLE en tiempo real</h2>
        <p class="mt-3 max-w-2xl text-sm leading-6 text-slate-600">
          Tres gateways miden la señal de cada tag. Con esos tres valores de distancia, Asetio calcula la posición exacta del activo dentro del espacio monitorizado.
        </p>
      </div>

      <!-- Trilateration diagram -->
      <div class="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
        <svg
          viewBox="0 0 800 440"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          class="w-full"
          aria-label="Diagrama de trilateración BLE: tres círculos de señal convergiendo en la posición del tag"
        >
          <defs>
            <pattern id="tg" width="24" height="24" patternUnits="userSpaceOnUse">
              <circle cx="12" cy="12" r="0.65" fill="#e2e8f0" />
            </pattern>
            <filter id="glow" x="-80%" y="-80%" width="260%" height="260%">
              <feGaussianBlur stdDeviation="4" result="b" />
              <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
            </filter>
            <filter id="softglow" x="-100%" y="-100%" width="300%" height="300%">
              <feGaussianBlur stdDeviation="8" result="b" />
              <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
            </filter>
          </defs>

          <!-- Background -->
          <rect width="800" height="440" fill="#f8fafc" />
          <rect width="800" height="440" fill="url(#tg)" />

          <!-- ══ RANGE CIRCLES (signal radii from each gateway) ══ -->

          <!-- GW-1 circle  center=(150,80)  r=250 -->
          <circle cx="150" cy="80" r="250"
            fill="#0284c7" fill-opacity="0.04"
            stroke="#0284c7" stroke-width="1.5" stroke-opacity="0.18">
            <animate attributeName="stroke-opacity" values="0.18;0.28;0.18"
              dur="3s" repeatCount="indefinite" begin="0s" />
          </circle>

          <!-- GW-2 circle  center=(650,80)  r=320 -->
          <circle cx="650" cy="80" r="320"
            fill="#0369a1" fill-opacity="0.04"
            stroke="#0369a1" stroke-width="1.5" stroke-opacity="0.18">
            <animate attributeName="stroke-opacity" values="0.18;0.28;0.18"
              dur="3s" repeatCount="indefinite" begin="1s" />
          </circle>

          <!-- GW-3 circle  center=(400,340)  r=132 -->
          <circle cx="400" cy="340" r="132"
            fill="#0ea5e9" fill-opacity="0.05"
            stroke="#0ea5e9" stroke-width="1.5" stroke-opacity="0.22">
            <animate attributeName="stroke-opacity" values="0.22;0.35;0.22"
              dur="3s" repeatCount="indefinite" begin="2s" />
          </circle>

          <!-- Intersection highlight (where all 3 circles overlap) -->
          <circle cx="362" cy="213" r="28"
            fill="#0284c7" fill-opacity="0.10" />
          <circle cx="362" cy="213" r="18"
            fill="#0284c7" fill-opacity="0.10" />

          <!-- ══ DISTANCE LINES (GW → Tag, thin & subtle) ══ -->

          <!-- GW1 → tag -->
          <line x1="150" y1="80" x2="362" y2="213"
            stroke="#0284c7" stroke-width="1" stroke-opacity="0.2" stroke-dasharray="4,4" />
          <!-- GW2 → tag -->
          <line x1="650" y1="80" x2="362" y2="213"
            stroke="#0369a1" stroke-width="1" stroke-opacity="0.2" stroke-dasharray="4,4" />
          <!-- GW3 → tag -->
          <line x1="400" y1="340" x2="362" y2="213"
            stroke="#0ea5e9" stroke-width="1" stroke-opacity="0.25" stroke-dasharray="4,4" />

          <!-- Distance labels -->
          <!-- GW1→tag midpoint ≈ (256, 147) -->
          <rect x="218" y="138" width="56" height="18" rx="4" fill="white" fill-opacity="0.9" />
          <text x="246" y="151" text-anchor="middle" font-size="8.5" fill="#0369a1"
            font-family="ui-monospace, monospace">~2.5m  -62dBm</text>

          <!-- GW2→tag midpoint ≈ (506, 147) -->
          <rect x="468" y="138" width="56" height="18" rx="4" fill="white" fill-opacity="0.9" />
          <text x="496" y="151" text-anchor="middle" font-size="8.5" fill="#0369a1"
            font-family="ui-monospace, monospace">~3.2m  -71dBm</text>

          <!-- GW3→tag midpoint ≈ (381, 277) -->
          <rect x="337" y="268" width="56" height="18" rx="4" fill="white" fill-opacity="0.9" />
          <text x="365" y="281" text-anchor="middle" font-size="8.5" fill="#0369a1"
            font-family="ui-monospace, monospace">~1.3m  -58dBm</text>

          <!-- ══ GATEWAY CARDS ══ -->

          <!-- GW-1  x=95 y=54 w=110 h=56 · center=(150,80) -->
          <rect x="95" y="54" width="110" height="56" rx="10"
            fill="white" stroke="#e2e8f0" stroke-width="1" />
          <rect x="105" y="63" width="30" height="30" rx="7" fill="#e0f2fe" />
          <rect x="113" y="83" width="14" height="3" rx="1" fill="#0284c7" />
          <path d="M 115,80 Q 120,75 125,80" stroke="#0284c7" stroke-width="1.5"
            fill="none" stroke-linecap="round" />
          <path d="M 112,77 Q 120,70 128,77" stroke="#0284c7" stroke-width="1.2"
            fill="none" stroke-linecap="round" stroke-opacity="0.6" />
          <circle cx="120" cy="84" r="1.5" fill="#0284c7" />
          <text x="143" y="74" font-size="10" fill="#0f172a"
            font-family="system-ui, sans-serif" font-weight="700">GW-1</text>
          <text x="143" y="87" font-size="8.5" fill="#64748b"
            font-family="system-ui, sans-serif">Zona norte</text>
          <!-- active dot -->
          <circle cx="195" cy="61" r="4" fill="#22c55e" />
          <circle cx="195" cy="61" r="4" fill="#22c55e" fill-opacity="0.4">
            <animate attributeName="r" values="4;8;4" dur="2.2s" repeatCount="indefinite" />
            <animate attributeName="fill-opacity" values="0.4;0;0.4" dur="2.2s" repeatCount="indefinite" />
          </circle>

          <!-- GW-2  x=595 y=54 w=110 h=56 · center=(650,80) -->
          <rect x="595" y="54" width="110" height="56" rx="10"
            fill="white" stroke="#e2e8f0" stroke-width="1" />
          <rect x="605" y="63" width="30" height="30" rx="7" fill="#e0f2fe" />
          <rect x="613" y="83" width="14" height="3" rx="1" fill="#0284c7" />
          <path d="M 615,80 Q 620,75 625,80" stroke="#0284c7" stroke-width="1.5"
            fill="none" stroke-linecap="round" />
          <path d="M 612,77 Q 620,70 628,77" stroke="#0284c7" stroke-width="1.2"
            fill="none" stroke-linecap="round" stroke-opacity="0.6" />
          <circle cx="620" cy="84" r="1.5" fill="#0284c7" />
          <text x="643" y="74" font-size="10" fill="#0f172a"
            font-family="system-ui, sans-serif" font-weight="700">GW-2</text>
          <text x="643" y="87" font-size="8.5" fill="#64748b"
            font-family="system-ui, sans-serif">Zona sur</text>
          <!-- active dot -->
          <circle cx="695" cy="61" r="4" fill="#22c55e" />
          <circle cx="695" cy="61" r="4" fill="#22c55e" fill-opacity="0.4">
            <animate attributeName="r" values="4;8;4" dur="2.2s" repeatCount="indefinite" begin="0.7s" />
            <animate attributeName="fill-opacity" values="0.4;0;0.4" dur="2.2s" repeatCount="indefinite" begin="0.7s" />
          </circle>

          <!-- GW-3  x=345 y=312 w=110 h=56 · center=(400,340) -->
          <rect x="345" y="312" width="110" height="56" rx="10"
            fill="white" stroke="#e2e8f0" stroke-width="1" />
          <rect x="355" y="321" width="30" height="30" rx="7" fill="#e0f2fe" />
          <rect x="363" y="341" width="14" height="3" rx="1" fill="#0284c7" />
          <path d="M 365,338 Q 370,333 375,338" stroke="#0284c7" stroke-width="1.5"
            fill="none" stroke-linecap="round" />
          <path d="M 362,335 Q 370,328 378,335" stroke="#0284c7" stroke-width="1.2"
            fill="none" stroke-linecap="round" stroke-opacity="0.6" />
          <circle cx="370" cy="342" r="1.5" fill="#0284c7" />
          <text x="393" y="331" font-size="10" fill="#0f172a"
            font-family="system-ui, sans-serif" font-weight="700">GW-3</text>
          <text x="393" y="344" font-size="8.5" fill="#64748b"
            font-family="system-ui, sans-serif">Zona central</text>
          <!-- active dot -->
          <circle cx="445" cy="319" r="4" fill="#22c55e" />
          <circle cx="445" cy="319" r="4" fill="#22c55e" fill-opacity="0.4">
            <animate attributeName="r" values="4;8;4" dur="2.2s" repeatCount="indefinite" begin="1.4s" />
            <animate attributeName="fill-opacity" values="0.4;0;0.4" dur="2.2s" repeatCount="indefinite" begin="1.4s" />
          </circle>

          <!-- ══ PINGS (encima de todas las cards) ══ -->
          <circle cx="150" cy="80" r="6" stroke="#0284c7" stroke-width="1.5" fill="none" stroke-opacity="0">
            <animate attributeName="r" values="6;52;6" dur="3s" repeatCount="indefinite" begin="0s" />
            <animate attributeName="stroke-opacity" values="0.45;0;0.45" dur="3s" repeatCount="indefinite" begin="0s" />
          </circle>
          <circle cx="650" cy="80" r="6" stroke="#0284c7" stroke-width="1.5" fill="none" stroke-opacity="0">
            <animate attributeName="r" values="6;52;6" dur="3s" repeatCount="indefinite" begin="1s" />
            <animate attributeName="stroke-opacity" values="0.45;0;0.45" dur="3s" repeatCount="indefinite" begin="1s" />
          </circle>
          <circle cx="400" cy="340" r="6" stroke="#0284c7" stroke-width="1.5" fill="none" stroke-opacity="0">
            <animate attributeName="r" values="6;52;6" dur="3s" repeatCount="indefinite" begin="2s" />
            <animate attributeName="stroke-opacity" values="0.45;0;0.45" dur="3s" repeatCount="indefinite" begin="2s" />
          </circle>

          <!-- ══ TAG — Rack UPS at intersection (362, 213) ══ -->
          <!-- outer pulse -->
          <circle cx="362" cy="213" r="24" stroke="#0284c7" stroke-width="1"
            stroke-dasharray="3,3" fill="none">
            <animate attributeName="r" values="20;32;20" dur="2s" repeatCount="indefinite" />
            <animate attributeName="stroke-opacity" values="0.5;0.1;0.5" dur="2s" repeatCount="indefinite" />
          </circle>
          <!-- dot -->
          <circle cx="362" cy="213" r="11" fill="#0284c7" filter="url(#glow)" />
          <circle cx="362" cy="213" r="5.5" fill="white" />
          <!-- label -->
          <text x="362" y="252" text-anchor="middle" font-size="10.5" fill="#0f172a"
            font-family="system-ui, sans-serif" font-weight="600">Rack UPS</text>
          <text x="362" y="265" text-anchor="middle" font-size="8" fill="#94a3b8"
            font-family="ui-monospace, monospace">tag A-17</text>
          <!-- position badge -->
          <rect x="322" y="271" width="80" height="16" rx="8"
            fill="#0284c7" fill-opacity="0.1" stroke="#bae6fd" stroke-width="1" />
          <text x="362" y="283" text-anchor="middle" font-size="7.5" fill="#0369a1"
            font-family="system-ui, sans-serif" font-weight="600" letter-spacing="0.03em">POSICIÓN ESTIMADA</text>

        </svg>
      </div>

      <!-- Bottom summary -->
      <div id="mantenimiento" class="mt-6 overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
        <div class="grid gap-0 lg:grid-cols-3">
          <div class="border-b border-slate-200 p-5 lg:border-b-0 lg:border-r">
            <p class="text-sm font-semibold text-slate-950">Cada gateway mide distancia</p>
            <p class="mt-2 text-sm text-slate-600">La intensidad de señal (RSSI) se convierte en una estimación de distancia entre el gateway y el tag.</p>
          </div>
          <div class="border-b border-slate-200 p-5 lg:border-b-0 lg:border-r">
            <p class="text-sm font-semibold text-slate-950">Tres círculos, un punto</p>
            <p class="mt-2 text-sm text-slate-600">Asetio calcula dónde se intersectan los tres radios de señal. Ese punto es la posición del activo.</p>
          </div>
          <div class="p-5">
            <p class="text-sm font-semibold text-slate-950">Alerta cuando importa</p>
            <p class="mt-2 text-sm text-slate-600">Si la posición calculada sale de la zona esperada, se genera una alerta con responsable y contexto del activo.</p>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup lang="ts">
</script>
