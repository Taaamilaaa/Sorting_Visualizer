'use strict';
import {
  generateArrButton,
  cleanArrButton,
  bubbleSortButton,
  insertionSortButton,
  selectionSortButton,
  container,
} from './elements.js';
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

  const containerText = document.getElementById('text');

  if (containerText !== null) {
    const throwawayNode = container.removeChild(containerText);
  }

  drawColumns();
  cleanArrButton.disabled = false;
  bubbleSortButton.disabled = false;
  selectionSortButton.disabled = false;
  insertionSortButton.disabled = false;
}
