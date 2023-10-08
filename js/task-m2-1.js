"use strict";
// якщо сума до сплати перевищує кількість кредитів на
//  рахунку клієнта, функція має повертати рядок "Insufficient funds!"
// в іншому випадку функція має повертати рядок "You ordered <quantity> droids worth <totalPrice> credits!", де < quantity > це кількість замовлених дроїдів,
//     а < totalPrice > це їх загальна вартість.

import isNumber from "./module-01/auxiliary.js";

function makeTransaction(quantity, pricePerDroid, customerCredits) {
  const quantityInt = parseInt(quantity);
  const priceFloat = parseFloat(pricePerDroid);
  const creditsFloat = parseFloat(customerCredits);

  if (!isNumber(quantityInt)) return "Error in quantity";
  if (!isNumber(priceFloat)) return "Error in pricePerDroid";
  if (!isNumber(creditsFloat)) return "Error in customerCredits";

  const total = quantityInt * priceFloat;

  if (total > creditsFloat) return "Insufficient funds!";
  return `You ordered ${quantityInt} droids worth ${total} credits!`;
}

// For test
console.log(makeTransaction(5, 3000, 23000)); // "You ordered 5 droids worth 15000 credits!"
console.log(makeTransaction(3, 1000, 15000)); // "You ordered 3 droids worth 3000 credits!"
console.log(makeTransaction(10, 5000, 8000)); // "Insufficient funds!"
console.log(makeTransaction(8, 2000, 10000)); // "Insufficient funds!"
console.log(makeTransaction(10, 500, 5000)); // "You ordered 10 droids worth 5000 credits!"

// new version of makeTransaction which changes customerCredits value
export default function makeTransaction2(
  quantity,
  pricePerDroid,
  customerCredits
) {
  const quantityInt = parseInt(quantity);
  const priceFloat = parseFloat(pricePerDroid);
  const creditsFloat = parseFloat(customerCredits.value);

  if (!isNumber(quantityInt)) return "Error in quantity";
  if (!isNumber(priceFloat)) return "Error in pricePerDroid";
  if (!isNumber(creditsFloat)) return "Error in customerCredits";

  const total = quantityInt * priceFloat;

  if (total > creditsFloat) return "Insufficient funds!";
  customerCredits.value -= total;
  return `You ordered ${quantityInt} droids worth ${total} credits!`;
}
