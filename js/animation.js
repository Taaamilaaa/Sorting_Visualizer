import { container } from './elements.js';
import { ms } from './index.js';

export function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

export async function animateSwap(colA, colB) {
  const rectA = colA.getBoundingClientRect();
  const rectB = colB.getBoundingClientRect();

  const distance = rectB.left - rectA.left;

  colA.classList.add('animating');
  colB.classList.add('animating');

  colA.style.transform = `translateX(${distance}px)`;
  colB.style.transform = `translateX(${-distance}px)`;

  await delay(ms);

  colA.style.transition = '';
  colB.style.transition = '';
  colA.style.transform = '';
  colB.style.transform = '';

  colA.parentNode.insertBefore(colB, colA);

  await delay(ms);

  colA.classList.remove('animating');
  colB.classList.remove('animating');
}
