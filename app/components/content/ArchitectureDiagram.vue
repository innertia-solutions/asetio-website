<template>
  <section id="monitoreo" class="bg-slate-50 py-16">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

      <!-- Header -->
      <div class="mb-10">
        <p class="text-sm font-semibold text-sky-700">Monitoreo automatizado</p>
        <h2 class="mt-2 text-3xl font-semibold text-slate-950">Triangulación BLE en tiempo real</h2>
        <p class="mt-3 max-w-2xl text-sm leading-6 text-slate-600">
          Tres gateways miden la señal de cada tag. Con esos tres valores de distancia, Asetio calcula la posición
          exacta del activo dentro del espacio monitorizado.
        </p>
      </div>

      <!-- Trilateration diagram -->
      <div class="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
        <svg
          viewBox="0 0 800 480"
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
          </defs>

          <!-- Background -->
          <rect width="800" height="480" fill="#f8fafc" />
          <rect width="800" height="480" fill="url(#tg)" />

          <!--
            Positions:
              GW-1 center: (170, 100)   GW-2 center: (630, 100)   GW-3 center: (400, 390)
              Tag: (400, 210)
            Circle radii equal exact distances to tag so all three circles pass through (400,210):
              GW-1 → tag: sqrt(230²+110²) ≈ 255    GW-2 → tag: same ≈ 255    GW-3 → tag: 180
          -->

          <!-- Range circles -->
          <circle cx="170" cy="100" r="255"
            fill="#22c55e" fill-opacity="0.02"
            stroke="#22c55e" stroke-width="1" stroke-opacity="0.12">
            <animate attributeName="stroke-opacity" values="0.12;0.2;0.12" dur="3s" repeatCount="indefinite" begin="0s" />
          </circle>

          <circle cx="630" cy="100" r="255"
            fill="#22c55e" fill-opacity="0.02"
            stroke="#22c55e" stroke-width="1" stroke-opacity="0.12">
            <animate attributeName="stroke-opacity" values="0.12;0.2;0.12" dur="3s" repeatCount="indefinite" begin="1s" />
          </circle>

          <circle cx="400" cy="390" r="180"
            fill="#22c55e" fill-opacity="0.02"
            stroke="#22c55e" stroke-width="1" stroke-opacity="0.14">
            <animate attributeName="stroke-opacity" values="0.14;0.22;0.14" dur="3s" repeatCount="indefinite" begin="2s" />
          </circle>

          <!-- Intersection zone highlight at tag position -->
          <circle cx="400" cy="210" r="30" fill="#22c55e" fill-opacity="0.07" />
          <circle cx="400" cy="210" r="17" fill="#22c55e" fill-opacity="0.08" />

          <!-- Dashed distance lines (GW → tag) -->
          <line x1="170" y1="100" x2="400" y2="210"
            stroke="#0284c7" stroke-width="1.2" stroke-opacity="0.22" stroke-dasharray="5,5" />
          <line x1="630" y1="100" x2="400" y2="210"
            stroke="#0369a1" stroke-width="1.2" stroke-opacity="0.22" stroke-dasharray="5,5" />
          <line x1="400" y1="390" x2="400" y2="210"
            stroke="#0ea5e9" stroke-width="1.2" stroke-opacity="0.28" stroke-dasharray="5,5" />

          <!-- Distance labels -->
          <!-- GW1→tag midpoint (285, 155) -->
          <rect x="237" y="147" width="96" height="18" rx="5"
            fill="white" fill-opacity="0.95" stroke="#e2e8f0" stroke-width="0.8" />
          <text x="285" y="160" text-anchor="middle" font-size="9" fill="#0369a1"
            font-family="ui-monospace, monospace">~2.5 m  −62 dBm</text>

          <!-- GW2→tag midpoint (515, 155) -->
          <rect x="467" y="147" width="96" height="18" rx="5"
            fill="white" fill-opacity="0.95" stroke="#e2e8f0" stroke-width="0.8" />
          <text x="515" y="160" text-anchor="middle" font-size="9" fill="#0369a1"
            font-family="ui-monospace, monospace">~3.2 m  −71 dBm</text>

          <!-- GW3→tag midpoint (400, 300) — placed left of vertical line -->
          <rect x="292" y="295" width="96" height="18" rx="5"
            fill="white" fill-opacity="0.95" stroke="#e2e8f0" stroke-width="0.8" />
          <text x="340" y="308" text-anchor="middle" font-size="9" fill="#0369a1"
            font-family="ui-monospace, monospace">~1.3 m  −58 dBm</text>

          <!-- Ripple waves — expand to full coverage radius, green, fade out -->

          <!-- GW-1 ripples (r → 255) -->
          <circle cx="170" cy="100" fill="none" stroke="#22c55e" stroke-width="1.2">
            <animate attributeName="r" from="10" to="255" dur="3.2s" repeatCount="indefinite" begin="0s" calcMode="spline" keySplines="0.2 0 0.8 1" />
            <animate attributeName="stroke-opacity" from="0.22" to="0" dur="3.2s" repeatCount="indefinite" begin="0s" />
          </circle>
          <circle cx="170" cy="100" fill="none" stroke="#22c55e" stroke-width="1.2">
            <animate attributeName="r" from="10" to="255" dur="3.2s" repeatCount="indefinite" begin="1.6s" calcMode="spline" keySplines="0.2 0 0.8 1" />
            <animate attributeName="stroke-opacity" from="0.22" to="0" dur="3.2s" repeatCount="indefinite" begin="1.6s" />
          </circle>

          <!-- GW-2 ripples (r → 255) -->
          <circle cx="630" cy="100" fill="none" stroke="#22c55e" stroke-width="1.2">
            <animate attributeName="r" from="10" to="255" dur="3.2s" repeatCount="indefinite" begin="0.8s" calcMode="spline" keySplines="0.2 0 0.8 1" />
            <animate attributeName="stroke-opacity" from="0.22" to="0" dur="3.2s" repeatCount="indefinite" begin="0.8s" />
          </circle>
          <circle cx="630" cy="100" fill="none" stroke="#22c55e" stroke-width="1.2">
            <animate attributeName="r" from="10" to="255" dur="3.2s" repeatCount="indefinite" begin="2.4s" calcMode="spline" keySplines="0.2 0 0.8 1" />
            <animate attributeName="stroke-opacity" from="0.22" to="0" dur="3.2s" repeatCount="indefinite" begin="2.4s" />
          </circle>

          <!-- GW-3 ripples (r → 180) -->
          <circle cx="400" cy="390" fill="none" stroke="#22c55e" stroke-width="1.2">
            <animate attributeName="r" from="10" to="180" dur="3.2s" repeatCount="indefinite" begin="1.6s" calcMode="spline" keySplines="0.2 0 0.8 1" />
            <animate attributeName="stroke-opacity" from="0.22" to="0" dur="3.2s" repeatCount="indefinite" begin="1.6s" />
          </circle>
          <circle cx="400" cy="390" fill="none" stroke="#22c55e" stroke-width="1.2">
            <animate attributeName="r" from="10" to="180" dur="3.2s" repeatCount="indefinite" begin="3.2s" calcMode="spline" keySplines="0.2 0 0.8 1" />
            <animate attributeName="stroke-opacity" from="0.22" to="0" dur="3.2s" repeatCount="indefinite" begin="3.2s" />
          </circle>

          <!-- ══ GATEWAY CARDS ══ -->

          <!-- GW-1: card x=115 y=72 w=110 h=56, signal center=(170,100) -->
          <rect x="115" y="72" width="110" height="56" rx="10"
            fill="white" stroke="#e2e8f0" stroke-width="1" />
          <rect x="125" y="82" width="30" height="30" rx="7" fill="#e0f2fe" />
          <rect x="133" y="102" width="14" height="3" rx="1" fill="#0284c7" />
          <path d="M 135,99 Q 140,94 145,99" stroke="#0284c7" stroke-width="1.5" fill="none" stroke-linecap="round" />
          <path d="M 132,96 Q 140,89 148,96" stroke="#0284c7" stroke-width="1.2" fill="none" stroke-linecap="round" stroke-opacity="0.6" />
          <circle cx="140" cy="103" r="1.5" fill="#0284c7" />
          <text x="163" y="92" font-size="10" fill="#0f172a"
            font-family="system-ui, sans-serif" font-weight="700">GW-1</text>
          <text x="163" y="106" font-size="8.5" fill="#64748b"
            font-family="system-ui, sans-serif">Zona norte</text>
          <circle cx="215" cy="79" r="4" fill="#22c55e" />
          <circle cx="215" cy="79" r="4" fill="#22c55e" fill-opacity="0.4">
            <animate attributeName="r" values="4;8;4" dur="2.2s" repeatCount="indefinite" />
            <animate attributeName="fill-opacity" values="0.4;0;0.4" dur="2.2s" repeatCount="indefinite" />
          </circle>

          <!-- GW-2: card x=575 y=72 w=110 h=56, signal center=(630,100) -->
          <rect x="575" y="72" width="110" height="56" rx="10"
            fill="white" stroke="#e2e8f0" stroke-width="1" />
          <rect x="585" y="82" width="30" height="30" rx="7" fill="#e0f2fe" />
          <rect x="593" y="102" width="14" height="3" rx="1" fill="#0284c7" />
          <path d="M 595,99 Q 600,94 605,99" stroke="#0284c7" stroke-width="1.5" fill="none" stroke-linecap="round" />
          <path d="M 592,96 Q 600,89 608,96" stroke="#0284c7" stroke-width="1.2" fill="none" stroke-linecap="round" stroke-opacity="0.6" />
          <circle cx="600" cy="103" r="1.5" fill="#0284c7" />
          <text x="623" y="92" font-size="10" fill="#0f172a"
            font-family="system-ui, sans-serif" font-weight="700">GW-2</text>
          <text x="623" y="106" font-size="8.5" fill="#64748b"
            font-family="system-ui, sans-serif">Zona sur</text>
          <circle cx="675" cy="79" r="4" fill="#22c55e" />
          <circle cx="675" cy="79" r="4" fill="#22c55e" fill-opacity="0.4">
            <animate attributeName="r" values="4;8;4" dur="2.2s" repeatCount="indefinite" begin="0.7s" />
            <animate attributeName="fill-opacity" values="0.4;0;0.4" dur="2.2s" repeatCount="indefinite" begin="0.7s" />
          </circle>

          <!-- GW-3: card x=345 y=362 w=110 h=56, signal center=(400,390) -->
          <rect x="345" y="362" width="110" height="56" rx="10"
            fill="white" stroke="#e2e8f0" stroke-width="1" />
          <rect x="355" y="372" width="30" height="30" rx="7" fill="#e0f2fe" />
          <rect x="363" y="392" width="14" height="3" rx="1" fill="#0284c7" />
          <path d="M 365,389 Q 370,384 375,389" stroke="#0284c7" stroke-width="1.5" fill="none" stroke-linecap="round" />
          <path d="M 362,386 Q 370,379 378,386" stroke="#0284c7" stroke-width="1.2" fill="none" stroke-linecap="round" stroke-opacity="0.6" />
          <circle cx="370" cy="393" r="1.5" fill="#0284c7" />
          <text x="393" y="382" font-size="10" fill="#0f172a"
            font-family="system-ui, sans-serif" font-weight="700">GW-3</text>
          <text x="393" y="395" font-size="8.5" fill="#64748b"
            font-family="system-ui, sans-serif">Zona central</text>
          <circle cx="445" cy="369" r="4" fill="#22c55e" />
          <circle cx="445" cy="369" r="4" fill="#22c55e" fill-opacity="0.4">
            <animate attributeName="r" values="4;8;4" dur="2.2s" repeatCount="indefinite" begin="1.4s" />
            <animate attributeName="fill-opacity" values="0.4;0;0.4" dur="2.2s" repeatCount="indefinite" begin="1.4s" />
          </circle>

          <!-- TAG — Rack UPS asset card at intersection (400, 210) -->

          <!-- Subtle pulse ring behind card -->
          <circle cx="400" cy="210" r="24" stroke="#0284c7" stroke-width="1"
            stroke-dasharray="3,3" fill="none">
            <animate attributeName="r" values="22;40;22" dur="2s" repeatCount="indefinite" />
            <animate attributeName="stroke-opacity" values="0.35;0.06;0.35" dur="2s" repeatCount="indefinite" />
          </circle>

          <!-- Asset card: x=320 y=178 w=160 h=64 rx=12 -->
          <rect x="320" y="178" width="160" height="64" rx="12"
            fill="white" stroke="#e2e8f0" stroke-width="1" />

          <!-- Server / rack icon background -->
          <rect x="330" y="188" width="32" height="32" rx="7" fill="#f0f9ff" />
          <!-- Rack unit rows -->
          <rect x="335" y="193" width="22" height="5" rx="1.5" fill="#0284c7" fill-opacity="0.75" />
          <circle cx="354" cy="195.5" r="1.8" fill="#22c55e" />
          <rect x="335" y="201" width="22" height="5" rx="1.5" fill="#0284c7" fill-opacity="0.5" />
          <circle cx="354" cy="203.5" r="1.8" fill="#22c55e" fill-opacity="0.55" />
          <rect x="335" y="209" width="15" height="5" rx="1.5" fill="#0284c7" fill-opacity="0.28" />

          <!-- Asset name & location -->
          <text x="372" y="199" font-size="10.5" fill="#0f172a"
            font-family="system-ui, sans-serif" font-weight="700">Rack UPS</text>
          <text x="372" y="212" font-size="8.5" fill="#64748b"
            font-family="system-ui, sans-serif">Sala técnica</text>

          <!-- BLE tag chip -->
          <rect x="372" y="217" width="58" height="14" rx="7"
            fill="#f0f9ff" stroke="#bae6fd" stroke-width="1" />
          <text x="401" y="227" text-anchor="middle" font-size="7.5" fill="#0369a1"
            font-family="ui-monospace, monospace" font-weight="600">tag A-17</text>

          <!-- Active dot top-right corner -->
          <circle cx="470" cy="185" r="4" fill="#22c55e" />
          <circle cx="470" cy="185" r="4" fill="#22c55e" fill-opacity="0.4">
            <animate attributeName="r" values="4;8;4" dur="2.2s" repeatCount="indefinite" begin="0.3s" />
            <animate attributeName="fill-opacity" values="0.4;0;0.4" dur="2.2s" repeatCount="indefinite" begin="0.3s" />
          </circle>

          <!-- POSICIÓN ESTIMADA badge below card -->
          <rect x="338" y="249" width="124" height="16" rx="8"
            fill="#0284c7" fill-opacity="0.1" stroke="#bae6fd" stroke-width="1" />
          <text x="400" y="261" text-anchor="middle" font-size="7.5" fill="#0369a1"
            font-family="system-ui, sans-serif" font-weight="700" letter-spacing="0.04em">POSICIÓN ESTIMADA</text>

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
            <p class="text-sm font-semibold text-slate-950">Incidencia cuando importa</p>
            <p class="mt-2 text-sm text-slate-600">Si la posición calculada sale de la zona esperada, se genera una incidencia con responsable y contexto del activo.</p>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup lang="ts">
</script>
