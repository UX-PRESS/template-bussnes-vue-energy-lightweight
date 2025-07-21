<template>
<header class="absolute top-0 left-0 w-full z-50 bg-transparent backdrop-blur-none">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center h-20 pt-12 ">
        <!-- Logo and name -->
        
        <!-- Links desktop -->
    <nav class="nav-blur hidden md:flex">
      <router-link to="/" class="">Home</router-link>
      <router-link to="/about" class="hover:text-[var(--royal-blue)]">About</router-link>
      <router-link to="/solutions" class="hover:text-[var(--royal-blue)]">Solutions</router-link>
      <router-link to="/projects" class="hover:text-[var(--royal-blue)]">Projects</router-link>
      <router-link to="/contact" class="hover:text-[var(--royal-blue)]">Contact</router-link>
    </nav>
    <router-link to="/" class="flex items-center space-x-2">
          <img src="/logo.png" alt="AetherGrid Logo" class="h-10 w-10" />
          <span class="text-2xl font-bold text-[var(--royal-blue)]">AetherGrid</span>
        </router-link>

        <!-- Botão mobile -->
        <div class="md:hidden">
          <button @click="mobileMenuOpen = !mobileMenuOpen" class="text-[var(--slate)] focus:outline-none">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2"
              viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round">
              <path v-if="!mobileMenuOpen" d="M4 6h16M4 12h16M4 18h16" />
              <path v-else d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
    </div>

    <!-- Menu Mobile -->
    <div v-if="mobileMenuOpen" class="md:hidden bg-white/80 backdrop-blur-sm px-4 pt-4 pb-6 space-y-2">
      <router-link to="/" class="block text-[var(--slate)] hover:text-[var(--amber-cream)]">Home</router-link>
      <router-link to="/about" class="block text-[var(--slate)] hover:text-[var(--amber-cream)]">About</router-link>
      <router-link to="/solutions" class="block text-[var(--slate)] hover:text-[var(--amber-cream)]">Solutions</router-link>
      <router-link to="/projects" class="block text-[var(--slate)] hover:text-[var(--amber-cream)]">Projects</router-link>
      <router-link to="/contact" class="block text-[var(--slate)] hover:text-[var(--amber-cream)]">Contact</router-link>
      <router-link to="/contact" class="btn-primary block text-center mt-2">Get a Quote</router-link>
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue'
const mobileMenuOpen = ref(false)
</script>
