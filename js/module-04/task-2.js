"use strict";
// Напиши функцію calcAverageCalories(days),
//     яка повертає середньодобове значення кількості калорій,
//     які спортсмен споживав протягом тижня.
//     Функція очікує один параметр: days — масив об’єктів.
//     Кожен об’єкт описує день тижня та кількість калорій calories,
//     спожитих спортсменом, у цей день.Візьми код нижче і встав після
//     оголошення своєї функції для перевірки коректності її роботи.

// 1-й способ
export default function calcAverageCalories(days) {
  const daysCount = days.length;
  if (daysCount === 0) return 0;

  let caloriesTotal = 0;
  for (const day of days) {
    caloriesTotal += day.calories;
  }

  return caloriesTotal / daysCount;
}

//2-й способ (forEach)
function calcAverageCalories1(days) {
  const daysCount = days.length;
  if (daysCount === 0) return 0;

  let caloriesTotal = 0;
  days.forEach((day) => {
    caloriesTotal += day.calories;
  });

  return caloriesTotal / daysCount;
}

// 3й способ
function calcAverageCalories2(days) {
  const daysCount = days.length;
  if (daysCount === 0) return 0;

  const caloriesTotal = days.reduce((sum, day) => sum + day.calories, 0);
  return caloriesTotal / daysCount;
}

// 4й способ
function calcAverageCalories3(days) {
  const daysCount = days.length;
  if (daysCount === 0) return 0;

  const caloriesTotal = days
    .map((day) => day.calories)
    .reduce((sum, calories) => sum + calories, 0);

  return caloriesTotal / daysCount;
}

console.log(
  calcAverageCalories([
    { day: "monday", calories: 3010 },
    { day: "tuesday", calories: 3200 },
    { day: "wednesday", calories: 3120 },
    { day: "thursday", calories: 2900 },
    { day: "friday", calories: 3450 },
    { day: "saturday", calories: 3280 },
    { day: "sunday", calories: 3300 },
  ])
); // 3180

console.log(
  calcAverageCalories([
    { day: "monday", calories: 2040 },
    { day: "tuesday", calories: 2270 },
    { day: "wednesday", calories: 2420 },
    { day: "thursday", calories: 1900 },
    { day: "friday", calories: 2370 },
    { day: "saturday", calories: 2280 },
    { day: "sunday", calories: 2610 },
  ])
); // 2270

console.log(calcAverageCalories([])); // 0
