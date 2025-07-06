export function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

export async function animateSwap(colA, colB) {
  const rectA = colA.getBoundingClientRect();
  const rectB = colB.getBoundingClientRect();

  const distance = rectB.left - rectA.left;

  // Двигаем колонки в разные стороны
  colA.classList.add('animating');
  colB.classList.add('animating');
  colA.style.transform = `translateX(${distance}px)`;
  colB.style.transform = `translateX(${-distance}px)`;

  // Ждём завершения анимации
  await delay(800);

  // Сбросим transform, чтобы вернуться к нормальному состоянию
  colA.style.transform = '';
  colB.style.transform = '';
}
//
