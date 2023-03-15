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
  divide: function (a, b) {
    console.log(a / b);
  },
  soma: function (a, b) {
    console.log(a + b);
  },
  multiplica: function (a, b) {
    console.log(a * b);
  },
  subtrai: function (a, b) {
    console.log(a - b);
  }
};
calculadora.divide(100, 10);
calculadora.soma(15, 20);
calculadora.multiplica(5, 2);
calculadora.subtrai(60, 20);
