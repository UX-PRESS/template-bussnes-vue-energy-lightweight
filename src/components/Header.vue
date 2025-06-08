<template>
  <header class="bg-blur shadow-md">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center h-20 relative">
        <!-- Links à esquerda -->
        <nav class="hidden md:flex space-x-10 font-medium text-white ">
          <router-link to="/" class="hover:text-[var(--orange)] transition ">Home</router-link>
          <router-link to="/about" class="hover:text-[var(--orange)] transition">About</router-link>
          <router-link to="/solutions" class="hover:text-[var(--orange)] transition">Solutions</router-link>
        </nav>

        <!-- Logo central -->
        <div class="absolute left-1/2 transform -translate-x-1/2">
          <router-link to="/" class="flex items-center space-x-2">
            <img src="/logo.png" alt="AetherGrid Logo" class="h-10 w-10" />
              <span class="text-2xl font-bold text-black">AetherGrid</span>

          </router-link>
        </div>

        <!-- Links à direita + CTA -->
        <div class="hidden md:flex items-center space-x-10 font-medium text-white">
          <router-link to="/projects" class="hover:text-[var(--orange)] transition">Projects</router-link>
          <router-link to="/contact" class="hover:text-[var(--orange)] transition">Contact</router-link>
          <router-link to="/contact" class="btn-primary">Talk </router-link>
        </div>

        <!-- Menu Mobile -->
        <div class="md:hidden">
          <button @click="mobileMenuOpen = !mobileMenuOpen" class="text-black focus:outline-none">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2"
                 viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round">
              <path v-if="!mobileMenuOpen" d="M4 6h16M4 12h16M4 18h16"/>
              <path v-else d="M6 18L18 6M6 6l12 12"/>
            </svg>
          </button>
        </div>
      </div>
    </div>

    <!-- Menu Mobile -->
    <div v-if="mobileMenuOpen" class="md:hidden bg-[var(--slate)] px-4 pt-2 pb-4 space-y-2">
      <router-link to="/" class="block text-white hover:text-[var(--orange)]">Home</router-link>
      <router-link to="/about" class="block text-white hover:text-[var(--orange)]">About</router-link>
      <router-link to="/solutions" class="block text-white hover:text-[var(--orange)]">Solutions</router-link>
      <router-link to="/projects" class="block text-white hover:text-[var(--orange)]">Projects</router-link>
      <router-link to="/contact" class="block text-white hover:text-[var(--orange)]">Contact</router-link>
      <router-link to="/contact" class="btn-primary block text-center mt-2">Talk to a Specialist</router-link>
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue'
const mobileMenuOpen = ref(false)
</script>
