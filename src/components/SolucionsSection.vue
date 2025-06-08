<template>
  <section class="py-16 bg-[#FAF7F4] text-[var(--slate)] text-center">
    <h2 class="text-3xl font-bold mb-6">Our Solutions</h2>
    <p class="mb-10 max-w-2xl mx-auto">
      From microgrids to farm installations, discover how AetherGrid empowers rural communities with smart energy.
    </p>

    <div class="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">
      <div class="bg-white p-6 shadow rounded-xl">
        <h3 class="font-semibold text-xl mb-2">Smart Microgrids</h3>
        <p class="text-sm">Power small towns or island clusters with AI-optimized solar + wind energy.</p>
      </div>
      <div class="bg-white p-6 shadow rounded-xl">
        <h3 class="font-semibold text-xl mb-2">Home & Farm Installations</h3>
        <p class="text-sm">Panel systems with weather prediction, live monitoring, and backup storage.</p>
      </div>
      <div class="bg-white p-6 shadow rounded-xl">
        <h3 class="font-semibold text-xl mb-2">Energy Consultancy</h3>
        <p class="text-sm">Custom plans and feasibility studies for councils or retrofitting projects.</p>
      </div>
    </div>

    <router-link to="/solutions">
      <button class="mt-10 bg-[#EE6F30] text-white px-6 py-3 rounded-xl hover:bg-[#cf5f27] transition">
        See All Solutions
      </button>
    </router-link>
  </section>
</template>
