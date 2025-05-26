<script setup lang="ts">
import MksProductItem from '@/components/molecules/MksProductItem.vue';

const products = [
  { description: 'Электроды, сварочная проволока' },
  {
    description:
      'Средства индивидуальной защиты: перчатки, рукавицы, краги, респираторы, очки, каски',
  },
  {
    description:
      'Круги отрезные, шлифовальные, лепестковые, алмазные и пильные диски',
  },
  { description: 'Ручной инструмент: лопаты, метлы, уровни, рулетки, буры' },
  { description: 'Проволока вязальная, сетка рабица' },
  {
    description:
      'Электроинструмент: дрели, шуруповерты, лобзики, перфораторы, строительные фены',
  },
  { description: 'Грунтовки, эмали, растворители, цинол' },
  { description: 'Пена монтажная, герметики, очиститель' },
  { description: 'Мастики, праймеры, рулонная гидроизоляция' },
  { description: 'Стропы: текстильные, канатные, цепные' },
  { description: 'Крепёж: гвозди, саморезы, дюбеля, заклёпки, стяжки' },
  { description: 'Патроны и дюбеля для монтажного пистолета' },
];

// Placeholder data for commercial offer link
const commercialOffer = {
  icon: '', // Placeholder, icon will be added later
  text: 'Получить коммерческое предложение',
  link: '#', // Placeholder link
};
</script>

<template>
  <section class="relative py-20 bg-gray-800 bg-opacity-75 overflow-hidden">
    <!-- Background Image Placeholder -->
    <div
      class="absolute inset-0 z-0"
      style="
        background-image: url('ваша_фоновая_картинка.jpg');
        background-size: cover;
        background-position: center;
      "
    ></div>

    <div class="relative z-10 container mx-auto px-4">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-y-10 gap-x-20">
        <div v-for="(product, index) in products" :key="index">
          <MksProductItem :description="product.description" image="" />
        </div>
      </div>

      <div class="mt-20 text-center">
        <a
          :href="commercialOffer.link"
          class="inline-flex items-center text-white text-xl font-semibold underline"
        >
          <!-- Placeholder for PDF icon -->
          <div class="w-5 h-5 bg-red-700 mr-2 flex items-center justify-center">
            <span class="text-xs text-white">PDF</span>
          </div>
          {{ commercialOffer.text }}
        </a>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
