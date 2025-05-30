<script setup>
import { defineProps, computed } from 'vue';

defineProps({
  logo: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    default: '',
  },
});

const cardWidthClasses = computed(() => {
  return (
    'w-[calc(50%-1rem)] ' +
    'sm:w-[calc((100%-4rem)/3)] ' +
    'md:w-[calc((100%-6rem)/4)] ' +
    'lg:w-[calc((100%-8rem)/5)] ' +
    'xl:w-[calc((100%-10rem)/6)]'
  );
});
</script>

<template>
  <div
    class="flex-shrink-0 p-4 bg-white rounded-lg shadow-md flex flex-col items-center justify-center text-center aspect-square"
    :class="cardWidthClasses"
  >
    <img :src="logo" :alt="name" class="max-h-16 object-contain mb-2" />
    <div class="text-sm font-semibold text-gray-800">{{ name }}</div>
    <div v-if="description" class="text-xs text-gray-600">
      {{ description }}
    </div>
  </div>
</template>

<style scoped></style>
