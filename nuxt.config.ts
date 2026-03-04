import tailwindcss from '@tailwindcss/vite'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },

  future: {
    compatibilityVersion: 4,
  },

  modules: [
    '@nuxt/eslint',
    '@vueuse/motion/nuxt',
  ],

  runtimeConfig: {
    public: {
      motion: {
        directives: {
          'fade-blur-in': {
            initial: { opacity: 0.7, filter: 'blur(6px)' },
            visible: {
              opacity: 1,
              filter: 'blur(0px)',
              transition: { duration: 250, ease: [0.2, 0.8, 0.2, 1] },
            },
            visibleOnce: {
              opacity: 1,
              filter: 'blur(0px)',
              transition: { duration: 250, ease: [0.2, 0.8, 0.2, 1] },
            },
          },
          'fade-up': {
            initial: { opacity: 0, y: 12 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 250, ease: [0.2, 0.8, 0.2, 1] },
            },
            visibleOnce: {
              opacity: 1,
              y: 0,
              transition: { duration: 250, ease: [0.2, 0.8, 0.2, 1] },
            },
          },
        },
      },
    },
  },

  css: [
    '~/assets/css/main.css',
  ],

  vite: {
    plugins: [
      tailwindcss(),
    ],
  },

  app: {
    head: {
      link: [
        {
          rel: 'preload',
          href: '/fonts/Moderat-Regular.woff2',
          as: 'font',
          type: 'font/woff2',
          crossorigin: 'anonymous',
        },
      ],
    },
  },

  routeRules: {
    '/**': {
      prerender: true,
      headers: {
        'X-Frame-Options': 'DENY',
        'X-Content-Type-Options': 'nosniff',
        'Referrer-Policy': 'strict-origin-when-cross-origin',
      },
    },
  },
})
