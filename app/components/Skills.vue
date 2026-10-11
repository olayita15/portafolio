<script setup lang="ts">
const skillGroups = [
  { label: 'Backend y APIs', icon: 'i-lucide-server', skills: ['Python', 'Django', 'Django REST Framework', 'Django Channels', 'Node.js', 'Express', 'APIs REST', 'Celery', 'Celery Beat', 'Redis', 'SQL', 'MongoDB'] },
  { label: 'Frontend', icon: 'i-lucide-monitor-smartphone', skills: ['Vue', 'Vue 3', 'Nuxt', 'Nuxt UI', 'Angular', 'JavaScript', 'Vuex', 'Vue Router', 'Vuetify', 'PrimeVue', 'Axios', 'WebSockets', 'HTML5', 'CSS3', 'SCSS', 'Bootstrap', 'Tailwind CSS', 'DaisyUI'] },
  { label: 'DevOps y calidad', icon: 'i-lucide-box', skills: ['Docker', 'Docker Compose', 'Git', 'GitLab CI/CD', 'Linux', 'Bash', 'SonarQube'] },
  { label: 'Trabajo técnico', icon: 'i-lucide-map', skills: ['Integración de servicios', 'Procesamiento de datos', 'Geolocalización', 'Mapas de calor', 'Visualización de datos', 'SCRUM', 'Soporte técnico', 'Coordinación técnica'] }
]
</script>

<template>
  <section aria-labelledby="skills-title">
    <div class="flex items-center gap-3"><div class="flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary"><UIcon name="i-lucide-code-2" class="size-5" /></div><div><p class="text-sm font-medium text-primary">Stack técnico</p><h2 id="skills-title" class="text-xl font-semibold text-highlighted">Habilidades</h2></div></div>
    <div class="mt-6 grid gap-5 sm:grid-cols-2">
      <div v-for="(group, index) in skillGroups" :key="group.label" v-scroll-reveal="index * 80" class="scroll-reveal rounded-lg border border-default p-4"><div class="flex items-center gap-2 text-highlighted"><UIcon :name="group.icon" class="size-4 text-primary" /><h3 class="text-sm font-semibold">{{ group.label }}</h3></div><div class="mt-4 flex flex-wrap gap-1.5"><UBadge v-for="skill in group.skills" :key="skill" color="neutral" variant="subtle" size="sm" :label="skill" /></div></div>
    </div>
  </section>
</template>
