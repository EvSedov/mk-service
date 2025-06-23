<script setup lang="ts">
import MksHeader from '@/components/organisms/MksHeader.vue';
import MksButton from '@/components/atoms/MksButton.vue';
import StatisticsCard from '@/components/molecules/StatisticsCard.vue';

const scrollToContacts = () => {
  const contactsSection = document.getElementById('contacts-section');
  if (contactsSection) {
    contactsSection.scrollIntoView({ behavior: 'smooth' });
  }
};
</script>

<template>
  <section class="hero max-h-[770px]">
    <div class="bg-filter"></div>
    <MksHeader />
    <div class="hero-bg container px-4">
      <div
        class="hero__content flex items-center justify-center 2xl:items-start lg:justify-between w-full"
      >
        <div class="flex flex-col gap-10.5 lg:max-w-[50%] px-4">
          <h2
            class="m-0 p-0 text-[36px]/[1.1] md:text-[46px]/[1.1] lg:text-[56px]/[1.1] xl:text-[76px]/[1.1] text-white font-bold md:font-extrabold text-wrap"
          >
            Ваш партнер <br />
            по
            <span class="font-extrabold text-[#FFD13D]">снабжению</span>
          </h2>
          <p class="text-white text-xl/tight max-w-[394px] font-bold text-wrap">
            Оперативные поставки расходных материалов в Новосибирске
          </p>
          <p
            class="text-white font-normal max-w-[318px] text-base/tight text-wrap"
          >
            Для монолитчиков, каменщиков, отделочников и других специалистов
          </p>
          <MksButton
            label="Контакты"
            class="text-black bg-amber-300 w-[264px] h-26 text-3xl font-semibold rounded-xl hidden 2xl:block"
            @click="scrollToContacts"
          />
        </div>
        <div class="hidden lg:block">
          <StatisticsCard />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero {
  position: relative;
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

.bg-filter {
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
  padding: 48px 0;
  margin: auto;
}
</style>
