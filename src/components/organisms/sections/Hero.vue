<template>
  <section class="hero">
    <div class="hero-filter"></div>
    <Header />
    <div class="hero-bg container">
      <div class="hero__content flex">
        <div class="flex flex-col gap-10.5">
          <h2 class="w-[630px] m-0 p-0 text-[76px]/20 text-white font-black!">
            Ваш партнер по
            <span class="font-black! text-[#FFD13D]">снабжению</span>
          </h2>
          <p class="text-white text-xl/tight w-[394px] font-bold!">
            Оперативные поставки расходных материалов в Новосибирске
          </p>
          <p class="text-white font-normal! w-[318px] text-base/tight">
            Для монолитчиков, каменщиков, отделочников и других специалистов
          </p>
          <Button
            label="Контакты"
            class="text-black bg-amber-300 w-[264px] h-26 text-3xl font-semibold! rounded-xl"
          />
        </div>
        <div class="content-right"></div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import Header from '@/components/organisms/Header.vue';
import Button from '@/components/atoms/Button.vue';
</script>

<style scoped>
.hero {
  position: relative;
  height: 770px;
  background-color: rgba(56, 70, 81, 0.5);
  background-image: url('@/assets/images/bg-header-hero-80.jpg');
  background-size: cover;
  background-position: center top 40%;
  background-repeat: no-repeat;
  overflow: hidden;
}

.hero-bg {
  height: 100%;
  position: relative;
}

.hero-filter {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(56, 70, 81, 0.5);
  z-index: 1;
}

.hero__content {
  position: relative;
  z-index: 20;
  padding-top: 48px;
}
</style>
