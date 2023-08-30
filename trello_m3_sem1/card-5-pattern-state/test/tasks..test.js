//NÃO LEVAR EM CONSIDERAÇÃO ESTA PASTA QUANDO ESTIVER CORRIGINDO O TRELLO. OBRIGADA
const {
  Tarefa,
  EstadoFazer,
  EstadoProgresso,
  EstadoCompleto,
} = require('../service/tasks');

describe('Tarefa State Pattern', () => {
  it('deve exibir tarefas no estado "Fazer"', () => {
    const tarefasFazer = ['Tarefa 8', 'Tarefa 9'];
    const tarefaFazer = new Tarefa(new EstadoFazer());

    const output = tarefaFazer.mostrarTarefas(tarefasFazer);
    const expectedOutput = 'Tarefas a fazer:\nTarefa 8\nTarefa 9';
    expect(output).toEqual(expectedOutput);
  });

  it('deve exibir tarefas no estado "Em progresso"', () => {
    const tarefasEmProhresso = ['Tarefa 7'];
    const tarefaProgresso = new Tarefa(new EstadoProgresso());

    const output = tarefaProgresso.mostrarTarefas(tarefasEmProhresso);
    const expectedOutput = 'Tarefas em progresso:\nTarefa 7';
    expect(output).toEqual(expectedOutput);
  });

  it('deve exibir tarefas no estado "Completo"', () => {
    const tarefasCompletas = [
      'Tarefa 1',
      'Tarefa 2',
      'Tarefa 3',
      'Tarefa 4',
      'Tarefa 5',
      'Tarefa 6',
    ];
    const tarefaCompleta = new Tarefa(new EstadoCompleto());

    const output = tarefaCompleta.mostrarTarefas(tarefasCompletas);
    const expectedOutput = 'Tarefas concluídas:\nTarefa 1\nTarefa 2\nTarefa 3\nTarefa 4\nTarefa 5\nTarefa 6';
    expect(output).toEqual(expectedOutput);
  });
});

