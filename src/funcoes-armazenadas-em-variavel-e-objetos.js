// Armazenando uma função em uma variável
let imprimirSoma = function (a, b) {
  console.log(a + b);
};
imprimirSoma(2, 3);

// Armazenando uma função arrow em uma variável
const soma = (a, b) => {
  return a + b;
};

// Função arrow
let num1;
let num2;

let somar = () => {
  let resultado = console.log(num1 + num2);
};

somar((num1 = 10), (num2 = 20));

// Retorno implícito

// Função arrow reduzida
const subtracao = (a, b) => a - b;

// Função armazenadas dentro de objetos
let calculadora = {
  div: function (a, b) {
    console.log(a / b);
  }
};
