// 1.Получение значений от пользователя
const min = document.getElementById('min');
const max = document.getElementById('max');
const quantity = document.getElementById('quantity');

let minVal;
let maxVal;
let quantityVal;

function getData() {
  minVal = min.value;
  maxVal = max.value;
  quantityVal = quantity.value;
}
// 2.Генерация массива и отрисовка

const arr = [];

function arrGeneration(minVal, maxVal, quantityVal) {
  for (let i = 1; i <= quantityVal; i++) {
    const item = Math.floor(Math.random() * (maxVal - minVal) + minVal);
    arr.push(item);
  }
  console.log(arr);
}
