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
  console.log('Скачать реквизиты');
};
</script>

<template>
  <div
    class="bg-[#F7D156] p-12.5 rounded-2xl shadow-xl flex flex-col items-start space-y-4 max-w-sm mx-auto md:max-w-md lg:max-w-lg"
  >
    <h2 class="text-[22px]! font-black! text-[#333333] mb-8!">
      {{ companyData.name }}
    </h2>

    <div class="mb-11.5!">
      <div
        v-for="(item, index) in companyData.details"
        :key="index"
        class="w-full flex gap-4 items-start justify-start mb-6!"
      >
        <div class="w-16 text-base! font-bold! text-[#333333]">
          {{ item.label }}
        </div>
        <div
          class="text-[15px]/5! font-normal! text-[#333333] leading-relaxed whitespace-pre-line"
        >
          {{ item.value }}
        </div>
      </div>
    </div>

    <button
      class="w-67.5 self-center bg-[#3366CC] text-white text-[23px]/6 font-semibold! py-3 px-6 rounded-lg shadow-2xl hover:bg-blue-700 active:bg-blue-800 transition-colors duration-200 mt-4"
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
