'use strict';
import { generateArrButton } from './elements.js';
import { drowColumns } from './drowingColumns.js';

export let rundomArr = [];

//генерируем случайные уникальные числа

export function arrGeneration(minVal, maxVal, quantityVal) {
  let set = new Set();
  while (set.size < quantityVal) {
    let item = Math.floor(Math.random() * (maxVal - minVal) + minVal);
    set.add(item);
  }
  rundomArr = [...set];

  generateArrButton.disabled = true;
  drowColumns();
}
