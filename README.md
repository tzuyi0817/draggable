# Vue 3 Draggable

Vue 3 Draggable component

<p>
  <a href="https://npm-stat.com/charts.html?package=vue3-draggable-tzu">
    <img src="https://img.shields.io/npm/dm/vue3-draggable-tzu.svg" alt="npm"/>
  </a>
  <a href="https://www.npmjs.com/package/vue3-draggable-tzu">
    <img src="https://img.shields.io/npm/v/vue3-draggable-tzu.svg" alt="npm"/>
  </a>
</p>


## Features

- Dragging
- Controls whether dragging is possible
- Dropping animation effect
- Custom HTML tag

## Getting started

### Installation

First step is to install it using `yarn`、`npm` or `pnpm`:

```bash
npm install vue3-draggable-tzu

# or use yarn
yarn add vue3-draggable-tzu

# or use pnpm
pnpm install vue3-draggable-tzu
```

### Basic Using

```vue
<script setup>
import { ref, computed } from 'vue';
import { Draggable } from 'vue3-draggable-tzu';

const list = ref([
  { id: 1, name: 'name1' },
  { id: 2, name: 'name2' },
  { id: 3, name: 'name3' },
]);
const animationClass = {
  moveToBefore: 'draggable-drop-up',
  moveToAfter: 'draggable-drop-down',
};
</script>

<template>
  <draggable
    v-model="list"
    :tag="'ul'"
    class="draggable"
    :animation="animationClass"
    draggable=".item" // or without
  >
    <li v-for="item in list" :key="item.id" :class="item.id === 1 && 'item'">
      <p>id: {{ item.id }}</p>
      <p>name: {{ item.name }}</p>
    </li>
  </draggable>
</template>

<style>
.draggable {
  ...
  .draggable-drop-up {
    animation: dropUp 0.2s ease-in-out forwards;
  }

  .draggable-drop-down {
    animation: dropDown 0.2s ease-in-out forwards;
  }

  @keyframes dropUp {
    ...
  }

  @keyframes dropDown {
    ...
  }
}
</style>
```
