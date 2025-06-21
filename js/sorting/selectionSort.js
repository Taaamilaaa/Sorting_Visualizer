'use strict';
import { rundomArr } from '../rundomNumbersGeneration.js';
import { arrToCol } from '../drowingColumns.js';
import { eraseColumns } from '../cleaningColumns.js';

function selectionSort() {
  let sortedArr = [];
  let arr = [...rundomArr];
  const length = arr.length;

  for (let i = 0; i <= length - 1; i++) {
    const minVal = Math.min(...arr);
    const minValIndex = arr.indexOf(minVal);
    arr.splice(minValIndex, 1);

    sortedArr.push(minVal);
  }

  return sortedArr;
}

export function onSelectionSortButtonClick() {
  const sortedArr = selectionSort();
  eraseColumns();
  arrToCol(sortedArr);
}
