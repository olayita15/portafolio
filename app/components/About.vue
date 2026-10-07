<template>
  <section aria-labelledby="about-title">
    <div class="flex items-center gap-3">
      <div class="flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
        <UIcon name="i-lucide-user-round" class="size-5" />
      </div>
      <div>
        <p class="text-sm font-medium text-primary">Enfoque</p>
        <h2 id="about-title" class="text-xl font-semibold text-highlighted">Profesional</h2>
      </div>
    </div>

    <p v-scroll-reveal="0" class="scroll-reveal mt-5 leading-7 text-muted">
      Abordo el desarrollo desde una perspectiva práctica y orientada a resultados, buscando soluciones claras, mantenibles y alineadas con las necesidades del proyecto. Combino análisis del problema, criterio técnico y comunicación efectiva para convertir requerimientos en soluciones funcionales.
    </p>

    <div v-scroll-reveal="80" class="scroll-reveal mt-5 flex flex-wrap gap-2">
      <UBadge color="primary" variant="subtle" label="Pensamiento analítico" />
      <UBadge color="primary" variant="subtle" label="Resolución de problemas" />
      <UBadge color="primary" variant="subtle" label="Trabajo en equipo" />
      <UBadge color="primary" variant="subtle" label="Comunicación efectiva" />
    </div>
  </section>
</template>
