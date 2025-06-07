<script lang="ts" setup>
const { photo, fullName, job, email } = defineProps({
  photo: String,
  fullName: Array,
  job: String,
  // phone: String,
  email: String,
});
</script>

<template>
  <div
    class="bg-[#F9F9F9] rounded-xl shadow-lg p-3 w-58 transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-xl"
  >
    <!--Фотография-->
    <div class="w-full rounded-xl overflow-hidden mb-5!">
      <img
        class="w-full h-auto max-h-67 object-cover"
        :src="photo"
        :alt="fullName?.join(' ')"
        loading="lazy"
      />
    </div>
    <!--Персональные данные-->
    <div class="mb-4.5! self-start">
      <h3
        v-for="(data, index) in fullName"
        :key="`${index}-${data}`"
        class="text-lg font-normal text-gray-800 leading-tight text-left"
      >
        {{ data }}
      </h3>
    </div>
    <!--Должность-->
    <div class="mb-4.5! relative self-start">
      <h3 class="text-[12px] text-black font-black!">
        {{ job }}
      </h3>
      <span class="inline-block w-50 h-0.5 bg-yellow-400"></span>
    </div>
    <!--Контакты-->
    <div class="flex items-center justify-start gap-2">
      <svg
        id="uuid-7193ee4f-7bd7-46a9-853e-90a32670100e"
        class="w-6.5 h-4"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 26.7 16.71"
      >
        <g id="uuid-a2b4184b-59ad-4381-907e-e1505853ba45" data-name="Слой 1">
          <path
            d="m10.62,10.62l.82.67c.55.45,1.23.67,1.9.67s1.35-.22,1.9-.67l.82-.67,6.05,4.16H4.57l6.05-4.16ZM23.86,0H2.84C1.27,0,0,1.27,0,2.84v11.03c0,1.57,1.27,2.84,2.84,2.84h21.02c1.57,0,2.84-1.27,2.84-2.84V2.84c0-1.57-1.27-2.84-2.84-2.84Zm.84,14.22l-7.06-4.86,7.13-5.77v10.28c0,.12-.03.24-.07.34Zm-22.77-.34V3.59l7.13,5.77L1.99,14.22c-.04-.11-.07-.22-.07-.34Zm12.11-4.08c-.4.32-.98.32-1.38,0L2.93,1.93h20.83l-9.72,7.87Z"
            style="fill: #0b161e"
          />
        </g>
      </svg>
      <a
        :href="`mailto:${email}`"
        class="text-[12px] text-black! font-black! hover:underline! hover:rounded-[4px] p-1!"
        >{{ email }}</a
      >
    </div>
  </div>
</template>

<style lang="css" scoped>
/* Tailwind CSS classes are applied directly in the template */
</style>
