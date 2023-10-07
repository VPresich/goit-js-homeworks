"use strict";
import isNumber from "./module-01/auxiliary.js";
export default function getShippingMessage(country, price, deliveryFee) {
  const price = parseFloat(price);
  const deliveryFee = parseFloat(deliveryFee);
  if (!isNumber(price)) return "Error in price";
  if (!isNumber(deliveryFee)) return "Error in deliveryFee";
  return `Shipping to ${country} will cost ${price + deliveryFee} credits`;
}

// for test
console.log(getShippingMessage("Australia", 120, 50));
console.log(getShippingMessage("Germany", 80, 20));
console.log(getShippingMessage("Sweden", 100, 20));
