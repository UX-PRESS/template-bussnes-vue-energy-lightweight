<template>
  <section class="relative z-10 px-6 md:px-16 pt-36 pb-20 ">

      <!-- Cards -->
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto py-16 px-3 items-left ">

        <div v-for="(solution, index) in solutions" :key="index"
          class="bg-white shadow-md overflow-hidden hover:shadow-lg transition ">
          <img :src="solution.image" :alt="solution.title" class=" h-40  " />
          <div class="p-6">
            <h3 class="text-xl font-semibold mb-2 ">{{ solution.title }}</h3>
            <p class="text-sm text-[var(--taupe)]">{{ solution.description }}</p>
          </div>
        </div>
      </div>
  </section>
</template>

<script setup>
const solutions = [
  {
    title: 'Smart Microgrids',
    description: 'Ideal for remote villages, islands, and rural clusters — powered by AI-driven energy balancing.',
    image: '',
  },
  {
    title: 'Home & Farm Installations',
    description: 'Weather-optimized panels, battery backup, and real-time energy tracking for properties.',
    image: '/',
  },
  {
    title: 'Energy Consultancy',
    description: 'Custom energy planning and retrofit consulting for councils, businesses, and communities.',
    image: '/',
  },
];
</script>
