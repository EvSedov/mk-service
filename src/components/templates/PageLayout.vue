<script setup lang="ts">
import MksFooter from '@/components/organisms/MksFooter.vue';
</script>

<template>
  <div class="layout">
    <main class="main-content">
      <slot />
    </main>
    <MksFooter />
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
