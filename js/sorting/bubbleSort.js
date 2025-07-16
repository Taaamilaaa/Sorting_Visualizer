'use strict';
import { delay, animateSwap } from '../animation.js';
import { colorColumns } from '../drowingColumns.js';
import { container } from '../elements.js';
import { resetCancelFlag, cancelRequested } from './cancelFlag.js';
import { disableSortButtons, enableSortButtons } from './buttonsFlag.js';
import { ms } from '../index.js';

async function bubbleSort() {
  const columns = Array.from(container.children);
  const n = columns.length;

  for (let i = 0; i < n - 1; i++) {
    if (cancelRequested) return;

    for (let j = 0; j < n - i - 1; j++) {
      if (cancelRequested) return;

      const a = columns[j];
      const b = columns[j + 1];
      if (!a || !b) return;

      const id1 = parseInt(a.id);
      const id2 = parseInt(b.id);

      const aAlpha = colorColumns(id1);
      const bAlpha = colorColumns(id2);

      //Style the columns being compared
      a.style.backgroundColor = `rgba(255, 157, 35, ${aAlpha})`;
      b.style.backgroundColor = `rgba(255, 157, 35, ${bAlpha})`;

      await delay(ms);
      if (cancelRequested) return;

      if (id1 > id2) {
        a.classList.add('moving');
        await delay(ms);
        if (cancelRequested) return;
        // Swap them in the DOM
        await animateSwap(a, b);

        // And swap them in the columns array
        [columns[j], columns[j + 1]] = [columns[j + 1], columns[j]];
      }
      a.classList.remove('moving');
      a.style.backgroundColor = `rgba(0, 128, 157, ${aAlpha})`;
      b.style.backgroundColor = `rgba(0, 128, 157, ${bAlpha})`;
    }
    if (cancelRequested) return;
    //Styles for sorted columns
    const transparency = colorColumns(columns[n - i - 1].id);
    columns[
      n - i - 1
    ].style.backgroundColor = `rgba(6, 146, 62, ${transparency})`;
  }
  const transparency = colorColumns(columns[0].id);

  columns[0].style.backgroundColor = `rgba(6, 146, 62, ${transparency})`;
  enableSortButtons();
}

export function onBubbleSortButtonClick() {
  disableSortButtons();
  resetCancelFlag();
  bubbleSort();
}
