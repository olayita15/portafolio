<template>
  <section aria-labelledby="about-title">
    <div class="flex items-center gap-3">
      <div class="flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
        <UIcon name="i-lucide-user-round" class="size-5" />
      </div>
      <div>
        <p class="text-sm font-medium text-primary">Trayectoria</p>
        <h2 id="about-title" class="text-xl font-semibold text-highlighted">Perfil profesional</h2>
      </div>
    </div>

    <p v-scroll-reveal="0" class="scroll-reveal mt-5 leading-7 text-muted">
      Cuento con más de cuatro años de experiencia en el desarrollo y evolución de aplicaciones web. En el Grupo Empresarial INYUXI he participado en proyectos diversos para entidades estatales, combinando construcción de producto, mantenimiento evolutivo y atención de incidencias. Esta trayectoria fortaleció mi capacidad para dialogar con clientes, gestionar solicitudes de soporte y coordinar el trabajo entre equipos internos y externos.
    </p>

    <div v-scroll-reveal="80" class="scroll-reveal mt-5 flex flex-wrap gap-2">
      <UBadge color="primary" variant="subtle" label="Relación con clientes" />
      <UBadge color="primary" variant="subtle" label="Soporte y seguimiento" />
      <UBadge color="primary" variant="subtle" label="Coordinación de equipos" />
      <UBadge color="primary" variant="subtle" label="Gestión de solicitudes" />
    </div>
  </section>
</template>
