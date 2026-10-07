export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxt/ui'],
  css: ['~/assets/css/main.css'],
  app: {
    pageTransition: {
      name: 'page',
      mode: 'out-in'
    }
  },
  colorMode: {
    preference: 'system',
    fallback: 'light'
  },
  runtimeConfig: {
    public: {
      siteUrl: process.env.NUXT_PUBLIC_SITE_URL || ''
    }
  }
});
