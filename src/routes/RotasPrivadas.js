const express = require('express');
const jwt = require('jsonwebtoken');
const UserRoutes = require('./UserRoutes');
const ProdutosRouter = require('./produtosRoutes');
const PedidosRouter = require('./pedidosRouter');
const userController = require('../controllers/userController');
const RoutesPrivates = express.Router();
require('dotenv').config();


RoutesPrivates.use(async (req, res, next) => {
    try{
        const token = req.headers.token || null;

        if (!token) {
            return res.status(401).json({ message: 'Token não fornecido' });
        }

        jwt.verify(token, process.env.JWT_SECRET);
        
    } catch (e){
        return res.status(500).json({message: 'Sem autorização' + e});
    }
    next();
});





RoutesPrivates.use(UserRoutes);
RoutesPrivates.use(ProdutosRouter);
RoutesPrivates.use(PedidosRouter);

module.exports = RoutesPrivates;