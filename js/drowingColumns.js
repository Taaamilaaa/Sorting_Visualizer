import { arr } from './rundomNumbersGeneration.js';
import { drowButton, container } from './elements.js';

//рисуем массив

export function columnGenerator(a) {
  const height = a * 2;
  const column = document.createElement('div');
  column.style.width = '10px';
  column.style.height = `${height}px`;
  column.style.backgroundColor = 'teal';
  column.style.marginLeft = '5px';
  column.style.marginRight = '5px';
  column.title = a;
  column.id = a;
  container.append(column);
  drowButton.disabled = true;
}

export function arrToCol() {
  if (arr.length > 0) {
    arr.map(el => columnGenerator(el));
  }
  return;
}
