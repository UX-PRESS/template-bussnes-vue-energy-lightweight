<template>
  <section class="bg-[var(--offwhite)] text-[var(--text)] py-20">
    <div class="max-w-7xl mx-auto px-6 text-center">
      <!-- Headline -->
      <h1 class="text-4xl md:text-5xl font-bold leading-tight mb-4">
        Smart Energy. Sustainable. Local.
      </h1>

      <!-- Subheadline -->
      <p class="text-lg md:text-xl text-[var(--taupe)] max-w-2xl mx-auto mb-8">
        From Atlantic coastlines to remote villages — we deliver clean energy that empowers communities.
      </p>

      <!-- CTA Buttons -->
      <div class="flex flex-col sm:flex-row justify-center gap-4">
        <router-link to="/contact" class="btn-primary">
          Talk to a Specialist
        </router-link>
        <router-link to="/projects" class="btn-secondary">
          See Our Projects
        </router-link>
      </div>
    </div>
  </section>
</template>
