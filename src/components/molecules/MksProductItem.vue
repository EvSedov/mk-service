<script setup lang="ts">
defineProps<{
  image: string;
  description: string;
}>();
</script>

<template>
  <div class="flex items-center gap-6">
    <!-- Placeholder for image/icon -->
    <div
      class="w-20 h-20 rounded-full bg-gray-300 flex items-center justify-center"
    >
      <span class="text-sm text-gray-600">Иконка</span>
    </div>
    <p class="text-white text-xl/tight font-semibold flex-1">
      {{ description }}
    </p>
  </div>
</template>

<style scoped>
/* Дополнительные стили при необходимости, но стараемся использовать Tailwind */
</style>
