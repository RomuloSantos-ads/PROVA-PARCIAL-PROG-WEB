const Categoria = require('../models/categoria');

class categoriaController {
    async listarCategorias(res,res) {
        try {
            const dados = await Categoria.findAll();
            return res.json(dados);
        }catch(e){
            return res.status(500).json({error: 'Ocorreu um erro ao listar categoria.'});
        }
    }

    async buscarPorId(req,res){
        try {
            const id = req.params.id;
            const dados = await Categoria.findByPk(id);
            return res.json(dados)
        }catch(e){
            return res.status(500).json({error: 'Ocorreu um erro ao listar categoria'});
        }
    }

    async criarCategoria (req, res){
        try{
            const dados = req.boby;
            const resultado = await Categoria.create(dados);
            return resultado.json({message: 'Categoria Criado com sucesso'});
        }catch(e){
            return res.status(500).json({error: 'Ocorreu um erro ao criar categoria'});
        }
    }

    async atualizarCategoria(req, res) {
        try {
            const id = req.params.id;
            const dados = req.boby;
            const resultado = await Categoria.update(dados, {where: {id: id}});
            return res.json({message: 'Categoria atualizada com sucesso'});
        }catch(e){
            return res.status(500).json({error: 'Ocorreu um erro ao atualizar categoria'});
        }
    }

    async deletarCategoria(req,res){
        try{
            const id = req.params.id;
            const resultado = await Categoria.destroy({where: {id: id}});
            return res.json({message: 'Categoria deletada com sucesso'});
        }catch(e){
            return res.status(500).json({error: 'Ocorreu um erro ao deletar categoria'});
        }
    }
}


module.exports = new categoriaController();