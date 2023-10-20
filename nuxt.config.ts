import { defineNuxtConfig } from 'nuxt/config'
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss',
    '@invictus.codes/nuxt-vuetify',
    'nuxt-icon',
    '@nuxt/image-edge',
  ],
  app: {
    head: {
      script: [
        {
          innerHTML: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-K3R6DCF');`
        }
      ]
    }
  },
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
