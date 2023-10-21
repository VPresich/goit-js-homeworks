"use strict";

import Customer from "./task-1.js";

const customer = new Customer({username: "Mango", balance: 20000});

const refs = {
  btnAddOrder: document.querySelector(".js-add-order"),
  btnGetOrder: document.querySelector(".js-get-order"),
  btnClear: document.querySelector(".js-btn-order-clear"),
  lstOrder: document.querySelector("#select-order"),
  totalCostLabel: document.querySelector(".js-order-cost"),  
};

refs.btnAddOrder.addEventListener("click", onbtnAddOrderClick);
refs.btnGetOrder.addEventListener("click", onBtnGetOrder);
refs.btnClear.addEventListener("click", onBtnClearClick);
refs.lstOrder.addEventListener("change", onLstOrderChange);


function onLstOrderChange(){
  const selectedOption = this.options[this.selectedIndex];
  const order = selectedOption.value;
  const price = selectedOption.getAttribute('data-price');
  
  if (order) {
    const orderList = document.querySelector('.js-order-list');
    const newRow = createOrderTblRow(order, price); 
    orderList.appendChild(newRow);
    refs.totalCostLabel.textContent = getStrTotalCost();    
  }
}

function onbtnAddOrderClick(){

} 

function onBtnGetOrder(){

}

function onBtnClearClick() {  
  refs.resultLabel.textContent = "";
}

function createOrderTblRow(order, price) {
   
  const newRow = document.createElement('tr');
  newRow.classList.add("tbody-row-table");
  
  const orderCell = document.createElement('td');
  orderCell.textContent = order;
  orderCell.classList.add("telem-title");

  const priceCell = document.createElement('td');
  priceCell.textContent = '$' + price;
  priceCell.classList.add("telem-price");

  const deleteButtonCell = document.createElement('td');
  deleteButtonCell.classList.add("telem-option");
  const deleteButton = document.createElement('button');
  deleteButton.textContent = 'Delete';
  deleteButton.classList.add("telem-button");

  deleteButton.addEventListener('click', () => {
    newRow.remove(); 
    refs.totalCostLabel.textContent = getStrTotalCost();
  });
  deleteButtonCell.appendChild(deleteButton);

  newRow.appendChild(orderCell);
  newRow.appendChild(priceCell);
  newRow.appendChild(deleteButtonCell);

  return newRow;
}

function getStrTotalCost() {
  const priceCells = document.querySelectorAll('.js-order-list td:nth-child(2)'); 
  let total = 0;

  priceCells.forEach(function (cell) {
    const price = parseFloat(cell.textContent.replace('$', ''));
    total += price;
  });

  return '$' + total.toFixed(2);   
}