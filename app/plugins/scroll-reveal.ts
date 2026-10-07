export default defineNuxtPlugin(nuxtApp => {
  nuxtApp.vueApp.directive('scroll-reveal', {
    getSSRProps() {
      return {}
    },

    mounted(element: HTMLElement, binding) {
      const reveal = () => element.classList.add('is-visible')

      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches || !('IntersectionObserver' in window)) {
        reveal()
        return
      }

      element.style.setProperty('--reveal-delay', `${Number(binding.value) || 0}ms`)

      const observer = new IntersectionObserver(([entry]) => {
        if (!entry.isIntersecting) return

        reveal()
        observer.unobserve(element)
      }, {
        threshold: 0.12,
        rootMargin: '0px 0px -8% 0px'
      })

      observer.observe(element)
    }
  })
})
