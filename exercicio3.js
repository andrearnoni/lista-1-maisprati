const prompt = require("prompt-sync")();
const nota = parseFloat(prompt("Digite uma nota de 0 a 10: "));

if (nota < 0 || nota > 10) {
  console.log("Nota inválida");
} else if (nota < 3) {
  console.log("Reprovado");
} else if (nota < 6) {
  console.log("Recuperação");
} else {
  console.log("Aprovado");
}
