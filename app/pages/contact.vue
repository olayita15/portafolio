<script setup lang="ts">
const contact = reactive({ name: '', email: '', message: '' })
const error = ref('')
const selectedTemplate = ref<string>()

const emailTemplates = [
  {
    value: 'job',
    label: 'Oferta laboral',
    description: 'Vacante, contratación o propuesta profesional',
    subject: 'Oferta laboral',
    message: 'Me gustaría conversar contigo sobre una oportunidad laboral.'
  },
  {
    value: 'project',
    label: 'Colaboración en proyecto',
    description: 'Desarrollo de una aplicación, API o interfaz',
    subject: 'Colaboración en proyecto',
    message: 'Quisiera contarte sobre un proyecto y explorar cómo podríamos trabajar juntos.'
  },
  {
    value: 'support',
    label: 'Soporte o mejora web',
    description: 'Mantenimiento, incidencias o nuevas funcionalidades',
    subject: 'Soporte para proyecto web',
    message: 'Necesito apoyo con un proyecto web existente. Estos son los detalles:'
  },
  {
    value: 'devops',
    label: 'Infraestructura y DevOps',
    description: 'Docker, despliegue, Redis o procesos asíncronos',
    subject: 'Consulta de infraestructura y DevOps',
    message: 'Quisiera consultar contigo un tema de infraestructura, despliegue o DevOps:'
  }
]

watch(selectedTemplate, value => {
  const template = emailTemplates.find(item => item.value === value)
  if (template) contact.message = template.message
})

usePortfolioSeo({
  title: 'Contacto',
  description: 'Contacta a Christian Olaya para colaborar en proyectos de desarrollo web, APIs y aplicaciones Full Stack.',
  path: '/contact'
})

function submitContactForm() {
  error.value = ''
  if (!contact.name.trim() || !contact.email.trim() || !contact.message.trim()) {
    error.value = 'Completa tu nombre, correo y mensaje para continuar.'
    return
  }

  const template = emailTemplates.find(item => item.value === selectedTemplate.value)
  const subjectText = template?.subject || 'Consulta desde el portafolio'
  const subject = encodeURIComponent(`${subjectText} — ${contact.name.trim()}`)
  const body = encodeURIComponent(`Hola Christian,\n\n${contact.message.trim()}\n\n---\nNombre: ${contact.name.trim()}\nCorreo: ${contact.email.trim()}`)
  window.location.href = `mailto:chrisolayadev@gmail.com?subject=${subject}&body=${body}`
}
</script>

<template>
  <UContainer class="py-4 sm:py-6 lg:flex lg:h-[calc(100dvh-4rem)] lg:items-start">
    <div class="mx-auto max-w-6xl">
      <div class="grid gap-6 lg:grid-cols-2">
        <UCard :ui="{ header: 'p-4 sm:px-5 sm:py-3', body: 'p-4 sm:p-5' }">
          <template #header><h2 class="font-semibold text-highlighted">Envíame un mensaje</h2></template>
          <form class="space-y-2.5" @submit.prevent="submitContactForm">
            <UFormField label="Nombre" name="name" required><UInput v-model="contact.name" name="name" autocomplete="name" placeholder="Tu nombre" size="lg" class="w-full" /></UFormField>
            <UFormField label="Correo electrónico" name="email" required><UInput v-model="contact.email" name="email" type="email" autocomplete="email" placeholder="tu@correo.com" size="lg" class="w-full" /></UFormField>
            <UFormField label="Motivo de contacto" name="template"><USelect v-model="selectedTemplate" :items="emailTemplates" placeholder="Selecciona una opción" class="w-full" /></UFormField>
            <UFormField label="Mensaje" name="message" required><UTextarea v-model="contact.message" name="message" :rows="3" placeholder="Cuéntame brevemente en qué puedo ayudarte." class="w-full" /></UFormField>
            <UAlert v-if="error" color="error" variant="subtle" :description="error" icon="i-lucide-circle-alert" />
            <UButton type="submit" size="lg" icon="i-lucide-send" label="Preparar correo" />
          </form>
        </UCard>

        <aside class="space-y-4">
          <UCard :ui="{ header: 'p-4 sm:px-5 sm:py-3', body: 'p-4 sm:p-5' }">
            <template #header><h2 class="font-semibold text-highlighted">También puedes encontrarme en</h2></template>
            <div class="space-y-3">
              <UButton to="mailto:chrisolayadev@gmail.com" color="neutral" variant="ghost" icon="i-lucide-mail" label="chrisolayadev@gmail.com" class="w-full justify-start" />
              <UButton to="https://github.com/olayita15" target="_blank" color="neutral" variant="ghost" icon="i-simple-icons-github" label="GitHub" class="w-full justify-start" />
              <UButton to="https://www.linkedin.com/in/chrisolayadev" target="_blank" color="neutral" variant="ghost" icon="i-simple-icons-linkedin" label="LinkedIn" class="w-full justify-start" />
            </div>
          </UCard>
          <UAlert color="primary" variant="subtle" icon="i-lucide-info" title="Respuesta directa" description="El formulario abre tu aplicación de correo con el mensaje listo para enviar." />
        </aside>
      </div>
    </div>
  </UContainer>
</template>
