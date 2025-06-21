import { rundomArr } from './rundomNumbersGeneration.js';
import { generateArrButton, drowButton } from './elements.js';

// очищаем массив
function arrCleaner() {
  generateArrButton.disabled = false;
  drowButton.disabled = false;
  rundomArr.length = 0;
}

// стираем столбики
export function eraseColumns() {
  rundomArr.forEach(el => {
    const col = document.getElementById(`${el}`);

    col.remove();
  });
}

export function cleaningContainer() {
  eraseColumns();
  arrCleaner();
}
