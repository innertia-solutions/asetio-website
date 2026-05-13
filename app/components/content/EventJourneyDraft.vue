<!--
  BORRADOR — EventJourneyDraft.vue
  Diagrama: cómo un evento de tag BLE viaja hasta convertirse en alerta en el teléfono.
  Sin animaciones, diseño tipo blueprint/técnico, full-ancho.
-->
<template>
  <section class="journey-section">
    <div class="journey-header">
      <p class="journey-eyebrow terminal-font">[ trazabilidad end-to-end ]</p>
      <h2 class="journey-title">Un tag en terreno.<br>Tu equipo alertado en segundos.</h2>
      <p class="journey-desc">Sin intervención manual. Cada evento recorre este camino y termina en la persona correcta, con el contexto correcto.</p>
    </div>

    <!-- Full-width diagram -->
    <div class="journey-diagram" aria-label="Diagrama de flujo de evento BLE a alerta">
      <svg
        viewBox="0 0 1400 280"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        class="journey-svg"
        role="img"
        aria-hidden="true"
      >
        <defs>
          <!-- Arrow marker -->
          <marker id="arr" markerWidth="10" markerHeight="10" refX="8" refY="5" orient="auto">
            <path d="M1 1L9 5L1 9" stroke="#94a3b8" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
          </marker>
          <!-- Alert arrow marker (amber) -->
          <marker id="arr-alert" markerWidth="10" markerHeight="10" refX="8" refY="5" orient="auto">
            <path d="M1 1L9 5L1 9" stroke="#f59e0b" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
          </marker>
          <!-- Grid pattern -->
          <pattern id="grid" width="28" height="28" patternUnits="userSpaceOnUse">
            <path d="M 28 0 L 0 0 0 28" fill="none" stroke="#e2e8f0" stroke-width="0.5"/>
          </pattern>
        </defs>

        <!-- Background grid -->
        <rect width="1400" height="280" fill="url(#grid)" />
        <rect width="1400" height="280" fill="url(#linear-fade)" />

        <!-- ── STEP 1: Tag BLE ── x=80 -->
        <g transform="translate(70, 80)">
          <!-- Node box -->
          <rect x="0" y="0" width="140" height="110" rx="12" fill="white" stroke="#e2e8f0" stroke-width="1.5"/>
          <!-- Icon circle -->
          <circle cx="70" cy="34" r="22" fill="#f0f9ff" stroke="#bae6fd" stroke-width="1.5"/>
          <!-- Bluetooth icon -->
          <path d="M70 22 L70 46 M70 22 L78 28 L70 34 L78 40 L70 46 M70 34 L62 28 M70 34 L62 40"
            stroke="#0284c7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          <!-- Label -->
          <text x="70" y="72" text-anchor="middle" fill="#0284c7" font-size="9" font-weight="700" font-family="system-ui" letter-spacing="0.08em">TAG BLE</text>
          <text x="70" y="88" text-anchor="middle" fill="#020617" font-size="13" font-weight="700" font-family="system-ui">Rack UPS</text>
          <text x="70" y="102" text-anchor="middle" fill="#64748b" font-size="10" font-family="system-ui">tag A-17 · Sala técnica</text>
        </g>

        <!-- Signal waves from tag -->
        <g opacity="0.5">
          <path d="M222 118 Q232 110 232 135 Q232 160 222 152" stroke="#7dd3fc" stroke-width="1.5" fill="none" stroke-linecap="round"/>
          <path d="M228 112 Q244 103 244 135 Q244 167 228 158" stroke="#7dd3fc" stroke-width="1" fill="none" stroke-linecap="round"/>
        </g>

        <!-- Arrow 1 -->
        <line x1="248" y1="135" x2="298" y2="135" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="5 3" marker-end="url(#arr)"/>
        <text x="273" y="126" text-anchor="middle" fill="#94a3b8" font-size="9" font-family="system-ui">RSSI · UUID</text>

        <!-- ── STEP 2: Gateway ── x=310 -->
        <g transform="translate(300, 80)">
          <rect x="0" y="0" width="140" height="110" rx="12" fill="white" stroke="#e2e8f0" stroke-width="1.5"/>
          <circle cx="70" cy="34" r="22" fill="#ecfeff" stroke="#a5f3fc" stroke-width="1.5"/>
          <!-- Router icon -->
          <rect x="57" y="28" width="26" height="16" rx="3" stroke="#0e7490" stroke-width="1.8" fill="none"/>
          <circle cx="63" cy="36" r="2" fill="#0e7490"/>
          <circle cx="70" cy="36" r="2" fill="#0e7490"/>
          <circle cx="77" cy="36" r="2" fill="#0e7490"/>
          <path d="M70 28 L70 22 M65 24 Q70 20 75 24" stroke="#0e7490" stroke-width="1.5" stroke-linecap="round" fill="none"/>
          <text x="70" y="72" text-anchor="middle" fill="#0e7490" font-size="9" font-weight="700" font-family="system-ui" letter-spacing="0.08em">GATEWAY</text>
          <text x="70" y="88" text-anchor="middle" fill="#020617" font-size="13" font-weight="700" font-family="system-ui">Concentrador</text>
          <text x="70" y="102" text-anchor="middle" fill="#64748b" font-size="10" font-family="system-ui">BLE → MQTT · 4G/WiFi</text>
        </g>

        <!-- Arrow 2 -->
        <line x1="448" y1="135" x2="498" y2="135" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="5 3" marker-end="url(#arr)"/>
        <text x="473" y="126" text-anchor="middle" fill="#94a3b8" font-size="9" font-family="system-ui">MQTT · HTTPS</text>

        <!-- ── STEP 3: Ingestión ── x=510 -->
        <g transform="translate(500, 80)">
          <rect x="0" y="0" width="140" height="110" rx="12" fill="white" stroke="#e2e8f0" stroke-width="1.5"/>
          <circle cx="70" cy="34" r="22" fill="#f0f9ff" stroke="#bae6fd" stroke-width="1.5"/>
          <!-- Cloud/ingest icon -->
          <path d="M58 38 Q58 30 66 28 Q68 22 76 24 Q82 20 86 26 Q92 26 92 34 Q92 40 86 40 L58 40 Q52 40 52 34 Q52 28 58 28" stroke="#0284c7" stroke-width="1.8" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M70 40 L70 48" stroke="#0284c7" stroke-width="1.8" stroke-linecap="round"/>
          <path d="M66 44 L70 48 L74 44" stroke="#0284c7" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
          <text x="70" y="72" text-anchor="middle" fill="#0284c7" font-size="9" font-weight="700" font-family="system-ui" letter-spacing="0.08em">INGESTIÓN</text>
          <text x="70" y="88" text-anchor="middle" fill="#020617" font-size="13" font-weight="700" font-family="system-ui">API Asetio</text>
          <text x="70" y="102" text-anchor="middle" fill="#64748b" font-size="10" font-family="system-ui">Validación · timestamp</text>
        </g>

        <!-- Arrow 3 -->
        <line x1="648" y1="135" x2="698" y2="135" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="5 3" marker-end="url(#arr)"/>
        <text x="673" y="126" text-anchor="middle" fill="#94a3b8" font-size="9" font-family="system-ui">evento raw</text>

        <!-- ── STEP 4: Motor de reglas ── x=710 -->
        <g transform="translate(700, 80)">
          <rect x="0" y="0" width="140" height="110" rx="12" fill="white" stroke="#e2e8f0" stroke-width="1.5"/>
          <circle cx="70" cy="34" r="22" fill="#f0f9ff" stroke="#bae6fd" stroke-width="1.5"/>
          <!-- Brain/rules icon -->
          <path d="M60 34 Q60 24 70 24 Q80 24 80 34" stroke="#0284c7" stroke-width="1.8" fill="none" stroke-linecap="round"/>
          <path d="M60 34 Q56 38 60 42 Q64 46 70 44 Q76 46 80 42 Q84 38 80 34" stroke="#0284c7" stroke-width="1.8" fill="none" stroke-linecap="round"/>
          <line x1="64" y1="30" x2="64" y2="38" stroke="#0284c7" stroke-width="1.5" stroke-linecap="round"/>
          <line x1="70" y1="28" x2="70" y2="40" stroke="#0284c7" stroke-width="1.5" stroke-linecap="round"/>
          <line x1="76" y1="30" x2="76" y2="38" stroke="#0284c7" stroke-width="1.5" stroke-linecap="round"/>
          <text x="70" y="72" text-anchor="middle" fill="#0284c7" font-size="9" font-weight="700" font-family="system-ui" letter-spacing="0.08em">MOTOR</text>
          <text x="70" y="88" text-anchor="middle" fill="#020617" font-size="13" font-weight="700" font-family="system-ui">Reglas Asetio</text>
          <text x="70" y="102" text-anchor="middle" fill="#64748b" font-size="10" font-family="system-ui">Criticidad · zona · estado</text>
        </g>

        <!-- Arrow 4 — AMBER (goes to alert) -->
        <line x1="848" y1="135" x2="898" y2="135" stroke="#f59e0b" stroke-width="2" marker-end="url(#arr-alert)"/>
        <!-- Alert badge on arrow -->
        <rect x="851" y="116" width="42" height="16" rx="8" fill="#fef3c7"/>
        <text x="872" y="127" text-anchor="middle" fill="#b45309" font-size="9" font-weight="700" font-family="system-ui">CRITICO</text>

        <!-- ── STEP 5: Alerta generada ── x=910 -->
        <g transform="translate(900, 70)">
          <rect x="0" y="0" width="150" height="128" rx="12" fill="#fffbeb" stroke="#fcd34d" stroke-width="1.5"/>
          <!-- Alert badge -->
          <rect x="10" y="10" width="56" height="18" rx="9" fill="#fef3c7"/>
          <text x="38" y="22" text-anchor="middle" fill="#b45309" font-size="9" font-weight="700" font-family="system-ui" letter-spacing="0.05em">⚠ ALERTA</text>
          <!-- Bell icon -->
          <circle cx="115" cy="19" r="13" fill="#fef3c7" stroke="#fcd34d" stroke-width="1"/>
          <path d="M115 12 Q119 14 119 18 L121 24 L109 24 L111 18 Q111 14 115 12" stroke="#b45309" stroke-width="1.5" fill="none" stroke-linecap="round"/>
          <path d="M113 24 Q113 26 115 26 Q117 26 117 24" stroke="#b45309" stroke-width="1.5" fill="none" stroke-linecap="round"/>
          <!-- Content -->
          <text x="10" y="48" fill="#020617" font-size="12" font-weight="700" font-family="system-ui">Rack UPS · Sala técnica</text>
          <text x="10" y="64" fill="#64748b" font-size="10" font-family="system-ui">Fuera de zona &gt; 15 min</text>
          <!-- Divider -->
          <line x1="10" y1="76" x2="140" y2="76" stroke="#fcd34d" stroke-width="1"/>
          <!-- Meta -->
          <text x="10" y="92" fill="#92400e" font-size="10" font-weight="600" font-family="system-ui">Responsable</text>
          <text x="10" y="106" fill="#020617" font-size="11" font-weight="700" font-family="system-ui">Carlos M. · Ops</text>
          <text x="10" y="120" fill="#64748b" font-size="10" font-family="system-ui">SLA: 30 min</text>
        </g>

        <!-- Arrow 5 -->
        <line x1="1058" y1="134" x2="1108" y2="134" stroke="#f59e0b" stroke-width="2" marker-end="url(#arr-alert)"/>
        <text x="1083" y="124" text-anchor="middle" fill="#94a3b8" font-size="9" font-family="system-ui">push · email</text>

        <!-- ── STEP 6: Teléfono ── x=1120 -->
        <g transform="translate(1110, 62)">
          <!-- Phone frame -->
          <rect x="20" y="0" width="100" height="160" rx="16" fill="#020617" stroke="#334155" stroke-width="2"/>
          <rect x="26" y="8" width="88" height="132" rx="8" fill="#0f172a"/>
          <!-- Notch -->
          <rect x="50" y="4" width="40" height="8" rx="4" fill="#334155"/>
          <!-- Screen content — notification -->
          <rect x="30" y="18" width="80" height="60" rx="6" fill="#1e293b"/>
          <!-- App icon + title -->
          <rect x="36" y="24" width="20" height="20" rx="5" fill="#0284c7"/>
          <text x="46" y="37" text-anchor="middle" fill="white" font-size="9" font-weight="700" font-family="system-ui">A</text>
          <text x="60" y="30" fill="#94a3b8" font-size="8" font-family="system-ui">Asetio · ahora</text>
          <text x="60" y="41" fill="white" font-size="9" font-weight="700" font-family="system-ui">⚠ Alerta crítica</text>
          <text x="36" y="54" fill="#94a3b8" font-size="8" font-family="system-ui">Rack UPS fuera de zona</text>
          <text x="36" y="64" fill="#94a3b8" font-size="8" font-family="system-ui">Sala técnica · tag A-17</text>
          <!-- Bottom dots -->
          <circle cx="60" cy="152" r="5" fill="#1e293b" stroke="#334155" stroke-width="1"/>
        </g>

        <!-- ── STEP 7: Acción ── x=1250 -->
        <g transform="translate(1240, 80)">
          <rect x="0" y="0" width="130" height="110" rx="12" fill="white" stroke="#e2e8f0" stroke-width="1.5"/>
          <!-- Top bar: resolved -->
          <rect x="0" y="0" width="130" height="28" rx="12" fill="#f0fdf4" stroke="#bbf7d0" stroke-width="0"/>
          <rect x="0" y="16" width="130" height="12" rx="0" fill="#f0fdf4"/>
          <circle cx="22" cy="14" r="8" fill="#dcfce7"/>
          <path d="M18 14 L21 17 L26 11" stroke="#16a34a" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
          <text x="36" y="18" fill="#15803d" font-size="9" font-weight="700" font-family="system-ui">CASO ABIERTO</text>
          <!-- Content -->
          <text x="65" y="52" text-anchor="middle" fill="#020617" font-size="13" font-weight="700" font-family="system-ui">Acción</text>
          <text x="65" y="68" text-anchor="middle" fill="#64748b" font-size="10" font-family="system-ui">Carlos confirma recepción</text>
          <text x="65" y="82" text-anchor="middle" fill="#64748b" font-size="10" font-family="system-ui">Tarea asignada · evidencia</text>
          <text x="65" y="98" text-anchor="middle" fill="#64748b" font-size="10" font-family="system-ui">Historial actualizado</text>
        </g>

        <!-- Step labels row (below nodes) -->
        <g fill="#94a3b8" font-size="10" font-family="system-ui" text-anchor="middle">
          <text x="140" y="215">① Emite señal</text>
          <text x="370" y="215">② Captura BLE</text>
          <text x="570" y="215">③ Ingestión</text>
          <text x="770" y="215">④ Evaluación</text>
          <text x="975" y="215">⑤ Alerta generada</text>
          <text x="1160" y="215">⑥ Notificación</text>
          <text x="1305" y="215">⑦ Cierre trazable</text>
        </g>

        <!-- Timeline bar at bottom -->
        <rect x="70" y="232" width="1270" height="3" rx="1.5" fill="#e2e8f0"/>
        <rect x="70" y="232" width="1270" height="3" rx="1.5" fill="url(#timeline-grad)"/>
        <defs>
          <linearGradient id="timeline-grad" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stop-color="#bae6fd"/>
            <stop offset="60%" stop-color="#0284c7"/>
            <stop offset="100%" stop-color="#16a34a"/>
          </linearGradient>
        </defs>

        <!-- Timeline dots -->
        <circle cx="140" cy="233.5" r="5" fill="#7dd3fc"/>
        <circle cx="370" cy="233.5" r="5" fill="#38bdf8"/>
        <circle cx="570" cy="233.5" r="5" fill="#0ea5e9"/>
        <circle cx="770" cy="233.5" r="5" fill="#0284c7"/>
        <circle cx="975" cy="233.5" r="5" fill="#f59e0b"/>
        <circle cx="1160" cy="233.5" r="5" fill="#fb923c"/>
        <circle cx="1305" cy="233.5" r="5" fill="#16a34a"/>

        <!-- Time labels -->
        <text x="140" y="255" text-anchor="middle" fill="#94a3b8" font-size="9" font-family="system-ui">t=0s</text>
        <text x="370" y="255" text-anchor="middle" fill="#94a3b8" font-size="9" font-family="system-ui">t=1s</text>
        <text x="570" y="255" text-anchor="middle" fill="#94a3b8" font-size="9" font-family="system-ui">t=2s</text>
        <text x="770" y="255" text-anchor="middle" fill="#94a3b8" font-size="9" font-family="system-ui">t=3s</text>
        <text x="975" y="255" text-anchor="middle" fill="#94a3b8" font-size="9" font-family="system-ui">t=4s</text>
        <text x="1160" y="255" text-anchor="middle" fill="#94a3b8" font-size="9" font-family="system-ui">t=5s</text>
        <text x="1305" y="255" text-anchor="middle" fill="#16a34a" font-size="9" font-weight="600" font-family="system-ui">cerrado</text>
      </svg>
    </div>

    <!-- Draft badge -->
    <div class="draft-notice">
      <UIcon name="i-lucide-pencil-ruler" class="size-4" />
      Borrador — sección experimental
    </div>
  </section>
</template>

<style scoped>
.journey-section {
  background: #f8fafc;
  border-top: 1px solid #e2e8f0;
  border-bottom: 1px solid #e2e8f0;
  overflow: hidden;
}

.journey-header {
  max-width: 56rem;
  margin: 0 auto;
  padding: 48px 24px 32px;
  text-align: center;
}

.journey-eyebrow {
  font-size: 12px;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: #0284c7;
  margin: 0 0 10px;
}

.journey-title {
  font-size: clamp(22px, 3vw, 32px);
  font-weight: 700;
  color: #020617;
  margin: 0 0 12px;
  line-height: 1.25;
}

.journey-desc {
  font-size: 15px;
  color: #64748b;
  margin: 0;
  line-height: 1.6;
}

.journey-diagram {
  width: 100%;
  overflow-x: auto;
  padding: 0 0 8px;
  -webkit-overflow-scrolling: touch;
}

.journey-svg {
  display: block;
  width: 100%;
  min-width: 900px;
  height: auto;
}

.draft-notice {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  padding: 10px 24px 20px;
  font-size: 11px;
  color: #94a3b8;
  font-family: system-ui;
}
</style>
