<script setup lang="ts">
defineProps<{
  label: string;
  type?: 'button' | 'submit' | 'reset';
}>();
</script>

<template>
  <button
    :type="type ?? 'button'"
    class="bg-yellow-400 text-black font-bold py-2 px-4 rounded shadow-lg shadow-black/60 hover:bg-yellow-500 active:bg-yellow-600 transition-all duration-200 active:translate-x-0.5 active:translate-y-0.5 active:shadow-inner"
  >
    {{ label }}
  </button>
</template>

<style scoped></style>
