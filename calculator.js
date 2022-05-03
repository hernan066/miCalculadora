//calculator.js

const calculator = {
  sumar: function (a, b) {
    return a + b;
  },
  restar: function (a, b) {
    return a - b;
  },
  multiplicar: function (a, b) {
    if (a === 0 || b === 0) {
      return 0;
    }
    return a * b;
  },
  dividir: function (a, b) {
    if (a === 0 || b === 0) {
      return "No se puede dividir por cero";
    }
    return a / b;
  },
};

module.exports = calculator;
