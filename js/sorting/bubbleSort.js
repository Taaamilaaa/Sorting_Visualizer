'use strict';
import { arr } from '../rundomNumbersGeneration.js';
import { eraseColumns } from '../cleaningColumns.js';
import { arrToCol } from '../drowingColumns.js';

export function bubbleSort() {
  eraseColumns();
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - 1 - i; j++)
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
  }
  console.log(arr);
  arrToCol();
  return arr;
}
