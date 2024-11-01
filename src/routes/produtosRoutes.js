const express = require('express');
const ProdutosRouter = express.Router();
//const Produtos = require('../models/produtos');//
//const rodutosController = require ('../controllers/prodrutosController');//
const ProdutosController = require('../controllers/produtosController');


ProdutosRouter.get('/produtos', ProdutosController.listarProdutos)
ProdutosRouter.get('/produtos/:id', ProdutosController.buscarPorId)
ProdutosRouter.post('/produtos', ProdutosController.criarProdutos)
ProdutosRouter.put('/produtos', ProdutosController.atualizarProdutos)
ProdutosRouter.delete('/produtos', ProdutosController.deletarProdutos)


module.exports = ProdutosRouter;