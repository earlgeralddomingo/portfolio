<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { ArrowUp } from 'lucide-vue-next'

import Navbar from './components/layout/navbar.vue'
import Home from './components/sections/home.vue'
import About from './components/sections/about.vue'
import Experience from './components/sections/experience.vue'
import TechStack from './components/sections/techstack.vue'
import Projects from './components/sections/projects.vue'
import Contact from './components/sections/contact.vue'
import Footer from './components/layout/footer.vue'

const showBackToTop = ref(false)

const handleScroll = () => {
  showBackToTop.value = window.scrollY > 400
}

const backToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  })
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>

  <!-- Navbar -->
  <Navbar />

  <!-- Main Content -->
  <main>
    <Home />
    <About />
    <Experience />
    <TechStack />
    <Projects />
    <Contact />
  </main>

  <!-- Footer -->
  <Footer />

  <!-- Back to Top -->
  <Transition name="back-to-top">
    <button v-if="showBackToTop" type="button" @click="backToTop" aria-label="Back to top" class="
        group
        fixed
        bottom-6
        right-6
        z-50
        flex
        h-11
        w-11
        items-center
        justify-center
        rounded-full
        border
        border-zinc-200
        bg-[#F7F7F5]/90
        text-teal-700
        shadow-lg
        shadow-zinc-900/10
        backdrop-blur-md
        transition-all
        duration-300

        hover:-translate-y-1
        hover:border-teal-200
        hover:bg-white
        hover:text-teal-800
        hover:shadow-xl
        hover:shadow-teal-900/10

        dark:border-zinc-800
        dark:bg-[#0D1210]/90
        dark:text-teal-400
        dark:shadow-black/30

        dark:hover:border-teal-900
        dark:hover:bg-zinc-900
        dark:hover:text-teal-300
        dark:hover:shadow-teal-950/30
      ">
      <ArrowUp class="
          h-4
          w-4
          transition-transform
          duration-300
          group-hover:-translate-y-0.5
        " />

      <span class="
          absolute
          right-0.5
          top-0.5
          h-1.5
          w-1.5
          rounded-full
          bg-teal-500
          shadow-[0_0_0_3px_rgba(20,184,166,0.08)]

          dark:bg-teal-400
        "></span>
    </button>
  </Transition>
</template>

<style scoped>
.back-to-top-enter-active,
.back-to-top-leave-active {
  transition:
    opacity 0.25s ease,
    transform 0.25s ease;
}

.back-to-top-enter-from,
.back-to-top-leave-to {
  opacity: 0;
  transform: translateY(10px) scale(0.9);
}

.back-to-top-enter-to,
.back-to-top-leave-from {
  opacity: 1;
  transform: translateY(0) scale(1);
}
</style>