"use strict";
import getShippingMessage from "../task-2.js";

const refs = {
  btnShipping: document.querySelector(".js-btn-shiping"),
  btnClear: document.querySelector(".js-shiping-clear"),
  inputPrice: document.querySelector("#shipping-price"),
  inputCountry: document.querySelector("#shipping-country"),
  inputFee: document.querySelector("#shipping-fee"),
  resultShippingLabel: document.querySelector(".js-shiping-result"),
};

refs.btnShipping.addEventListener("click", onBtnShippingClick);
refs.btnClear.addEventListener("click", onBtnClearClick);

function onBtnShippingClick() {
  refs.resultShippingLabel.textContent =
    "Result: " +
    getShippingMessage(
      refs.inputCountry.value,
      refs.inputPrice.value,
      refs.inputFee.value
    );
}

function onBtnClearClick() {
  refs.inputPrice.value = "";
  refs.inputCountry.value = "";
  refs.inputFee.value = "";
  refs.resultShippingLabel.textContent = "Result: ";
}
