<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui'

const route = useRoute()

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
</script>

<template>
  <UHeader>
    <template #title>
      Christian Olaya
    </template>

    <UNavigationMenu :items="items" />

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
