let peso = 70;
let altura = 1.98;
let imc = peso / (altura * altura);

if (imc >= 40) {
  console.log("Obesidade III (Mórbida)");
} else if (imc >= 35 && imc <= 39.9) {
  console.log("Obesidade II (Severa)");
} else if (imc >= 30 && imc <= 34.9) {
  console.log("Obesidade I");
} else if (imc >= 25 && imc <= 29.9) {
  console.log("Acima do Peso");
} else if (imc >= 18.6 && imc <= 24.9) {
  console.log("Peso Ideal");
} else {
  console.log("Abaixo do Peso");
}
