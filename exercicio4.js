const prompt = require("prompt-sync")();

while (true) {
  console.log("Escolha uma opção:");
  console.log("1 - Verificar se um número é par");
  console.log("2 - Verificar se um número é primo");
  console.log("3 - Verificar se um número é perfeito");

  const opcao = parseInt(prompt("Opção: "));

  switch (opcao) {
    case 1:
      const numero = parseInt(prompt("Digite um número: "));

      if (numero % 2 === 0) {
        console.log(`O número ${numero} é par`);
      } else {
        console.log(`O número ${numero} é ímpar`);
      }
      break;
    case 2:
      const numero2 = parseInt(prompt("Digite um número: "));

      let ehPrimo = true;

      for (let i = 2; i < numero2; i++) {
        if (numero2 % i === 0) {
          ehPrimo = false;
          break;
        }
      }

      if (ehPrimo) {
        console.log(`O número ${numero2} é primo`);
      } else {
        console.log(`O número ${numero2} não é primo`);
      }
      break;
    case 3:
      const numero3 = parseInt(prompt("Digite um número: "));

      let soma = 0;

      for (let i = 1; i < numero3; i++) {
        if (numero3 % i === 0) {
          soma += i;
        }
      }

      if (soma === numero3) {
        console.log(`O número ${numero3} é perfeito`);
      } else {
        console.log(`O número ${numero3} não é perfeito`);
      }
      break;
    default:
      console.log("Opção inválida");
  }
}
