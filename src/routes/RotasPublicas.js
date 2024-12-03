const express = require('express');

const AuthController = require('../controllers/AuthController');
const UserController = require('../controllers/userController');
const tipoUsuarioController = require('../controllers/tipoUsuarioController');
const RoutesPublics = express.Router();
const path = require('path');
require('dotenv').config();


RoutesPublics.get('/', async (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/login.html'));
    //return res.send("Servidor backend")
});


RoutesPublics.post('/login', AuthController.login);
RoutesPublics.post('/registrar', UserController.criarUsuario);
RoutesPublics.post('/tipousuario', tipoUsuarioController.criarTipoUsuario);

module.exports = RoutesPublics;