<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui'

const route = useRoute()
const showProjectsNudge = ref(false)
let projectsNudgeTimer: ReturnType<typeof setTimeout> | undefined

const items = computed<NavigationMenuItem[]>(() => [
  {
    label: 'Inicio',
    to: '/',
    icon: 'i-lucide-house',
    active: route.path === '/'
  },
  {
    label: 'Proyectos',
    to: '/projects',
    icon: 'i-lucide-briefcase-business',
    active: route.path.startsWith('/projects')
  },
  {
    label: 'Contacto',
    to: '/contact',
    icon: 'i-lucide-mail',
    active: route.path.startsWith('/contact')
  }
])

onMounted(() => {
  projectsNudgeTimer = window.setTimeout(() => {
    if (route.path === '/') showProjectsNudge.value = true
  }, 30_000)
})

onBeforeUnmount(() => {
  if (projectsNudgeTimer) clearTimeout(projectsNudgeTimer)
})
</script>

<template>
  <UHeader :ui="{ root: 'border-b border-default/80 bg-default/85 backdrop-blur-lg' }">
    <template #title>
      <NuxtLink to="/" class="flex items-center gap-2.5 font-semibold text-highlighted">
        <span class="flex size-8 items-center justify-center rounded-lg bg-primary text-sm font-bold text-inverted">CO</span>
        <span class="hidden sm:inline">Christian Olaya</span>
      </NuxtLink>
    </template>

    <nav aria-label="Navegación principal" class="hidden items-center rounded-xl border border-default bg-elevated/70 p-1 lg:flex">
      <UButton
        v-for="item in items"
        :key="item.label"
        :to="item.to"
        :icon="item.icon"
        :color="item.active ? 'primary' : 'neutral'"
        :variant="item.active ? 'soft' : 'ghost'"
        size="sm"
        :aria-current="item.active ? 'page' : undefined"
        :class="item.label === 'Proyectos' && showProjectsNudge ? 'nav-projects-nudge' : ''"
      >
        {{ item.label }}
      </UButton>
    </nav>

    <template #right>
      <UColorModeButton />
      <UTooltip text="Ver repositorio del portafolio">
        <UButton
          to="https://github.com/olayita15/portafolio"
          target="_blank"
          color="neutral"
          variant="ghost"
          icon="i-simple-icons-github"
          aria-label="Repositorio del portafolio en GitHub"
        />
      </UTooltip>
    </template>

    <template #body>
      <UNavigationMenu
        :items="items"
        orientation="vertical"
        class="-mx-2.5"
      />
    </template>
  </UHeader>

  <main>
    <slot />
  </main>
</template>
