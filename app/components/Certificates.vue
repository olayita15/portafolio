<script setup lang="ts">
const certificates = [
  { title: 'Full-stack Web Developer', issuer: 'Prográmate Academy & Simplon', year: '2023', file: '/certificates/full-stack-web-developer.jpg', preview: '/certificates/full-stack-web-developer.jpg', format: 'image', type: 'Certificación', group: 'training' },
  { title: 'Django REST Framework', issuer: 'Udemy', year: '2023', file: '/certificates/django-rest-framework.pdf', preview: '/certificates/previews/django-rest-framework.jpg', format: 'pdf', type: 'Curso', group: 'training' },
  { title: 'Vue 3, Pinia y MEVN', issuer: 'Udemy', year: '2023', file: '/certificates/vue-pinia-mevn.pdf', preview: '/certificates/previews/vue-pinia-mevn.jpg', format: 'pdf', type: 'Curso', group: 'training' },
  { title: 'Python y ChatGPT', issuer: 'Udemy', year: '2023', file: '/certificates/python-chatgpt-mini-course.pdf', preview: '/certificates/previews/python-chatgpt-mini-course.jpg', format: 'pdf', type: 'Curso', group: 'training' },
  { title: 'Clean Code y SOLID', issuer: 'Udemy', year: '2023', file: '/certificates/clean-code-solid.pdf', preview: '/certificates/previews/clean-code-solid.jpg', format: 'pdf', type: 'Curso', group: 'training' },
  { title: 'Fundamentos de UX', issuer: 'Udemy', year: '2023', file: '/certificates/ux-foundations.pdf', preview: '/certificates/previews/ux-foundations.jpg', format: 'pdf', type: 'Curso', group: 'training' },
  { title: 'Metodología SCRUM', issuer: 'Formación complementaria', year: '2023', file: '/certificates/scrum-methodology.pdf', preview: '/certificates/previews/scrum-methodology.jpg', format: 'pdf', type: 'Curso', group: 'training' }
]

const trainingCertificates = computed(() => certificates.filter(certificate => certificate.group === 'training'))

type Certificate = typeof certificates[number]

const baseURL = useRuntimeConfig().app.baseURL
const selectedCertificate = ref<Certificate | null>(null)
const isViewerOpen = ref(false)

function assetUrl(path: string) {
  return `${baseURL.replace(/\/$/, '')}${path}`
}

function openCertificate(certificate: Certificate) {
  selectedCertificate.value = certificate
  isViewerOpen.value = true
}
</script>

<template>
  <section aria-labelledby="certificates-title">
    <div class="flex items-center gap-3">
      <div class="flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
        <UIcon name="i-lucide-badge-check" class="size-5" />
      </div>
      <div>
        <p class="text-sm font-medium text-primary">Trayectoria</p>
        <h2 id="certificates-title" class="text-xl font-semibold text-highlighted">Certificados de formación</h2>
      </div>
    </div>

    <UPageGrid class="mt-4 gap-4 sm:grid-cols-2 xl:grid-cols-3">
      <UPageCard
        v-for="(certificate, index) in trainingCertificates"
        :key="certificate.file"
        v-scroll-reveal="index * 45"
        variant="subtle"
        class="scroll-reveal cursor-pointer transition-transform duration-200 hover:-translate-y-0.5"
        @click="openCertificate(certificate)"
      >
        <template #header>
          <div class="flex h-28 items-center justify-center overflow-hidden rounded-md border border-default bg-elevated">
            <img
              :src="assetUrl(certificate.preview)"
              :alt="`Vista previa de ${certificate.title}`"
              class="h-full w-full object-contain bg-white p-1"
            >
          </div>
        </template>

        <template #title>{{ certificate.title }}</template>

        <template #description>
          <p>{{ certificate.issuer }}</p>
          <div class="mt-3 flex items-center justify-between gap-2">
            <UBadge color="neutral" variant="subtle" size="sm" :label="certificate.type" />
            <span class="text-xs text-muted">{{ certificate.year }}</span>
          </div>
        </template>
      </UPageCard>
    </UPageGrid>

    <UModal
      v-if="selectedCertificate"
      v-model:open="isViewerOpen"
      :title="selectedCertificate.title"
      :description="`${selectedCertificate.issuer} · ${selectedCertificate.year}`"
      :ui="{ content: 'max-w-5xl' }"
    >
      <template #body>
        <iframe
          v-if="selectedCertificate.format === 'pdf'"
          :src="assetUrl(selectedCertificate.file)"
          :title="selectedCertificate.title"
          class="h-[70vh] w-full rounded-md border border-default"
        />
        <img
          v-else
          :src="assetUrl(selectedCertificate.file)"
          :alt="selectedCertificate.title"
          class="max-h-[70vh] w-full rounded-md border border-default object-contain"
        >
      </template>

      <template #footer>
        <UButton
          :to="assetUrl(selectedCertificate.file)"
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
