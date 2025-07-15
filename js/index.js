'use strict';
import { arrGeneration } from './randomNumbersGeneration.js';
import { cleaningContainer } from './cleaningColumns.js';
import { initialSpeedValueSet, speedValueSet } from './localStoage.js';

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

export let ms;

export function speedChange() {
  ms = parseInt(localStorage.getItem('speed'));
}

speedSlider.addEventListener('input', speedChange);

window.addEventListener('DOMContentLoaded', () => {
  arrGeneration(2, 150, 10);
  speedChange();
  initialSpeedValueSet();
  updateSliderBackground();

  speedSlider.classList.add('initialized');
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
speedSlider.addEventListener('input', () => {
  updateSliderBackground();
  speedValueSet();
  console.log(speedSlider.value);
});
