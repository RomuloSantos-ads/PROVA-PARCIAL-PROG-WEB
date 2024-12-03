const UserModel = require('../models/user');
const jwt = require('jsonwebtoken')
require('dotenv').config();


class AuthController{

    async login (req, res) {
        try {
            const {email, senha} = req.body;

            const user = await UserModel.findOne({where: {email, senha}});
       
        if (user){
            const data = {
                 email,
                 senha
            }

        const token = jwt.sign(data, process.env.JWT_SECRET);
        return res.status(200).json({message:'Login realizado com sucesso', token: token});
    }
        return res.status(401).json({error: 'Usuário ou senha inválidos'});
    }
        catch (e) {
            return res.status(500).json({error: error.message});
        }
    }
};

module.exports = new AuthController();