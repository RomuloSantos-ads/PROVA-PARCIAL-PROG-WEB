const Pedido = require('../models/pedidos');


class pedidosController {
    async listarPedidos(req,res){
        try {
            const dados  = await Pedido.findAll();
            return res.json(dados)
        }catch (e) {
            return res.status(500).json({error: 'Ocorreu um erro ao listar os pedidos.'});
        }
    };

    async buscarPorId(req,res){
        try {
            const id = req.params.id;
            const dados = await Pedido.findByPk(id);
            return res.json(dados)
        }catch (e){
            return res.status(500).json({error: 'Ocorreu um erro ao listar o pedido.'});
        }       
    };

    async criarPedido(req,res){
        try {
            const dados = req.boby;
            const resultado = await Pedido.create(dados);
            return res.json({message: 'Pedido criado com sucesso'});
        }catch (e){
            return res.status(500).json({error: 'Ocorreu um erro ao criar o pedido.'});
        }
    };

    async atualizarPedido(req,res){
        try {
            const id = req.params.id;
            const dados = req.boby;
            const resultado = await Pedido.update(dados, {where: {id: id}});
            return res.json({message: 'Pedido atualizado com sucesso'});
        }catch(e){
            return res.status(500).json({error: 'Ocorreu um erro ao atualizar o pedido.'});
        }
    };

    async deletarPedido(req, res){
        try{
            const id = req.params.id;
            const resultado = await Pedido.destroy({where: {id: id}});
            return res.json({message: 'Pedido deletado com sucesso'});
        }catch(e){
            return res.status(500).json({error: 'Ocorreu um erro ao deletar o pedido.'});
        }
    };

};


module.exports = new pedidosController();