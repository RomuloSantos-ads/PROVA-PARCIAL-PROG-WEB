const {DataTypes} = require('sequelize');
const sequelize = require('../config/database');

const Produtos = sequelize.define('Produtos', {
    nome:{
        type: DataTypes.STRING,
        allowNull: false
    },
    descricao:{
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    preco:{
        type: DataTypes.FLOAT,
        allowNull: false
    },
    estoque:{
        type: DataTypes.INTEGER,
        allowNull:false
    },
   }, {
        timestamps: false,
        tableName: 'Produtos'
});

module.exports = Produtos;