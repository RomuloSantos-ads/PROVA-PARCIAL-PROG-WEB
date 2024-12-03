const UserModel = require('../models/user');


class UserController {
    async listarUsuarios(req, res){
        try {
            const dados = await UserModel.findAll();
            return res.json(dados);
        } catch(e){
            return res.status(500).json({error: 'Erro ao listar usuarios'});
        }
    };

    async buscarPorId (req, res){
        try {
            const id = req.params.id;
            const dados = await UserModel.findByPk(id);
            return res.json(dados)
        } catch(e){
            return res.status(500).json({error: 'Erro ao Buscar Usuario por Id'});
        }
    };

    async criarUsuario (req, res) {
        try {
            const dados = req.body;
            console.log(dados);
            const resultado = await UserModel.create(dados);
            return res.json({message: 'Usuarios criado com sucesso!'});
        }catch(e){
            console.error('Erro ao criar usuário:', e);
            return res.status(500).json({error:'Ocorreu um erro ao criar usuario'});
        }
    };

    async atualizarUsuario (req, res) {
        try{
            const id = req.params.id;
            const dados = req.boby;
            const resultado = await UserModel.update(dados, {where: {id: id}
        });
            return res.json({message: 'Usuario autualizado com sucesso.'});
    } catch(e){
            return res.status(500).json({error: 'Erro ao atualizar usuario.'});

    }
};

    async deletarUsuario(req,res){
        try{
            const id = req.params.id;
            const resultado = await UserModel.destroy({where: {id: id}});
            return res.json({message: 'Usuario deletado com sucesso.'});
        }catch(e){
            return res.satatus(500).json({error: 'Erro ao atualizar usuario.'});
        }
    }

}
    
    
    
module.exports = new UserController();