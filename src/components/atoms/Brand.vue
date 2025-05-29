<script setup>
import { defineProps } from 'vue';

defineProps({
  src: {
    type: String,
    required: true,
  },
  alt: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <img :src="src" :alt="alt" class="max-h-12 object-contain" />
</template>

<style scoped>
.hover\:opacity-75:hover {
  opacity: 0.75;
}
.transition-opacity {
  transition-property: opacity;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}
</style>
