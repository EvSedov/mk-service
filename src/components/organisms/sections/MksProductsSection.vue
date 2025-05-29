<script setup lang="ts">
import MksProductItem from '@/components/molecules/MksProductItem.vue';

const products = [
  {
    description: 'Электроды, сварочная проволока',
    img: new URL(
      '../../../assets/icons/products/electrodes-12.png',
      import.meta.url
    ).href,
  },
  {
    description:
      'Средства индивидуальной защиты: перчатки, рукавицы, краги, респираторы, очки, каски',
    img: new URL(
      '../../../assets/icons/products/glovers-07.png',
      import.meta.url
    ).href,
  },
  {
    description:
      'Круги отрезные, шлифовальные, лепестковые, алмазные и пильные диски',
    img: new URL(
      '../../../assets/icons/products/grinding-wheels-11.png',
      import.meta.url
    ).href,
  },
  {
    description: 'Ручной инструмент: лопаты, метлы, уровни, рулетки, буры',
    img: new URL(
      '../../../assets/icons/products/hand-tools-06.png',
      import.meta.url
    ).href,
  },
  {
    description: 'Проволока вязальная, сетка рабица',
    img: new URL(
      '../../../assets/icons/products/chain-link-mesh-01.png',
      import.meta.url
    ).href,
  },
  {
    description:
      'Электроинструмент: дрели, шуруповерты, лобзики, перфораторы, строительные фены',
    img: new URL(
      '../../../assets/icons/products/power-tools-05.png',
      import.meta.url
    ).href,
  },
  {
    description: 'Грунтовки, эмали, растворители, цинол',
    img: new URL(
      '../../../assets/icons/products/primer-10.png',
      import.meta.url
    ).href,
  },
  {
    description: 'Пена монтажная, герметики, очиститель',
    img: new URL(
      '../../../assets/icons/products/mounting-foam-04.png',
      import.meta.url
    ).href,
  },
  {
    description: 'Мастики, праймеры, рулонная гидроизоляция',
    img: new URL(
      '../../../assets/icons/products/mastic-09.png',
      import.meta.url
    ).href,
  },
  {
    description: 'Стропы: текстильные, канатные, цепные',
    img: new URL(
      '../../../assets/icons/products/slings-03.png',
      import.meta.url
    ).href,
  },
  {
    description: 'Крепёж: гвозди, саморезы, дюбеля, заклёпки, стяжки',
    img: new URL('../../../assets/icons/products/nails-08.png', import.meta.url)
      .href,
  },
  {
    description: 'Патроны и дюбеля для монтажного пистолета',
    img: new URL(
      '../../../assets/icons/products/construction-cartridges-02.png',
      import.meta.url
    ).href,
  },
];

// Placeholder data for commercial offer link
const commercialOffer = {
  icon: '', // Placeholder, icon will be added later
  text: 'Получить коммерческое предложение',
  link: '#', // Placeholder link
};
</script>

<template>
  <section class="products py-20 bg-gray-800 bg-opacity-75 overflow-hidden">
    <div class="bg-filter"></div>
    <div class="relative z-10 container mx-auto px-4">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-y-10 gap-x-20">
        <div v-for="(product, index) in products" :key="index">
          <MksProductItem
            :description="product.description"
            :image="product.img"
          />
        </div>
      </div>

      <div class="mt-37.5! text-center">
        <a
          :href="commercialOffer.link"
          class="inline-flex items-center text-white text-xl font-semibold underline"
        >
          <!-- Placeholder for PDF icon -->
          <div class="w-27.5 h-27.5 mr-10! flex items-center justify-center">
            <img
              src="../../../assets/icons/format-pdf.png"
              alt="Картинка документа в формате PDF"
            />
          </div>
          <span class="text-white font-bold!">{{ commercialOffer.text }}</span>
        </a>
      </div>
    </div>
  </section>
</template>

<style lang="css" scoped>
.products {
  position: relative;
  background-color: rgba(56, 70, 81, 0.5);
  background-image: url('@/assets/images/bg-products.jpeg');
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  overflow: hidden;
}

.bg-filter {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(32, 42, 49, 0.5);
  z-index: 1;
}
</style>
