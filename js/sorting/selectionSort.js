'use strict';
import {
  container,
  selectionSortButton,
  bubbleSortButton,
} from '../elements.js';
import { animateSwap } from '../animation.js';
import { delay } from '../animation.js';
import { colorColumns } from '../drowingColumns.js';
import { ms } from '../animation.js';

async function selectionSort() {
  let columns = Array.from(container.children);
  const n = columns.length;

  for (let i = 0; i < n; i++) {
    let minIndex = i;
    const alphaMinIndex = colorColumns(columns[minIndex].id);
    columns[
      minIndex
    ].style.backgroundColor = `rgba(255, 157, 35, ${alphaMinIndex})`;

    await delay(ms);

    for (let j = i + 1; j < n; j++) {
      columns[j].style.boxShadow = '0 0 10px 4px rgba(6, 146, 62, 0.4)';
      await delay(ms);
      columns[j].style.boxShadow = '';

      if (parseInt(columns[j].id) < parseInt(columns[minIndex].id)) {
        columns[
          minIndex
        ].style.backgroundColor = `rgba(0, 128, 157, ${alphaMinIndex})`;
        minIndex = j;
        columns[
          minIndex
        ].style.backgroundColor = `rgba(255, 157, 35, ${alphaMinIndex})`;
      }
    }

    if (minIndex !== i) {
      await animateSwap(columns[i], columns[minIndex]);

      // Визуально переставляем в DOM
      container.insertBefore(columns[minIndex], columns[i]);

      // После вставки нужно обновить columns — пересоздать список DOM-элементов
      columns = Array.from(container.children);
    }

    // Финальный стиль отсортированной колонки
    const alpha = colorColumns(columns[i].id);
    columns[i].style.backgroundColor = `rgba(6, 146, 62, ${alpha})`;
    columns[i].style.boxShadow = '';
  }
  selectionSortButton.disabled = false;
  bubbleSortButton.disabled = false;
}

export function onSelectionSortButtonClick() {
  const columns = Array.from(container.children);
  if (columns.length === 0) {
    alert('сгенерируйте числа');
  } else {
    selectionSortButton.disabled = true;
    bubbleSortButton.disabled = true;
    selectionSort();
  }
}
