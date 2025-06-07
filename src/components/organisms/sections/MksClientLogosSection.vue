<script setup>
import { ref, computed } from 'vue';
import MksClientLogoCard from '@/components/molecules/MksClientLogoCard.vue'; // Adjust path as needed

// Placeholder background image (replace with actual path)
const backgroundImage = new URL(
  '/src/assets/images/bg-clients.jpeg',
  import.meta.url
).href; // TODO: Replace with actual image path

// Placeholder client data (replace with actual data)
const clients = ref([
  {
    logo: new URL('/src/assets/icons/clients/titan2.png', import.meta.url).href,
    name: 'АН2',
    description: '',
  },
  {
    logo: new URL('/src/assets/icons/clients/optima.png', import.meta.url).href,
    name: 'ОПТИМА',
    description: '',
  },
  {
    logo: new URL(
      '/src/assets/icons/clients/stroy-mont-upr.png',
      import.meta.url
    ).href,
    name: 'Строительно-монтажное управление СМУ 7',
    description: '',
  },
  {
    logo: new URL('/src/assets/icons/clients/olimp-stroy.png', import.meta.url)
      .href,
    name: 'OLIMPSTROYGROUP',
    description: 'СТРОИТЕЛЬНАЯ КОМПАНИЯ',
  },
  {
    logo: new URL('/src/assets/icons/clients/prof-energy.png', import.meta.url)
      .href,
    name: 'PROF ENERGY',
    description: '',
  },
  {
    logo: new URL('/src/assets/icons/clients/sibit.png', import.meta.url).href,
    name: 'Сиб',
    description: '',
  },
  {
    logo: new URL('/src/assets/icons/clients/left-karier.png', import.meta.url)
      .href,
    name: 'Побережный Ланый Карьер',
    description: '',
  },
  {
    logo: new URL('/src/assets/icons/clients/m2.png', import.meta.url).href,
    name: 'М2 РЕКОНСТРУКЦИЯ',
    description: '',
  },
  {
    logo: new URL('/src/assets/icons/clients/himmetall.png', import.meta.url)
      .href,
    name: 'ХИММЕТАЛЛ',
    description: 'ГРУППА КОМПАНИЙ',
  },
  {
    logo: new URL(
      '/src/assets/icons/clients/iskitim-izvest.png',
      import.meta.url
    ).href,
    name: 'Искитим',
    description: 'ИЗВЕСТЬ',
  },
  {
    logo: new URL('/src/assets/icons/clients/smk.png', import.meta.url).href,
    name: 'СМК 54',
    description: '',
  },
  {
    logo: new URL(
      '/src/assets/icons/clients/region-project.png',
      import.meta.url
    ).href,
    name: 'Регион',
    description: '',
  },
  {
    logo: new URL(
      '/src/assets/icons/clients/region-project.png',
      import.meta.url
    ).href,
    name: 'Проект',
    description: '',
  }, // Re-using, as no specific 'Project' logo
  {
    logo: new URL('/src/assets/icons/clients/l-14.png', import.meta.url).href,
    name: 'Сибстройпроект',
    description: '',
  },
  {
    logo: new URL('/src/assets/icons/clients/berezki.png', import.meta.url)
      .href,
    name: 'Берёзки',
    description: '',
  },
  {
    logo: new URL(
      '/src/assets/icons/clients/energi-holding.png',
      import.meta.url
    ).href,
    name: 'Энергохолдинг',
    description: 'ПРОЕКТИРОВАНИЕ | ПРОИЗВОДСТВО | ПОСТАВКИ | МОНТАЖ',
  },
  {
    logo: new URL(
      '/src/assets/icons/clients/sib-gidro-mex-stroy.png',
      import.meta.url
    ).href,
    name: 'Сибгидромехстрой',
    description: '',
  },
  {
    logo: new URL('/src/assets/icons/clients/zzbi-4.png', import.meta.url).href,
    name: 'ЗЖБИ-4',
    description: '',
  },
  {
    logo: new URL('/src/assets/icons/clients/l-21.png', import.meta.url).href,
    name: '4',
    description: '',
  }, // Generic '4' logo
  {
    logo: new URL('/src/assets/icons/clients/sukhoi.png', import.meta.url).href,
    name: 'SUKHOI',
    description: 'НАЗ им. В. П. Чкалова',
  },
  {
    logo: new URL('/src/assets/icons/clients/vira-stroy.png', import.meta.url)
      .href,
    name: 'Вира Строй',
    description: 'строительная компания',
  },
  {
    logo: new URL('/src/assets/icons/clients/ast-group.png', import.meta.url)
      .href,
    name: 'AST GROUP',
    description: '',
  },
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
  const shuffledClients = shuffleArray([...clients.value, ...clients.value]); // Shuffle a copy
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
        />
        <!-- Duplicate logos for seamless looping -->
        <MksClientLogoCard
          v-for="(client, clientIndex) in row"
          :key="`dup-${clientIndex}`"
          :logo="client.logo"
          :name="client.name"
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
