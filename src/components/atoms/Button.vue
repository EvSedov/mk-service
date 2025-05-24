<script setup lang="ts">
defineProps<{
  label: string
  type?: 'button' | 'submit' | 'reset'
}>();
</script>

<template>
  <button :type="type ?? 'button'" class="btn">
    {{ label }}
  </button>
</template>

<style scoped>
.btn {
  padding: 8px 16px;
  border-radius: 4px;
  background: var(--primary-color, #42b983);
  color: #fff;
  border: none;
  cursor: pointer;
}
</style>
