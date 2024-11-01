const {DataTypes} = require('sequelize');
const Connection = require('../config/database');


const Categoria = Connection.define(
    'Categoria',
    {
        nome: { 
           type: DataTypes.STRING,
            allowNull: false
        },
        id_categoria_pai: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references:{
                model: 'Categoria',
                key:'id'
            }

        }
        
    },
    {
        tableName: 'Categoria',
    }


)

module.exports = Categoria;