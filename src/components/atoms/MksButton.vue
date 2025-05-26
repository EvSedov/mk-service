<script setup lang="ts">
defineProps<{
  label: string;
  type?: 'button' | 'submit' | 'reset';
}>();
</script>

<template>
  <button :type="type ?? 'button'">
    {{ label }}
  </button>
</template>

<style scoped></style>
