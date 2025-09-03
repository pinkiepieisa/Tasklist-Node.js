//Manipula as solicitações do usuário e atualiza o modelo 
const TarefasModel = require('../models/tarefasModel');
//Importando de models o arquivo tarefasModel

//Permite a exportação para outros arquivos
module.exports = {
    exibirLista(req, res) {
        const tarefas = TarefasModel.listar();
        //Associa uma variável a funcionalidade em model
        res.render('listaTarefas', { tarefas });
    },
    exibirAdicionarTarefa(req, res) {
        res.render('adicionarTarefa');
    },
    adicionarTarefa(req, res) {
        const novaTarefa = {
            descricao: req.body.descricao,
            concluida: false
        };
        TarefasModel.adicionar(novaTarefa);
        res.redirect('/');
    },
    exibirEdicao(req, res) {
        const { id } = req.params;
        const tarefa = TarefasModel.listar().find((t) => t.id == id);
        res.render('editaTarefa', { tarefa }); 
    },
    editarTarefa(req, res) {
        const { id } = req.params;
        TarefasModel.editar(id, req.body);
        res.redirect('/');
    },
    excluirTarefa(req, res) {
        const { id } = req.params;
        TarefasModel.excluir(id);
        res.redirect('/');
    }
};