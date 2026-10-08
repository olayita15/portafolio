<script setup lang="ts">
const achievements = [
  {
    title: 'Mejor proyecto final',
    organization: 'Educamás · 2023',
    description: 'Proyecto reconocido por su calidad técnica y experiencia de usuario.',
    icon: 'i-lucide-award',
    file: '/certificates/best-final-project.jpg',
    preview: '/certificates/best-final-project.jpg',
    format: 'image'
  },
  {
    title: 'Tercer puesto Hackathon',
    organization: 'Digio y Prográmate · 2023',
    description: 'Solución rápida de valor basada en integración de APIs y una interfaz responsiva.',
    icon: 'i-lucide-trophy',
    file: '/certificates/third-place-hackathon.jpeg',
    preview: '/certificates/third-place-hackathon.jpeg',
    format: 'image'
  },
  {
    title: 'Mentor del programa Proyéctate',
    organization: 'Fundación Educamás · 2023',
    description: 'Acompañamiento en buenas prácticas, revisiones de código y diseño de componentes.',
    icon: 'i-lucide-users-round',
    file: '/certificates/projectate-mentor.png',
    preview: '/certificates/projectate-mentor.png',
    format: 'image'
  },
  {
    title: 'Mentoría Fondos Educativos',
    organization: 'Fundación Educamás · 2024',
    description: 'Participación en un proceso de acompañamiento académico y profesional.',
    icon: 'i-lucide-handshake',
    file: '/certificates/educational-funds-mentorship.pdf',
    preview: '/certificates/previews/educational-funds-mentorship.jpg',
    format: 'pdf'
  }
]

type Achievement = typeof achievements[number]

const selectedAchievement = ref<Achievement | null>(null)
const isViewerOpen = ref(false)

function openEvidence(achievement: Achievement) {
  if (!achievement.file) return

  selectedAchievement.value = achievement
  isViewerOpen.value = true
}
</script>

<template>
  <section aria-labelledby="achievements-title">
    <div class="flex items-center gap-3"><div class="flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary"><UIcon name="i-lucide-sparkles" class="size-5" /></div><div><p class="text-sm font-medium text-primary">Reconocimientos</p><h2 id="achievements-title" class="text-xl font-semibold text-highlighted">Logros</h2></div></div>
    <div class="mt-6 grid gap-3">
      <article
        v-for="(achievement, index) in achievements"
        :key="achievement.title"
        v-scroll-reveal="index * 80"
        class="scroll-reveal flex gap-4 rounded-lg border border-default p-4 transition-colors hover:bg-elevated"
        :class="achievement.file && 'cursor-pointer'"
        :tabindex="achievement.file ? 0 : undefined"
        :role="achievement.file ? 'button' : undefined"
        @click="openEvidence(achievement)"
        @keydown.enter="openEvidence(achievement)"
        @keydown.space.prevent="openEvidence(achievement)"
      >
        <div class="flex size-9 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
          <UIcon :name="achievement.icon" class="size-4" />
        </div>
        <div class="min-w-0 flex-1">
          <div class="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <h3 class="font-semibold text-highlighted">{{ achievement.title }}</h3>
              <p class="mt-0.5 text-sm text-primary">{{ achievement.organization }}</p>
              <p class="mt-2 text-sm leading-6 text-muted">{{ achievement.description }}</p>
            </div>
            <div v-if="achievement.file" class="shrink-0 overflow-hidden rounded-md border border-default bg-white">
              <img :src="achievement.preview" :alt="`Vista previa del comprobante de ${achievement.title}`" class="h-16 w-24 object-contain p-1">
            </div>
          </div>
        </div>
      </article>
    </div>

    <UModal
      v-model:open="isViewerOpen"
      :title="selectedAchievement?.title"
      :description="selectedAchievement?.organization"
      :ui="{ content: 'max-w-5xl' }"
    >
      <template #body>
        <iframe
          v-if="selectedAchievement?.format === 'pdf'"
          :src="selectedAchievement.file"
          :title="selectedAchievement.title"
          class="h-[70vh] w-full rounded-md border border-default"
        />
        <img
          v-else-if="selectedAchievement"
          :src="selectedAchievement.file"
          :alt="selectedAchievement.title"
          class="max-h-[70vh] w-full rounded-md border border-default object-contain"
        >
      </template>

      <template #footer>
        <UButton
          v-if="selectedAchievement"
          :to="selectedAchievement.file"
          target="_blank"
          color="neutral"
          variant="outline"
          icon="i-lucide-external-link"
          label="Abrir archivo"
        />
      </template>
    </UModal>
  </section>
</template>
