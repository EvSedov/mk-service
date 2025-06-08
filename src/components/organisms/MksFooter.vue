<script setup lang="ts">
import { ref, markRaw } from 'vue';
import MksServiceLogo from '@/components/atoms/MksServiceLogo.vue';
import IconPhone from '@/components/atoms/icons/IconPhone.vue';
import IconChat from '@/components/atoms/icons/IconChat.vue';
import IconWhatsApp from '@/components/atoms/icons/IconWhatsApp.vue';
import IconTelegram from '@/components/atoms/icons/IconTelegram.vue';
import IvankinLogo from '@/components/atoms/IvankinLogo.vue';

const footerData = ref({
  // logo: { src: '/src/assets/images/logo-mks-service.png', alt: 'МК СЕРВИС' }, // Удалено, т.к. используется компонент MksLogo
  contacts: {
    phone: '+7 (913) 740-03-63',
    schedule: 'пн-пт 09:00-17:00 (НСК)',
    feedbackTitle: 'Обратная связь',
    messengers: [
      {
        name: 'WhatsApp',
        component: markRaw(IconWhatsApp), // Оборачиваем компонент в markRaw
        url: 'https://wa.me/79137400363',
      },
      {
        name: 'Telegram',
        component: markRaw(IconTelegram), // Оборачиваем компонент в markRaw
        url: 'https://t.me/your_telegram_channel', // Замените на реальную ссылку
      },
    ],
  },
  navigation: [
    { label: 'Главная', id: 'main' },
    { label: 'Продукция', id: 'продукция' },
    { label: 'Партнеры', id: 'партнеры' },
    { label: 'Команда', id: 'команда' },
    { label: 'Контакты', id: 'контакты' },
  ],
  copyright: '© 2025 ООО «МК-СЕРВИС.СНАБЖЕНИЕ»',
  designer: {
    text: 'Дизайн',
    // logo: { src: '/src/assets/images/logo-ivankin.png', alt: 'IVANKIN' }, // Удалено, т.к. используется компонент IvankinLogo
    url: 'https://ivankin.com', // Замените на реальную ссылку
  },
});

const scrollToSection = (event: Event, targetId: string) => {
  event.preventDefault();

  if (targetId === 'main') {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    return;
  }

  const element = document.getElementById(targetId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
};
</script>

<template>
  <footer class="bg-[#282C34] pt-25! pb-20!">
    <div class="container mx-2 md:mx-auto px-4">
      <div
        class="flex flex-col md:flex-row justify-center items-center md:justify-around md:items-end gap-y-12 md:gap-y-0"
      >
        <!-- Левая колонка -->
        <div class="flex flex-col items-start w-fit lg:mr-[12.8%]!">
          <!-- Логотип -->
          <MksServiceLogo class="mb-6.5! h-10" />

          <!-- Контактный телефон -->
          <div class="mb-11.5!">
            <a class="flex gap-2 items-center" href="tel:+79137400003">
              <IconPhone />
              <span class="font-bold! text-[#FFD13D] text-[24px] text-nowrap"
                >+7 (913) 740-00-03</span
              >
            </a>
            <span class="text-[#C9C9C9] text-[21px]">{{
              footerData.contacts.schedule
            }}</span>
          </div>

          <!-- Обратная связь -->
          <div>
            <div class="flex items-center justify-start gap-2 mb-4!">
              <IconChat class="w-6 h-6" />
              <span class="text-white text-[26px] font-normal">
                {{ footerData.contacts.feedbackTitle }}
              </span>
            </div>
            <div class="flex gap-4">
              <a
                v-for="messenger in footerData.contacts.messengers"
                :key="messenger.name"
                :href="messenger.url"
                target="_blank"
                rel="noopener noreferrer"
                class="block hover:opacity-80 transition-opacity duration-200"
              >
                <component :is="messenger.component" class="w-9 h-9" />
              </a>
            </div>
          </div>
        </div>

        <!-- Разделительная линия (только для больших экранов) -->
        <div
          class="hidden md:block w-px bg-white bg-opacity-30 self-stretch mr-26!"
        ></div>

        <!-- Правая колонка -->
        <div class="flex flex-col items-start justify-end w-fit">
          <!-- Навигационное меню -->
          <nav class="mb-11! md:mb-0">
            <ul class="flex flex-col space-y-4 gap-5">
              <li v-for="link in footerData.navigation" :key="link.id">
                <a
                  :href="`#${link.id}`"
                  class="text-white! font-bold! text-xl/tight! md:text-2xl! hover:text-yellow-400! transition-colors! duration-200!"
                  @click="scrollToSection($event, link.id)"
                >
                  {{ link.label }}
                </a>
              </li>
            </ul>
          </nav>

          <!-- Копирайт и дизайнер -->
          <div
            class="flex flex-col items-start md:flex-wrap md:flex-row md:justify-between md:items-center text-[#C9C9C9] text-sm md:text-base mt-8 md:mt-0"
          >
            <span class="mb-2 md:mb-0 sm:text-nowrap md:mr-34!">{{
              footerData.copyright
            }}</span>
            <a
              :href="footerData.designer.url"
              target="_blank"
              rel="noopener noreferrer"
              class="flex items-center gap-2 text-[#C9C9C9]! hover:opacity-80! transition-opacity! duration-200!"
            >
              <span>{{ footerData.designer.text }}</span>
              <IvankinLogo class="h-4 md:h-5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
/* Дополнительные стили, если Tailwind не покрывает все нюансы.
   В данном случае, все стили реализованы через Tailwind классы. */
</style>
