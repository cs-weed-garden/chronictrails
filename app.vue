<template>
  <div
    class="relative h-screen w-full flex flex-col items-center justify-center text-center text-white bg-cover bg-center"
    style="background-image: url('https://images.unsplash.com/photo-1614332287897-cdc485fa562d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D');"
  >
    <!-- Dark overlay -->
    <div class="absolute inset-0 bg-gray-900 opacity-70"></div>

    <!-- Heading text -->
    <div class="relative z-10 text-center mb-8">
      <h1 class="text-4xl sm:text-6xl font-extrabold tracking-wider text-indigo-400 animate-bounce">
        CHRONIC TRAILS IS COMING SOON!
      </h1>
    </div>

    <!-- Countdown timer -->
    <div class="flex items-center justify-center space-x-6 relative z-10 mb-8">
      <div class="text-center">
        <span class="text-indigo-500 font-extrabold text-5xl sm:text-7xl animate-pulse">110</span>
        <p class="text-xl sm:text-2xl mt-2">Days</p>
      </div>
      <div class="text-center">
        <span class="text-indigo-500 font-extrabold text-5xl sm:text-7xl animate-pulse">13</span>
        <p class="text-xl sm:text-2xl mt-2">Hours</p>
      </div>
      <div class="text-center">
        <span class="text-indigo-500 font-extrabold text-5xl sm:text-7xl animate-pulse">47</span>
        <p class="text-xl sm:text-2xl mt-2">Minutes</p>
      </div>
      <div class="text-center">
        <span class="text-indigo-500 font-extrabold text-5xl sm:text-7xl animate-pulse">20</span>
        <p class="text-xl sm:text-2xl mt-2">Seconds</p>
      </div>
    </div>

    <!-- Call-to-action buttons -->
    <div class="relative z-10 flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6 mt-6">
      <a
        href="https://weed-garden.com"
        class="inline-block px-8 py-4 bg-indigo-600 hover:bg-indigo-500 text-lg font-semibold text-white rounded-md shadow-lg transform hover:scale-105 transition-all duration-300"
      >
        Check out our other site - Weed Garden
      </a>

      <a
        href="https://www.facebook.com/WeedGardenERP"
        class="inline-block px-8 py-4 bg-blue-600 hover:bg-blue-500 text-lg font-semibold text-white rounded-md shadow-lg transform hover:scale-105 transition-all duration-300"
      >
        Follow Us on Facebook
      </a>
    </div>
  </div>
</template>
<script setup>
import { useHead } from '@unhead/vue';

useHead({
  title: 'Chronic Trails | Exciting New Cannabis Journey Coming Soon!',
  meta: [
    { name: 'description', content: 'Chronic Trails is coming soon! Get ready for a revolutionary cannabis experience that will redefine how you engage with the industry.' },
    { name: 'keywords', content: 'Chronic Trails, cannabis experience, cannabis journey, coming soon, cannabis industry' },
    { property: 'og:title', content: 'Chronic Trails - A New Cannabis Journey Awaits!' },
    { property: 'og:description', content: 'Join us on Chronic Trails, a new and exciting cannabis journey. Stay tuned for the launch!' },
    { property: 'og:image', content: 'https://images.unsplash.com/photo-1614332287897-cdc485fa562d?q=80&w=2070&auto=format&fit=crop' },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: 'https://chronictrails.com' },
    { name: 'twitter:title', content: 'Chronic Trails | A New Cannabis Journey Coming Soon!' },
    { name: 'twitter:description', content: 'Chronic Trails is an exciting new cannabis experience coming soon. Follow us to stay updated!' },
    { name: 'twitter:image', content: 'https://images.unsplash.com/photo-1614332287897-cdc485fa562d?q=80&w=2070&auto=format&fit=crop' }
  ],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "WebSite",
        "name": "Chronic Trails",
        "description": "Chronic Trails is coming soon! Get ready for a revolutionary cannabis experience that will redefine how you engage with the industry.",
        "url": "https://chronictrails.com",
        "publisher": {
          "@type": "Organization",
          "name": "Chronic Trails Inc.",
          "logo": {
            "@type": "ImageObject",
            "url": "https://chronictrails.com/logo.png"
          }
        }
      })
    }
  ]
});
</script>
