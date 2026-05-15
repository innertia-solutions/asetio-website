<script setup lang="ts">
onMounted(() => {
  const clear = () => {
    if (window.scrollY < 80 && window.location.hash)
      history.replaceState(null, '', window.location.pathname)
  }
  window.addEventListener('scroll', clear, { passive: true })
  onUnmounted(() => window.removeEventListener('scroll', clear))
})

useSeoMeta({
  title: 'Asetio - Operaciones de activos en tiempo real',
  description: 'Gestiona activos de alto valor, monitorea su estado en tiempo real y coordina incidencias, mantenimiento y responsables desde una sola plataforma.',
})

const stats = [
  { value: 'Inventario vivo', label: 'Un registro actualizado por activo crítico', icon: 'i-lucide-database' },
  { value: 'Monitoreo automatizado', label: 'Señales, ubicación y condición en tiempo real', icon: 'i-lucide-radio-tower' },
  { value: 'Gestión de incidencias', label: 'Casos, responsables y cierre trazable', icon: 'i-lucide-bell-ring' },
]

const signalFlowSteps = [
  {
    icon: 'i-lucide-package-check',
    title: 'Activo crítico',
    badge: 'Origen',
    description: 'Un equipo o infraestructura emite una señal de estado, presencia o condición.',
    signalLabel: 'Dato capturado',
    signal: 'ID, zona, lectura, batería, evento',
  },
  {
    icon: 'i-lucide-router',
    title: 'Gateway BLE',
    badge: 'Captura',
    description: 'Escucha beacons y tags, valida la señal y la prepara para envío.',
    signalLabel: 'Normalización',
    signal: 'RSSI, timestamp, zona, gateway',
  },
  {
    icon: 'i-lucide-brain-circuit',
    title: 'Asetio',
    badge: 'Reglas',
    description: 'Cruza el evento con inventario, criticidad, responsable y reglas operacionales.',
    signalLabel: 'Decisión',
    signal: 'Normal, revisar, crítico, fuera de zona',
  },
  {
    icon: 'i-lucide-building-2',
    title: 'Empresa',
    badge: 'Acción',
    description: 'La incidencia llega al equipo correcto con contexto para responder y cerrar el caso.',
    signalLabel: 'Respuesta',
    signal: 'Incidencia, tarea, evidencia, historial',
  },
]

const problems = [
  {
    icon: 'i-lucide-file-spreadsheet',
    title: 'Inventario desactualizado',
    description: 'Ubicación, responsable y condición cambian todos los días. La planilla no los sigue.',
  },
  {
    icon: 'i-lucide-bell-off',
    title: 'Señales sin acción',
    description: 'Lecturas y eventos quedan dispersos sin regla clara de prioridad, responsable o cierre.',
  },
  {
    icon: 'i-lucide-history',
    title: 'Mantenimiento sin contexto',
    description: 'El técnico llega a terreno sin historial, evidencias ni trazabilidad de decisiones anteriores.',
  },
]

const platformLayers = [
  {
    icon: 'i-lucide-database',
    title: 'Inventario operacional',
    description: 'Registro único por activo con atributos, criticidad, responsable, ubicación y documentos.',
    points: ['Categorías y campos personalizados', 'QR, identificadores y asignaciones', 'Auditoría de cambios por tenant'],
  },
  {
    icon: 'i-lucide-radar',
    title: 'Estado en tiempo real',
    description: 'Lecturas, inspecciones y eventos normalizados para mostrar condición y ubicación actual.',
    points: ['Última señal y última vez visto', 'Cobertura por zonas y fuentes', 'Condición operativa actualizada'],
  },
  {
    icon: 'i-lucide-list-checks',
    title: 'Acción y cierre',
    description: 'Incidencias, casos y tareas con responsable, severidad, plazo y evidencia de cierre.',
    points: ['Incidencias por regla o excepción', 'Mantenimiento preventivo y correctivo', 'Historial completo para auditoría'],
  },
]

const featureGroups = [
  {
    pillar: 'Inventario vivo',
    icon: 'i-lucide-database',
    color: 'text-sky-600',
    features: [
      'Registro único por activo',
      'Atributos, responsable y ubicación',
      'Jerarquías padre-hijo',
      'Captura por QR, telemetría o formulario',
      'Mapa relacional interactivo',
      'Auditoría de cambios',
    ],
  },
  {
    pillar: 'Monitoreo automatizado',
    icon: 'i-lucide-radio-tower',
    color: 'text-emerald-600',
    features: [
      'Estado operativo en tiempo real',
      'Triangulación BLE de posición',
      'Geocercas sin GPS',
      'Cobertura por zonas y gateways',
      'Última señal y última vez visto',
      'Priorización por criticidad',
    ],
  },
  {
    pillar: 'Gestión de incidencias',
    icon: 'i-lucide-bell-ring',
    color: 'text-amber-600',
    features: [
      'Casos con responsable y plazo',
      'Evidencia de cierre trazable',
      'Mantenimiento preventivo y correctivo',
      'Historial completo por activo',
      'API y webhooks',
      'Integración con ERP, BI y CMMS',
    ],
  },
]

const useCases = [
  { icon: 'i-lucide-building-2', title: 'Facilities e infraestructura', description: 'UPS, tableros, salas técnicas, racks y equipamiento crítico por sede o zona.' },
  { icon: 'i-lucide-warehouse', title: 'Bodegas y activos móviles', description: 'Trazabilidad de equipos que entran, salen, se asignan o cambian de responsable.' },
  { icon: 'i-lucide-hard-hat', title: 'Equipos técnicos', description: 'Contexto, tareas, checklists y evidencia para quienes mantienen activos en terreno.' },
  { icon: 'i-lucide-shield-check', title: 'Operaciones auditables', description: 'Historial por activo para cumplimiento, continuidad operacional y gestión de riesgo.' },
]

</script>

<template>
  <div>
    <ContentCustomHero
      title="Activos de alto valor, siempre visibles y bajo control."
      description="Inventario, estado operativo, incidencias y mantenimiento en una sola plataforma. Cada activo crítico con trazabilidad, responsable y acción siguiente."
      :primary-button="{ text: 'Solicitar demo', to: 'mailto:hola@asetio.com' }"
    />

    <ContentStatsSection :stats="stats" />

    <ContentSignalFlowSection
      eyebrow="[ en operación ]"
      title="Señal recibida. Responsable asignado. Caso abierto."
      description="Sin pasos manuales ni información perdida. Cada evento operativo genera la incidencia, el responsable y el historial correcto."
      outcome-title="Una señal no queda perdida en la red."
      outcome-description="Cada lectura puede terminar en estado actualizado, incidencia priorizada, tarea de mantenimiento o historial auditable."
      outcome-badge="Evento trazable"
      :steps="signalFlowSteps"
    />

    <ContentFeaturesSection
      title="Gestión operacional"
      subtitle="Todo lo que necesita tu operación, organizado por lo que hace."
      :groups="featureGroups"
    />

    <ContentUseCasesSection
      eyebrow="Casos de uso"
      title="Para operaciones donde perder visibilidad tiene un costo."
      description=""
      :use-cases="useCases"
    />

    <ContentAssetGraphSection />

    <ContentArchitectureDiagram />

    <ContentGeofencingSection />

    <ContentFinalCta
      eyebrow="Siguiente paso"
      title="Tu operación, visible desde hoy."
      description="Armemos una demo con tus activos, zonas y flujos reales."
      :primary-button="{ text: 'Solicitar demo', to: 'mailto:hola@asetio.com' }"
    />
  </div>
</template>
