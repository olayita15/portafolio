<script setup lang="ts">
const education = [
  { title: 'Ingeniería de Inteligencia Artificial y Análisis de Datos', institution: 'Universidad Nacional Abierta y a Distancia', period: 'Agosto 2026 — Actualidad', current: true },
  { title: 'Programación Full-stack', institution: 'Simplon | Educamás', period: 'Octubre 2022 — Marzo 2023' },
  { title: 'Ingeniería Electrónica', institution: 'Universidad Distrital Francisco José de Caldas', period: 'Mayo 2016 — Mayo 2020', note: 'Estudios no finalizados · Base en programación y pensamiento lógico.' }
]
</script>

<template>
  <section aria-labelledby="education-title">
    <div class="flex items-center gap-3"><div class="flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary"><UIcon name="i-lucide-graduation-cap" class="size-5" /></div><div><p class="text-sm font-medium text-primary">Formación</p><h2 id="education-title" class="text-xl font-semibold text-highlighted">Educación</h2></div></div>
    <div class="mt-6 space-y-4">
      <article v-for="(item, index) in education" :key="item.title" v-scroll-reveal="index * 80" class="scroll-reveal rounded-lg border border-default p-4">
        <div class="flex gap-3"><UIcon name="i-lucide-book-open" class="mt-0.5 size-5 shrink-0 text-primary" /><div class="min-w-0"><div class="flex flex-wrap items-start justify-between gap-2"><h3 class="font-semibold text-highlighted">{{ item.title }}</h3><UBadge v-if="item.current" color="primary" variant="subtle" label="En curso" /></div><p class="mt-1 text-sm text-muted">{{ item.institution }}</p><p class="mt-2 text-sm text-muted">{{ item.period }}</p><p v-if="item.note" class="mt-1 text-sm text-muted">{{ item.note }}</p></div></div>
      </article>
    </div>
  </section>
</template>
