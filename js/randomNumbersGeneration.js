'use strict';
import { generateArrButton } from './elements.js';
import { drawColumns } from './drowingColumns.js';

export let randomArr = [];

//генерируем случайные уникальные числа

export function arrGeneration(minVal, maxVal, quantityVal) {
  let set = new Set();
  while (set.size < quantityVal) {
    let item = Math.floor(Math.random() * (maxVal - minVal) + minVal);
    set.add(item);
  }
  randomArr = [...set];

  generateArrButton.disabled = true;
  drawColumns();
}
