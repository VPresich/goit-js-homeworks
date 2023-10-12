"use strict";
import isNumber from "../module-01/auxiliary.js";

// Якщо довжина рядка дорівнює або менша за maxLength,
// то функція повертає початковий рядок без змін.
// Якщо довжина перевищує maxLength, то функція обрізає рядок до maxLength символів,
// додає трикрапку "..." в кінці та повертає обрізану версію.

export default function formatMessage(message, maxLength) {

  const msgLength = parseInt(maxLength);  
  if (!isNumber(msgLength)) return "Error in maxLength";
  
  if (message.length <= maxLength) return message;
  return message.slice(0, maxLength) + "...";
}

// for test
console.log(formatMessage("Curabitur ligula sapien", 16)); // "Curabitur ligula..."
console.log(formatMessage("Curabitur ligula sapien", 23)); // "Curabitur ligula sapien"
console.log(formatMessage("Vestibulum facilisis purus nec", 20)); // "Vestibulum facilisis..."
console.log(formatMessage("Vestibulum facilisis purus nec", 30)); // "Vestibulum facilisis purus nec"
console.log(formatMessage("Nunc sed turpis a felis in nunc fringilla", 15)); // "Nunc sed turpis..."
console.log(formatMessage("Nunc sed turpis a felis in nunc fringilla", 41)); // "Nunc sed turpis a felis in nunc fringilla"
