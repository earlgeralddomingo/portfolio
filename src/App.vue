<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { ArrowUp } from 'lucide-vue-next'

import Navbar from './components/layout/navbar.vue'
import Home from './components/sections/home.vue'
import About from './components/sections/about.vue'
import TechStack from './components/sections/techstack.vue'
import Projects from './components/sections/projects.vue'
import Contact from './components/sections/contact.vue'
import Footer from './components/layout/footer.vue'



// Back to Top
const showBackToTop = ref(false)

const handleScroll = () => {
  showBackToTop.value = window.scrollY > 400
}

const backToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
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
    <TechStack />
    <Projects />
    <Contact />
  </main>



  <!-- Footer -->
  <Footer />


  <!-- Back to Top -->
  <Transition name="back-to-top">
    <button v-if="showBackToTop" @click="backToTop" aria-label="Back to top"
      class="fixed bottom-6 right-6 z-50 flex h-11 w-11 items-center justify-center rounded-full border border-violet-200 bg-gradient-to-br from-indigo-500 to-violet-500 text-white shadow-lg shadow-violet-300/30 transition-all duration-300 hover:-translate-y-1 hover:from-indigo-600 hover:to-violet-600 hover:shadow-xl hover:shadow-violet-400/40">
      <ArrowUp class="h-4 w-4" />
    </button>
  </Transition>

</template>


<style scoped>
.back-to-top-enter-active,
.back-to-top-leave-active {
  transition:
    opacity 0.3s ease,
    transform 0.3s ease;
}

.back-to-top-enter-from,
.back-to-top-leave-to {
  opacity: 0;
  transform: translateY(12px) scale(0.8);
}

.back-to-top-enter-to,
.back-to-top-leave-from {
  opacity: 1;
  transform: translateY(0) scale(1);
}
</style>
