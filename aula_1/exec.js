//refatoração legibilidade e clean code
function encontrarMaiorValor(valores) {
  if (!Array.isArray(valores) || valores.length === 0) {
    throw new Error('A lista não pode ser vazia.');
  }

  return Math.max(...valores);
}
const valores = [10, 5, 200, 20, 3];
console.log(`Maior valor: ${encontrarMaiorValor(valores)}`);

// function mrv(arr) {
//   let mv = arr[0];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > mv) {
//       mv = arr[i];
//     }
//     return mv;
//   }
// }
// const valores = [20, 5, 8, 10, 3];
// console.log(`Maior valor:`, mrv(valores));

