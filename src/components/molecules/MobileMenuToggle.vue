<script setup lang="ts">
import { ref, provide } from 'vue';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'; // Исправленный путь
import { MenuIcon } from 'lucide-vue-next';
import { Button } from '@/components/ui/button'; // Исправленный путь
import MobileMenuContent from '@/components/molecules/MobileMenuContent.vue';

const isOpen = ref(false);
const closeSheet = () => {
  isOpen.value = false;
};
provide('closeSheet', closeSheet);
</script>

<template>
  <Sheet v-model:open="isOpen" class="text-white!">
    <SheetTrigger as-child class="text-white!">
      <Button variant="outline" size="icon">
        <MenuIcon class="h-8! w-8!" />
        <span class="sr-only">Toggle menu</span>
      </Button>
    </SheetTrigger>
    <SheetContent side="left">
      <SheetHeader class="text-[#FFD13D]">
        <SheetTitle>Мобильное меню</SheetTitle>
        <SheetDescription> Навигация по сайту</SheetDescription>
      </SheetHeader>
      <MobileMenuContent />
    </SheetContent>
  </Sheet>
</template>
