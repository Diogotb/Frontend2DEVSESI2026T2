// base da estrutura do aplicativo
// é classe resposável pela modelagem de dados 

//sera utilizada em outras partes do código
//classe exportável
export class TarefaModel{
    //construtor da classe de tarefas
    constructor(){
        this.tarefas = [];
        this.currtentId = 1
    }

    //métodos
    addTarefa(titulo){
        const newTarefa = {
            id: this.currtentId++,
            titulo: titulo,
            completed: false
        }; // coleção
        this.tarefas.push(newTarefa); //adicionando a tarefa ao vetor
    }

    getTarefas(){
        return this.tarefas;
    } //busca todas as tarefas do vetor

    atualizarTarefa(id){
        const tarefa = this.tarefas.find(tarefa => tarefa.id === id);
        if(tarefa){ //se tarefa for encontrada
            tarefa.completed = !this.tarefas.completed; //inverte o valor da booleana
        }
    }

    removeTarefa(id){
        this.tarefas = this.tarefas.filter(tarefa => tarefa.id !== id);
        //estou reescrevendo o vetor sem a tarefa do id selecionada
    }


}

// o que foi Feito
// criamos a lista de tarefas
// gera um id automatico para a tarefa
// adiciona tarefa
// busca as tarefas do vetor
// altera a tarefa
// remove a tarefa