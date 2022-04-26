<script setup lang="ts">
import { ref, nextTick, useSlots, defineComponent, h, useAttrs, watch } from 'vue';
import { isVNodeArrayChildren, isVNode } from '@/utils/checkType';
import { createUuid } from '@/utils/common';
import { DragAnimationClass } from '@/types';

interface Props {
  tag?: string;
  modelValue: unknown[];
  animation?: DragAnimationClass;
}

const slots = useSlots();
const attrs = useAttrs();
const props = withDefaults(defineProps<Props>(), {
  tag: 'div',
});
const dragId = ref<string | undefined>(undefined);
const currentDropElement = ref<HTMLLIElement | undefined>(undefined);
const draggableList = ref<Array<string>>([]);
const SlotItems = defineComponent({
  render() {
    if (!slots.default) return undefined;
    return slots.default().map(vNode => {
      const rawProps  = attrs.class ? { class : [attrs.class] } : null;
      const children = isVNodeArrayChildren(vNode.children)
        ? vNode.children?.map((child, index) => {
          return isVNode(child)
            ? {
              ...child,
              props: {
                ...child.props,
                draggable: true,
                ondragstart: handleDragStart,
                ondrag: handleDrag,
                ondragend: handleDragEnd,
                ondragover: handleDragOver,
                ['data-draggable-id']: draggableList.value[index],
              },
            }
            : child;
        })
        : vNode.children;

      return h(props.tag,  rawProps, [{
        ...vNode,
        children,
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
  dragId.value = (<HTMLLIElement>event.target).dataset.draggableId;
}

function handleDragEnd(event: DragEvent) {
  (<HTMLLIElement>event.target).style.opacity = '1';
}

function handleDragOver(event: DragEvent) {
  event.preventDefault();
  const target = <HTMLLIElement>event.target;
  const dropId = target.dataset.draggableId;

  if (target === currentDropElement.value || !dropId) return;
  currentDropElement.value = target;
  move(dragId.value, dropId);
}

async function move(dragId?: string, dropId?: string) {
  if (!dragId || !dropId || dragId === dropId) return;
  const dragIndex = draggableList.value.findIndex(id => id === dragId);
  const dropIndex = draggableList.value.findIndex(id => id === dropId);

  if (props.animation) {
    const { moveToBefore, moveToAfter } = props.animation;
    const addClass = dragIndex < dropIndex ? moveToAfter : moveToBefore;

    currentDropElement.value?.classList.remove(moveToBefore, moveToAfter);
    currentDropElement.value?.classList.add(addClass);
  }
  await nextTick();
  swap({ a: dragIndex, b: dropIndex, array: draggableList.value });
  swap({ a: dragIndex, b: dropIndex, array: props.modelValue });
}

function swap({ a, b, array }: { a: number, b: number, array: Array<unknown> }) {
  [array[a], array[b]] = [array[b], array[a]];
}

function setDraggableList() {
  draggableList.value = props.modelValue.map(_ => createUuid());
}

watch(() => props.modelValue, setDraggableList, { immediate: true });
</script>

<template>
  <slot-items />
</template>
