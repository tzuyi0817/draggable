<script setup lang="ts">
import DragDemo from '@/components/DragDemo.vue';
import DragList from '@/components/DragList.vue';
import { reactive, toRefs, onMounted } from 'vue';
import { DemoListItem } from '@/types';

const data = reactive({
  list: [] as DemoListItem[],
});
const { list } = toRefs(data);

function createUuid() {
  return URL.createObjectURL(new Blob()).slice(-36);
}

function randomList(quantity: number) {
  return Array(quantity).fill('').map((_, index) => ({ id: `${index + 1}`, name: createUuid() }));
}

onMounted(() => {
  data.list = randomList(9);
});

</script>

<template>
  <!-- <drag-demo /> -->
  <drag-list :list="list" />
</template>

<style lang="scss" scoped>

</style>