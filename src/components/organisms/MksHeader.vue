<script setup lang="ts">
import MksLogo from '@/components/atoms/MksLogo.vue';
import IconPhone from '@/components/atoms/icons/IconPhone.vue';
import MobileMenuToggle from '../molecules/MobileMenuToggle.vue';

const scrollToSection = (event: Event, targetId: string) => {
  event.preventDefault(); // Предотвращаем стандартное поведение ссылки

  // Специальный случай для "Главная" - прокрутка в начало страницы
  if (targetId === 'main') {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    return;
  }

  const element = document.getElementById(targetId);
  if (element) {
    // Используем scrollIntoView для плавной прокрутки
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
};
</script>

<template>
  <section class="header">
    <div
      class="header__content flex items-center xl:justify-between container py-8 px-6"
    >
      <div class="header__logo">
        <MksLogo />
      </div>
      <nav class="header__nav hidden xl:flex">
        <ul class="flex space-x-4">
          <li>
            <a
              href="#main"
              class="text-white font-bold text-lg hover:text-yellow-400 active:text-yellow-500 transition-colors duration-200 px-1 py-4 rounded"
              @click="scrollToSection($event, 'main')"
              >Главная</a
            >
          </li>
          <li>
            <a
              href="#продукция"
              class="text-white font-bold text-lg hover:text-yellow-400 active:text-yellow-500 transition-colors duration-200 px-1 py-4 rounded"
              @click="scrollToSection($event, 'продукция')"
              >Продукция</a
            >
          </li>
          <li>
            <a
              href="#бренды"
              class="text-white font-bold text-lg hover:text-yellow-400 active:text-yellow-500 transition-colors duration-200 px-1 py-4 rounded"
              @click="scrollToSection($event, 'бренды')"
              >Бренды</a
            >
          </li>
          <li>
            <a
              href="#партнеры"
              class="text-white font-bold text-lg hover:text-yellow-400 active:text-yellow-500 transition-colors duration-200 px-1 py-4 rounded"
              @click="scrollToSection($event, 'партнеры')"
              >Партнеры</a
            >
          </li>
          <li>
            <a
              href="#команда"
              class="text-white font-bold text-lg hover:text-yellow-400 active:text-yellow-500 transition-colors duration-200 px-1 py-4 rounded"
              @click="scrollToSection($event, 'команда')"
              >Команда</a
            >
          </li>
          <li>
            <a
              href="#контакты"
              class="text-white font-bold text-lg hover:text-yellow-400 active:text-yellow-500 transition-colors duration-200 px-1 py-4 rounded"
              @click="scrollToSection($event, 'контакты')"
              >Контакты</a
            >
          </li>
        </ul>
      </nav>
      <div
        class="header__contact text-white ml-auto! xl:ml-0! hidden! md:flex!"
      >
        <span class="font-light text-lg">Отдел продаж</span>
        <a
          class="flex gap-2 items-center text-[#FFD13D] hover:text-white active:text-yellow-500 px-2 py-1 rounded transition-colors duration-200"
          href="tel:+79137400363"
        >
          <IconPhone />
          <span class="font-bold text-xl text-nowrap">+7 (913) 740-03-63</span>
        </a>
        <span class="font-light text-lg">пн-пт 09:00-17:00 (НСК)</span>
      </div>
      <div class="ml-auto! md:ml-10! xl:hidden">
        <MobileMenuToggle />
      </div>
    </div>
  </section>
</template>

<style scoped>
.header {
  background-color: rgba(56, 70, 81, 0.4);
}

.header__content {
  position: relative;
  z-index: 20;
}

.header__nav ul {
  list-style: none;
  display: flex;
  gap: 32px;
}

.header__nav a {
  text-decoration: none;
  font-size: 20px;
  line-height: 24px;
}

.header__contact {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
}
</style>
