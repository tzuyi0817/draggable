<script setup lang="ts">
import { useSlots, defineComponent, h, useAttrs, watch, VNode } from 'vue';
import { isVNodeArrayChildren, isVNode } from '@/utils/checkType';
import { DragAnimationClass, Selector } from '@/types';
import useDrag from '@/hooks/useDrag';

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
const { 
  handleDrag,
  handleDragStart,
  handleDragEnd,
  handleDragOver,
  setDraggableList,
  draggableList,
} = useDrag(props);

const SlotItems = defineComponent({
  render() {
    if (!slots.default) return undefined;
    return slots.default().map(vNode => {
      const rawProps  = attrs.class ? { class : [attrs.class] } : null;
      const children = isVNodeArrayChildren(vNode.children)
        ? vNode.children?.map((child, index) => {
          if (isVNode(child)) {
            const draggable = isDraggable(child);

            return {
              ...child,
              props: {
                ...child.props,
                draggable,
                ondragstart: draggable && handleDragStart,
                ondrag: draggable && handleDrag,
                ondragend: draggable && handleDragEnd,
                ondragover: draggable && handleDragOver,
                class: setChildClass(child, draggable),
                ['data-draggable-id']: draggableList.value[index],
              },
            };
          }
          return child;
        })
        : vNode.children;

      return h(props.tag,  rawProps, [{
        ...vNode,
        children,
      }])
    });
  }
});

function isDraggable(child: VNode) {
  const { draggable } = attrs;
  if (draggable === void 0 || typeof draggable !== 'string') return true;
  const config = { '.': 'class', '#': 'id' };
  const selector = draggable.slice(0, 1) as keyof Selector;
  const dragClass = draggable.slice(1);
  const selectorName = child.props?.[config[selector]] ?? '';

  return selectorName.split(' ').includes(dragClass);
}

function setChildClass(child: VNode, draggable: boolean) {
  const className = child.props?.class;
  const addClass = draggable ? 'draggable__hover' : 'draggable__disable';

  return (className ? `${className} ` : '') + addClass;
}

watch(() => props.modelValue, setDraggableList, { immediate: true });
</script>

<template>
  <slot-items />
</template>

<style lang="scss">
.draggable__hover {
  &:hover {
    cursor: grab;
  }
}

.draggable__disable {
  &:hover {
    cursor: no-drop
  }
}
</style>
