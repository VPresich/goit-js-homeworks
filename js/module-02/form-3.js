"use strict";

import  checkForSpam from "./task-3.js";

const refs = {
  btnCheckMassage: document.querySelector(".js-check-massage"),
  btnClear: document.querySelector(".js-btn-clear-spam-message"),
  txtArea: document.querySelector("#spam-message"), 
  resultLabel: document.querySelector(".js-spam-message"),
};

refs.btnCheckMassage.addEventListener("click", onBtnCheckMassageClick);
refs.btnClear.addEventListener("click", onBtnClearClick);

function onBtnCheckMassageClick() {
  if (checkForSpam(refs.txtArea.value)) {
    refs.resultLabel.textContent = "The message has a spam!";
    refs.resultLabel.classList.remove("accent-color");
    refs.resultLabel.classList.add("accent-color-error");
  }
  else {
    refs.resultLabel.textContent = "The message is ok!";
    refs.resultLabel.classList.remove("accent-color-error");
    refs.resultLabel.classList.add("accent-color");
  }  
}

function onBtnClearClick() {
  refs.txtArea.value = ""; 
  refs.resultLabel.textContent = "";
}

