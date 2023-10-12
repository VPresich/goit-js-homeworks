"use strict";
import isNumber from "./auxiliary.js";

export default function getShippingMessage(country, price, deliveryFee) {
  const priceFloat = parseFloat(price);
  const feeFloat = parseFloat(deliveryFee);

  if (!isNumber(priceFloat)) return "Error in price";
  if (!isNumber(feeFloat)) return "Error in deliveryFee";

  return `Shipping to ${country} will cost ${priceFloat + feeFloat} credits`;
}

// for test
console.log(getShippingMessage("Australia", 120, 50));
console.log(getShippingMessage("Germany", 80, 20));
console.log(getShippingMessage("Sweden", 100, 20));
