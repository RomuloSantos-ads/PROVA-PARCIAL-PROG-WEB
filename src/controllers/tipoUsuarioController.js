const TipoUsuario = require("../models/tipoUsuario");


class tipoUsuarioController {
    async listarTipoUsuario(req, res){
        try {
            const dados = await TipoUsuario.findAll();
            return res.json(dados);
        }catch (e) {
            return res.status(500).json({ error: 'Ocorreu um erro ao listar os tipos de Usuário.' });
        }
    };

    async buscarPorId(req, res){
        try {
            const id = req.params.id;
            const dados = await TipoUsuario.findByPk(id);
            return res.json(dados);
        }catch (e) {
            return res.status(500).json({ error: 'Ocorreu um erro ao buscar o tipo de Usuário pelo ID.' });
        }
    };

    async criarTipoUsuario(req, res){
        try{
            const dados = req.body;
            const resultado = await TipoUsuario.create(dados);
            return res.status(201).json({ message: 'Tipo de Usuário criado com sucesso!' });
        }catch (e) {
            return res.status(500).json({ error: 'Ocorreu um erro ao criar o tipo de Usuário.' });
        }
    };

    async atualizarTipoUsuario(req, res){
        try{
            const id = req.params.id;
            const dados = req.boby;
            const resultado = await TipoUsuario.update(dados, {where: {id: id}});
            return res.json({message: 'Tipo de Usuário atualizado com sucesso'})
        }catch (e) {
            return res.status(500).json({ error: 'Ocorreu um erro ao atualizar o tipo de Usuário.' });
        }
    };

    async deletarTipoUsuario(req, res){
        try {
            const id = req.params.id;
            const resultado = await TipoUsuario.destroy({where: {id: id}})
            return res.json({message: 'Tipo de Usuário deletado com sucesso'});
        }catch (e){
            return res.status(500).json({ error: 'Ocorreu um erro ao deletar o tipo de Usuário.' });
        }
    
    }

};

module.exports = new tipoUsuarioController();