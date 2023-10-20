"use strict";

import customer from "./task-1.js";

const refs = {
  btnAddOrder: document.querySelector(".js-add-order"),
  btnGetOrder: document.querySelector(".js-get-order"),
  btnClear: document.querySelector("js-btn-order-clear"),
  lstOrder: document.querySelector("#select-country"),
  resultLabel: document.querySelector(".js-order-cost"),  
};

refs.btnAddOrder.addEventListener("click", onbtnAddOrderClick);
refs.btnGetOrder.addEventListener("click", onBtnGetOrder);

function onBtnMakeTransactionClick() {
  refs.resultLabel.textContent = makeTransaction(refs.inputQuantity.value, refs.inputPrice.value);
}

function onBtnClearClick() {  
  refs.resultLabel.textContent = "";
}