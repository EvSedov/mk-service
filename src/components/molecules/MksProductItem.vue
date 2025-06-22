<script setup lang="ts">
const props = defineProps<{
  image: string;
  description: string;
}>();
</script>

<template>
  <div class="flex flex-col items-center gap-3 md:gap-6 md:flex-row">
    <div
      class="w-30 h-30 md:w-40 md:h-40 rounded-full bg-[#384651]/50 flex items-center justify-center"
    >
      <img :src="props.image" :alt="props.description" />
    </div>
    <p
      class="text-white text-xl/tight font-bold flex-1 text-center md:text-left"
    >
      {{ props.description }}
    </p>
  </div>
</template>

<style scoped>
/* Дополнительные стили при необходимости, но стараемся использовать Tailwind */
</style>
