<script setup lang="ts">
import { ref, nextTick } from 'vue';
import { DemoListItem } from '@/types';

interface Props {
  list: DemoListItem[];
}

const props = defineProps<Props>();
const dragId = ref<string | undefined>(undefined);
const currentDropElement = ref<HTMLLIElement | undefined>(undefined);

function handleDrop(event: DragEvent) {
  event.preventDefault();
}

function handleDrag(event: DragEvent) {
  (<HTMLLIElement>event.target).style.opacity = '0';
}

function handleDragStart(event: DragEvent) {
  if (!event.dataTransfer) return;
  event.dataTransfer.effectAllowed = 'move';
  dragId.value = (<HTMLLIElement>event.target).dataset.id;
}

function handleDragEnd(event: DragEvent) {
  (<HTMLLIElement>event.target).style.opacity = '1';
}

function handleDragOver(event: DragEvent) {
  event.preventDefault();
  const target = <HTMLLIElement>event.target;
  const dropId = target.dataset.id;

  if (target === currentDropElement.value) return;
  currentDropElement.value = target;
  move(dragId.value, dropId);
}

async function move(dragId?: string, dropId?: string) {
  if (!dragId || !dropId || dragId === dropId) return;
  const dragIndex = props.list.findIndex(item => item.id === dragId);
  const dropIndex = props.list.findIndex(item => item.id === dropId);
  const addClass = dragIndex < dropIndex ? 'drop-down' : 'drop-up';

  currentDropElement.value?.classList.remove('drop-up', 'drop-down');
  currentDropElement.value?.classList.add(addClass);
  await nextTick();
  swap(dragIndex, dropIndex);
}

function swap(a: number, b: number) {
  [props.list[a], props.list[b]] = [props.list[b], props.list[a]];
}
</script>

<template>
  <ul 
    :ondrop="handleDrop"
    :ondragover="handleDragOver"
  >
    <li 
      v-for="item in list" 
      :key="item.id"
      :data-id="item.id"
      draggable="true"
      :ondragstart="handleDragStart"
      :ondrag="handleDrag"
      :ondragend="handleDragEnd"
    >
      <p>id: {{ item.name }}</p>
      <p>初始位置: {{ item.id }}</p>
    </li>
  </ul>
</template>

<style lang="scss" scoped>
ul {
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

.drop-up {
  animation: dropUp 0.2s ease-in-out forwards;
}
.drop-down {
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
</style>
