<script setup>
import { ref } from 'vue';
import Brand from '@/components/atoms/Brand.vue';

// Функция для перемешивания массива (Fisher-Yates Shuffle)
const shuffleArray = (array) => {
  const shuffledArray = [...array];
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray;
};

const brands = [
  {
    src: new URL('@/assets/icons/brands/denzel.png', import.meta.url).href,
    alt: 'Логотип Denzel',
    link: '#',
  },
  {
    src: new URL('@/assets/icons/brands/matrix.png', import.meta.url).href,
    alt: 'Логотип Matrix',
    link: '#',
  },
  {
    src: new URL('@/assets/icons/brands/stayer.png', import.meta.url).href,
    alt: 'Логотип STAYER',
    link: '#',
  },
  {
    src: new URL('@/assets/icons/brands/bars.png', import.meta.url).href,
    alt: 'Логотип БАРС',
    link: '#',
  },
  {
    src: new URL('@/assets/icons/brands/sibrtech.png', import.meta.url).href,
    alt: 'Логотип Сибртех',
    link: '#',
  },
  {
    src: new URL('@/assets/icons/brands/kraftool.png', import.meta.url).href,
    alt: 'Логотип KRAFTOOL',
    link: '#',
  },
  {
    src: new URL('@/assets/icons/brands/gross.png', import.meta.url).href,
    alt: 'Логотип GROSS',
    link: '#',
  },
  {
    src: new URL('@/assets/icons/brands/palisad.png', import.meta.url).href,
    alt: 'Логотип PALISAD',
    link: '#',
  },
  {
    src: new URL('@/assets/icons/brands/sparta.png', import.meta.url).href,
    alt: 'Логотип Sparta',
    link: '#',
  },
  {
    src: new URL('@/assets/icons/brands/zubr.png', import.meta.url).href,
    alt: 'Логотип ЗУБР',
    link: '#',
  },
  {
    src: new URL('@/assets/icons/brands/stels.png', import.meta.url).href,
    alt: 'Логотип Stels',
    link: '#',
  },
];

// Создаем три перемешанных массива, каждый из которых дублируется для бесшовной прокрутки
const shuffledBrandsTop = ref([
  ...shuffleArray(brands),
  ...shuffleArray(brands),
]);
const shuffledBrandsMiddle = ref([
  ...shuffleArray(brands),
  ...shuffleArray(brands),
]);
const shuffledBrandsBottom = ref([
  ...shuffleArray(brands),
  ...shuffleArray(brands),
]);

// Для того, чтобы ключи v-for были уникальными при дублировании и перемешивании,
// к brand.alt добавлен Math.random(). В более сложном сценарии можно использовать уникальный ID.
</script>

<template>
  <section class="bg-white" style="padding-top: 130px; padding-bottom: 130px">
    <div class="container">
      <!-- Верхняя строка: слева направо -->
      <div class="scrolling-row top-row" style="margin-bottom: 130px">
        <div class="logos-container">
          <div
            v-for="brand in shuffledBrandsTop"
            :key="'top-' + brand.alt + Math.random()"
            class="brand-item"
            :class="{ 'stels-logo': brand.alt === 'Логотип Stels' }"
          >
            <Brand :src="brand.src" :alt="brand.alt" />
          </div>
        </div>
      </div>

      <!-- Средняя строка: справа налево -->
      <div class="scrolling-row middle-row" style="margin-bottom: 130px">
        <div class="logos-container reverse">
          <div
            v-for="brand in shuffledBrandsMiddle"
            :key="'middle-' + brand.alt + Math.random()"
            class="brand-item"
            :class="{ 'stels-logo': brand.alt === 'Логотип Stels' }"
          >
            <Brand :src="brand.src" :alt="brand.alt" />
          </div>
        </div>
      </div>

      <!-- Нижняя строка: слева направо -->
      <div class="scrolling-row bottom-row">
        <div class="logos-container">
          <div
            v-for="brand in shuffledBrandsBottom"
            :key="'bottom-' + brand.alt + Math.random()"
            class="brand-item"
            :class="{ 'stels-logo': brand.alt === 'Логотип Stels' }"
          >
            <Brand :src="brand.src" :alt="brand.alt" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.scrolling-row {
  width: 100%;
  overflow: hidden;
  /* margin-bottom теперь задается инлайн для верхних двух строк */
}

.logos-container {
  display: flex;
  animation: scroll-left 30s linear infinite; /* Настройте длительность для желаемой скорости */
}

.logos-container.reverse {
  animation: scroll-right 30s linear infinite; /* Настройте длительность для желаемой скорости */
}

.brand-item {
  margin-right: 40px; /* Расстояние между логотипами */
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  /* width: 150px; */ /* Опционально: задайте фиксированную ширину */
}

.brand-item img {
  max-height: 50px !important; /* Пример максимальной высоты логотипа */
  width: auto !important;
}

/* Стили для конкретного логотипа Stels */
.stels-logo img {
  max-height: auto; /* Уменьшаем максимальную высоту специально для Stels */
  width: 288px !important;
}

/* Определяем анимацию прокрутки слева направо */
@keyframes scroll-left {
  0% {
    transform: translateX(0);
  }
  100% {
    /* Перемещаем контейнер на половину его общей ширины (ширину одного набора логотипов) */
    transform: translateX(-50%);
  }
}

/* Определяем анимацию прокрутки справа налево */
@keyframes scroll-right {
  0% {
    transform: translateX(-50%); /* Начальное положение */
  }
  100% {
    transform: translateX(0); /* Конечное положение */
  }
}
</style>
