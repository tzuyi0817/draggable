import { ref, nextTick } from 'vue';
import { createUuid, swap } from '@/utils/common';
import { DragAnimationClass } from '@/types';

interface Props {
  modelValue: unknown[];
  animation?: DragAnimationClass;
}

export default function useDrag(props: Props) {
  const dragId = ref<string | undefined>(undefined);
  const currentDropElement = ref<HTMLLIElement | undefined>(undefined);
  const draggableList = ref<Array<string>>([]);

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
  
  function setDraggableList() {
    draggableList.value = props.modelValue.map((_: unknown) => createUuid());
  }

  return {
    handleDrag,
    handleDragStart,
    handleDragEnd,
    handleDragOver,
    setDraggableList,
    draggableList,
  }
}