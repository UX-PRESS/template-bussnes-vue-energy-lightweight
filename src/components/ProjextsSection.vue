<template>
  <section class="py-16 bg-[#FAF7F4] text-[var(--slate)] text-center">
    <h2 class="text-3xl font-bold mb-6">Our Projects</h2>
    <p class="mb-10 max-w-2xl mx-auto text-[var(--taupe)]">
      Real-world microgrid systems transforming rural communities across Ireland.
    </p>

    <div class="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto px-4">
      <div class="bg-white p-6 shadow rounded-xl text-left">
        <h3 class="text-xl font-semibold mb-2">Inis Mór EcoGrid</h3>
        <p class="text-sm mb-1">🏝️ 250 residents powered off-grid</p>
        <p class="text-sm text-[var(--taupe)]">85% emissions reduction achieved through AI battery scheduling and solar/wind hybrid system.</p>
      </div>

      <div class="bg-white p-6 shadow rounded-xl text-left">
        <h3 class="text-xl font-semibold mb-2">Cooley Peninsula Cluster</h3>
        <p class="text-sm mb-1">🌾 14 farms connected under one grid</p>
        <p class="text-sm text-[var(--taupe)]">32% energy efficiency gain using shared battery intelligence.</p>
      </div>
    </div>

    <router-link to="/projects">
      <button class="mt-10 bg-[#EE6F30] text-white px-6 py-3 rounded-xl hover:bg-[#cf5f27] transition">
        See All Projects
      </button>
    </router-link>
  </section>
</template>
