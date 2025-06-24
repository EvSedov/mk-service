<script setup lang="ts">
import MksInfoCard from '@/components/molecules/MksInfoCard.vue';
import { shallowRef } from 'vue';
import type { YMap } from '@yandex/ymaps3-types';
import {
  YandexMap,
  YandexMapDefaultSchemeLayer,
  YandexMapDefaultFeaturesLayer,
  YandexMapDefaultMarker,
} from 'vue-yandex-maps';

const map = shallowRef<null | YMap>(null);
</script>

<template>
  <section
    class="info w-full flex flex-col xl:flex-row xl:items-center xl:justify-end overflow-hidden bg-cover bg-center inset-0"
  >
    <!-- Интерактивная карта Яндекс.Карты -->
    <div class="w-full h-[475px] sm:h-[900px] md:h-[675px] inset-0 p-4 md:p-0">
      <YandexMap
        v-model="map"
        :settings="{
          location: {
            center: [82.912884, 55.032433],
            zoom: 15,
          },
        }"
        width="100%"
        height="100%"
      >
        <YandexMapDefaultSchemeLayer />
        <YandexMapDefaultFeaturesLayer />
        <YandexMapDefaultMarker
          :settings="{ coordinates: [82.912884, 55.032433] }"
        />
      </YandexMap>
    </div>

    <!-- Информационная карточка (absolute for large screens) -->

    <div
      class="hidden xl:flex xl:justify-center absolute z-10 p-8 w-full xl:max-w-xl xl:m-26!"
    >
      <MksInfoCard />
    </div>

    <!-- Информационная карточка (for small screens, below map) -->
    <div
      class="xl:hidden w-full flex justify-center items-center md:py-8 bg-white"
    >
      <MksInfoCard />
    </div>
  </section>
</template>

<style scoped>
.info {
  position: relative;
}
</style>
