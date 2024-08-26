const prompt = require("prompt-sync")();
let soma = 0;
let count = 0;

while (true) {
  const numero = parseFloat(prompt("Digite um número decimal (0 para sair): "));
  if (numero === 0) {
    break;
  }
  soma += numero;
  count++;
}

const media = soma / count;
console.log(`A média aritmética dos números é: ${media.toFixed(2)}`);
