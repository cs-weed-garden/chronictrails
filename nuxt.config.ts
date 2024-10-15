// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: true,
  devtools: { enabled: true },
  css: ['~/assets/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  app: {
    head: {
      title: 'Chronic Trails - Your Cannabis Mapping & Advertising Solution',
      meta: [
        { charset: 'UTF-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
        { name: 'robots', content: 'index, follow' },
        { name: 'author', content: 'Chronic Trails' },
        { 'http-equiv': 'Content-Language', content: 'en' },
        { name: 'description', content: 'Discover the ultimate platform for cannabis mapping and advertising. Connect with local customers and boost your grow operations.' },
        { name: 'keywords', content: 'cannabis advertising, cannabis mapping, local grow operations, cannabis marketing, etc.' },
        { name: 'referrer', content: 'no-referrer' },
        { property: 'og:site_name', content: 'Chronic Trails' },
        { property: 'og:locale', content: 'en_US' },
        { property: 'og:title', content: 'Chronic Trails - Your Cannabis Mapping & Advertising Solution' },
        { property: 'og:description', content: 'Discover the best platform for cannabis mapping and advertising. Connect with customers locally and grow your business.' },
        { property: 'og:url', content: 'https://chronictrails.com' },
        { property: 'og:image', content: 'https://chronictrails.com/img/trail-map-preview.png' },
        { property: 'og:image:alt', content: 'Chronic Trails map preview with cannabis locations' },
        { property: 'og:type', content: 'website' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:site', content: '@ChronicTrails' },
        { name: 'twitter:title', content: 'Chronic Trails - Cannabis Mapping & Advertising Solution' },
        { name: 'twitter:description', content: 'Discover the best platform for cannabis mapping and advertising. Connect with customers locally and grow your business.' },
        { name: 'twitter:image', content: 'https://chronictrails.com/img/trail-map-preview.png' },
        { name: 'twitter:image:alt', content: 'Chronic Trails map preview with cannabis locations' },
        { name: 'twitter:creator', content: '@ChronicTrails' }
      ],
      script: [
        { src: '/js/clarity.js', async: true }
      ],
      noscript: [
        { children: '<p>Chronic Trails requires JavaScript to function properly. Please enable JavaScript in your browser.</p>' }
      ]
    }
  },
})
