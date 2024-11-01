const {DataTypes} = require('sequelize');
const Connection = require('../config/database');

const TipoPagamento = Connection.define(
    'TipoPagamento',
    {
        nome:{
            type: DataTypes.STRING,
            allowNull: false
        }
    
    },
    {
        tableName: 'TipoPagamento',
    }

)

module.exports = TipoPagamento;