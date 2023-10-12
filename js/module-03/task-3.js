"use strict";
// Напиши функцію filterArray(numbers, value), яка приймає масив чисел (numbers)
// та значення(value) як параметри. Функція повинна повертати новий масив лише тих
// чисел із масиву numbers, які більші за значення value.

// Усередині функції:

// Створи порожній масив, у який будеш додавати підходящі числа.
// Використай цикл для ітерації кожного елемента масиву numbers.
// Використовуй умовний оператор if усередині циклу для перевірки
// кожного елемента и додавання до свого масиву.
// Поверни свій новий масив з підходящими числами як результат.

// 1-й варінт, як тут в конспекті (трохи тупий)

export default function filterArray(numbers, value) {
  const filteredArray = [];
  for (const elem of numbers) {
    if (elem <= value) continue;
    filteredArray.push(elem);
  }
  return filteredArray;
}

// 2-й варіант (метод forEach)
function filterArray1(numbers, value) {
  const filteredArray = [];
  numbers.forEach((elem) => {
    if (elem > value) {
      filteredArray.push(elem);
    }
  });
  return filteredArray;
}

console.log(filterArray([1, 2, 3, 4, 5], 3)); // [4, 5]
console.log(filterArray([1, 2, 3, 4, 5], 4)); // [5]
console.log(filterArray([1, 2, 3, 4, 5], 5)); // []
console.log(filterArray([12, 24, 8, 41, 76], 38)); // [41, 76]
console.log(filterArray([12, 24, 8, 41, 76], 20)); // [24, 41, 76]
