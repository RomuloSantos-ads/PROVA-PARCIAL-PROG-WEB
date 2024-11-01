const express = require('express');
const UserRoutes = express.Router()
//const UserRoutes = express.UserRoutes();//
//const User = require('../models/user');//
const UserController = require('../controllers/userController')


UserRoutes.get('/usuarios', UserController.listarUsuarios)
UserRoutes.get('/usuarios/:id', UserController.buscarPorId)
UserRoutes.post('/usuarios', UserController.criarUsuario)
UserRoutes.put('/usuarios', UserController.atualizarUsuario)
UserRoutes.delete('/usuarios', UserController.deletarUsuario)



module.exports = UserRoutes;