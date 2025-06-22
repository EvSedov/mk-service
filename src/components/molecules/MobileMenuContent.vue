<script setup lang="ts">
import { inject } from 'vue';
import IconPhone from '../atoms/icons/IconPhone.vue';

const closeSheet = inject('closeSheet') as () => void;
const scrollToSection = (event: Event, targetId: string) => {
  event.preventDefault(); // Предотвращаем стандартное поведение ссылки

  // Специальный случай для "Главная" - прокрутка в начало страницы
  if (targetId === 'main') {
    window.scrollTo({ top: 0, behavior: 'smooth' });

    if (closeSheet) {
      closeSheet();
    }

    return;
  }

  const element = document.getElementById(targetId);
  if (element) {
    // Используем scrollIntoView для плавной прокрутки
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  if (closeSheet) {
    closeSheet();
  }
};
</script>

<template>
  <nav class="flex flex-col gap-3 p-4">
    <a
      href="#main"
      class="text-white font-bold text-lg hover:text-yellow-400 active:text-yellow-500 transition-colors duration-200 hover:bg-black/20 px-2"
      @click="scrollToSection($event, 'main')"
      >Главная</a
    >
    <a
      href="#продукция"
      class="text-white font-bold text-lg hover:text-yellow-400 active:text-yellow-500 transition-colors duration-200 hover:bg-black/20 px-2"
      @click="scrollToSection($event, 'продукция')"
      >Продукция</a
    >
    <a
      href="#партнеры"
      class="text-white font-bold text-lg hover:text-yellow-400 active:text-yellow-500 transition-colors duration-200 hover:bg-black/20 px-2"
      @click="scrollToSection($event, 'партнеры')"
      >Партнеры</a
    >
    <a
      href="#команда"
      class="text-white font-bold text-lg hover:text-yellow-400 active:text-yellow-500 transition-colors duration-200 hover:bg-black/20 px-2"
      @click="scrollToSection($event, 'команда')"
      >Команда</a
    >
    <a
      href="#контакты"
      class="text-white font-bold text-lg hover:text-yellow-400 active:text-yellow-500 transition-colors duration-200 hover:bg-black/20 px-2"
      @click="scrollToSection($event, 'контакты')"
      >Контакты</a
    >
  </nav>
  <!-- {{ 5 }} -->
  <div
    class="mt-4 flex flex-col items-start p-4 space-y-2 px-4 text-sm border-t border-gray-200"
  >
    <div class="flex flex-col text-white">
      <span class="font-light text-lg">Отдел продаж</span>
      <a
        class="flex gap-2 items-center text-[#FFD13D] hover:text-white active:text-yellow-500 hover:bg-black/20 px-2 py-1 rounded transition-colors duration-200"
        href="tel:+79137400363"
      >
        <IconPhone />
        <span class="font-bold text-xl text-nowrap">+7 (913) 740-03-63</span>
      </a>
      <span class="font-light text-lg">пн-пт 09:00-17:00 (НСК)</span>
    </div>
  </div>
</template>
