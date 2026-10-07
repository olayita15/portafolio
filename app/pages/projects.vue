<script setup lang="ts">
const projects = [
  {
    title: 'Vigilia',
    category: 'Plataforma social',
    description: 'Aplicación para organizar encuentros y sesiones de juegos de mesa, diseñada para reunir personas, actividades y coordinación en un solo lugar.',
    status: 'En desarrollo',
    statusColor: 'primary',
    icon: 'i-lucide-dices',
    technologies: ['Vue 3', 'Django', 'APIs REST', 'Tiempo real'],
    featured: true,
    preview: 'Reuniones y comunidad'
  },
  {
    title: 'E-commerce',
    category: 'Comercio digital',
    description: 'Aplicación de comercio electrónico enfocada en explorar productos, gestionar compras y ofrecer una experiencia de compra clara.',
    status: 'En desarrollo',
    statusColor: 'info',
    icon: 'i-lucide-shopping-bag',
    technologies: ['Vue', 'Django', 'Catálogo', 'Pagos'],
    featured: false,
    preview: 'Catálogo y compras'
  },
  {
    title: 'Caja de herramientas',
    category: 'Recursos para desarrollo',
    description: 'Colección de recursos y utilidades pensada para centralizar herramientas prácticas para proyectos y flujos de desarrollo.',
    status: 'En desarrollo',
    statusColor: 'warning',
    icon: 'i-lucide-wrench',
    technologies: ['Recursos', 'Utilidades', 'Productividad'],
    featured: false,
    preview: 'Herramientas útiles'
  },
  {
    title: 'Cartografía urbana',
    category: 'Datos y territorio',
    description: 'Exploración cartográfica para combinar marcadores y mapas de calor en el análisis de procesos ecológicos y sociales de Bogotá.',
    status: 'Iniciando',
    statusColor: 'neutral',
    icon: 'i-lucide-map',
    technologies: ['Mapas', 'Geodatos', 'Heatmaps', 'Visualización'],
    featured: false,
    preview: 'Mapas y patrones'
  },
  {
    title: 'Roadmaps de estudio',
    category: 'Aprendizaje',
    description: 'Idea para crear árboles de aprendizaje y rutas de estudio por tema, complementada por la futura caja de herramientas.',
    status: 'Planificado',
    statusColor: 'neutral',
    icon: 'i-lucide-route',
    technologies: ['Roadmaps', 'Aprendizaje', 'Árboles de estudio'],
    featured: false,
    preview: 'Rutas de aprendizaje'
  }
]

usePortfolioSeo({
  title: 'Proyectos',
  description: 'Proyectos de desarrollo web de Christian Olaya: aplicaciones, APIs REST e interfaces modernas.',
  path: '/projects'
})
</script>

<template>
  <UContainer class="py-4 sm:py-6">
    <div class="mx-auto max-w-6xl">
      <header class="portfolio-reveal max-w-2xl">
        <p class="text-sm font-medium text-primary">Portafolio</p>
        <h1 class="mt-2 text-3xl font-bold tracking-tight text-highlighted sm:text-4xl">Proyectos en construcción</h1>
        <p class="mt-4 leading-7 text-muted">Una selección de productos, herramientas e ideas en diferentes etapas. Cada proyecto representa una forma distinta de resolver problemas con tecnología.</p>
      </header>

      <UPageGrid class="mt-10 lg:grid-cols-3">
        <UPageCard
          v-for="(project, index) in projects"
          :key="project.title"
          :class="[project.featured ? 'sm:col-span-2 lg:col-span-2' : '', 'transition-transform duration-300 hover:-translate-y-1']"
          variant="subtle"
          :highlight="project.featured"
          highlight-color="primary"
          spotlight
          spotlight-color="primary"
        >
          <template #header>
            <div v-scroll-reveal="index * 70" class="scroll-reveal relative -mx-4 -mt-4 overflow-hidden rounded-t-lg border-b border-default bg-elevated p-4 sm:-mx-6 sm:-mt-6 sm:p-5">
              <div class="absolute inset-0 bg-gradient-to-br from-primary/15 via-transparent to-transparent" />
              <div class="relative flex items-start justify-between gap-3">
                <div class="flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <UIcon :name="project.icon" class="size-5" />
                </div>
                <UBadge :color="project.statusColor" variant="subtle" :label="project.status" />
              </div>
              <div class="relative mt-8 rounded-md border border-default bg-default/80 p-3 shadow-sm">
                <div class="flex items-center gap-1.5"><span class="size-1.5 rounded-full bg-primary" /><span class="size-1.5 rounded-full bg-primary/50" /><span class="size-1.5 rounded-full bg-primary/20" /></div>
                <div class="mt-4 h-2 w-2/3 rounded-full bg-primary/20" />
                <div class="mt-2 h-2 w-full rounded-full bg-elevated" />
                <div class="mt-2 h-2 w-4/5 rounded-full bg-elevated" />
                <p class="mt-4 text-xs font-medium text-primary">{{ project.preview }}</p>
              </div>
            </div>
          </template>

          <template #leading>
            <UBadge v-if="project.featured" color="primary" variant="subtle" label="Proyecto destacado" />
          </template>

          <template #title>{{ project.title }}</template>

          <template #description>
            <p>{{ project.description }}</p>
            <div class="mt-4 flex flex-wrap gap-1.5">
              <UBadge v-for="technology in project.technologies" :key="technology" color="neutral" variant="subtle" size="sm" :label="technology" />
            </div>
          </template>

          <template #footer>
            <div class="flex items-center gap-2 text-sm text-muted">
              <UIcon name="i-lucide-eye" class="size-4" />
              <span>{{ project.category }} · Vista previa próximamente</span>
            </div>
          </template>
        </UPageCard>
      </UPageGrid>
    </div>
  </UContainer>
</template>
