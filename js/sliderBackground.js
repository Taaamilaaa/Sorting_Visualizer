import { speedSlider } from './elements.js';

export function updateSliderBackground() {
  const value =
    ((speedSlider.value - speedSlider.min) /
      (speedSlider.max - speedSlider.min)) *
    100;
  speedSlider.style.setProperty('--val', `${value}%`);
}
