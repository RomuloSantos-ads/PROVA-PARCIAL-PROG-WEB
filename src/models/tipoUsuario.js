const {DataTypes} = require ('sequelize');
const Connection = require ('../config/database');


const TipoUsuario = Connection.define(
    'TipoUsuario', 
    {
        nome: { 
           type: DataTypes.STRING,
            allowNull: false
        }
    },
    {
        tableName: 'TipoUsuario',
    }
);


module.exports = TipoUsuario;