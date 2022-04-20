<script setup lang="ts">
const handleDragStart = (event: DragEvent) => {
  event.dataTransfer?.setData('TEST', (<HTMLDivElement>event.target).id);
};

const handleDrag = (event: DragEvent) => {
  // console.log('drag', event);
};

const handleDragEnd = (event: DragEvent) => {
  // console.log('dragEnd', event);
};

const handleDragEnter = (event: DragEvent) => {
  // console.log('dragEnter', event);
};

const handleDragLeave = (event: DragEvent) => {
  // console.log('dragLeave', event);
};

const handleDrop = (event: DragEvent) => {
  event.preventDefault();
  const id = event.dataTransfer?.getData('TEST') ?? '';
  const target = event.target as HTMLDivElement;
  const element = document.getElementById(id);

  element && target.appendChild(element);
};

const handleDragOver = (event: DragEvent) => {
  event.preventDefault();
};
</script>

<template>
  <div 
    class="drag" 
    id="draggle" 
    draggable="true" 
    :ondragstart="handleDragStart"
    :ondrag="handleDrag"
    :ondragend="handleDragEnd"
  >
    拖動元素
  </div>

  <div 
    class="drop" 
    :ondrop="handleDrop" 
    :ondragenter="handleDragEnter"
    :ondragleave="handleDragLeave"
    :ondragover="handleDragOver"
  >
    放置區域
  </div>
</template>

<style lang="scss" scoped>
.drag {
  height: 70px;
  width: 70px;
  background-color: blue;
  color: #fff;
}

.drop {
  width: 200px;
  height: 200px;
  background-color: antiquewhite;
}
</style>
