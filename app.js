//app.js
//Se debe ingresar numero1, operador(+,-,*,/) y numero2

const process = require("process");
const { sumar, restar, multiplicar, dividir } = require("./calculator");

const numeroA = +process.argv[2];

const operacion = process.argv[3];

const numeroB = +process.argv[4];

const operators = ["+", "-", "*", "/"];

const calculadora = function (num1, operator, num2) {
  //valido que se ingresen 3 argumentos
  if (process.argv.length !== 5) {
    console.log("Formato invalido, ingrese numeroA, operador, numeroB");
    return;
  }

  //valido que el operador sea uno de los permitidos
  if (!operators.includes(operator)) {
    console.log("Operador no valido, ingrese + , - , * , /");
    return;
  }

  //valido que los datos sean numericos
  if (isNaN(num1) || isNaN(num2)) {
    console.log("Ingrese solo numeros");
    return;
  }

  //realizo la operacion
  let resultado = 0;

  if (operator === "+") {
    resultado = sumar(num1, num2);
  } else if (operator === "-") {
    resultado = restar(num1, num2);
  } else if (operator === "*") {
    resultado = multiplicar(num1, num2);
  } else if (operator === "/") {
    resultado = dividir(num1, num2);
  }

  //impresion del resultado
  return console.log(`El resultado de ${num1} ${operator} ${num2} es ${resultado}`);
  
};

calculadora(numeroA, operacion, numeroB);
