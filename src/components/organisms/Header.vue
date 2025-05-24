<template>
  <header class="header bg-gray-800/50">
    <div class="header-filter"></div>
    <div class="header__content flex items-center container py-8">
        <div class="header__logo">
          <Logo />
        </div>
        <nav class="header__nav">
          <ul class="flex space-x-4">
            <li><a href="#main" class="text-white font-bold text-lg">Главная</a></li>
            <li><a href="#products" class="text-white font-bold text-lg">Продукция</a></li>
            <li><a href="#partners" class="text-white font-bold text-lg">Партнеры</a></li>
            <li><a href="#team" class="text-white font-bold text-lg">Команда</a></li>
            <li><a href="#contacts" class="text-white font-bold text-lg">Контакты</a></li>
          </ul>
        </nav>
        <div class="header__contact text-white">
          <span class="font-light text-lg">Отдел продаж</span>
          <span class="font-bold text-[#FFD13D] text-xl">+7 (913) 740-00-03</span>
          <span>пн-пт 09:00 - 17:00 (НСК)</span>
        </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import Logo from '@/components/atoms/Logo.vue';
</script>

<style scoped>
.header {
  background-color: var(--vt-c-black-mute);
  position: relative; 
  background-image: url('@/assets/images/bg-header-hero-80.jpg');
  background-size: cover;
  background-position: center top;
  background-repeat: no-repeat;
  overflow: hidden;
}

.header-filter {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(56, 70, 81, 0.7);
  backdrop-filter: blur(2px); /* Эффект размытия */
  z-index: 1;
}

.header__content {
  position: relative;
  z-index: 20;
}

.header__nav ul {
  list-style: none;
  display: flex;
  margin-left: 70px;
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
  margin-left: auto;
}
</style>