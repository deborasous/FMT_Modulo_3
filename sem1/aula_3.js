function calcularMedia(notas) {
  if (!Array.isArray(notas) || notas.length === 0) {
    throw new Error('As notas devem ser fornecidas em um array.');
  }

  const somaNotas = notas.reduce((acumulador, nota) => acumulador + nota, 0);
  const media = somaNotas / notas.length;

  return media.toFixed(2);
}

function verificarSituacao(media, faltas) {
  if (typeof media !== 'number' || media < 0 || faltas < 0) {
    throw new Error(
      'A média e o número de faltas devem ser números não negativos.'
    );
  }

  if (media >= 7 && faltas <= 3) {
    return 'aprovado';
  } else {
    return 'reprovado';
  }
}

function calcularMediaESituacao(notas, faltas) {
  const media = calcularMedia(notas);
  const situacao = verificarSituacao(Number(media), faltas);
  return { media, situacao };
}

const notasAluno1 = [8, 7, 8, 9, 8];
const faltasAluno1 = 3;

console.log('Notas:', notasAluno1);
console.log('Faltas:', faltasAluno1);
console.log('Resultado:', calcularMediaESituacao(notasAluno1, faltasAluno1));

// Exercício 2: Refatoração de Código para Clean Code
// Instruções
// Neste exercício, você irá refatorar um trecho de código mal escrito para torná-lo mais limpo, legível e aderente às boas práticas de Clean Code. O código implementa uma função para calcular a média de notas de estudantes, o total de faltas e determinar se o aluno foi aprovado ou reprovado.
// Etapas
// Siga as etapas abaixo para refatorar o código:
// Identifique e utilize nomes de variáveis e funções mais significativos para tornar o código mais claro e expressivo.
// Extraia partes do código para funções com responsabilidades específicas, seguindo o princípio da Responsabilidade Única (SRP). Por exemplo, você pode criar funções separadas para calcular a média das notas e verificar a situação do aluno.
// Simplifique a lógica e elimine repetições desnecessárias para tornar o código mais conciso e fácil de entender.
// Comente o código para explicar a função das partes relevantes e garantir que outros desenvolvedores possam compreender facilmente a lógica implementada.
// Teste a função
// Utilize o seguinte conjunto de notas e faltas para testar a função refatorada:

// const notasAluno1 = [8, 7, 6, 9, 8];
// const faltasAluno1 = 3;
// console.log('Notas:', notasAluno1);
// console.log('Faltas:', faltasAluno1);
// console.log('Resultado:', calcularMediaENotas(notasAluno1, faltasAluno1)); // Saída esperada: { media: '7.60', situacao: 'aprovado' }
