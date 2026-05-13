<template>
  <section id="monitoreo" class="bg-slate-50 py-16">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="grid gap-10 lg:grid-cols-12 lg:items-start">
        <div class="lg:col-span-4">
          <p class="text-sm font-semibold text-sky-700">Monitoreo continuo</p>
          <h2 class="mt-2 text-3xl font-semibold text-slate-950">Del activo a la accion correcta</h2>
          <p class="mt-4 text-sm leading-6 text-slate-600">
            Asetio toma datos operacionales, los convierte en estado confiable y ayuda a que el equipo responda antes de que una anomalia afecte la continuidad.
          </p>
        </div>

        <div class="grid gap-4 lg:col-span-8 md:grid-cols-2">
          <div v-for="step in steps" :key="step.title" class="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
            <div class="inline-flex size-10 items-center justify-center rounded-md" :class="step.tone">
              <UIcon :name="step.icon" class="size-5" />
            </div>
            <h3 class="mt-5 font-semibold text-slate-950">{{ step.title }}</h3>
            <p class="mt-2 text-sm leading-6 text-slate-600">{{ step.description }}</p>
          </div>
        </div>
      </div>

      <div id="mantenimiento" class="mt-8 overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm">
        <div class="grid gap-0 lg:grid-cols-3">
          <div class="border-b border-slate-200 p-5 lg:border-b-0 lg:border-r">
            <p class="text-sm font-semibold text-slate-950">Registro unico</p>
            <p class="mt-2 text-sm text-slate-600">Identidad, ubicacion, criticidad, responsable, documentacion e historial operativo por activo.</p>
          </div>
          <div class="border-b border-slate-200 p-5 lg:border-b-0 lg:border-r">
            <p class="text-sm font-semibold text-slate-950">Estado confiable</p>
            <p class="mt-2 text-sm text-slate-600">Senales de campo, lecturas manuales, checklists y eventos normalizados para tomar decisiones.</p>
          </div>
          <div class="p-5">
            <p class="text-sm font-semibold text-slate-950">Respuesta trazable</p>
            <p class="mt-2 text-sm text-slate-600">Alertas, casos, tareas, mantenimiento e integraciones conectadas a la historia del activo.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const steps = [
  {
    title: 'Inventario critico',
    description: 'Cada activo nace con identidad, atributos, criticidad, ubicacion esperada y responsable operativo.',
    icon: 'i-lucide-boxes',
    tone: 'bg-sky-50 text-sky-700'
  },
  {
    title: 'Captura de estado',
    description: 'Asetio combina telemetria, lecturas de terreno, QR, inspecciones y eventos para mantener el estado actualizado.',
    icon: 'i-lucide-activity',
    tone: 'bg-sky-50 text-sky-700'
  },
  {
    title: 'Alertas y prioridad',
    description: 'Las condiciones relevantes se transforman en alertas con severidad, responsable y plazo de respuesta.',
    icon: 'i-lucide-bell-ring',
    tone: 'bg-amber-50 text-amber-700'
  },
  {
    title: 'Cierre operacional',
    description: 'Mantenimiento, casos, tareas e integraciones documentan quien actuo, cuando y con que resultado.',
    icon: 'i-lucide-clipboard-check',
    tone: 'bg-sky-50 text-sky-700'
  }
]
</script>
