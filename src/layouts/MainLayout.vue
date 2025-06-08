<template>
  <div>
    <SiteHeader />
    <main>
      <router-view />
    </main>
    <FooterSection/>
  </div>
</template>

<script setup>
import SiteHeader from '@/components/Header.vue'
import FooterSection from '@/components/FooterSection.vue';
</script>
