import { rundomArr } from './rundomNumbersGeneration.js';
import { container } from './elements.js';

//рисуем массив

export function columnGenerator(a) {
  const transparency = colorColumns(a);
  const height = a * 2;

  const column = document.createElement('div');

  column.classList.add('columns');
  column.style.height = `${height}px`;
  column.style.backgroundColor = `rgba(0, 128, 157, ${transparency})`;
  column.title = a;
  column.id = a;

  container.append(column);

  const text = document.createElement('span');
  column.append(text);
  text.textContent = a;
  text.classList.add('colomns-title');
}

export function colorColumns(a) {
  const min = 2;
  const max = 150;
  const minAlpha = 0.2;
  const maxAlpha = 1;

  let alpha = (a - min) / (max - min);
  alpha = minAlpha + alpha * (maxAlpha - minAlpha);
  return alpha.toFixed(2);
}
export function arrToCol(newArr) {
  newArr.map(el => columnGenerator(el));
  return;
}
export function drowColumns() {
  arrToCol(rundomArr);
}
