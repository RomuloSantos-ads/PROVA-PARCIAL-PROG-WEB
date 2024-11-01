const {DataTypes} = require('sequelize');
const Connection = require('../config/database');
const Categoria = require('./categoria');

const Produtos = Connection.define(
    'Produtos', {

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
    id_categoria:{
        type: DataTypes.INTEGER,
        allowNull:false,
        references:{
            model: Categoria,
            key: 'id'
        }
    }
   }, 
    {
        timestamps: false,
        tableName: 'Produtos'
    }
);

module.exports = Produtos;