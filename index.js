'use strict';

const generateArrButton = document.getElementById('generate');
const cleanArrButton = document.getElementById('clean');
const container = document.getElementById('container');
const drowButton = document.getElementById('drow');

let arr = [];

//генерируем случайные числа в массив

function arrGeneration(minVal, maxVal, quantityVal) {
  for (let i = 1; i <= quantityVal; i++) {
    const item = Math.floor(Math.random() * (maxVal - minVal) + minVal);
    arr.push(item);
  }
  generateArrButton.disabled = true;
}

generateArrButton.addEventListener('click', () => arrGeneration(2, 150, 35));

//рисуем массив

function columnGenerator(a) {
  const height = a * 2;
  const column = document.createElement('div');
  column.style.width = '10px';
  column.style.height = `${height}px`;
  column.style.backgroundColor = 'teal';
  column.style.marginLeft = '5px';
  column.style.marginRight = '5px';
  column.title = a;
  column.id = a;
  container.append(column);
  drowButton.disabled = true;
}

function arrToCol() {
  if (arr.length > 0) {
    arr.map(el => columnGenerator(el));
  }

  return;
}
drowButton.addEventListener('click', () => arrToCol());

// очищаем массив

function arrCleaner() {
  return (arr = []);
}

function eraseColumns() {
  arr.map(el => {
    const col = document.getElementById(`${el}`);
    col.remove();
  });
}

cleanArrButton.addEventListener('click', () => {
  eraseColumns();
  arrCleaner();
  generateArrButton.disabled = false;
  drowButton.disabled = false;
});
