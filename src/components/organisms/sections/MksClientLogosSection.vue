<script setup>
import { ref, computed } from 'vue';
import MksClientLogoCard from '@/components/molecules/MksClientLogoCard.vue'; // Adjust path as needed

// Placeholder background image (replace with actual path)
const backgroundImage = 'path/to/your/background-image.jpg'; // TODO: Replace with actual image path

// Placeholder client data (replace with actual data)
const clients = ref([
  { logo: '/placeholders/logo1.png', name: 'АН2', description: '' },
  { logo: '/placeholders/logo2.png', name: 'ОПТИМА', description: '' },
  {
    logo: '/placeholders/logo3.png',
    name: 'Строительно-монтажное управление СМУ 7',
    description: '',
  },
  {
    logo: '/placeholders/logo4.png',
    name: 'OLIMPSTROYGROUP',
    description: 'СТРОИТЕЛЬНАЯ КОМПАНИЯ',
  },
  { logo: '/placeholders/logo5.png', name: 'PROF ENERGY', description: '' },
  { logo: '/placeholders/logo6.png', name: 'Сиб', description: '' },
  {
    logo: '/placeholders/logo7.png',
    name: 'Побережный Ланый Карьер',
    description: '',
  },
  {
    logo: '/placeholders/logo8.png',
    name: 'М2 РЕКОНСТРУКЦИЯ',
    description: '',
  },
  {
    logo: '/placeholders/logo9.png',
    name: 'ХИММЕТАЛЛ',
    description: 'ГРУППА КОМПАНИЙ',
  },
  { logo: '/placeholders/logo10.png', name: 'Искитим', description: 'ИЗВЕСТЬ' },
  { logo: '/placeholders/logo11.png', name: 'СМК 54', description: '' },
  { logo: '/placeholders/logo12.png', name: 'Регион', description: '' },
  { logo: '/placeholders/logo13.png', name: 'Проект', description: '' },
  { logo: '/placeholders/logo14.png', name: 'Сибстройпроект', description: '' },
  { logo: '/placeholders/logo15.png', name: 'Берёзки', description: '' },
  {
    logo: '/placeholders/logo16.png',
    name: 'Энергохолдинг',
    description: 'ПРОЕКТИРОВАНИЕ | ПРОИЗВОДСТВО | ПОСТАВКИ | МОНТАЖ',
  },
  {
    logo: '/placeholders/logo17.png',
    name: 'Сибгидромехстрой',
    description: '',
  },
  { logo: '/placeholders/logo18.png', name: 'ЗЖБИ-4', description: '' },
  { logo: '/placeholders/logo19.png', name: '4', description: '' },
  {
    logo: '/placeholders/logo20.png',
    name: 'SUKHOI',
    description: 'НАЗ им. В. П. Чкалова',
  },
  {
    logo: '/placeholders/logo21.png',
    name: 'Вира Строй',
    description: 'строительная компания',
  },
  { logo: '/placeholders/logo22.png', name: 'AST GROUP', description: '' },
  { logo: '/placeholders/logo23.png', name: '', description: '' }, // Placeholder for the D logo
  { logo: '/placeholders/logo24.png', name: 'Лево Песчан', description: '' },
  // Add more logos as needed, keeping total around 22-24 for 4 rows
]);

// Function to shuffle an array (Fisher-Yates Algorithm)
const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

// Distribute and shuffle clients into 4 rows
const rows = computed(() => {
  const shuffledClients = shuffleArray([...clients.value]); // Shuffle a copy
  const numClients = shuffledClients.length;
  const clientsPerRow = Math.ceil(numClients / 4); // Distribute roughly evenly

  const resultRows = [];
  for (let i = 0; i < 4; i++) {
    const start = i * clientsPerRow;
    const end = start + clientsPerRow;
    resultRows.push(shuffledClients.slice(start, end));
  }
  return resultRows;
});
</script>

<template>
  <section
    class="relative overflow-hidden py-27.5 bg-cover bg-center"
    :style="{ backgroundImage: `url(${backgroundImage})` }"
  >
    <!-- Overlay -->
    <div class="absolute inset-0 bg-gray-800 opacity-70"></div>

    <div class="relative z-10 space-y-28">
      <!-- Loop through rows -->
      <div
        v-for="(row, index) in rows"
        :key="index"
        class="flex flex-row gap-14 whitespace-nowrap mb-14!"
        :class="{
          'animate-scroll-rtl': index % 2 === 0, // Even index -> Right to Left
          'animate-scroll-ltr': index % 2 !== 0, // Odd index -> Left to Right
        }"
      >
        <!-- Loop through logos in each row -->
        <MksClientLogoCard
          v-for="(client, clientIndex) in row"
          :key="clientIndex"
          :logo="client.logo"
          :name="client.name"
          :description="client.description"
        />
        <!-- Duplicate logos for seamless looping -->
        <MksClientLogoCard
          v-for="(client, clientIndex) in row"
          :key="`dup-${clientIndex}`"
          :logo="client.logo"
          :name="client.name"
          :description="client.description"
        />
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Add Tailwind animation keyframes */
@keyframes scroll-rtl {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-100%);
  } /* Scrolls the first set of logos out */
}

@keyframes scroll-ltr {
  0% {
    transform: translateX(-100%);
  } /* Start the second set visible */
  100% {
    transform: translateX(0);
  }
}

.animate-scroll-rtl {
  animation: scroll-rtl 60s linear infinite; /* Adjust duration for speed */
}

.animate-scroll-ltr {
  animation: scroll-ltr 60s linear infinite; /* Adjust duration for speed */
}

/* To make the looping seamless, the total width of the content inside the flex container */
/* should be twice the width of the container, and the animation should move it by 100%. */
/* The duplication of logos in the template handles the content size. */
/* The parent container (.relative.overflow-hidden) hides the overflow. */
</style>
