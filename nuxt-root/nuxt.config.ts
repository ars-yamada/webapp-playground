import tailwindcss from '@tailwindcss/vite'
import { fileURLToPath } from 'node:url'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  alias: {
    '@core': fileURLToPath(new URL('./core', import.meta.url)),
  },
  css: ['./app/assets/css/main.css'],
  vite: {
    plugins: [ tailwindcss() ],
  }
})
