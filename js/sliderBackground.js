import { speedSlider } from './elements.js';

export function updateSliderBackground() {
  const speed = parseInt(speedSlider.value);
  const min = parseInt(speedSlider.min);
  const max = parseInt(speedSlider.max);
  let value = ((speed - min) / (max - min)) * 100;
  speedSlider.style.setProperty('--val', `${value}%`);
}
