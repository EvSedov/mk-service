<script setup lang="ts">
import PageLayout from '@/components/templates/PageLayout.vue';
import MksHero from '../organisms/sections/MksHero.vue';
import SectionDivider from '@/components/organisms/sections/SectionDivider.vue';
import MksProductsSection from '../organisms/sections/MksProductsSection.vue';
</script>

<template>
  <PageLayout>
    <MksHero />
    <SectionDivider
      title="Продукция"
      text="Снабжение строительных объектов расходными материалами"
    />
    <MksProductsSection />
    <SectionDivider
      title="Торговые марки"
      text="Доставка инстументов и материалов от производителей"
    />
  </PageLayout>
</template>
