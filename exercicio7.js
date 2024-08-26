const prompt = require("prompt-sync")();
const macas = parseInt(prompt("Digite o número de maçãs compradas: "));

let preco;
if (macas < 12) {
  preco = 0.3;
} else {
  preco = 0.25;
}

const total = macas * preco;
console.log(`O valor total da compra é R$ ${total.toFixed(2)}`);
