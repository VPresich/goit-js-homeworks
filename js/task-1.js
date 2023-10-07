"use strict";
import isNumber from "./module-01/auxiliary.js";

export default function makeTransaction(quantity, pricePerDroid) {
  if (!isNumber(quantity)) return "Error in quantity";
  if (!isNumber(pricePerDroid)) return "Error in pricePerDroid";

  return `You ordered ${quantity} droids worth ${
    quantity * pricePerDroid
  } credits!`;
}

// For test
console.log(makeTransaction(5, 3000));
console.log(makeTransaction(3, 1000));
console.log(makeTransaction(10, 500));
