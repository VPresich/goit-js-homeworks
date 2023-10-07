"use strict";
import getElementWidth from "../task-3.js";

const refs = {
  btnElementWidth: document.querySelector(".js-btn-width"),
  btnClear: document.querySelector(".js-width-clear"),
  inputContent: document.querySelector("#content"),
  inputPadding: document.querySelector("#padding"),
  inputBorder: document.querySelector("#border"),
  resultWidthLabel: document.querySelector(".js-width-result"),
};

refs.btnElementWidth.addEventListener("click", onBtnElementWidthClick);
refs.btnClear.addEventListener("click", onBtnClearClick);

function onBtnElementWidthClick() {
  const content = refs.inputContent.value;
  const padding = refs.inputPadding.value;
  const border = refs.inputBorder.value;
  const result = getElementWidth(content, padding, border);
  refs.resultWidthLabel.textContent = "Result: " + String(result);
}

function onBtnClearClick() {
  refs.inputContent.value = "";
  refs.inputPadding.value = "";
  refs.inputBorder.value = "";
  refs.resultWidthLabel.textContent = "Result: ";
}
