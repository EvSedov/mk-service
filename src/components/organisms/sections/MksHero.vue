<script setup lang="ts">
import MksHeader from '@/components/organisms/MksHeader.vue';
import MksButton from '@/components/atoms/MksButton.vue';
import StatisticsCard from '@/components/molecules/StatisticsCard.vue';
</script>

<template>
  <section class="hero">
    <div class="hero-filter"></div>
    <MksHeader />
    <div class="hero-bg container">
      <div class="hero__content flex items-start justify-between w-full">
        <div class="flex flex-col gap-10.5 max-w-[50%]">
          <h2 class="m-0 p-0 text-[76px]/[1.1] text-white font-black!">
            Ваш партнер <br />
            по
            <span class="font-black! text-[#FFD13D]">снабжению</span>
          </h2>
          <p class="text-white text-xl/tight w-[394px] font-bold!">
            Оперативные поставки расходных материалов в Новосибирске
          </p>
          <p class="text-white font-normal! w-[318px] text-base/tight">
            Для монолитчиков, каменщиков, отделочников и других специалистов
          </p>
          <MksButton
            label="Контакты"
            class="text-black bg-amber-300 w-[264px] h-26 text-3xl font-semibold! rounded-xl"
          />
        </div>

        <StatisticsCard />
      </div>
    </div>
  </section>
</template>

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
  margin: auto;
}
</style>
