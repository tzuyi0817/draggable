import { VNodeNormalizedChildren, VNodeArrayChildren, VNode } from 'vue';

export const isVNodeArrayChildren = (value: VNodeNormalizedChildren): value is VNodeArrayChildren => Array.isArray(value);
export const isVNode = (value: any): value is VNode => getRawType(value) === 'object';
export const isObject = (value: any): value is object => typeof value === 'object' && value !== null;

function getRawType(value: any) {
  return Object.prototype.toString.call(value).slice(8, -1).toLowerCase();
}