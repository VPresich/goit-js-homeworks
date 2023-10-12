"use strict";
import isNumber from "./auxiliary.js";

export default function makeTransaction(quantity, pricePerDroid) {
  const quantityInt = parseInt(quantity);
  const priceFloat = parseFloat(pricePerDroid);

  if (!isNumber(quantityInt)) return "Error in quantity";
  if (!isNumber(priceFloat)) return "Error in pricePerDroid";

  return `You ordered ${quantityInt} droids worth ${
    priceFloat * quantityInt
  } credits!`;
}

// For test
console.log(makeTransaction(5.2, 3000));
console.log(makeTransaction(3, 1000));
console.log(makeTransaction(10, 500));
