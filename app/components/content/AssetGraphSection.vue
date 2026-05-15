<template>
  <section id="grafo" class="bg-white py-16">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

      <!-- Header -->
      <div class="mb-10">
        <p class="text-sm font-semibold text-asetio-600">Inventario vivo</p>
        <h2 class="mt-2 text-3xl font-semibold text-slate-950">Agrupa y visualiza tu infraestructura</h2>
        <p class="mt-3 max-w-2xl text-sm leading-6 text-slate-600">
          Organiza activos en jerarquías padre-hijo — racks, gabinetes, kits o zonas — y navega por toda tu
          infraestructura como un grafo interactivo. Colapsa grupos, detecta dependencias y actúa con contexto.
        </p>
      </div>

      <!-- Graph mockup -->
      <div class="overflow-hidden rounded-xl border border-slate-200 bg-slate-50 shadow-sm">
        <svg
          viewBox="0 0 860 460"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          class="w-full"
          aria-label="Diagrama de grafo de activos: jerarquía Sistema → Áreas → Activos con líneas de conexión"
        >
          <defs>
            <pattern id="ag-grid" width="24" height="24" patternUnits="userSpaceOnUse">
              <circle cx="12" cy="12" r="0.65" fill="#e2e8f0" />
            </pattern>
            <marker id="ag-arrow" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
              <path d="M0,0 L0,6 L6,3 z" fill="#94a3b8" fill-opacity="0.5" />
            </marker>
          </defs>

          <!-- Background -->
          <rect width="860" height="460" fill="#f8fafc" />
          <rect width="860" height="460" fill="url(#ag-grid)" />

          <!-- ══════════════════════════════════ -->
          <!-- EDGES (behind nodes) -->
          <!-- ══════════════════════════════════ -->

          <!-- Root (right-center 197,191) → Área Norte (left-center 303,126) -->
          <path d="M 197,191 C 250,191 250,126 303,126"
            stroke="#94a3b8" stroke-width="1.5" stroke-opacity="0.6"
            fill="none" marker-end="url(#ag-arrow)">
            <animate attributeName="stroke-opacity" values="0.6;0.9;0.6" dur="4s" repeatCount="indefinite" begin="0s" />
          </path>

          <!-- Root (right-center 197,191) → Área Sur (left-center 303,273) -->
          <path d="M 197,191 C 250,191 250,273 303,273"
            stroke="#94a3b8" stroke-width="1.5" stroke-opacity="0.6"
            fill="none" marker-end="url(#ag-arrow)">
            <animate attributeName="stroke-opacity" values="0.6;0.9;0.6" dur="4s" repeatCount="indefinite" begin="0.5s" />
          </path>

          <!-- Área Norte (right-center 450,126) → UPS Rack (left-center 530,101) -->
          <path d="M 450,126 C 490,126 490,101 530,101"
            stroke="#94a3b8" stroke-width="1.5" stroke-opacity="0.5"
            fill="none" marker-end="url(#ag-arrow)" />

          <!-- Área Norte (right-center 450,126) → Servidor (left-center 530,169) -->
          <path d="M 450,126 C 490,126 490,169 530,169"
            stroke="#94a3b8" stroke-width="1.5" stroke-opacity="0.5"
            fill="none" marker-end="url(#ag-arrow)" />

          <!-- Área Sur (right-center 450,273) → Tablero (left-center 530,251) -->
          <path d="M 450,273 C 490,273 490,251 530,251"
            stroke="#94a3b8" stroke-width="1.5" stroke-opacity="0.5"
            fill="none" marker-end="url(#ag-arrow)" />

          <!-- Área Sur (right-center 450,273) → Compresor (left-center 530,331) -->
          <path d="M 450,273 C 490,273 490,331 530,331"
            stroke="#94a3b8" stroke-width="1.5" stroke-opacity="0.5"
            fill="none" marker-end="url(#ag-arrow)" />

          <!-- UPS Rack (right-center 672,101) → Batería (left-center 735,77) -->
          <path d="M 672,101 C 703,101 703,77 735,77"
            stroke="#94a3b8" stroke-width="1.2" stroke-opacity="0.4"
            fill="none" marker-end="url(#ag-arrow)" />

          <!-- UPS Rack (right-center 672,101) → PDU (left-center 735,128) -->
          <path d="M 672,101 C 703,101 703,128 735,128"
            stroke="#94a3b8" stroke-width="1.2" stroke-opacity="0.4"
            fill="none" marker-end="url(#ag-arrow)" />

          <!-- ══════════════════════════════════ -->
          <!-- NODE: ROOT / SISTEMA -->
          <!-- x=80, y=165, w=117, h=52 -->
          <!-- ══════════════════════════════════ -->
          <rect x="80" y="165" width="117" height="52" rx="10"
            fill="#0f172a" stroke="#1e293b" stroke-width="1" />
          <!-- Icon bg -->
          <rect x="91" y="175" width="28" height="28" rx="6" fill="#1e293b" />
          <!-- Building icon lines -->
          <rect x="97" y="180" width="16" height="18" rx="2" fill="none" stroke="#94a3b8" stroke-width="1.2" />
          <rect x="100" y="184" width="4" height="4" rx="0.5" fill="#94a3b8" fill-opacity="0.7" />
          <rect x="106" y="184" width="4" height="4" rx="0.5" fill="#94a3b8" fill-opacity="0.7" />
          <rect x="100" y="191" width="4" height="4" rx="0.5" fill="#94a3b8" fill-opacity="0.7" />
          <rect x="106" y="191" width="4" height="4" rx="0.5" fill="#94a3b8" fill-opacity="0.7" />
          <rect x="103" y="195" width="4" height="3" rx="0.5" fill="#94a3b8" fill-opacity="0.5" />
          <!-- Label -->
          <text x="127" y="185" font-size="9.5" fill="white" font-family="system-ui, sans-serif" font-weight="700">SISTEMA</text>
          <text x="127" y="199" font-size="8" fill="#64748b" font-family="system-ui, sans-serif">Sede principal</text>
          <!-- Badge: 2 children -->
          <rect x="165" y="168" width="26" height="14" rx="7" fill="#334155" />
          <text x="178" y="178" text-anchor="middle" font-size="7.5" fill="#94a3b8" font-family="system-ui, sans-serif" font-weight="700">2</text>

          <!-- ══════════════════════════════════ -->
          <!-- NODE: ÁREA NORTE -->
          <!-- x=303, y=100, w=147, h=52 -->
          <!-- ══════════════════════════════════ -->
          <rect x="303" y="100" width="147" height="52" rx="10"
            fill="white" stroke="#bae6fd" stroke-width="1.5" />
          <rect x="303" y="100" width="147" height="52" rx="10"
            fill="#f0f9ff" fill-opacity="0.6" />
          <!-- Tag area left stripe -->
          <rect x="303" y="100" width="4" height="52" rx="2" fill="#0284c7" fill-opacity="0.7" />
          <!-- Area icon -->
          <rect x="314" y="112" width="26" height="26" rx="6" fill="#e0f2fe" />
          <rect x="319" y="117" width="16" height="16" rx="2" fill="none" stroke="#0284c7" stroke-width="1.2" />
          <line x1="319" y1="122" x2="335" y2="122" stroke="#0284c7" stroke-width="1" stroke-opacity="0.6" />
          <line x1="319" y1="126" x2="332" y2="126" stroke="#0284c7" stroke-width="1" stroke-opacity="0.4" />
          <!-- Label -->
          <text x="347" y="120" font-size="9.5" fill="#0f172a" font-family="system-ui, sans-serif" font-weight="700">Área Norte</text>
          <text x="347" y="134" font-size="8" fill="#64748b" font-family="system-ui, sans-serif">Sala técnica</text>
          <!-- Badge: 2 assets -->
          <rect x="415" y="103" width="29" height="14" rx="7" fill="#0284c7" />
          <text x="429.5" y="113" text-anchor="middle" font-size="7.5" fill="white" font-family="system-ui, sans-serif" font-weight="700">2</text>

          <!-- ══════════════════════════════════ -->
          <!-- NODE: ÁREA SUR (collapsed) -->
          <!-- x=303, y=247, w=147, h=52 -->
          <!-- ══════════════════════════════════ -->
          <rect x="303" y="247" width="147" height="52" rx="10"
            fill="white" stroke="#bae6fd" stroke-width="1.5" />
          <rect x="303" y="247" width="147" height="52" rx="10"
            fill="#f0f9ff" fill-opacity="0.6" />
          <rect x="303" y="247" width="4" height="52" rx="2" fill="#0284c7" fill-opacity="0.7" />
          <!-- Area icon -->
          <rect x="314" y="259" width="26" height="26" rx="6" fill="#e0f2fe" />
          <rect x="319" y="264" width="16" height="16" rx="2" fill="none" stroke="#0284c7" stroke-width="1.2" />
          <line x1="319" y1="269" x2="335" y2="269" stroke="#0284c7" stroke-width="1" stroke-opacity="0.6" />
          <line x1="319" y1="273" x2="332" y2="273" stroke="#0284c7" stroke-width="1" stroke-opacity="0.4" />
          <!-- Label -->
          <text x="347" y="267" font-size="9.5" fill="#0f172a" font-family="system-ui, sans-serif" font-weight="700">Área Sur</text>
          <text x="347" y="281" font-size="8" fill="#64748b" font-family="system-ui, sans-serif">Bodega logística</text>
          <!-- Badge: 2 assets -->
          <rect x="415" y="250" width="29" height="14" rx="7" fill="#0284c7" />
          <text x="429.5" y="260" text-anchor="middle" font-size="7.5" fill="white" font-family="system-ui, sans-serif" font-weight="700">2</text>

          <!-- ══════════════════════════════════ -->
          <!-- NODE: UPS RACK (asset with children) -->
          <!-- x=530, y=75, w=142, h=52 -->
          <!-- ══════════════════════════════════ -->
          <rect x="530" y="75" width="142" height="52" rx="10"
            fill="white" stroke="#e2e8f0" stroke-width="1" />
          <!-- Status border left: online = cyan -->
          <rect x="530" y="75" width="4" height="52" rx="2" fill="#06b6d4" fill-opacity="0.8" />
          <!-- Icon bg -->
          <rect x="541" y="86" width="28" height="28" rx="6" fill="#ecfeff" />
          <!-- Server rows icon -->
          <rect x="546" y="91" width="18" height="4" rx="1" fill="#06b6d4" fill-opacity="0.7" />
          <circle cx="561" cy="93" r="1.5" fill="#22c55e" />
          <rect x="546" y="97" width="18" height="4" rx="1" fill="#06b6d4" fill-opacity="0.45" />
          <circle cx="561" cy="99" r="1.5" fill="#22c55e" fill-opacity="0.55" />
          <rect x="546" y="103" width="12" height="4" rx="1" fill="#06b6d4" fill-opacity="0.25" />
          <!-- Labels -->
          <text x="577" y="95" font-size="9.5" fill="#0f172a" font-family="system-ui, sans-serif" font-weight="700">UPS Rack</text>
          <text x="577" y="108" font-size="8" fill="#64748b" font-family="system-ui, sans-serif">Sala técnica</text>
          <!-- Online dot -->
          <circle cx="662" cy="82" r="4" fill="#22c55e" />
          <circle cx="662" cy="82" r="4" fill="#22c55e" fill-opacity="0.35">
            <animate attributeName="r" values="4;8;4" dur="2.5s" repeatCount="indefinite" begin="0.2s" />
            <animate attributeName="fill-opacity" values="0.35;0;0.35" dur="2.5s" repeatCount="indefinite" begin="0.2s" />
          </circle>
          <!-- Badge: 2 children -->
          <rect x="634" y="75" width="26" height="14" rx="7" fill="#0891b2" fill-opacity="0.15" stroke="#a5f3fc" stroke-width="0.8" />
          <text x="647" y="85" text-anchor="middle" font-size="7.5" fill="#0891b2" font-family="system-ui, sans-serif" font-weight="700">2</text>

          <!-- ══════════════════════════════════ -->
          <!-- NODE: SERVIDOR PRINCIPAL (asset) -->
          <!-- x=530, y=143, w=142, h=52 -->
          <!-- ══════════════════════════════════ -->
          <rect x="530" y="143" width="142" height="52" rx="10"
            fill="white" stroke="#e2e8f0" stroke-width="1" />
          <rect x="530" y="143" width="4" height="52" rx="2" fill="#06b6d4" fill-opacity="0.8" />
          <!-- Icon -->
          <rect x="541" y="154" width="28" height="28" rx="6" fill="#ecfeff" />
          <rect x="546" y="159" width="18" height="14" rx="2" fill="none" stroke="#06b6d4" stroke-width="1.2" />
          <rect x="549" y="162" width="5" height="5" rx="1" fill="#06b6d4" fill-opacity="0.6" />
          <rect x="556" y="162" width="5" height="5" rx="1" fill="#06b6d4" fill-opacity="0.4" />
          <rect x="549" y="169" width="5" height="2" rx="0.5" fill="#06b6d4" fill-opacity="0.35" />
          <!-- Labels -->
          <text x="577" y="163" font-size="9.5" fill="#0f172a" font-family="system-ui, sans-serif" font-weight="700">Servidor</text>
          <text x="577" y="176" font-size="8" fill="#64748b" font-family="system-ui, sans-serif">SRV-PRD-01</text>
          <!-- Online dot -->
          <circle cx="662" cy="150" r="4" fill="#22c55e" />
          <circle cx="662" cy="150" r="4" fill="#22c55e" fill-opacity="0.35">
            <animate attributeName="r" values="4;8;4" dur="2.5s" repeatCount="indefinite" begin="1s" />
            <animate attributeName="fill-opacity" values="0.35;0;0.35" dur="2.5s" repeatCount="indefinite" begin="1s" />
          </circle>

          <!-- ══════════════════════════════════ -->
          <!-- NODE: TABLERO ELÉCTRICO (asset) -->
          <!-- x=530, y=225, w=142, h=52 -->
          <!-- ══════════════════════════════════ -->
          <rect x="530" y="225" width="142" height="52" rx="10"
            fill="white" stroke="#e2e8f0" stroke-width="1" />
          <!-- Status offline/active = slate -->
          <rect x="530" y="225" width="4" height="52" rx="2" fill="#94a3b8" fill-opacity="0.8" />
          <rect x="541" y="236" width="28" height="28" rx="6" fill="#f8fafc" />
          <!-- Lightning icon -->
          <path d="M555,240 L550,250 L554,250 L549,260 L558,248 L554,248 L558,240 Z"
            fill="#94a3b8" fill-opacity="0.8" />
          <!-- Labels -->
          <text x="577" y="244" font-size="9" fill="#0f172a" font-family="system-ui, sans-serif" font-weight="700">Tablero Elétrico</text>
          <text x="577" y="258" font-size="8" fill="#64748b" font-family="system-ui, sans-serif">TBL-S-01</text>
          <!-- Offline dot (grey) -->
          <circle cx="662" cy="232" r="4" fill="#94a3b8" />

          <!-- ══════════════════════════════════ -->
          <!-- NODE: COMPRESOR A3 (asset) -->
          <!-- x=530, y=305, w=142, h=52 -->
          <!-- ══════════════════════════════════ -->
          <rect x="530" y="305" width="142" height="52" rx="10"
            fill="white" stroke="#e2e8f0" stroke-width="1" />
          <rect x="530" y="305" width="4" height="52" rx="2" fill="#06b6d4" fill-opacity="0.8" />
          <rect x="541" y="316" width="28" height="28" rx="6" fill="#ecfeff" />
          <!-- Gear/cog simple icon -->
          <circle cx="555" cy="330" r="7" fill="none" stroke="#06b6d4" stroke-width="1.4" stroke-opacity="0.7" />
          <circle cx="555" cy="330" r="3" fill="#06b6d4" fill-opacity="0.4" />
          <rect x="553.5" y="320" width="3" height="4" rx="1" fill="#06b6d4" fill-opacity="0.7" />
          <rect x="553.5" y="336" width="3" height="4" rx="1" fill="#06b6d4" fill-opacity="0.7" />
          <rect x="548" y="328.5" width="4" height="3" rx="1" fill="#06b6d4" fill-opacity="0.7" />
          <rect x="559" y="328.5" width="4" height="3" rx="1" fill="#06b6d4" fill-opacity="0.7" />
          <!-- Labels -->
          <text x="577" y="326" font-size="9.5" fill="#0f172a" font-family="system-ui, sans-serif" font-weight="700">Compresor A3</text>
          <text x="577" y="339" font-size="8" fill="#64748b" font-family="system-ui, sans-serif">CMP-A3-02</text>
          <!-- Online dot -->
          <circle cx="662" cy="312" r="4" fill="#22c55e" />
          <circle cx="662" cy="312" r="4" fill="#22c55e" fill-opacity="0.35">
            <animate attributeName="r" values="4;8;4" dur="2.5s" repeatCount="indefinite" begin="1.7s" />
            <animate attributeName="fill-opacity" values="0.35;0;0.35" dur="2.5s" repeatCount="indefinite" begin="1.7s" />
          </circle>

          <!-- ══════════════════════════════════ -->
          <!-- CHILD NODES of UPS Rack -->
          <!-- x=735, y=60, w=100, h=42 -->
          <!-- ══════════════════════════════════ -->
          <rect x="735" y="57" width="105" height="40" rx="8"
            fill="white" stroke="#e2e8f0" stroke-width="1" fill-opacity="0.9" />
          <rect x="735" y="57" width="4" height="40" rx="2" fill="#22c55e" fill-opacity="0.8" />
          <rect x="742" y="65" width="22" height="22" rx="5" fill="#f0fdf4" />
          <rect x="747" y="69" width="12" height="10" rx="1.5" fill="none" stroke="#22c55e" stroke-width="1" />
          <rect x="749" y="71" width="3" height="3" rx="0.5" fill="#22c55e" fill-opacity="0.6" />
          <rect x="754" y="71" width="3" height="3" rx="0.5" fill="#22c55e" fill-opacity="0.4" />
          <text x="770" y="73" font-size="9" fill="#0f172a" font-family="system-ui, sans-serif" font-weight="700">Batería UPS</text>
          <text x="770" y="84" font-size="7.5" fill="#64748b" font-family="system-ui, sans-serif">BAT-01</text>

          <rect x="735" y="108" width="105" height="40" rx="8"
            fill="white" stroke="#e2e8f0" stroke-width="1" fill-opacity="0.9" />
          <rect x="735" y="108" width="4" height="40" rx="2" fill="#22c55e" fill-opacity="0.8" />
          <rect x="742" y="116" width="22" height="22" rx="5" fill="#f0fdf4" />
          <rect x="747" y="120" width="12" height="10" rx="1.5" fill="none" stroke="#22c55e" stroke-width="1" />
          <rect x="749" y="122" width="8" height="2" rx="0.5" fill="#22c55e" fill-opacity="0.5" />
          <rect x="749" y="125" width="6" height="2" rx="0.5" fill="#22c55e" fill-opacity="0.35" />
          <text x="770" y="124" font-size="9" fill="#0f172a" font-family="system-ui, sans-serif" font-weight="700">Módulo PDU</text>
          <text x="770" y="135" font-size="7.5" fill="#64748b" font-family="system-ui, sans-serif">PDU-02</text>

          <!-- ══════════════════════════════════ -->
          <!-- LEGEND bottom-left -->
          <!-- ══════════════════════════════════ -->
          <rect x="20" y="400" width="310" height="46" rx="8" fill="white" stroke="#e2e8f0" stroke-width="1" />
          <text x="36" y="418" font-size="8" fill="#94a3b8" font-family="system-ui, sans-serif" font-weight="700" letter-spacing="0.05em">LEYENDA</text>

          <rect x="36" y="424" width="8" height="8" rx="2" fill="#0f172a" />
          <text x="48" y="432" font-size="8" fill="#64748b" font-family="system-ui, sans-serif">Sistema</text>

          <rect x="95" y="424" width="8" height="8" rx="2" fill="#0284c7" fill-opacity="0.15" stroke="#bae6fd" stroke-width="1" />
          <text x="107" y="432" font-size="8" fill="#64748b" font-family="system-ui, sans-serif">Área</text>

          <circle cx="165" cy="428" r="4" fill="#22c55e" />
          <text x="174" y="432" font-size="8" fill="#64748b" font-family="system-ui, sans-serif">Online</text>

          <circle cx="223" cy="428" r="4" fill="#94a3b8" />
          <text x="232" y="432" font-size="8" fill="#64748b" font-family="system-ui, sans-serif">Offline</text>


        </svg>
      </div>

      <!-- Bottom summary -->
      <div class="mt-6 overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
        <div class="grid gap-0 lg:grid-cols-3">
          <div class="border-b border-slate-200 p-5 lg:border-b-0 lg:border-r">
            <p class="text-sm font-semibold text-slate-950">Jerarquías padre-hijo</p>
            <p class="mt-2 text-sm text-slate-600">Racks, gabinetes, kits y contenedores con sus componentes. Cada activo sabe a qué grupo pertenece y hereda su contexto.</p>
          </div>
          <div class="border-b border-slate-200 p-5 lg:border-b-0 lg:border-r">
            <p class="text-sm font-semibold text-slate-950">Colapsa y expande grupos</p>
            <p class="mt-2 text-sm text-slate-600">Un clic en el badge colapsa todos los descendientes. Navega desde la vista general hasta el componente exacto sin perder el contexto.</p>
          </div>
          <div class="p-5">
            <p class="text-sm font-semibold text-slate-950">Detecta dependencias</p>
            <p class="mt-2 text-sm text-slate-600">Visualiza cómo se conectan zonas, equipos y subcomponentes. Si un activo falla, ves de inmediato qué más puede verse afectado.</p>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup lang="ts">
</script>
