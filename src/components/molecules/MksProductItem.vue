<script setup lang="ts">
const props = defineProps<{
  image: string;
  description: string;
}>();
</script>

<template>
  <div class="flex items-center gap-6">
    <div
      class="w-40 h-40 rounded-full bg-gray-300 flex items-center justify-center"
    >
      <img :src="props.image" :alt="props.description" />
    </div>
    <p class="text-white text-xl/tight font-semibold flex-1">
      {{ props.description }}
    </p>
  </div>
</template>

<style scoped>
/* Дополнительные стили при необходимости, но стараемся использовать Tailwind */
</style>
