<template>
  <section class="relative z-10 px-6 md:px-16  pt-36 pb-20 ">

  <!-- Insert the sunlight overlay here, positioned above bg but below cards -->
    <div class="sunlight-overlay pointer-events-none"></div>
    
      <!-- Background Color Layer (below cards but not over Hero) -->
    <div class="max-w-7xl mx-auto rounded-3xl shadow-xl py-16 px-6 md:px-12 -mt-90 items-left ">
      <!-- Heading -->
    
      <!-- Cards -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 ">
        <div v-for="(solution, index) in solutions" :key="index"
          class="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition ">
          <img :src="solution.image" :alt="solution.title" class="w-full h-80 object-cover " />
          <div class="p-6">
            <h3 class="text-xl font-semibold mb-2 ">{{ solution.title }}</h3>
            <p class="text-sm text-[var(--taupe)]">{{ solution.description }}</p>
          </div>
        </div>
      </div>
      <div class="text-center">
        <router-link to="/solutions">
          <button class="btn-secondary text-lg px-6 py-6 mt-10">
            Explore All Solutions
          </button>
        </router-link>
      </div>
    </div>
  </section>
</template>

<script setup>
const solutions = [
  {
    title: 'Smart Microgrids',
    description: 'Ideal for remote villages, islands, and rural clusters — powered by AI-driven energy balancing.',
    image: '/smart-microgrids.gif',
  },
  {
    title: 'Home & Farm Installations',
    description: 'Weather-optimized panels, battery backup, and real-time energy tracking for properties.',
    image: '/home-farm.gif',
  },
  {
    title: 'Energy Consultancy',
    description: 'Custom energy planning and retrofit consulting for councils, businesses, and communities.',
    image: '/energy-consultancy.gif',
  },
];
</script>
