//O model cuida das regras de negócio e os dados da aplicação
//Banco de dados em memória
let tarefas = [
    { id: 1, descricao: "Estudar Node.js", concluida: false },
    { id: 2, descricao: "Revisar JavaScript", concluida: true },
    { id: 3, descricao: "Viu o prof Mário Hoje?", concluida: false },
    { id: 4, descricao: "Já disse que o prof Mário é legal?", concluida: false },
];
//Json, são os dados que estarão presentes na aplicação

//Funções que a ferramenta vai realizar
module.exports = { //exporta um objeto para que seja usado em outros arquivos 
    listar() {
        return tarefas; //Devolve as tarefas presentes
    },
    adicionar(tarefa) {
        tarefa.id = tarefas.length + 1; //Pega o id e adiciona mais um ao tamanho de tarefas existente
        tarefas.push(tarefa);
    },
    editar(id, dados) {
        const tarefa = tarefas.find((t) => t.id == id); //procura pelo id, vai editar o id caso ele seja igual ao que está sendo producurado
        if(tarefa) {
            tarefa.descricao = dados.descricao;
            tarefa.concluida = dados.concluida ==='on';
        }
    },
    excluir(id) {
        tarefas = tarefas.filter((t) => t.id != id);
    }
};