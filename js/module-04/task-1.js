"use strict";
// Напиши функцію isEnoughCapacity(products, containerSize), яка обчислює,
// чи помістяться всі товари в контейнер при пакуванні.

// Функція оголошує два параметри:

// products — об’єкт, у якому ключі містять назви товарів,
// а їхні значення — кількість цих товарів. Наприклад, { apples: 2, grapes: 4 }.
// containerSize — число, максимальна кількість одиниць товарів,
// яку в себе може вмістити контейнер.
// Функція має повернути результат перевірки,
// чи помістяться всі товари в контейнер.Тобто порахувати загальну кількість
// товарів в об’єкті products і повернути true, якщо вона менше або дорівнює containerSize, і false, якщо ні.

export default function isEnoughCapacity(products, containerSize) {
  const values = Object.values(products);
  let productsSize = 0;
  for (const value of values) {
    productsSize += value;
  }
  return containerSize >= productsSize;
}

// 2-й варіант (forEach)
function isEnoughCapacity1(products, containerSize) {
  const values = Object.values(products);

  let productsSize = 0;
  values.forEach((value) => {
    productsSize += value;
  });

  return containerSize >= productsSize;
}

// 3-й варіант (reduce)
function isEnoughCapacity2(products, containerSize) {
  const productsSize = Object.values(products).reduce(
    (total, value) => total + value,
    0
  );

  return containerSize >= productsSize;
}

console.log(isEnoughCapacity({ apples: 2, grapes: 3, carrots: 1 }, 8)); // true

console.log(isEnoughCapacity({ apples: 4, grapes: 6, lime: 16 }, 12)); // false

console.log(isEnoughCapacity({ apples: 1, lime: 5, tomatos: 3 }, 14)); // true

console.log(isEnoughCapacity({ apples: 18, potatos: 5, oranges: 2 }, 7)); // false
