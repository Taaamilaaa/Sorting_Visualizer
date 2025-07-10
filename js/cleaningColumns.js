import { randomArr } from './randomNumbersGeneration.js';
import { generateArrButton } from './elements.js';
import {
  bubbleSortButton,
  selectionSortButton,
  insertionSortButton,
} from './elements.js';

// очищаем массив
function arrCleaner() {
  generateArrButton.disabled = false;
  randomArr.length = 0;
}

// стираем столбики
export function eraseColumns() {
  randomArr.forEach(el => {
    const col = document.getElementById(`${el}`);

    col.remove();
  });
}

export function cleaningContainer() {
  eraseColumns();
  arrCleaner();
  bubbleSortButton.disabled = false;
  selectionSortButton.disabled = false;
  insertionSortButton.disabled = false;
}
