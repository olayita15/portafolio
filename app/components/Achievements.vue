<script setup lang="ts">
const achievements = [
  { title: 'Mejor proyecto final', organization: 'Educamás · 2023', description: 'Proyecto reconocido por su calidad técnica y experiencia de usuario.', icon: 'i-lucide-award' },
  { title: 'Tercer puesto Hackathon', organization: 'Digio y Prográmate · 2023', description: 'Solución rápida de valor basada en integración de APIs y una interfaz responsiva.', icon: 'i-lucide-trophy' },
  { title: 'Mentoría a estudiantes universitarios', organization: 'Prográmate · 2024', description: 'Acompañamiento en buenas prácticas, revisiones de código y diseño de componentes.', icon: 'i-lucide-users-round' }
]
</script>

<template>
  <section aria-labelledby="achievements-title">
    <div class="flex items-center gap-3"><div class="flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary"><UIcon name="i-lucide-sparkles" class="size-5" /></div><div><p class="text-sm font-medium text-primary">Reconocimientos</p><h2 id="achievements-title" class="text-xl font-semibold text-highlighted">Logros</h2></div></div>
    <div class="mt-6 grid gap-3">
      <article v-for="(achievement, index) in achievements" :key="achievement.title" v-scroll-reveal="index * 80" class="scroll-reveal flex gap-4 rounded-lg border border-default p-4 transition-colors hover:bg-elevated"><div class="flex size-9 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary"><UIcon :name="achievement.icon" class="size-4" /></div><div><h3 class="font-semibold text-highlighted">{{ achievement.title }}</h3><p class="mt-0.5 text-sm text-primary">{{ achievement.organization }}</p><p class="mt-2 text-sm leading-6 text-muted">{{ achievement.description }}</p></div></article>
    </div>
  </section>
</template>
