import { arr } from './rundomNumbersGeneration.js';
import { generateArrButton, drowButton } from './elements.js';

// очищаем массив
function arrCleaner() {
  generateArrButton.disabled = false;
  drowButton.disabled = false;
  arr.length = 0;
}

// стоираем столбики
export function eraseColumns() {
  arr.map(el => {
    const col = document.getElementById(`${el}`);
    col.remove();
  });
}

export function cleaningContainer() {
  eraseColumns();
  arrCleaner();
}
