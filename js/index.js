'use strict';
import { arrGeneration } from './randomNumbersGeneration.js';
import { cleaningContainer } from './cleaningColumns.js';

import {
  generateArrButton,
  cleanArrButton,
  bubbleSortButton,
  selectionSortButton,
  insertionSortButton,
} from './elements.js';

import { onBubbleSortButtonClick } from './sorting/bubbleSort.js';
import { onSelectionSortButtonClick } from './sorting/selectionSort.js';
import { onInsertionSortButtonClick } from './sorting/insertionSort.js';

generateArrButton.addEventListener('click', () => arrGeneration(2, 150, 10));
cleanArrButton.addEventListener('click', () => cleaningContainer());
bubbleSortButton.addEventListener('click', () => onBubbleSortButtonClick());
selectionSortButton.addEventListener('click', () =>
  onSelectionSortButtonClick()
);
insertionSortButton.addEventListener('click', () =>
  onInsertionSortButtonClick()
);
