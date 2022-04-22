<script setup lang="ts">
import { DemoListItem } from '@/types';
import Draggable from '@/components/Draggable.vue';

interface Props {
  list: DemoListItem[];
}

const props = defineProps<Props>();
</script>

<template>
  <draggable :tag="'ul'" v-model="list" class="draggable">
    <li v-for="item in list" :key="item.id">
      <p>id: {{ item.name }}</p>
      <p>初始位置: {{ item.id }}</p>
    </li>
  </draggable>
</template>

<style lang="scss">
.draggable {
  width: 500px;
  li {
    width: 100%;
    display: flex;
    list-style-type: none;
    border: 1px solid rgba(black, 0.3);
    justify-content: space-between;
    height: 40px;
    align-items: center;
    padding: 0 20px;
    box-shadow: 2px 2px 10px rgba(black, 0.2);
  }
}
</style>
