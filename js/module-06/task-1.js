"use strict";

export default class Customer {
  #username = "noname";
  #balance = 0.0;
  #discount = 0.0;
  #orders = [];

  constructor({
    username = "noname",
    balance = 0.0,
    discount = 0.0,
    orders = [],
  } = {}) {
    this.#username = username;
    this.#balance = balance;
    this.#discount = discount;
    this.#orders = orders;
  }

  get username() {
    return this.#username;
  }

  get balance() {
    return this.#balance;
  }

  set balance(newBalance) {
    this.#balance = newBalance;
  }

  get discount() {
    return this.#discount;
  }

  set discount(newDiscount) {
    this.#discount = newDiscount;
  }

  get orders() {
    return this.#orders;
  }

  addOrder(order, cost) {
    this.balance -= cost * (1 - this.discount);
    this.orders.push(order);
  }
}

//for test
const customer = new Customer({ username: "Mango", balance: 20000 });
console.log("username: ", customer.username);
customer.discount = 0.15;
console.log("discount: ", customer.discount);
customer.addOrder("Steak", 2000);
console.log("balance: ", customer.balance);
console.log("orders: ", customer.orders);
