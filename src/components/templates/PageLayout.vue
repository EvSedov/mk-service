<script setup lang="ts">
import Hero from '../organisms/sections/Hero.vue';
import Footer from '@/components/organisms/Footer.vue'
</script>

<template>
  <div class="layout">
    <Hero />
    <main class="main-content">
      <slot />
    </main>
    <Footer />
  </div>
</template>

<style scoped>
.layout {
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.main-content {
  flex: 1 0 auto;
}
</style> 