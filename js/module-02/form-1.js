"use strict";

import makeTransaction2 from "./task-m2-1.js";

const refs = {
  btnMakeTransaction: document.querySelector(".js-make-transaction2"),
  btnClear: document.querySelector(".js-btn-clear2"),
  inputPrice: document.querySelector("#droid-price2"),
  inputQuantity: document.querySelector("#droids-quantity2"),
  inputCustomerCredits: document.querySelector("#customer-credits"),
  resultLabel: document.querySelector(".js-result-transaction2"),
};

refs.btnMakeTransaction.addEventListener("click", onBtnMakeTransactionClick);
refs.btnClear.addEventListener("click", onBtnClearClick);

function onBtnMakeTransactionClick() {
  refs.resultLabel.textContent =
    "Result: " +
    makeTransaction2(
      refs.inputQuantity.value,
      refs.inputPrice.value,
      refs.inputCustomerCredits
    );
}

function onBtnClearClick() {
  refs.inputPrice.value = "";
  refs.inputQuantity.value = "";
  refs.inputCustomerCredits.value = "";
  refs.resultLabel.textContent = "Result: ";
}
