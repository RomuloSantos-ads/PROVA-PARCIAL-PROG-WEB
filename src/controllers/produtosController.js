const Produtos = require('../models/produtos');


class ProdutosController {

    async listarProdutos(req, res){
        try {
            const dados = await Produtos.findAll();
            return res.json(dados);
        }catch(e){
            return res.status(500).json({error: 'Ocorreu um erro ao listar os produtos'});
        }
    }

    async buscarPorId(req, res){
        try{
            const id = req.params.id;
            const dados = await Produtos.findByPk(id);
        }catch(e){
            return res.status(500).json({error: 'Ocorreu um erro ao listar o produto'});
        }
    }

    async criarProdutos(req, res){
        try{
            const dados = req.boby;
            const resultado = await Produtos.create(dados);
            return res.json({message: 'Usuario criado com sucesso'})
        }catch(e){
            return res.status(500).json({error: 'Ocorreu um erro ao criar o produto'});
        }
    }

    async atualizarProdutos(req,res){
        try{
            const id = req.params.id;
            const dados = req.boby;
            const resultado = await Produtos.update(dados, { where: { id: id}});
            return res.json({message: 'Usuario atualizado com sucesso'});
        }catch(e){
            return res.status(500).json({error: 'Ocorreu um erro ao atualizar o produto'})
        }
    }

    async deletarProdutos(req, res){
        try{
            const id = req.params.id;
            const resultado = await Produtos.destroy({where: {id: id}});
            return res.json({message: 'usuario deletado com sucesso'});
        }catch(e){
            return res.status(500).json({error: 'Ocorreu um erro ao deletar usuário'})
        }
    }
}

module.exports = new ProdutosController();