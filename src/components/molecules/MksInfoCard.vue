<script setup>
const companyData = {
  name: 'ООО «МК-СС»',
  details: [
    { label: 'ИНН', value: '5405010849' },
    {
      label: 'Адрес',
      value:
        'Российская Федерация, 630083,\nНовосибирская область,\nгород Новосибирск,\nул. Владимира Заровного, дом 8, кв. 127',
    },
  ],
  button: {
    text: 'Скачать реквизиты',
    link: '/path/to/requisites.pdf', // Замените на реальный путь
  },
};

const downloadRequisites = () => {
  // Логика для скачивания файла, например:
  window.open(companyData.button.link, '_blank');
  console.log('Скачать реквизиты');
};
</script>

<template>
  <div
    class="bg-[#F7D156] p-6 rounded-2xl shadow-xl flex flex-col items-start space-y-4 max-w-sm mx-auto md:max-w-md lg:max-w-lg"
  >
    <h2 class="text-2xl font-bold text-[#333333] mb-2">
      {{ companyData.name }}
    </h2>

    <div
      v-for="(item, index) in companyData.details"
      :key="index"
      class="w-full"
    >
      <div class="text-base font-bold text-[#333333]">{{ item.label }}</div>
      <div
        class="text-base font-normal text-[#333333] leading-relaxed whitespace-pre-line"
      >
        {{ item.value }}
      </div>
    </div>

    <button
      class="w-full text-center bg-[#3366CC] text-white text-lg font-semibold py-3 px-6 rounded-full shadow-md hover:bg-blue-700 active:bg-blue-800 transition-colors duration-200 mt-4"
      @click="downloadRequisites"
    >
      {{ companyData.button.text }}
    </button>
  </div>
</template>

<style scoped>
/* Дополнительные стили, если Tailwind не покрывает все нюансы.
   В данном случае, все стили реализованы через Tailwind классы. */
</style>
