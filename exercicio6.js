const prompt = require("prompt-sync")();
const a = parseFloat(prompt("Digite o lado A: "));
const b = parseFloat(prompt("Digite o lado B: "));
const c = parseFloat(prompt("Digite o lado C: "));

if (a + b > c && a + c > b && b + c > a) {
  if (a === b && b === c) {
    console.log("Triângulo eqüilátero");
  } else if (a === b || b === c || a === c) {
    console.log("Triângulo isósceles");
  } else {
    console.log("Triângulo escaleno");
  }
} else {
  console.log("Os lados fornecidos não formam um triângulo");
}
