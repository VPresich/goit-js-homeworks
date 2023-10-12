"use strict";
import isNumber from "./module-01/auxiliary.js";
export default function getElementWidth(content, padding, border) {
  const contentWidth = parseFloat(content);
  const paddingWidth = parseFloat(padding);
  const borderWidth = parseFloat(border);

  if (!isNumber(contentWidth)) return "Error in content";
  if (!isNumber(paddingWidth)) return "Error in paddingWidth";
  if (!isNumber(borderWidth)) return "Error in borderWidth";

  return contentWidth + 2 * paddingWidth + 2 * borderWidth;
}

//for test
console.log(getElementWidth("50px", "8px", "4px")); // 74
console.log(getElementWidth("60px", "12px", "8.5px")); // 101
console.log(getElementWidth("200px", "0px", "0px")); // 200
