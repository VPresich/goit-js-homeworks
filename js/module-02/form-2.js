"use strict";

import  formatMessage from "./task-m2-1.js";

const refs = {
  btnGetMassage: document.querySelector(".js-get-massage"),
  btnClear: document.querySelector(".js-btn-clear-message"),
  txtArea: document.querySelector("#example-message"),
  inputLength: document.querySelector("#length-msg"),  
  resultLabel: document.querySelector(".js-reduced-message"),
};

refs.btnGetMassage.addEventListener("click", onBtnGetMassageClick);
refs.btnClear.addEventListener("click", onBtnClearClick);

function onBtnGetMassageClick() {
  refs.resultLabel.textContent =
    "Result: " +
    formatMessage(txtArea.value, inputLength.value); 
}

function onBtnClearClick() {
  refs.txtArea.value = "";
  refs.inputLength.value = "";  
  refs.resultLabel.textContent = "Result: ";
}