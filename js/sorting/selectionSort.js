'use strict';
import { container } from '../elements.js';
import { animateSwap } from '../animation.js';
import { delay } from '../animation.js';
import { colorColumns } from '../drowingColumns.js';
import { resetCancelFlag, cancelRequested } from './cancelFlag.js';
import { disableSortButtons, enableSortButtons } from './buttonsFlag.js';
import { ms } from '../index.js';

async function selectionSort() {
  let columns = Array.from(container.children);
  const n = columns.length;

  for (let i = 0; i < n; i++) {
    if (cancelRequested) return;

    let minIndex = i;

    const alphaMinIndex = colorColumns(columns[minIndex].id);
    columns[
      minIndex
    ].style.backgroundColor = `rgba(255, 157, 35, ${alphaMinIndex})`;

    await delay(ms);
    if (cancelRequested) return;

    for (let j = i + 1; j < n; j++) {
      columns[j].style.boxShadow = '0 0 10px 4px rgba(6, 146, 62, 0.4)';

      await delay(ms);
      if (cancelRequested) return;

      columns[j].style.boxShadow = '';

      if (parseInt(columns[j].id) < parseInt(columns[minIndex].id)) {
        columns[
          minIndex
        ].style.backgroundColor = `rgba(0, 128, 157, ${alphaMinIndex})`;
        minIndex = j;
        columns[
          minIndex
        ].style.backgroundColor = `rgba(255, 157, 35, ${alphaMinIndex})`;
        columns[minIndex].classList.add('moving');

        await delay(ms);
        if (cancelRequested) return;

        columns[minIndex].classList.remove('moving');
      }
    }

    if (minIndex !== i) {
      await animateSwap(columns[i], columns[minIndex]);
      if (cancelRequested) return;

      await delay(ms);
      if (cancelRequested) return;

      // Visually rearrange in DOM

      container.insertBefore(columns[minIndex], columns[i]);

      // After insertion, you need to update columns - recreate the list of DOM elements
      columns = Array.from(container.children);
    }

    // Final style of sorted column
    const alpha = colorColumns(columns[i].id);
    columns[i].style.backgroundColor = `rgba(6, 146, 62, ${alpha})`;
    columns[i].style.boxShadow = '';
  }
  enableSortButtons();
}

export function onSelectionSortButtonClick() {
  disableSortButtons();
  resetCancelFlag();
  selectionSort();
}
