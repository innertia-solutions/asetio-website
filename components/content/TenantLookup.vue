<script setup lang="ts">
const email = ref('')
const loading = ref(false)
const results = ref<any[]>([])
const error = ref('')

async function findTenant() {
  if (!email.value) return
  loading.value = true
  error.value = ''
  results.value = []

  try {
    // In a real scenario, this matches the backend URL
    const response: any = await $fetch('/api/public/find-tenant', {
      baseURL: 'http://localhost:8106', // Adjust based on environment
      params: { email: email.value }
    })
    results.value = response.tenants
    if (results.value.length === 0) {
      error.value = 'No se encontraron organizaciones para este correo.'
    }
  } catch (err) {
    error.value = 'Hubo un error al buscar tu organización.'
  } finally {
    loading.value = false
  }
}
</script>

<template>
  <div class="tenant-lookup-container rounded-xl border border-gray-200 bg-gray-50 p-6 shadow-sm transition-all hover:shadow-md">
    <div class="mb-4 text-center">
      <h3 class="text-xl font-bold mb-1 tracking-tight">Accede a tu cuenta</h3>
      <p class="text-sm text-gray-500">Ingresa tu correo para encontrar la URL de tu organización.</p>
    </div>
    
    <div class="flex flex-col gap-3">
      <div class="relative">
        <input 
          v-model="email" 
          type="email" 
          placeholder="nombre@empresa.com"
          class="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 shadow-inner outline-none transition-all focus:border-sky-500 focus:ring-2 focus:ring-sky-500"
          @keyup.enter="findTenant"
        />
        <div v-if="loading" class="absolute right-3 top-3.5">
          <Icon name="svg-spinners:ring-resize" class="w-5 h-5 text-sky-500" />
        </div>
      </div>
      
      <button 
        @click="findTenant"
        :disabled="loading || !email"
        class="w-full py-3 px-6 bg-sky-500 hover:bg-sky-600 text-white font-semibold rounded-lg transition-all transform hover:scale-[1.01] active:scale-[0.98] disabled:opacity-50 flex items-center justify-center gap-2 shadow-sm"
      >
        <span>Buscar Organización</span>
        <Icon v-if="!loading" name="heroicons:chevron-right" class="w-4 h-4" />
      </button>
    </div>

    <div v-if="error" class="mt-4 flex items-center gap-2 rounded-lg border border-red-100 bg-red-50 p-3 text-sm text-red-600">
      <Icon name="heroicons:exclamation-circle" class="w-4 h-4 flex-shrink-0" />
      <span>{{ error }}</span>
    </div>

    <div v-if="results.length > 0" class="mt-6 space-y-3">
      <p class="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2 px-1">Organizaciones encontradas:</p>
      <a 
        v-for="tenant in results" 
        :key="tenant.key"
        :href="tenant.url"
        class="group flex items-center justify-between rounded-lg border border-gray-200 bg-white p-4 transition-all hover:border-sky-500/50 hover:bg-sky-50/10"
      >
        <div>
          <div class="font-bold text-gray-900">{{ tenant.name }}</div>
          <div class="text-xs text-gray-500 tabular-nums">{{ tenant.url }}</div>
        </div>
        <Icon name="heroicons:arrow-top-right-on-square" class="w-5 h-5 text-gray-400 group-hover:text-sky-500 transition-colors" />
      </a>
    </div>
  </div>
</template>

<style scoped>
.tenant-lookup-container {
  max-width: 440px;
  margin: 0 auto;
}
</style>
