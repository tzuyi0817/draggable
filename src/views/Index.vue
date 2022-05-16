<script setup lang="ts">
import DragDemo from '@/components/DragDemo.vue';
import DragList from '@/components/DragList.vue';
import { ref, onMounted } from 'vue';
import { DemoListItem } from '@/types';
import { createUuid } from '@/utils/common';

const list1 = ref<DemoListItem[]>([]);
const list2 = ref<DemoListItem[]>([]);


function randomList(quantity: number) {
  return Array(quantity).fill('').map((_, index) => ({ id: `${index + 1}`, name: createUuid() }));
}

onMounted(() => {
  list1.value = randomList(9);
});

</script>

<template>
  <!-- <drag-demo /> -->
  <drag-list :list1="list1" :list2="list2" />
</template>

<style lang="scss" scoped>

</style>