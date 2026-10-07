<template>
  <UPageHero
    title="Christian Olaya"
    headline="Desarrollador de software"
    description="Desarrollador Full Stack con experiencia en Python, Django REST Framework, JavaScript y Vue/Nuxt. Enfocado en construir aplicaciones web, APIs REST y dashboards, integrando soluciones robustas de frontend y backend."
    :ui="{
      container: 'py-8 sm:py-10 lg:pb-0 lg:pt-6 gap-8',
      description: 'mt-8',
      footer: 'mt-16'
    }"
  >
    <template #footer>
      <div class="flex flex-wrap justify-center gap-x-4 gap-y-2 text-sm text-muted">
        <span class="inline-flex items-center gap-1.5">
          <UIcon name="i-lucide-map-pin" class="size-4" />
          Bogotá, Colombia
        </span>

        <a href="mailto:chrisolayadev@gmail.com" class="inline-flex items-center gap-1.5 transition-colors hover:text-primary">
          <UIcon name="i-lucide-mail" class="size-4" />
          chrisolayadev@gmail.com
        </a>

        <a href="tel:+573057429258" class="inline-flex items-center gap-1.5 transition-colors hover:text-primary">
          <UIcon name="i-lucide-phone" class="size-4" />
          +57 305 742 9258
        </a>

        <a href="https://github.com/olayita15" target="_blank" rel="noreferrer" class="inline-flex items-center gap-1.5 transition-colors hover:text-primary">
          <UIcon name="i-simple-icons-github" class="size-4" />
          GitHub
        </a>

        <a href="https://www.linkedin.com/in/chrisolayadev" target="_blank" rel="noreferrer" class="inline-flex items-center gap-1.5 transition-colors hover:text-primary">
          <UIcon name="i-simple-icons-linkedin" class="size-4" />
          LinkedIn
        </a>
      </div>
    </template>
  </UPageHero>
</template>
