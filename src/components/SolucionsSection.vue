<template>
  <section
    class="relative lg:-top-70 min-h-screen bg-cover bg-center flex items-center justify-center px-6 sm:px-12 z-0"
    style="background-image: url('/light.png');">

    <div class=" w-full flex justify-center">
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        <div v-for="(card, index) in cards"
          :key="index"
          class="card w-60 h-60 rounded-full bg-[var(--amber-cream)] shadow-lg flex flex-col items-center justify-center 
          text-center p-6 hover:scale-105 transition-all duration-300">

          <h1 class="text-lg font-semibold text-[var(--graphite-black)] mb-2">
            {{ card.title }}
          </h1>
          <p class="text-sm text-[var(--graphite-black)]">
            {{ card.description }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const cards = [
  {
    title: 'Smart Microgrids',
    description:
      'Ideal for remote villages, islands, and rural clusters — powered by AI-driven energy balancing.',
  },
  {
    title: 'Home & Farm Installation',
    description:
      'Weather-optimized panels, battery backup, and real-time energy tracking for properties.',
  },
  {
    title: 'Energy Consultancy',
    description:
      'Custom energy planning and retrofit consulting for councils, businesses, and communities.',
  },
];
</script>
