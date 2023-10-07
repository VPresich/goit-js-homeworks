"use strict";

import makeTransaction from "../task-1.js";

const refs = {
  btnMakeTransaction: document.querySelector(".js-make-transaction"),
  btnClear: document.querySelector(".js-btn-clear"),
  inputPrice: document.querySelector("#droid-price"),
  inputQuantity: document.querySelector("#droids-quantity"),
  resultLabel: document.querySelector(".js-result-transaction"),
};

refs.btnMakeTransaction.addEventListener("click", onBtnMakeTransactionClick);
refs.btnClear.addEventListener("click", onBtnClearClick);

function onBtnMakeTransactionClick() {
  const quantity = Number(refs.inputQuantity.value);
  console.log(quantity);

  const price = Number(refs.inputPrice.value);
  const message = makeTransaction(quantity, price);
  refs.resultLabel.textContent = "Result: " + message;
}

function onBtnClearClick() {
  refs.inputPrice.value = "";
  refs.inputQuantity.value = "";
  refs.resultLabel.textContent = "Result: ";
}
