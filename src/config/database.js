const {Sequelize} = require ('sequelize');

const Connection = new Sequelize({
    dialect:'mysql',
    host: 'localhost',
    username: 'root',
    password: 'fac2024',
    database: 'crud_db',
});

module.exports = Connection;