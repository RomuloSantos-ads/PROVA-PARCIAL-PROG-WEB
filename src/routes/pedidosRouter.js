const express = require('express');
const pedidosController = require('../controllers/pedidosController');
const PedidosRouter = express.Router();


PedidosRouter.get('/pedidos', pedidosController.listarPedidos)
PedidosRouter.get('/pedidos/:id', pedidosController.buscarPorId)
PedidosRouter.post('/pedidos', pedidosController.criarPedido)
PedidosRouter.put('/pedidos', pedidosController.atualizarPedido)
PedidosRouter.delete('/pedidos', pedidosController.deletarPedido)

module.exports = PedidosRouter;