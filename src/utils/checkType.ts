import { VNodeNormalizedChildren, VNodeArrayChildren, VNode } from 'vue';

export const isVNodeArrayChildren = (value: VNodeNormalizedChildren): value is VNodeArrayChildren => Array.isArray(value);
export const isVNode = (value: unknown): value is VNode => getRawType(value) === 'object';
export const isObject = (value: unknown): value is Record<any, any> => typeof value === 'object' && value !== null;
export const isPlainObject = (value: unknown): value is object => getRawType(value) === 'object';

function getRawType(value: unknown) {
  return Object.prototype.toString.call(value).slice(8, -1).toLowerCase();
}