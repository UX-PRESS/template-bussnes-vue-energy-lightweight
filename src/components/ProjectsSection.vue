<template>
  <section>
  <div class="min-h-screen flex items-center justify-center">
    <div class="relative w-[1500px] h-[650px] rounded-2xl overflow-hidden shadow-xl">
      <!-- Imagem de fundo -->
      <img :src="currentSlide.image" alt="Imagem" class="w-full h-full object-cover transition-all duration-700" />

      <!-- Camada escura para destaque do texto -->
      <div class="absolute inset-0 bg-gradient-to-b from-white/60 via-gray/30 to-black/70"></div>

      <!-- Conteúdo -->
      <div class="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-6 z-10">
        <div class="p-4 max-w-3xl">
          <p class="text-lg uppercase tracking-widest text-gray-300 font-bold" >{{ currentSlide.pretitle }}</p>
          <h1 class="text-4xl md:text-6xl text-[var(--amber-cream)] font-bold">{{ currentSlide.title }}</h1>
          <p class="mt-4 text-xl">{{ currentSlide.subtitle }}</p>
          <button class="mt-10 btn-secondary">See More Projects</button>
        </div>

        <!-- Controles -->
        <div class="absolute inset-y-0 left-0 flex items-center pl-4 z-20">
          <button @click="prevImage" class="bg-white/30 hover:bg-white/60 text-black p-2 rounded-full shadow">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
        </div>
        <div class="absolute inset-y-0 right-0 flex items-center pr-4 z-20">
          <button @click="nextImage" class="bg-white/30 hover:bg-white/60 text-black p-2 rounded-full shadow">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'

import img1 from '/recycling.jpg'
import img2 from '/background.jpg'
import img3 from '/solar-panel.jpg'

const slides = [
  {
    image: img1,
    pretitle: 'Recycling',
    title: '250 residents powered off-grid',
    subtitle: 'Inis Mór EcoGrid'
  },
  {
    image: img2,
    pretitle: 'Solar Community Roof',
    title: 'Clean energy for a school and nearby homes',
    subtitle: 'Solar Infrastructure'
  },
  {
    image: img3,
    pretitle: 'AI Energy Optimizer',
    title: '85% emissions reduction with solar/battery hybrid',
    subtitle: 'Smart Grid'
  }
]


const currentIndex = ref(0)

const currentSlide = computed(() => slides[currentIndex.value])

const nextImage = () => {
  currentIndex.value = (currentIndex.value + 1) % slides.length
}

const prevImage = () => {
  currentIndex.value = (currentIndex.value - 1 + slides.length) % slides.length
}
</script>

<script>
export default {
  methods: {
    updateSpot(e) {
      this.$el.querySelector('.sunlight-overlay')
        .style.setProperty('--cx', e.clientX + 'px');
      this.$el.querySelector('.sunlight-overlay')
        .style.setProperty('--cy', e.clientY + 'px');
    }
  }
}
</script>

<style scoped>
.light-bg {
  position: fixed;
  top: 0; left: 0;
  width: 100vw; height: 100vh;
  pointer-events: none;
  background: conic-gradient(
    at 50% 30%,
    rgba(255,255,200,0.3) 0deg,
    rgba(0,0,0,0.95) 45deg 315deg,
    rgba(255,255,200,0.3) 360deg
  );
  animation: rotateLight 10s linear infinite;
}

@keyframes rotateLight {
  from { transform: rotate(0deg); }
  to   { transform: rotate(360deg); }
}
</style>