function ePrimo(numero) {
  if (numero < 2) return false;
  for (let i = 2; i <= Math.sqrt(numero); i++) {
    if (numero % i === 0) return false;
  }
  return true;
}

class ChecarNumeroPrimo {
  static ePrimo(numero) {
    return ePrimo(numero);
  }
}

console.log(ChecarNumeroPrimo.ePrimo(5));
console.log(ChecarNumeroPrimo.ePrimo(12));


// function P(n) {
//   if (n < 2) return false;
//   for (let i = 2; i < n; i++) {
//     if (n % i === 0) return false;
//   }
//   return true;
// }

// // Teste a função
// console.log(P(7)); // Saída esperada: true
// console.log(P(12)); // Saída esperada: false
