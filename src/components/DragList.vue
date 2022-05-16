<script setup lang="ts">
import { DemoListItem } from '@/types';
import { Draggable } from '@/index';

interface Props {
  list1: DemoListItem[];
  list2: DemoListItem[];
}

const props = defineProps<Props>();
const animationClass = {
  moveToBefore: 'draggable-drop-up',
  moveToAfter: 'draggable-drop-down',
};
</script>

<template>
  <div>
    <draggable :tag="'ul'" v-model="list1" class="draggable" :animation="animationClass">
      <li v-for="item in list1" :key="item.id">
        <p>id: {{ item.name }}</p>
        <p>初始位置: {{ item.id }}</p>
      </li>
    </draggable>

    <draggable :tag="'ul'" v-model="list2" class="draggable" :animation="animationClass">
      <li v-for="item in list2" :key="item.id">
        <p>id: {{ item.name }}</p>
        <p>初始位置: {{ item.id }}</p>
      </li>
    </draggable>
  </div>
</template>

<style lang="scss">
div {
  display: flex;
}

.draggable {
  width: 500px;
  border: 1px solid rgba(black, 0.3);
  box-shadow: 2px 2px 10px rgba(black, 0.2);
  padding: 10px;
  margin: 0 10px;
  li {
    width: calc(100% - 40px);
    display: flex;
    list-style-type: none;
    border: 1px solid rgba(black, 0.3);
    justify-content: space-between;
    height: 40px;
    align-items: center;
    padding: 0 20px;
    box-shadow: 2px 2px 10px rgba(black, 0.2);
  }

  .draggable-drop-up {
    animation: dropUp 0.2s ease-in-out forwards;
  }

  .draggable-drop-down {
    animation: dropDown 0.2s ease-in-out forwards;
  }

  @keyframes dropUp {
    0% {
      transform: translateY(-20px);
    }
    100% {
      transform: translateY(0px);
    }
  }

  @keyframes dropDown {
    0% {
      transform: translateY(20px);
    }
    100% {
      transform: translateY(0px);
    }
  }
}
</style>
