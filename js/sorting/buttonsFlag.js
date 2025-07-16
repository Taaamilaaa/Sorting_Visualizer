import {
  bubbleSortButton,
  selectionSortButton,
  insertionSortButton,
} from '../elements.js';

export function enableSortButtons() {
  bubbleSortButton.disabled = false;
  selectionSortButton.disabled = false;
  insertionSortButton.disabled = false;
}
export function disableSortButtons() {
  bubbleSortButton.disabled = true;
  selectionSortButton.disabled = true;
  insertionSortButton.disabled = true;
}
