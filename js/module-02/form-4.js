"use strict";

import getShippingCost from "./task-4.js";

const refs = {  
  lstCountry: document.querySelector("#select-country"),
  resultLabel: document.querySelector(".js-shipping-cost"),
};

refs.lstCountry.addEventListener("change", onLstCountryChange);

function onLstCountryChange() {
    console.log ("Change");
  refs.resultLabel.textContent = String(getShippingCost(refs.lstCountry.value));
}


