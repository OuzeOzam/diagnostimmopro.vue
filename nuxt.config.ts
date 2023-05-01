import { defineNuxtConfig } from 'nuxt/config'
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss',
    '@invictus.codes/nuxt-vuetify',
    'nuxt-icon',
    '@nuxt/image-edge',
  ],
  vuetify: {
    /* vuetify options */
    vuetifyOptions: {
      // @TODO: list all vuetify options
      theme: {
        defaultTheme: 'myCustomTheme',
        themes: {
          myCustomTheme: {
            colors: {
              primary: '#FFC400',
              "light-100": "#FFFFFF",
              "light-300": "#FEF9EE",
              "dark-600": "#1B3D2F",
              "dark-900": "#212121",
              "grey-100": "#F3F0E4",
              "grey-400": "#D1D3C8",
            }
          }
        }
      },
    },
    moduleOptions: {
      /* nuxt-vuetify module options */
      treeshaking: true,
      useIconCDN: true,
      /* vite-plugin-vuetify options */
      styles: 'sass',
      autoImport: true,
    }
  },
  tailwindcss: {
    configPath: '~/config/tailwind.js'
  },
  css: [
    '@/assets/css/global.css'
  ],
  image: {
    cloudinary: {
      baseURL: 'https://res.cloudinary.com/dj5fs1uis/image/upload/v1682718006/'
    }
  }
})
