'use strict';
import { generateArrButton } from './elements.js';

export const arr = [];

//генерируем случайные числа в массив

export function arrGeneration(minVal, maxVal, quantityVal) {
  for (let i = 1; i <= quantityVal; i++) {
    const item = Math.floor(Math.random() * (maxVal - minVal) + minVal);
    arr.push(item);
  }
  generateArrButton.disabled = true;
  console.log(arr);
}
