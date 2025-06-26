<template>
  <section
    id="hero"
    class="relative h-screen bg-cover bg-center flex items-start justify-end px-6 sm:px-12 md:px-77"
    style="background-image: url('/public/solarpanel.jpg')"
  >
    <!-- Overlay -->
    <div class="absolute inset-0 bg-white/20 z-0" aria-hidden="true"></div>

    <!-- Wrapper com alinhamento igual ao header -->
    <div class="relative z-10 flex flex-col items-end mt-39">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-right text-black max-w-xl ml-auto">
          <h3 class="font-semibold">Solar Panels</h3>
          <h1 class="text-3xl sm:text-5xl md:text-6xl font-bold leading-tight mb-4">
            Local. Smart Energy. Sustainable
          </h1>

          <p class="text-md sm:text-lg md:text-xl mb-6">
            Solar technology from AetherGrid — empowering communities
            <span class="relative inline-block">
              <span class="bg-amber-cream/30 px-1 rounded font-bold text-shadow-lg animate-pulse-energy">
                with smart, sustainable infrastructure.
              </span>
            </span>
          </p>

          <router-link to="/contact" class="btn-primary inline-block">
            Get Product
          </router-link>
          
          <router-link to="/contact" class="btn-secondary inline-block">
            Know More
          </router-link>
        </div>
      </div>
    </div>
  </section>
</template>
