<template>
  <section class="header">
    <div
      class="header__content flex items-center justify-between container py-8"
    >
      <div class="header__logo">
        <Logo />
      </div>
      <nav class="header__nav">
        <ul class="flex space-x-4">
          <li>
            <a href="#main" class="text-white font-bold text-lg">Главная</a>
          </li>
          <li>
            <a href="#products" class="text-white font-bold text-lg"
              >Продукция</a
            >
          </li>
          <li>
            <a href="#partners" class="text-white font-bold text-lg"
              >Партнеры</a
            >
          </li>
          <li>
            <a href="#team" class="text-white font-bold text-lg">Команда</a>
          </li>
          <li>
            <a href="#contacts" class="text-white font-bold text-lg"
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

<script setup lang="ts">
import Logo from '@/components/atoms/Logo.vue';
import IconPhone from '../icons/IconPhone.vue';
</script>

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
