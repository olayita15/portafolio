<script setup lang="ts">
const roles = [
  {
    title: 'Desarrollador Semi Senior', period: 'Enero 2026 — Actualidad',
    items: ['Desarrollo y mantenimiento de aplicaciones con Django, Django REST Framework y Vue.', 'Implementación de APIs REST, WebSockets con Django Channels y procesos asíncronos con Celery.', 'Gestión de Redis, Docker y Docker Compose para desarrollo y despliegue.', 'Apoyo en coordinación técnica, geolocalización y visualización de datos.']
  },
  {
    title: 'Desarrollador Junior', period: 'Marzo 2023 — Diciembre 2025',
    items: ['Desarrollo, mantenimiento y soporte de aplicaciones construidas con Vue y Django.', 'Integración frontend-backend, atención de incidencias y entrega de nuevas funcionalidades.']
  }
]
</script>

<template>
  <section aria-labelledby="experience-title">
    <div class="flex items-center justify-between gap-4">
      <div class="flex items-center gap-3">
        <div class="flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary"><UIcon name="i-lucide-briefcase-business" class="size-5" /></div>
        <div><p class="text-sm font-medium text-primary">Trayectoria</p><h2 id="experience-title" class="text-xl font-semibold text-highlighted">Experiencia</h2></div>
      </div>
      <UBadge color="neutral" variant="subtle" label="2023 — Hoy" />
    </div>

    <div v-scroll-reveal="0" class="scroll-reveal mt-6 rounded-lg border border-default bg-elevated/50 p-4">
      <p class="font-medium text-highlighted">Grupo Empresarial INYUXI S.A.S.</p>
      <p class="mt-1 text-sm text-muted">Bogotá, Colombia · Proyectos para IYU, Infométrika y Datadoc</p>
    </div>

    <div class="mt-2">
      <article v-for="(role, index) in roles" :key="role.title" v-scroll-reveal="index * 80" class="scroll-reveal relative py-5 pl-7 last:pb-0">
        <div class="absolute left-0 top-6 size-3 rounded-full border-2 border-primary bg-default" />
        <div v-if="index !== roles.length - 1" class="absolute left-[5px] top-9 h-[calc(100%-1rem)] w-px bg-default" />
        <div class="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1"><h3 class="font-semibold text-highlighted">{{ role.title }}</h3><span class="text-sm text-muted">{{ role.period }}</span></div>
        <ul class="mt-3 space-y-2 text-sm leading-6 text-muted"><li v-for="item in role.items" :key="item" class="flex gap-2"><UIcon name="i-lucide-check" class="mt-1 size-4 shrink-0 text-primary" /><span>{{ item }}</span></li></ul>
      </article>
    </div>
  </section>
</template>
