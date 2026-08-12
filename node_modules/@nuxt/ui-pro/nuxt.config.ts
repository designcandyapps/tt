import { createResolver } from '@nuxt/kit'

const { resolve } = createResolver(import.meta.url)

export default defineNuxtConfig({
  components: [
    { path: '#ui-pro/components', prefix: 'U', pathPrefix: false }
  ],
  css: [
    '#ui-pro/assets/css/main.css'
  ],
  alias: { '#ui-pro': resolve('./') },
  vite: {
    optimizeDeps: {
      include: ['vue3-smooth-dnd']
    }
  }
})
