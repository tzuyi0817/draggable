<script setup lang="ts">
import { ref, nextTick, useSlots, defineComponent, h, useAttrs } from 'vue';
interface Props {
  tag: String;
  modelValue: unknown[];
}

const slots = useSlots();
const attrs = useAttrs();
const props = defineProps<Props>();
const dragId = ref<string | undefined>(undefined);
const currentDropElement = ref<HTMLLIElement | undefined>(undefined);
const slotItems = defineComponent({
  render() {
    if (!slots.default) return undefined;
    return slots.default().map(vNode => {
      return h(props.tag,  { class : [attrs.class] }, [{
        ...vNode,
        children: vNode.children.map(child => {
          console.log(child)
          return {
            ...child,
            props: {
              ...child.props,
              draggable: true,
            }
          };
        })
      }])
    });
  }
});

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

  if (target === currentDropElement.value || !dropId) return;
  currentDropElement.value = target;
  move(dragId.value, dropId);
}

async function move(dragId?: string, dropId?: string) {
  if (!dragId || !dropId || dragId === dropId) return;
  // const dragIndex = props.modelValue.findIndex(item => item.id === dragId);
  // const dropIndex = props.modelValue.findIndex(item => item.id === dropId);
  // const addClass = dragIndex < dropIndex ? 'drop-down' : 'drop-up';

  // currentDropElement.value?.classList.remove('drop-up', 'drop-down');
  // currentDropElement.value?.classList.add(addClass);
  // await nextTick();
  // swap(dragIndex, dropIndex);
}

function swap(a: number, b: number) {
  [props.modelValue[a], props.modelValue[b]] = [props.modelValue[b], props.modelValue[a]];
}
</script>

<template>
    <!-- <slot
      :data-id="'1'"
      draggable="true"
      :ondragstart="handleDragStart"
      :ondrag="handleDrag"
      :ondragend="handleDragEnd"
      :ondragover="handleDragOver"
    >
    </slot> -->
    <slot-items />
</template>

<style lang="scss" scoped>
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