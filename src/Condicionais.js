/*
O if e o else são estruturas condicionais,
neste caso, o if espera que uma condição seja
atendida para que p0arte do código seja executado
caso não occora com sucesso a condiação do if
o bloco do else será adicionado
*/

let nota = 10

if(nota >= 7 && nota <= 10){
  console.log('Passou de Ano')
}
 else if(nota < 7 && nota >= 0){
   console.log('Aluno Reprovado')
}
 else {
   console.log('Nota informada errado')
 }