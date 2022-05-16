import { ref, nextTick } from 'vue';
import { createUuid, swap, throttle } from '@/utils/common';
import { DragAnimationClass } from '@/types';

interface Props {
  modelValue: unknown[];
  animation?: DragAnimationClass;
}

const globalListMap = new Map();

export default function useDrag(props: Props) {
  const dragId = ref<string | undefined>(undefined);
  const currentDropElement = ref<HTMLLIElement | undefined>(undefined);
  const draggableList = ref<Array<string>>([]);
  const throttleDragOver = throttle(handleDragOver);

  // globalListMap.set(draggableList, draggableList);

  function handleDrop(event: DragEvent) {
    console.log("handleDrop", event);
  }

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
    const model = (<HTMLLIElement>target.parentNode)?.dataset.draggableModel;
    console.log(model)
    // const model = target.dataset.draggableModel;
    if (target === currentDropElement.value || model === void 0) return;
    if (!dropId) {
      return;
    }
    currentDropElement.value = target;
    move(dragId.value, dropId);
  }
  
  async function move(dragId?: string, dropId?: string) {
    if (!dragId || dragId === dropId) return;
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
  
  function setDraggableList() {
    draggableList.value = props.modelValue.map((_: unknown) => createUuid());
  }

  return {
    handleDrop,
    handleDrag,
    handleDragStart,
    handleDragEnd,
    handleDragOver: throttleDragOver,
    setDraggableList,
    draggableList,
  }
}