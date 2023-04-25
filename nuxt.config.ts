import { defineNuxtConfig } from 'nuxt/config'
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: [
        '@nuxtjs/tailwindcss',
        '@invictus.codes/nuxt-vuetify'
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
                  miel: "EC407A"
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
    }
})
