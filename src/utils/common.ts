import { isObject } from '@/utils/checkType';

export function createUuid() {
  return URL.createObjectURL(new Blob()).slice(-36);
}

export function deepClone(obj: any, hash = new WeakMap()) {
  if (obj instanceof Date) return new Date(obj);
  if (obj instanceof RegExp) return new RegExp(obj);
  if (hash.has(obj)) return hash.get(obj);

  const descriptors = Object.getOwnPropertyDescriptors(obj);
  const clone = Object.create(Object.getPrototypeOf(obj), descriptors);

  hash.set(obj, clone);

  Reflect.ownKeys(obj).forEach(key => {
    const current = obj[key];

    clone[key] = isObject(current) ? deepClone(current, hash) : current;
  })

  return clone;
}

export function swap({ a, b, array }: { a: number, b: number, array: Array<unknown> }) {
  [array[a], array[b]] = [array[b], array[a]];
}

export function throttle(fun: Function, delay = 0) {
  let timeStamp = 0;
  return function (this: Function, ...args: unknown[]) {
    const now = Date.now();
    if (now - timeStamp < delay) return;

    fun.apply(this, args);
    timeStamp = now;
  }
}