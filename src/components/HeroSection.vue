<template>
  <section
    class="relative h-screen bg-cover bg-center flex items-center justify-end px-6 sm:px-12 lg:px-20"
    style="background-image: url('/solarpanel.jpg');"
  >
    <!-- Shape Divider -->
    <div class="absolute bottom-0 left-0 w-full overflow-hidden leading-none pointer-events-none">
      <img src="/image.png" class="relative w-full h-full translate-y-[1mm]" />
    </div>

    <div class="max-w-3xl text-right text-black z-10 -mt-20">
      <div class="space-y-4">
        <h3 class="px-5 py-2.5 mb-2">Solar Panels</h3>
        <h1 class="text-xl sm:text-3xl md:text-7xl font-bold leading-tight mb-4">
          Local.<br />
          Sustainable.<br />
          Smart Energy.
        </h1>
        <p class="text-md sm:text-lg md:text-xl mb-6 max-w-md mx-auto sm:mx-0">
          Solar technology from AetherGrid -
          <span class="relative inline-block">
            <span class="bg-amber-cream/30 px-1 rounded font-bold text-shadow-lg animate-pulse-energy">
              empowering communities.
            </span>
          </span>
        </p>
        <div class="space-x-4 flex justify-end">
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
