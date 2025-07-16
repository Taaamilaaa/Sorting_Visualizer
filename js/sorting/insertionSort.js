'use strict';
import { container } from '../elements.js';
import { animateSwap } from '../animation.js';
import { colorColumns } from '../drowingColumns.js';
import { delay } from '../animation.js';
import { resetCancelFlag, cancelRequested } from './cancelFlag.js';
import { disableSortButtons, enableSortButtons } from './buttonsFlag.js';
import { ms } from '../index.js';

export async function insertionSort() {
  const columns = Array.from(container.children);
  const n = columns.length;

  for (let i = 1; i < n; i++) {
    if (cancelRequested) return;

    let j = i;
    const current = columns[i];
    const currentValue = parseInt(current.id);
    const currentAlpha = colorColumns(currentValue);

    current.classList.add('moving');
    current.style.backgroundColor = `rgba(255, 157, 35, ${currentAlpha})`;

    await delay(ms);
    if (cancelRequested) return;

    while (j > 0 && parseInt(columns[j - 1].id) > currentValue) {
      columns[j - 1].classList.add('shifting');

      await animateSwap(columns[j - 1], columns[j]);
      if (!columns[j] || !columns[j - 1]) return;
      if (!columns[j - 1].parentNode) return;

      // Update the DOM and array
      try {
        container.insertBefore(columns[j], columns[j - 1]);
      } catch (e) {
        console.warn('insertBefore error in insertionSort:', e);
        return;
      }

      [columns[j], columns[j - 1]] = [columns[j - 1], columns[j]];

      columns[j].classList.remove('shifting');

      await delay(ms);
      if (cancelRequested) return;
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
    if (cancelRequested) return;
  }
  enableSortButtons();
}

export function onInsertionSortButtonClick() {
  resetCancelFlag();
  insertionSort();
  disableSortButtons();
}
