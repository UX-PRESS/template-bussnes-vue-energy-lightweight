<template>
  <!-- Wrapper cobre o offset do header -->
  <div class="bg-[#FAF7F4] pt-28">
    <section class="text-slate-800 px-6 pb-24">
      <!-- Header -->
      <div class="max-w-6xl mx-auto text-center mb-16">
        <h1 class="text-4xl md:text-5xl font-bold mb-4">
          Project Case Studies
        </h1>
        <p class="text-lg md:text-xl max-w-3xl mx-auto text-slate-600">
          Real-world examples of how AetherGrid delivers reliable, clean, and
          intelligent energy solutions for communities across Ireland.
        </p>
      </div>

      <!-- Projects -->
      <div class="max-w-5xl mx-auto grid gap-10">
        <!-- Project Card -->
        <article
          class="bg-white rounded-2xl p-8 md:p-10 shadow-md hover:shadow-xl transition-shadow duration-300"
        >
          <h2 class="text-2xl font-semibold mb-4">
            Inis Mór EcoGrid
          </h2>

          <ul class="space-y-2 text-slate-600 list-disc list-inside">
            <li>250 residents powered completely off-grid</li>
            <li>85% reduction in carbon emissions</li>
            <li>Hybrid solar and wind generation</li>
            <li>AI-driven battery load balancing</li>
            <li>Local employment and energy education initiatives</li>
          </ul>
        </article>

        <!-- Project Card -->
        <article
          class="bg-white rounded-2xl p-8 md:p-10 shadow-md hover:shadow-xl transition-shadow duration-300"
        >
          <h2 class="text-2xl font-semibold mb-4">
            Cooley Peninsula Cluster
          </h2>

          <ul class="space-y-2 text-slate-600 list-disc list-inside">
            <li>14 farms connected through a shared smart energy network</li>
            <li>32% efficiency increase via intelligent battery sharing</li>
            <li>Weather-based production forecasting</li>
            <li>Dynamic energy storage optimization</li>
            <li>Designed for long-term scalability in rural regions</li>
          </ul>
        </article>

        <!-- Placeholder future -->
        <div
          class="border-2 border-dashed border-slate-300 rounded-2xl p-10 text-center text-slate-500"
        >
          More community energy projects coming soon.
        </div>
      </div>
    </section>
  </div>
</template>
