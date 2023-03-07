// Forma literal
const produto = {
  nome: "celular",
  preco: 5000,
  desconto: 0.9,
};

produto.preçofinal = produto.preco * produto.desconto;

console.log(produto);

// Forma dinamica
let pessoa = {};
pessoa.nome = "Gabriel";
pessoa.idade = 19;
pessoa.altura = 1.74;

console.log(pessoa);
