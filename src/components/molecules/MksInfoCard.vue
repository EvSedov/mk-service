<script setup>
const companyData = {
  name: 'ООО «МК-СС»',
  details: [
    { label: 'ИНН', value: '5405010849' },
    {
      label: 'Адрес',
      value:
        'Российская федерация, 630099,\nНовосибирская область,\nгород Новосибирск,\nул. Вокзальная магистраль 15, \nофис 717',
    },
    {
      label: 'Склад',
      value: 'город Новосибирск, Улица Фрунзе, 5 к1',
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
      class="max-w-67.5 self-center bg-[#3366CC] text-white text-[23px]/6 font-semibold! py-3 px-6 rounded-lg shadow-2xl hover:bg-blue-700 active:bg-blue-800 transition-all duration-200 active:translate-x-0.5 active:translate-y-0.5 active:shadow-inner mt-4"
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
