'use strict';
import { rundomArr } from '../rundomNumbersGeneration.js';
import { eraseColumns } from '../cleaningColumns.js';
import { arrToCol } from '../drowingColumns.js';

function bubbleSort() {
  const sortedArr = [...rundomArr];

  for (let i = 0; i < sortedArr.length; i++) {
    for (let j = 0; j < sortedArr.length - 1 - i; j++)
      if (sortedArr[j] > sortedArr[j + 1]) {
        let temp = sortedArr[j];
        sortedArr[j] = sortedArr[j + 1];
        sortedArr[j + 1] = temp;
      }
  }

  return sortedArr;
}

export function onBubbleSortButtonClick() {
  const sortedArr = bubbleSort();
  eraseColumns();
  arrToCol(sortedArr);
}
