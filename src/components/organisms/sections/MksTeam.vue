<script setup lang="ts">
import { ref } from 'vue';
import MksTeamCard from '@/components/molecules/MksTeamCard.vue';

const team = ref([
  {
    photo: new URL(
      '/src/assets/images/team/ksenia_kontieva.jpg',
      import.meta.url
    ).href,
    fullName: ['Контиева', 'Ксения'],
    job: 'Управляющий',
    // phone: '+7 913 740-03-63',
    email: 'mk-service.snab@mail.ru',
  },
  {
    photo: new URL(
      '/src/assets/images/team/mikhail_kontiev.jpg',
      import.meta.url
    ).href,
    fullName: ['Контиев', 'Михаил'],
    job: 'Начальник отдела продаж',
    // phone: '+7 913 740-03-63',
    email: '89137400363@mail.ru',
  },
  {
    photo: new URL(
      '/src/assets/images/team/kirill_viklushin.jpg',
      import.meta.url
    ).href,
    fullName: ['Виклушкин', 'Кирилл'],
    job: 'Менеджер отдела продаж',
    // phone: '+7 913 740-03-63',
    email: '89134889040@mail.ru',
  },
  {
    photo: new URL('/src/assets/images/team/rodion_german.jpg', import.meta.url)
      .href,
    fullName: ['Герман', 'Родион'],
    job: 'Менеджер отдела продаж',
    // phone: '+7 913 740-03-63',
    email: '89139387725@mail.ru',
  },
  {
    photo: new URL('/src/assets/images/team/anna_hostess.jpg', import.meta.url)
      .href,
    fullName: ['Хозяйкина', 'Анна'],
    job: 'Главный бухгалтер',
    // phone: '+7 913 740-03-63',
    email: 'buh-tiko_groups@mail.ru',
  },
]);
</script>

<template>
  <section class="pt-32.5 pb-17.5 bg-white">
    <div class="container mx-auto px-4">
      <div class="flex flex-wrap justify-center gap-8">
        <MksTeamCard
          v-for="people of team"
          :key="`${people.photo}-${people.fullName}`"
          :photo="people.photo"
          :full-name="people.fullName"
          :job="people.job"
          :email="people.email"
        />
      </div>
    </div>
  </section>
</template>

<style lang="css" scoped></style>
