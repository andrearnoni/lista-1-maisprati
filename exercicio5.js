const prompt = require("prompt-sync")();
const peso = parseFloat(prompt("Digite o peso (em kg): "));
const altura = parseFloat(prompt("Digite a altura (em metros): "));

const imc = peso / (altura * altura);

if (imc < 18.5) {
  console.log("Baixo peso");
} else if (imc < 25) {
  console.log("Peso normal");
} else if (imc < 30) {
  console.log("Sobrepeso");
} else {
  console.log("Obesidade");
}
