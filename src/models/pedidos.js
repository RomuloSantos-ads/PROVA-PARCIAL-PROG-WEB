const {DataTypes} = require ('sequelize');
const Connection = require ('../config/database');


const Pedido = Connection.define(
    'Pedido', 
    {
        codigo:{
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            unique: true
        },
        data_pedido:{
            type: DataTypes.DATEONLY,
            allowNull: false
        },
        data_finalizado:{
            type: DataTypes.DATEONLY,
            allowNull: true
        },
        valor_total:{
            type: DataTypes.FLOAT,
            allowNull: false
        },
        status:{
            type: DataTypes.STRING,
            allowNull: false
        },
        id_usuario:{
            type: DataTypes.INTEGER,
            allowNull: false,
            references:{
                model: 'User',
                key:'id'
            }
        },
        id_tipo_pagamento:{
            type: DataTypes.INTEGER,
            allowNull: false,
            references:{
                model:'TipoPagamento',
                key:'id'
            }
        },
        id_trasacoes:{
            type: DataTypes.INTEGER,
            allowNull: false,
            references:{
                model: 'Transacoes',
                key: 'id'
            }
        }
    },
    {
        tableName: 'Pedido',
    }
)

module.exports = Pedido;