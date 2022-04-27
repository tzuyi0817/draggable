import Draggable from '@/components/Draggable.vue';
import { DefineComponent } from 'vue';

Draggable.install = function (Vue: DefineComponent) {
  Vue.component('Draggable', Draggable);
}

export { Draggable };
