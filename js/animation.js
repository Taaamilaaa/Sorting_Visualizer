import { ms } from './index.js';
import { cancelRequested } from './sorting/cancelFlag.js';

export function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

export async function animateSwap(colA, colB) {
  if (cancelRequested || !colA || !colB || !colA.parentNode) return;

  const rectA = colA.getBoundingClientRect();
  const rectB = colB.getBoundingClientRect();
  if (!rectA || !rectB) return;

  const distance = rectB.left - rectA.left;

  colA.classList.add('animating');
  colB.classList.add('animating');

  colA.style.transform = `translateX(${distance}px)`;
  colB.style.transform = `translateX(${-distance}px)`;

  await delay(ms);
  if (cancelRequested) return;

  colA.style.transition = '';
  colB.style.transition = '';
  colA.style.transform = '';
  colB.style.transform = '';

  if (cancelRequested || !colA.parentNode || !colB) return;

  try {
    colA.parentNode.insertBefore(colB, colA);
  } catch (err) {
    console.warn('insertBefore failed:', err);
  }

  colA.classList.remove('animating');
  colB.classList.remove('animating');
}
