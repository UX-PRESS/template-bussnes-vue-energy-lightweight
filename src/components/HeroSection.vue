<template>
  <section class="relative h-screen bg-cover bg-center flex items-center justify-between px-6 sm:px-12"  
  style="background-image: url('/solarpanel.jpg');">
<!-- Shape Divider -->
<div class="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
  <img src="/Wave.svg" class="relative block w-full h-full" />
</div>

    
    <div class="max-w-7xl sm:px-68 ml-180 -mt-20">
      <div class="relative grid text-right text-black z-10">
        <h3 class=" px-5 py-2.5 me-2 mb-2">Solar Panels</h3>
        <h1 class="  text-2xl sm:text-xl md:text-7xl  leading-tight mb-4">
          Local.<br/>
           Sustainable.<br/>
           Smart Energy.
        </h1>
        <p class="text-md sm:text-lg md:text-xl mb-6">
          Solar technology from AetherGrid -
          <span class="relative inline-block">
            <span class="bg-amber-cream/30 px-1 rounded font-bold text-shadow-lg animate-pulse-energy">
              empowering communities.
            </span>
          </span>
        </p>
        <div class="space-x-4">
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

<script setup>
import { ref } from 'vue'
</script>

<style scoped>
/* você pode animar esse card flutuante com: */
@keyframes fadeUp {
  from {
    transform: translateY(40px);
    opacity: 0;
  }

  to {
    transform: translateY(0);
    opacity: 1;
  }
}

.card-invade {
  animation: fadeUp 1s ease-out;
}
</style>
