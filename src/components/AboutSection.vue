<template>
<section class="relative z-10 py-40 px-6 sm:px-12">
<div class="flex flex-col md:flex-row items-center justify-center gap-8 text-white ">
    
    <!-- Left: Short phrase -->
    <div class=" font-bold text-center md:text-left text-xl">
      Powering communities.<br class="hidden md:block" />
      Protecting the planet.
    </div>

    <!-- Center: Combined core text -->
    <div class="text-center md:text-left text-sm md:text-base max-w-xl ">
      AetherGrid empowers local communities with 
        <span class="relative inline-block before:absolute before:-inset-1 before:block before:-skew-y-3 before:bg-blue-800">
      <span class="relative text-white dark:text-gray-95"> intelligent, and affordable energy</span>
     </span>
      leading Ireland’s micro-infrastructure revolution with sustainability, innovation, and trust at our core.
    </div>

    <!-- Right: Button -->
    <div>
      <router-link to="/about">
        <button class="btn-primary">
          See More
        </button>
      </router-link>
    </div>
  </div>
</section>

</template>
