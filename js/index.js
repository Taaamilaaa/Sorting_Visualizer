'use strict';
import { arrGeneration } from './rundomNumbersGeneration.js';
import { cleaningContainer } from './cleaningColumns.js';
import { onSelectionSortButtonClick } from './sorting/selectionSort.js';
import {
  generateArrButton,
  cleanArrButton,
  bubbleSortButton,
  selectionSortButton,
} from './elements.js';

import { onBubbleSortButtonClick } from './sorting/bubbleSort.js';

generateArrButton.addEventListener('click', () => arrGeneration(2, 150, 10));
cleanArrButton.addEventListener('click', () => cleaningContainer());
bubbleSortButton.addEventListener('click', () => onBubbleSortButtonClick());
selectionSortButton.addEventListener('click', () =>
  onSelectionSortButtonClick()
);
