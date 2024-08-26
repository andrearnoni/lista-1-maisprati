const prompt = require("prompt-sync")();
const idade = parseInt(prompt("Digite a idade: "));

if (idade < 0) {
  console.log("Idade inválida");
} else if (idade < 12) {
  console.log("Criança");
} else if (idade < 18) {
  console.log("Adolescente");
} else if (idade < 65) {
  console.log("Adulto");
} else {
  console.log("Idoso");
}
