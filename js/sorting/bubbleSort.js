'use strict';
import { delay, animateSwap } from '../animation.js';
import { colorColumns } from '../drowingColumns.js';
import { container } from '../elements.js';
import {
  bubbleSortButton,
  selectionSortButton,
  insertionSortButton,
} from '../elements.js';
import { ms } from '../index.js';

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

      //Style the columns being compared

      a.style.backgroundColor = `rgba(255, 157, 35, ${aAlpha})`;
      b.style.backgroundColor = `rgba(255, 157, 35, ${bAlpha})`;

      await delay(ms);

      if (id1 > id2) {
        // Swap them in the DOM
        a.classList.add('moving');
        await delay(ms);
        await animateSwap(a, b);

        // And swap them in the columns array
        [columns[j], columns[j + 1]] = [columns[j + 1], columns[j]];
      }
      a.classList.remove('moving');
      a.style.backgroundColor = `rgba(0, 128, 157, ${aAlpha})`;
      b.style.backgroundColor = `rgba(0, 128, 157, ${bAlpha})`;
      a.classList.remove('animating');
      b.classList.remove('animating');
    }
    //Styles for sorted columns
    const transparency = colorColumns(columns[n - i - 1].id);
    columns[
      n - i - 1
    ].style.backgroundColor = `rgba(6, 146, 62, ${transparency})`;
  }
  const transparency = colorColumns(columns[0].id);

  columns[0].style.backgroundColor = `rgba(6, 146, 62, ${transparency})`;
  bubbleSortButton.disabled = false;
  selectionSortButton.disabled = false;
  insertionSortButton.disabled = false;
}

export function onBubbleSortButtonClick() {
  const columns = Array.from(container.children);
  if (columns.length === 0) {
    alert('сгенерируйте числа');
  } else {
    bubbleSortButton.disabled = true;
    selectionSortButton.disabled = true;
    insertionSortButton.disabled = true;
    bubbleSort();
  }
}
