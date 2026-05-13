<template>
  <footer class="bg-slate-900 border-t border-slate-800 text-slate-400">

    <!-- Main content -->
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
      <div class="flex flex-col gap-10 lg:flex-row lg:justify-between lg:items-start">

        <!-- Brand -->
        <div class="flex flex-col gap-4 max-w-xs">
          <img src="/isologo.png" alt="Asetio" class="w-34 brightness-0 invert" />
          <p class="text-sm leading-relaxed text-slate-500">
            Gestión de activos críticos con trazabilidad, responsables y acción en tiempo real.
          </p>
          <a href="mailto:hola@asetio.com"
            class="inline-flex items-center gap-2 text-sm text-sky-400 hover:text-sky-300 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <rect width="20" height="16" x="2" y="4" rx="2" />
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
            </svg>
            hola@asetio.com
          </a>
        </div>

        <!-- Nav columns -->
        <div class="flex flex-wrap gap-10 sm:gap-16">

          <div class="flex flex-col gap-3">
            <h3 class="text-xs font-bold uppercase tracking-widest text-slate-600">Plataforma</h3>
            <ul class="flex flex-col gap-2">
              <li><a href="/#signal-flow" class="text-sm text-slate-400 hover:text-slate-100 transition-colors">Cómo
                  funciona</a></li>
              <li><a href="/#platform" class="text-sm text-slate-400 hover:text-slate-100 transition-colors">Capas de la
                  plataforma</a></li>
              <li><a href="/#features"
                  class="text-sm text-slate-400 hover:text-slate-100 transition-colors">Funcionalidades</a></li>
              <li><a href="/#use-cases" class="text-sm text-slate-400 hover:text-slate-100 transition-colors">Casos de
                  uso</a></li>
            </ul>
          </div>

          <div class="flex flex-col gap-3">
            <h3 class="text-xs font-bold uppercase tracking-widest text-slate-600">Recursos</h3>
            <ul class="flex flex-col gap-2">
              <li><a href="/docs/intro"
                  class="text-sm text-slate-400 hover:text-slate-100 transition-colors">Documentación</a></li>
              <li><a href="/docs/changelog"
                  class="text-sm text-slate-400 hover:text-slate-100 transition-colors">Changelog</a></li>
            </ul>
          </div>

          <div class="flex flex-col gap-3">
            <h3 class="text-xs font-bold uppercase tracking-widest text-slate-600">Contacto</h3>
            <ul class="flex flex-col gap-2">
              <li><a href="mailto:hola@asetio.com"
                  class="text-sm text-slate-400 hover:text-slate-100 transition-colors">Solicitar demo</a></li>
              <li><a href="mailto:hola@asetio.com"
                  class="text-sm text-slate-400 hover:text-slate-100 transition-colors">Soporte</a></li>
            </ul>
          </div>

        </div>
      </div>
    </div>

    <!-- Bottom bar -->
    <div class="border-t border-slate-800">
      <div
        class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
        <span class="text-xs text-slate-600">© {{ new Date().getFullYear() }} Asetio. Todos los derechos
          reservados.</span>
        <div class="inline-flex items-center gap-2 text-xs text-slate-600">
          <span class="w-1.5 h-1.5 rounded-full bg-green-500 shadow-[0_0_0_2px_rgb(34_197_94_/_0.2)]" />
          Operando en Chile
        </div>
      </div>
    </div>

  </footer>
</template>

<script setup lang="ts">
</script>
