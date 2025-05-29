<script setup lang="ts">
import PageLayout from '@/components/templates/PageLayout.vue';
import MksHero from '../organisms/sections/MksHero.vue';
import SectionTitle from '@/components/organisms/sections/SectionTitle.vue';
import MksProductsSection from '../organisms/sections/MksProductsSection.vue';
import MksBrandsLogosSection from '../organisms/sections/MksBrandsLogosSection.vue';
</script>

<template>
  <PageLayout>
    <MksHero />
    <SectionTitle
      title="Продукция"
      text="Снабжение строительных объектов расходными материалами"
    />
    <MksProductsSection />
    <SectionTitle
      title="Торговые марки"
      text="Доставка инстументов и материалов от производителей"
    />
    <MksBrandsLogosSection />
    <SectionTitle title="Партнеры" text="Компании, которые нам доверяют" />
  </PageLayout>
</template>
