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