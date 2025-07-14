'use strict';
import { arrGeneration } from './randomNumbersGeneration.js';
import { cleaningContainer } from './cleaningColumns.js';

import {
  generateArrButton,
  cleanArrButton,
  bubbleSortButton,
  selectionSortButton,
  insertionSortButton,
  speedSlider,
} from './elements.js';
import { onBubbleSortButtonClick } from './sorting/bubbleSort.js';
import { onSelectionSortButtonClick } from './sorting/selectionSort.js';
import { onInsertionSortButtonClick } from './sorting/insertionSort.js';
import { updateSliderBackground } from './sliderBackground.js';

window.addEventListener('DOMContentLoaded', () => {
  arrGeneration(2, 150, 10);
});
generateArrButton.addEventListener('click', () => arrGeneration(2, 150, 10));
cleanArrButton.addEventListener('click', () => cleaningContainer());
bubbleSortButton.addEventListener('click', () => onBubbleSortButtonClick());
selectionSortButton.addEventListener('click', () =>
  onSelectionSortButtonClick()
);
insertionSortButton.addEventListener('click', () =>
  onInsertionSortButtonClick()
);
speedSlider.addEventListener('input', updateSliderBackground);
updateSliderBackground();
