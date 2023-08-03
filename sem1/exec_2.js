const diaDaSemana = [
  'Domingo',
  'Segunda-feira',
  'Terça-feira',
  'Quarta-feira',
  'Quinta-feira',
  'Sexta-feira',
  'Sábado',
];

function obterDiaDaSemana(numero) {
  if (numero < 1 || numero > 7) {
    return 'Dia inválido';
  }
  return diaDaSemana[numero - 1];
}

function obterDiaDaSemanaAtual() {
  const hoje = new Date().getDay() + 1;
  return obterDiaDaSemana(hoje);
}

const entradaNumero = 1;
const diaInformado = obterDiaDaSemana(entradaNumero);
console.log(`O número ${entradaNumero} corresponde a: ${diaInformado}`);

const diaAtual = obterDiaDaSemanaAtual();
console.log(`O dia atual é: ${diaAtual}`);
