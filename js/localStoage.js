import { speedSlider } from './elements.js';

export function initialSpeedValueSet() {
  let val = localStorage.getItem('speed');

  if (val !== null) {
    speedSlider.value = val;
  } else {
    localStorage.setItem('speed', speedSlider.value);
  }
}

export function speedValueSet() {
  const val = speedSlider.value;
  localStorage.setItem('speed', val);
}
