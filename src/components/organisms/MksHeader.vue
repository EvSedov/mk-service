<script setup lang="ts">
import MksLogo from '@/components/atoms/MksLogo.vue';
import IconPhone from '@/components/atoms/icons/IconPhone.vue';

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
      class="header__content flex items-center justify-between container py-8"
    >
      <div class="header__logo">
        <MksLogo />
      </div>
      <nav class="header__nav">
        <ul class="flex space-x-4">
          <li>
            <a
              href="#main"
              class="text-white font-bold text-lg"
              @click="scrollToSection($event, 'main')"
              >Главная</a
            >
          </li>
          <li>
            <a
              href="#продукция"
              class="text-white font-bold text-lg"
              @click="scrollToSection($event, 'продукция')"
              >Продукция</a
            >
          </li>
          <li>
            <a
              href="#партнеры"
              class="text-white font-bold text-lg"
              @click="scrollToSection($event, 'партнеры')"
              >Партнеры</a
            >
          </li>
          <li>
            <a
              href="#команда"
              class="text-white font-bold text-lg"
              @click="scrollToSection($event, 'команда')"
              >Команда</a
            >
          </li>
          <li>
            <a
              href="#контакты"
              class="text-white font-bold text-lg"
              @click="scrollToSection($event, 'контакты')"
              >Контакты</a
            >
          </li>
        </ul>
      </nav>
      <div class="header__contact text-white">
        <span class="font-light! text-lg">Отдел продаж</span>
        <a class="flex gap-2 items-center" href="tel:+79137400003">
          <IconPhone />
          <span class="font-bold! text-[#FFD13D] text-xl"
            >+7 (913) 740-00-03</span
          >
        </a>
        <span class="font-light! text-lg">пн-пт 09:00-17:00 (НСК)</span>
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
  color: #ffffff;
  font-size: 20px;
  line-height: 24px;
  font-weight: bold;
}

.header__contact {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
}
</style>
