<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const isVisible = ref(false);

const handleScroll = () => {
  isVisible.value = window.scrollY > 100; // Показывать кнопку после 100px прокрутки
};

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<template>
  <button
    v-show="isVisible"
    class="fixed bottom-8 right-8 p-4 rounded-full bg-yellow-500/80 text-white shadow-lg transition-all duration-300 ease-in-out hover:bg-yellow-600/80 active:translate-x-0.5 active:translate-y-0.5 active:shadow-inner z-50"
    @click="scrollToTop"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="3"
      stroke="currentColor"
      class="w-12 h-12"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18"
      />
    </svg>
  </button>
</template>

<style scoped>
/* Дополнительные стили, если нужны, но Tailwind CSS должен справиться */
</style>
