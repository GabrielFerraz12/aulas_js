/* Aqui estamos criando um array de informações.
O array é um conjunto de informações agrupadas em linha */
let valores = [7.7, 8.5, 5.5];
/* Aqui estamos acessando os índices de um array */
console.log(valores[0], valores[3]);
console.log(valores);
/* Aqui estamos adicionando um novo elemento ao array
usando o índice */
valores[4] = 10;
console.log(valores.length);
/* O push é uma função do array e é utilizada quando
queremos adicionar um conjunto de informações ao array */
valores.push({ id: 3 }, false, null, "teste");
console.log(valores);
/* Mesmo podendo adicionar diversos tipos diferentes,
devemos prezar dentro de um array, array's homogêneas,
ou seja, do mesmo tipo primitivo */
valores.pop();
console.log(valores);
/* O pop() remove o ultimo elemento do array por vez */
/* o delete remove o elemento do array pelo índice
escolhido pelo usuário */
delete valores[0];
console.log(typeof valores);
console.log(valores);
/* Podemos também fazer uso dos arrays para criar
operações aritmética */
let calculo = [10, 15];
let resultado = calculo[0] + calculo[1];
console.log(resultado);
