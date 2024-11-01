const {DataTypes} = require('sequelize');
const Connection = require('../config/database');

const ItensPedido = Connection.define(
    'ItensPedido',
    {
        quatidade:{
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        valor:{
            type: DataTypes.FLOAT,
            allowNull:false,
        },
        id_pedido:{
            type: DataTypes.INTEGER,
            allowNull:false,
            references:{
                model: 'Pedido',
                key: 'id'
            }
        },
        id_produto:{
            type:DataTypes.INTEGER,
            allowNull:false,
            references:{
                model: 'Produtos',
                key: 'id'
            }
        }
    },
    {
        tableName: 'ItensPedido',
    }
)

module.exports = ItensPedido;