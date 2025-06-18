'use strict';
import { arrGeneration } from './rundomNumbersGeneration.js';
import { arrToCol } from './drowingColumns.js';
import { cleaningContainer } from './cleaningColumns.js';
import {
  generateArrButton,
  cleanArrButton,
  drowButton,
  bubbleSortButton,
} from './elements.js';

import { bubbleSort } from './sorting/bubbleSort.js';

generateArrButton.addEventListener('click', () => arrGeneration(2, 150, 20));
drowButton.addEventListener('click', () => arrToCol());
cleanArrButton.addEventListener('click', () => cleaningContainer());
bubbleSortButton.addEventListener('click', () => bubbleSort());
