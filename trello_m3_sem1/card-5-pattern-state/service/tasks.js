class EstadoTarefas {
  mostrarTarefas(tarefas) {}
}

class EstadoFazer extends EstadoTarefas {
  mostrarTarefas(tarefas) {
    //tarefas a fazer
    return `Tarefas a fazer:\n${tarefas.join('\n')}`;
  }
}

class EstadoProgresso extends EstadoTarefas {
  mostrarTarefas(tarefas) {
    //tarefa em progresso
    return `Tarefas em progresso:\n${tarefas.join('\n')}`;
  }
}

class EstadoCompleto extends EstadoTarefas {
  mostrarTarefas(tarefas) {
    //tarefas  completas
    return `Tarefas concluídas:\n${tarefas.join('\n')}`;
  }
}

class Tarefa {
  constructor(estado) {
    this.estado = estado;
  }

  setEstado(estado) {
    this.estado = estado;
  }

  mostrarTarefas(tarefas) {
    return this.estado.mostrarTarefas(tarefas);
  }
}

const tarefasFazer = ['Tarefa 8', 'Tarefa 9'];
const tarefasProgresso = ['Tarefa 7'];
const tarefasCompleto = [
  'Tarefa 1',
  'Tarefa 2',
  'Tarefa 3',
  'Tarefa 4',
  'Tarefa 5',
  'Tarefa 6',
];

const tarefaFazer = new Tarefa(new EstadoFazer());
const tarefaProgresso = new Tarefa(new EstadoProgresso());
const tarefaCompleto = new Tarefa(new EstadoCompleto());

console.log(tarefaFazer.mostrarTarefas(tarefasFazer),);
console.log(tarefaProgresso.mostrarTarefas(tarefasProgresso));
console.log(tarefaCompleto.mostrarTarefas(tarefasCompleto));

module.exports = {
  Tarefa,
  EstadoFazer,
  EstadoProgresso,
  EstadoCompleto,
};
