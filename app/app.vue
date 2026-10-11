<script setup lang="ts">
const baseURL = useRuntimeConfig().app.baseURL
const config = useRuntimeConfig()
const siteUrl = config.public.siteUrl as string

const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Christian Olaya',
  jobTitle: 'Desarrollador Full Stack',
  url: siteUrl || undefined,
  email: 'chrisolayadev@gmail.com',
  telephone: '+573057429258',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Bogotá',
    addressCountry: 'CO'
  },
  sameAs: [
    'https://github.com/olayita15',
    'https://www.linkedin.com/in/chrisolayadev'
  ],
  knowsAbout: [
    'Python', 'Django', 'Django REST Framework', 'Vue.js', 'Nuxt', 'APIs REST', 'Docker', 'Geolocalización'
  ]
}

useHead({
  htmlAttrs: {
    lang: 'es'
  },
  titleTemplate: title => title ? `${title} | Christian Olaya` : 'Christian Olaya | Desarrollador Full Stack',
  meta: [
    { name: 'theme-color', content: '#10b981' }
  ],
  link: [
    { rel: 'icon', href: `${baseURL}favicon.ico` }
  ],
  script: [
    { type: 'application/ld+json', innerHTML: JSON.stringify(personSchema) }
  ]
})
</script>

<template>
  <UApp>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </UApp>
</template>
