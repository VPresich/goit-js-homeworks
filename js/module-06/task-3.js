'use strict';

// Напиши клас StringBuilder, який приймає один параметр
// initialValue — довільний рядок, який записується у приватну властивість
// value об'єкта, що створюється.

// Оголоси наступні методи класу:

// getValue() — повертає поточне значення приватної властивості value.
// padEnd(str) — отримує параметр str (рядок) і додає його
// в кінець значення приватної властивості value об'єкта,
// який викликає цей метод.
// padStart(str) — отримує параметр str (рядок) і
// додає його на початок значення приватної властивості
// value об'єкта, який викликає цей метод.
// padBoth(str) — отримує параметр str (рядок) і
// додає його на початок і в кінець значення приватної властивості
// value об'єкта, який викликає цей метод.

class StringBuilder {
  #value;
  constructor(initialValue = '') {
    this.#value = initialValue;
  }
  getValue() {
    return this.#value;
  }

  padEnd(str) {
    this.#value += str;
    return this;
  }

  padStart(str) {
    this.#value = str + this.#value;
    return this;
  }

  padBoth(str) {
    this.padStart(str);
    this.padEnd(str);
    return this;
  }
}

//For teacher test
const builder = new StringBuilder('.');
console.log(builder.getValue()); // "."
builder.padStart('^');
console.log(builder.getValue()); // "^."
builder.padEnd('^');
console.log(builder.getValue()); // "^.^"
builder.padBoth('=');
console.log(builder.getValue()); // "=^.^="

//For my test with chaines
// Added return this in class-methods for chaines building
//const builder1 = new StringBuilder('.');
//console.log(builder1.padStart('^').padEnd('^').padBoth('=').getValue());
