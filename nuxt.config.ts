export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxt/ui'],
  css: ['~/assets/css/main.css'],
  icon: {
    serverBundle: {
      collections: ['lucide', 'simple-icons']
    },
    clientBundle: {
      icons: [
        'lucide:award', 'lucide:badge-check', 'lucide:book-open', 'lucide:box', 'lucide:briefcase-business',
        'lucide:check', 'lucide:circle-alert', 'lucide:code-2', 'lucide:dices',
        'lucide:external-link', 'lucide:eye', 'lucide:file-text', 'lucide:graduation-cap', 'lucide:handshake', 'lucide:house', 'lucide:info',
        'lucide:mail', 'lucide:map', 'lucide:map-pin', 'lucide:monitor-smartphone',
        'lucide:phone', 'lucide:route', 'lucide:send', 'lucide:server',
        'lucide:shopping-bag', 'lucide:sparkles', 'lucide:trophy', 'lucide:user-round',
        'lucide:users-round', 'lucide:wrench', 'simple-icons:github', 'simple-icons:linkedin'
      ]
    }
  },
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
