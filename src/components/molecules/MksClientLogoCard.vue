<script setup>
import { defineProps, computed } from 'vue';

defineProps({
  logo: {
    type: String,
    required: true,
  },
  name: {
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
    class="flex-shrink-0 bg-white rounded-lg shadow-md flex flex-col items-center justify-center aspect-square"
    :class="cardWidthClasses"
  >
    <img :src="logo" :alt="name" class="w-full h-full object-contain" />
  </div>
</template>

<style scoped>
/* No specific styles needed if using Tailwind exclusively */
/* Animation for scrolling will be applied to the flex container in the parent */
</style>
