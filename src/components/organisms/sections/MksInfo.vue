<script setup>
import MksInfoCard from '@/components/molecules/MksInfoCard.vue';

// Обратите внимание:
// 1. Замените '/path/to/your/map-background-image.png' на реальный путь к вашей фоновой картинке карты.
// 2. В будущем этот компонент может быть расширен для интеграции с интерактивными картами (например, Яндекс.Карты)
//    вместо статического фонового изображения.
</script>

<template>
  <section
    class="info w-full flex items-center justify-end overflow-hidden bg-cover bg-center inset-0"
  >
    <!-- Фоновое изображение карты как div -->
    <div
      class="container mx-auto flex items-center justify-center xl:justify-end pt-10 pb-12.5"
      role="img"
      aria-label="Карта с расположением компании"
    >
      <!-- Информационная карточка -->
      <div
        class="z-10 p-4 md:p-8 w-full max-w-sm md:max-w-md lg:max-w-lg mx-auto md:mr-26!"
      >
        <MksInfoCard />
      </div>
    </div>
  </section>
</template>

<style scoped>
.info {
  background-image: url('/src/assets/images/bg-map.jpg');
}
</style>
