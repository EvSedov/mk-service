<script setup>
const companyData = {
  name: 'ООО «МК-СС»',
  details: [
    { label: 'ИНН', value: '5405010849' },
    {
      label: 'Адрес',
      value: 'г. Новосибирск,\nул. Вокзальная магистраль 15, \nофис 717',
    },
    {
      label: 'Склад',
      value: 'г. Новосибирск, ул. Фрунзе 5, к.1',
    },
    {
      label: 'Управляющий',
      value: 'mk-service.snab@mail.ru, \n+7-913-740-04-59',
    },
    {
      label: 'Бухгалтерия',
      value: 'buh_mk-ss@mail.ru, \n+7-952-923-65-80',
    },
  ],
  button: {
    text: 'Скачать реквизиты',
    link: new URL(
      '/public/docs/Карточка_МК-СЕРВИС_Снабжение_ОСНОВНАЯ.pdf',
      import.meta.url
    ).href,
  },
};

const downloadRequisites = () => {
  const link = document.createElement('a');
  link.href = companyData.button.link;
  link.setAttribute('download', 'Карточка МК-СЕРВИС Снабжение ОСНОВНАЯ.pdf');
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};
</script>

<template>
  <div
    class="bg-[#F7D156] p-6 md:p-12.5 md:rounded-2xl shadow-xl flex flex-col items-start space-y-4 w-full h-full mx-auto md:max-w-md lg:max-w-lg"
  >
    <div class="mx-auto! md:mx-0! w-[248px]">
      <div class="w-full flex items-start justify-start">
        <h2 class="text-[22px]! font-black! text-[#333333] mb-8! text-left!">
          {{ companyData.name }}
        </h2>
      </div>
    </div>

    <div class="mb-5! mx-auto! md:mx-0! md:w-full">
      <div
        v-for="(item, index) in companyData.details"
        :key="index"
        class="w-full flex flex-col lg:flex-row gap-2 lg:gap-4 items-start justify-start mb-6!"
      >
        <div class="w-32 text-base! font-bold! text-[#333333]">
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
      class="max-w-50 md:max-w-67.5 self-center bg-[#3366CC] text-white text-[18px]/6 md:text-[23px]/6 font-semibold! py-3 px-6 rounded-lg shadow-xl shadow-black/50 hover:bg-blue-700 active:bg-blue-800 transition-all duration-200 active:translate-x-0.5 active:translate-y-0.5 active:shadow-inner mt-4"
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
