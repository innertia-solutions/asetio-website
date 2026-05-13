<script setup lang="ts">
useSeoMeta({
  title: 'Asetio - Operaciones de activos en tiempo real',
  description: 'Gestiona activos de alto valor, monitorea su estado en tiempo real y coordina alertas, mantenimiento y responsables desde una sola plataforma.',
})

const stats = [
  { value: 'Inventario', label: 'Un registro vivo por activo crítico', icon: 'i-lucide-database' },
  { value: 'Estado en tiempo real', label: 'Señales, ubicación y condición actualizadas', icon: 'i-lucide-activity' },
  { value: 'Acción trazable', label: 'Alertas, responsables y mantenimiento conectado', icon: 'i-lucide-bell-ring' },
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
    description: 'La alerta llega al equipo correcto con contexto para responder y cerrar el caso.',
    signalLabel: 'Respuesta',
    signal: 'Alerta, tarea, evidencia, historial',
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
    description: 'Alertas, casos y tareas con responsable, severidad, plazo y evidencia de cierre.',
    points: ['Alertas por regla o excepción', 'Mantenimiento preventivo y correctivo', 'Historial completo para auditoría'],
  },
]

const features = [
  { icon: 'i-lucide-box', title: 'Inventario vivo', description: 'Activos, atributos, responsables, ubicaciones y QR en un registro único.' },
  { icon: 'i-lucide-activity', title: 'Estado en tiempo real', description: 'Condición, zona operativa y última lectura disponibles en paneles claros.' },
  { icon: 'i-lucide-bell-ring', title: 'Alertas por condición', description: 'Detecta activos fuera de zona, sin lectura o con riesgo operativo.' },
  { icon: 'i-lucide-shield-alert', title: 'Control de riesgo', description: 'Priorización por criticidad, responsables definidos y bitácora para auditoría.' },
  { icon: 'i-lucide-wrench', title: 'Mantenimiento conectado', description: 'Órdenes, inspecciones y tareas vinculadas al historial real del activo.' },
  { icon: 'i-lucide-code', title: 'Integraciones', description: 'API y webhooks para conectar con ERP, BI, mantenimiento y sistemas internos.' },
]

const useCases = [
  { icon: 'i-lucide-building-2', title: 'Facilities e infraestructura', description: 'UPS, tableros, salas técnicas, racks y equipamiento crítico por sede o zona.' },
  { icon: 'i-lucide-warehouse', title: 'Bodegas y activos móviles', description: 'Trazabilidad de equipos que entran, salen, se asignan o cambian de responsable.' },
  { icon: 'i-lucide-hard-hat', title: 'Equipos técnicos', description: 'Contexto, tareas, checklists y evidencia para quienes mantienen activos en terreno.' },
  { icon: 'i-lucide-shield-check', title: 'Operaciones auditables', description: 'Historial por activo para cumplimiento, continuidad operacional y gestión de riesgo.' },
]

const trustItems = [
  { icon: 'i-lucide-plug', title: 'API y webhooks', description: 'Conecta con ERP, BI, mantenimiento y sistemas internos existentes.' },
  { icon: 'i-lucide-radio-tower', title: 'Fuentes de captura flexibles', description: 'Telemetría, QR, inspecciones y datos manuales dentro de un mismo modelo.' },
  { icon: 'i-lucide-lock-keyhole', title: 'Trazabilidad y evidencia', description: 'Cada alerta, tarea y cambio ligado al activo, al responsable y al resultado.' },
]
</script>

<template>
  <div>
    <ContentCustomHero
      title="Activos de alto valor, siempre visibles y bajo control."
      description="Inventario, estado operativo, alertas y mantenimiento en una sola plataforma. Cada activo crítico con trazabilidad, responsable y acción siguiente."
      :primary-button="{ text: 'Solicitar demo', to: 'mailto:hola@asetio.com' }"
    />

    <ContentStatsSection :stats="stats" />

    <ContentSignalFlowSection
      eyebrow="[ en operación ]"
      title="Señal recibida. Responsable asignado. Caso abierto."
      description="Sin pasos manuales ni información perdida. Cada evento operativo genera la alerta, el responsable y el historial correcto."
      outcome-title="Una señal no queda perdida en la red."
      outcome-description="Cada lectura puede terminar en estado actualizado, alerta priorizada, tarea de mantenimiento o historial auditable."
      outcome-badge="Evento trazable"
      :steps="signalFlowSteps"
    />

    <ContentProblemSection
      eyebrow="El problema"
      title="La operación pierde control cuando el activo existe en una planilla y la realidad ocurre en terreno."
      description="Cuando un activo crítico cambia de estado, sale de zona o requiere mantenimiento, el sistema debe convertir ese evento en una acción trazable."
      :problems="problems"
    />

    <ContentPlatformLayers
      eyebrow="Plataforma"
      title="Tres capas para operar activos críticos con trazabilidad."
      description="Del registro digital del activo a las acciones del equipo en terreno."
      :layers="platformLayers"
    />

    <ContentFeaturesSection
      title="Gestión operacional"
      subtitle="Todo para proteger activos críticos y sostener la continuidad."
      :features="features"
    />

    <ContentUseCasesSection
      eyebrow="Casos de uso"
      title="Para operaciones donde perder visibilidad tiene un costo."
      description=""
      :use-cases="useCases"
    />

    <ContentArchitectureDiagram />

    <ContentTrustSection
      eyebrow="Preparado para operar"
      title="Diseñado para crecer con tu operación."
      description="Convive con los sistemas existentes y escala con tu operación."
      :items="trustItems"
    />

    <ContentFinalCta
      eyebrow="Siguiente paso"
      title="Tu operación, visible desde hoy."
      description="Armemos una demo con tus activos, zonas y flujos reales."
      :primary-button="{ text: 'Solicitar demo', to: 'mailto:hola@asetio.com' }"
    />
  </div>
</template>
