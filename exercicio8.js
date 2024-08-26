const prompt = require("prompt-sync")();
const a = parseFloat(prompt("Digite o primeiro valor: "));
const b = parseFloat(prompt("Digite o segundo valor: "));

if (a < b) {
  console.log(`${a}, ${b}`);
} else {
  console.log(`${b}, ${a}`);
}
