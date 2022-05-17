import { ref, nextTick, toRefs } from 'vue';
import { createUuid, swap } from '@/utils/common';
import { DragAnimationClass, ListMap } from '@/types';

const listMap = new Map<string, ListMap>();
const dragId = ref<string | undefined>(undefined);
const dragAreaId = ref<string | undefined>(undefined);
const currentDropElement = ref<HTMLLIElement | null>(null);

interface Props {
  modelValue: unknown[];
  animation?: DragAnimationClass;
}

export default function useDrag(props: Props, areaId: string) {
  const draggableList = ref<Array<string>>([]);
  const { modelValue } = toRefs(props);

  listMap.set(areaId, {
    draggableList,
    modelValue,
  });

  function handleDragAreaEnter(event: DragEvent) {
    const areaId = (<HTMLLIElement>event.target).dataset.draggableArea;
    if (areaId === void 0) return;
    moveOtherArea(areaId);
  }

  function handleDrag(event: DragEvent) {
    (<HTMLLIElement>event.target).style.opacity = '0';
  }
  
  function handleDragStart(event: DragEvent) {
    if (!event.dataTransfer) return;
    const target = <HTMLLIElement>event.target;

    event.dataTransfer.effectAllowed = 'move';
    dragId.value = target.dataset.draggableId;
    dragAreaId.value = (<HTMLLIElement>target.parentNode).dataset.draggableArea;
  }
  
  function handleDragEnd() {
    currentDropElement.value!.style.opacity = '1';
  }
  
  function handleDragEnter(event: DragEvent) {
    event.preventDefault();
    const target = <HTMLLIElement>event.target;
    const dropId = target.dataset.draggableId;
    const areaId = (<HTMLLIElement>target.parentNode).dataset.draggableArea;

    if (areaId !== void 0 && areaId !== dragAreaId.value) {
      moveOtherArea(areaId, dropId);
      return;
    }
    if (target === currentDropElement.value || !dropId) return;
    currentDropElement.value = target;
    move(dropId);
  }
  
  async function move(dropId?: string) {
    if (!dragId.value || dragId.value === dropId) return;
    const dragIndex = draggableList.value.findIndex(id => id === dragId.value);
    const dropIndex = draggableList.value.findIndex(id => id === dropId);

    if (props.animation) {
      const { moveToBefore, moveToAfter } = props.animation;
      const addClass = dragIndex < dropIndex ? moveToAfter : moveToBefore;
  
      currentDropElement.value?.classList.remove(moveToBefore, moveToAfter);
      currentDropElement.value?.classList.add(addClass);
    }
    await nextTick();
    swap({ a: dragIndex, b: dropIndex, from: draggableList.value });
    swap({ a: dragIndex, b: dropIndex, from: props.modelValue });
  }

  async function moveOtherArea(areaId: string, dropId?: string) {
    if (!dragAreaId.value) return;
    const { draggableList: preList, modelValue: preModel } = listMap.get(dragAreaId.value)!;
    dragAreaId.value = areaId;
    const { draggableList: list, modelValue: model } = listMap.get(dragAreaId.value)!;
    const dragIndex = preList.value.findIndex((id: string) => id === dragId.value);

    if (!dropId) {
      moveToEmptyArea(preList.value, list.value, dragIndex);
      moveToEmptyArea(preModel.value, model.value, dragIndex);
    } else {
      const dropIndex = list.value.findIndex((id: string) => id === dropId); 
      swap({ a: dragIndex, b: dropIndex, from: preList.value, to: list.value });
      swap({ a: dragIndex, b: dropIndex, from: preModel.value, to: model.value });
    }
    await nextTick();
    hideNewElement();
  }

  function moveToEmptyArea(previous: unknown[], current: unknown[], index: number) {
    const [target] = previous.splice(index, 1);
    current.push(target);
  }

  function hideNewElement() {
    currentDropElement.value = document.querySelector(`[data-draggable-id='${dragId.value}']`);
    currentDropElement.value!.style.opacity = '0';
  }
  
  function setDraggableList() {
    draggableList.value = props.modelValue.map((_: unknown) => createUuid());
  }

  return {
    handleDragAreaEnter,
    handleDrag,
    handleDragStart,
    handleDragEnd,
    handleDragEnter,
    setDraggableList,
    draggableList,
  }
}