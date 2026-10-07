<script setup lang="ts">
usePortfolioSeo({
  title: 'Desarrollador Full Stack',
  description: 'Portafolio profesional de Christian Olaya, desarrollador Full Stack especializado en Python, Django, Vue y aplicaciones web.',
  path: '/'
})
</script>

<template>
  <div
    class="grid grid-cols-1 lg:h-[calc(100dvh-4rem)] lg:grid-cols-5 lg:overflow-hidden"
  >
    <aside
      class="portfolio-reveal bg-elevated lg:col-span-2 lg:flex lg:h-full lg:items-center"
    >
        <Hero />
    </aside>

    <main
      class="bg-default lg:col-span-3 lg:h-full lg:overflow-y-auto"
    >
      <UContainer class="space-y-6 py-10">
        <UCard><About /></UCard>

        <UCard><Experience /></UCard>

        <UCard><Education /></UCard>

        <UCard><Skills /></UCard>

        <UCard><Achievements /></UCard>
      </UContainer>
    </main>
  </div>
</template>
