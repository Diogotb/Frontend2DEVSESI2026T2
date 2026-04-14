// estruturação do controller => realiza a interação entre o model e view

export class TarefaController{
    constructor(model, view) {
        this.model = model;
        this.view = view;
    }

    init(){
        this.view.addTarefaBtn.addEventListener("click", 
            (event) => {
                event.preventDefault();
                this.metodoAddTarefa();
            });

        this.atualizarTela();
    }

    //criar os métodos

    metodoAddTarefa(){
        const titulo = this.view.getTarefaInputValue(); //pega o valor do input a atribui a uma variavel titulo

        //verificar se titulo não é vazio
        if(titulo===""){
            this.view.showMensagem("Digite uma tarefa antes de adicionar...");
            return; // se a titulo estiver vazio interrompe o método
        }

        //se o titulo não estiver vazio pula o if e continua o codigo
        this.view.clearMensagem();
        this.model.addTarefa(titulo);
        this.view.clearInput();
        this.atualizarTela();

    }

    modificarTarefa(id){
        this.model.atualizarTarefa(id);
        this.atualizarTela();

    }

    removeTarefa(id){
        this.model.removeTarefa(id);
        this.atualizarTela();

    }

    atualizarTela(){
        //renderização da tela
        this.view.renderTarefa(
            this.model.getTarefas(),
            (id) => this.modificarTarefa(id),
            (id) => this.removeTarefa(id)
        );
    }


}