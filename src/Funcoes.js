// Função sem retorno
// Parametros
function imprimirSoma(a, b) {
  let resultado = a + b;
  console.log(resultado);
}

let numero1 = 10;
let numero2 = 11;
imprimirSoma(numero1, numero2);
imprimirSoma(2);
imprimirSoma(2, 5, 5, 6, 7, 5, 8, 9);
imprimirSoma();

// Função com retorno
// Os parametros podem ou não receber valor por padrão
function soma(a = 5, b = 10) {
  let resultado = console.log(a + b);
  return resultado;
}
soma();
