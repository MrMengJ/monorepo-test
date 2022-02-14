import { isArray, isEmpty } from 'lodash';

export const isUnEmptyArray = (value?: any): boolean => {
  return isArray(value) && !isEmpty(value);
};

/**
 * 返回重新排序后的新数组
 * @param {Array} list 数组或者类数组结构
 * @param {Number} startIndex 开始位置
 * @param {Number} endIndex 结束位置
 * @return {Array} 重新排序后新数组
 */
export const reorderArray = (list: any[], startIndex: number, endIndex: number): any[] => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};
