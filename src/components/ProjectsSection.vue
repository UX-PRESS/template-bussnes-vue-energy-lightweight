<template>
  <section
    class="relative min-h-screen bg-black flex items-center justify-center px-6 sm:px-12"
  >
    <div class="w-full flex justify-center">
      <div
        class="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3"
      >
        <div
          v-for="(card, index) in cards"
          :key="index"
          class="flex aspect-square flex-col items-center justify-center rounded-full
                 bg-cover bg-center p-6 text-center shadow-sm
                 shadow-soft transition-all duration-300
                 hover:-translate-y-2 hover:shadow-softHover"
          :style="{ backgroundImage: `url(${card.image})` }"
        >
          <!-- Overlay para legibilidade -->
          <div class="rounded-full p-6">
            <h1
              class="mb-2 font-grotesk text-2xl font-bold tracking-tight">
              {{ card.title }}
            </h1>
            <span
              class=" text-indigo-600 mb-2 inline-block rounded px-2 py-0.5 text-sm font-semibold text-white leading-relaxed"
            >
              {{ card.subtitle }}
            </span>

            <p class="mt-2 text-lg font-semibold text-white">
              {{ card.description }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>


<script setup>
const cards = [
  {

    title: 'Recycling',
    description: '250 residents powered off-grid',
    subtitle: 'Inis Mór EcoGrid',
    image: '/recycling.jpg'

  },
  {
    title: 'Solar Community Roof',
    description: 'Clean energy for a school and nearby homes',
    subtitle: 'Solar Infrastructure',
    image: '/solar-panel.jpg'

  },
  {
    title: 'AI Energy Optimizer',
    description: '85% emissions reduction with solar/battery hybrid',
    subtitle: 'Smart Grid',
    image: '/ai-energy.png'
  }
]

</script>