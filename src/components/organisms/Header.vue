<template>
  <header class="bg-gray-800 py-8">
    <div class="flex items-center container">
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
        <span class="font-light">Отдел продаж</span>
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
}

.header__content {
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
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