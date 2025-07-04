import { rundomArr } from './rundomNumbersGeneration.js';
import { container } from './elements.js';

//рисуем массив

export function columnGenerator(a) {
  const transparency = colorColumns(a);
  const height = a * 2;
  const column = document.createElement('div');
  column.style.width = '10px';
  column.style.height = `${height}px`;
  column.style.backgroundColor = `rgba(156, 26, 103  , ${transparency})`;
  column.style.marginLeft = '5px';
  column.style.marginRight = '5px';
  column.style.border = 'solid, 1px, grey';
  column.title = a;
  column.id = a;
  container.append(column);
}
function colorColumns(a) {
  const min = 2;
  const max = 150;
  const minAlpha = 0.2;
  const maxAlpha = 1;

  let alpha = (a - min) / (max - min);
  alpha = minAlpha + alpha * (maxAlpha - minAlpha);
  return alpha.toFixed(2);

  // let alpha;
  // if (a < 10 || a === 10) {
  //   alpha = `0.00${a}`;
  // } else if (a > 10 && a < 100) {
  //   alpha = `0.0${a}`;
  // } else if (a > 100 || a === 100) {
  //   alpha = `0.${a}`;
  // }
  // const transparency = Number(alpha) + 0.2;
  // const result = transparency.toFixed(2);
  // return result;
}
export function arrToCol(newArr) {
  newArr.map(el => columnGenerator(el));
  return;
}
export function drowColumns() {
  arrToCol(rundomArr);
}
