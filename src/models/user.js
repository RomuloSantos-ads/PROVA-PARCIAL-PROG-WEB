const {DataTypes} = require('sequelize');
const Connection = require('../config/database');
const TipoUsuario = require('./tipoUsuario');


const User = Connection.define(
    'User', {

    nome:{
        type: DataTypes.STRING,
        allowNull: false
    },
    email:{
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    cpf:{
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    data_nascimento:{
        type: DataTypes.DATEONLY,
        allowNull: false
    },
    genero:{
        type:DataTypes.STRING,
        allowNull: false
    },
    tipo_usuario_id:{
        type: DataTypes.INTEGER,
        allowNull: false,
        references:{
            model: TipoUsuario,
            key: 'id'
        }  
    },
    senha: {
        type: DataTypes.STRING,
        allowNull: false,
    }
   }, 
   {
    tableName: 'User',
   
       
});


module.exports = User;