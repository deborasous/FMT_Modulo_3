function Fatorial(numero) {
  if (typeof numero !== 'number' || numero < 0 || !Number.isInteger(numero)) {
    throw new Error(
      'Fatorial definido somente para números inteiros não negativos.'
    );
  }

  return calcularFatorial(numero);
}

function calcularFatorial(numero) {
  if (numero === 0 || numero === 1) return 1;

  let resultado = 1;
  for (let i = 2; i <= numero; i++) {
    resultado *= i;
  }
  return resultado
}

console.log(Fatorial(5));
console.log(Fatorial(0));
console.log(Fatorial(10));
