const TipoPagamento = require("../models/tipoPagamento");


class tipoPagamentoController {
    async criarTipoPagamento(req, res){
        try {
            const dados = await TipoPagamento.create(req.body);
            return res.json(dados);
        } catch(e){
            return res.status(500).json({error: 'Erro ao cadastrar tipo de pagamento'});
        }
    };

}

module.exports = new tipoPagamentoController();