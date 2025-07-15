'use strict';
import {
  container,
  bubbleSortButton,
  selectionSortButton,
  insertionSortButton,
} from '../elements.js';
import { animateSwap } from '../animation.js';
import { colorColumns } from '../drowingColumns.js';
import { delay } from '../animation.js';
import { ms } from '../index.js';

export async function insertionSort() {
  const columns = Array.from(container.children);
  const n = columns.length;

  for (let i = 1; i < n; i++) {
    let j = i;
    const current = columns[i];
    const currentValue = parseInt(current.id);
    const currentAlpha = colorColumns(currentValue);

    current.classList.add('moving');
    current.style.backgroundColor = `rgba(255, 157, 35, ${currentAlpha})`;

    await delay(ms);

    while (j > 0 && parseInt(columns[j - 1].id) > currentValue) {
      columns[j - 1].classList.add('shifting');

      await animateSwap(columns[j - 1], columns[j]);

      // Update the DOM and array
      container.insertBefore(columns[j], columns[j - 1]);
      [columns[j], columns[j - 1]] = [columns[j - 1], columns[j]];

      columns[j].classList.remove('shifting');

      await delay(ms);
      j--;
    }

    current.classList.remove('moving');
    current.style.backgroundColor = `rgba(0, 128, 157, ${currentAlpha})`;
  }

  // Final selection of sorted
  for (let col of columns) {
    let sortedAlpha = colorColumns(col.id);
    col.style.backgroundColor = `rgba(6, 146, 62, ${sortedAlpha})`;
    await delay(ms / 2);
  }
  bubbleSortButton.disabled = false;
  selectionSortButton.disabled = false;
  insertionSortButton.disabled = false;
}

export function onInsertionSortButtonClick() {
  insertionSort();
  bubbleSortButton.disabled = true;
  selectionSortButton.disabled = true;
  insertionSortButton.disabled = true;
}
