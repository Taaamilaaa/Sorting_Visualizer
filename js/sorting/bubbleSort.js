'use strict';
import { delay, animateSwap } from '../animation.js';
import { colorColumns } from '../drowingColumns.js';
import { container } from '../elements.js';
import { bubbleSortButton, selectionSortButton } from '../elements.js';
import { ms } from '../animation.js';

async function bubbleSort() {
  const columns = Array.from(container.children);
  const n = columns.length;

  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      const a = columns[j];
      const b = columns[j + 1];

      const id1 = parseInt(a.id);
      const id2 = parseInt(b.id);

      const aAlpha = colorColumns(id1);
      const bAlpha = colorColumns(id2);

      //делаем стили для сравниваемых столбцов

      a.style.backgroundColor = `rgba(255, 157, 35, ${aAlpha})`;
      b.style.backgroundColor = `rgba(255, 157, 35, ${bAlpha})`;

      await delay(ms); // задержка для видимой анимации

      if (id1 > id2) {
        // меняем их местами в DOM
        a.classList.add('biggest');
        await animateSwap(a, b);

        // и меняем их местами в массиве columns
        [columns[j], columns[j + 1]] = [columns[j + 1], columns[j]];
      }
      a.classList.remove('biggest');
      a.style.backgroundColor = `rgba(0, 128, 157, ${aAlpha})`;
      b.style.backgroundColor = `rgba(0, 128, 157, ${bAlpha})`;
      a.classList.remove('animating');
      b.classList.remove('animating');
    }
    //стили для отсортированных колонок
    const transparency = colorColumns(columns[n - i - 1].id);
    columns[
      n - i - 1
    ].style.backgroundColor = `rgba(6, 146, 62, ${transparency})`;
  }
  const transparency = colorColumns(columns[0].id);

  columns[0].style.backgroundColor = `rgba(6, 146, 62, ${transparency})`;
  bubbleSortButton.disabled = false;
  selectionSortButton.disabled = false;
}

export function onBubbleSortButtonClick() {
  const columns = Array.from(container.children);
  if (columns.length === 0) {
    alert('сгенерируйте числа');
  } else {
    bubbleSortButton.disabled = true;
    selectionSortButton.disabled = true;
    bubbleSort();
  }
}
