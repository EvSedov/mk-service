<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps<{
  title: string;
  text: string;
}>();

const sectionId = computed(() => {
  return props.title.toLowerCase().replace(/\s/g, '-');
});
</script>

<template>
  <section :id="sectionId" class="section-title">
    <div class="container w-full">
      <div class="section-title__title-wrapper">
        <div class="section-title__line"></div>
        <h2 class="section-title__title">{{ title }}</h2>
      </div>
      <p class="section-title__text">{{ text }}</p>
    </div>
  </section>
</template>

<style scoped>
.section-title {
  background-color: #ffd13d;

  width: 100%;
  padding-top: 60px;
  padding-bottom: 60px;
}

.section-title__title-wrapper {
  position: relative;
  margin: 0 auto;

  margin-bottom: 60px;
  width: fit-content;
  text-align: center;
}

.section-title__line {
  position: absolute;
  left: 0;
  right: 0;
  top: 55%;
  height: 22px;
  background-color: white;
  z-index: 10;
  transform: translateY(-50%);
}

.section-title__title {
  color: #14213d;

  font-size: 84px;
  line-height: 90px;
  font-weight: 900;
  text-align: center;

  margin: 0 4px;
  position: relative;
  z-index: 20;
  display: inline-block;
}

.section-title__text {
  color: #14213d;
  font-size: 20px;

  line-height: 24px;
  font-weight: bold;
  text-align: center;
  margin: 0 auto;
  max-width: 800px;
}
</style>
