import { randomArr } from './randomNumbersGeneration.js';
import {
  container,
  bubbleSortButton,
  selectionSortButton,
  insertionSortButton,
  generateArrButton,
  cleanArrButton,
} from './elements.js';

// очищаем массив
function arrCleaner() {
  generateArrButton.disabled = false;
  randomArr.length = 0;
}

function textCreator() {
  const text = document.createElement('p');
  text.id = 'text';
  text.textContent = 'generate a new array of numbers';
  text.style.color = '#2c2c2c';
  text.style.fontSize = '30px';
  text.style.margin = 'auto';
  text.style.textTransform = 'uppercase';
  container.appendChild(text);
}

// Remove the columns
export function eraseColumns() {
  randomArr.forEach(el => {
    const col = document.getElementById(`${el}`);

    col.remove();
  });
}

export function cleaningContainer() {
  eraseColumns();
  arrCleaner();
  textCreator();
  cleanArrButton.disabled = true;
  bubbleSortButton.disabled = true;
  selectionSortButton.disabled = true;
  insertionSortButton.disabled = true;
}
