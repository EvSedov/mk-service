<template>
  <section class="hero">
    <div class="hero-filter"></div>
    <Header />
    <div class="hero-bg container">
      <div class="hero__content flex">
        
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import Header from '../Header.vue';
</script>

<style scoped>
.hero {
  position: relative;
  height: 770px;
  background-color: rgba(56, 70, 81, 0.5);
  background-image: url('@/assets/images/bg-header-hero-80.jpg');
  background-size: cover;
  background-position: center top 40%;
  background-repeat: no-repeat;
  overflow: hidden;
}

.hero-bg {
  height: 100%;
  position: relative; 
}

.hero-filter {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(56, 70, 81, 0.5);
  z-index: 1;
}

.hero__content {
  position: relative;
  z-index: 20;
}
</style>
