const {DataTypes} = require ('sequelize');
const Connection = require ('../config/database');


const Transacoes = Connection.define(
    'Transacoes',
    {
        codigoTransacao:{
            type: DataTypes.INTEGER,
            allowNull: false
        },
        dataTransacao: {
            type: DataTypes.DATEONLY,
            allowNull: false
        },
        statusTransacao:{
            type: DataTypes.STRING,
            allowNull: false
        },
        valorTrasacao:{
            type: DataTypes.FLOAT,
            allowNull: false
        },
    },
    {
        tableName: 'Trasacoes',
    }
)

module.exports = Transacoes;