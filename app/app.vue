<script setup lang="ts">
useHead({
  htmlAttrs: {
    lang: 'es'
  },
  titleTemplate: title => title ? `${title} | Christian Olaya` : 'Christian Olaya | Desarrollador Full Stack',
  meta: [
    { name: 'theme-color', content: '#10b981' }
  ],
  link: [
    { rel: 'icon', href: '/favicon.ico' }
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
