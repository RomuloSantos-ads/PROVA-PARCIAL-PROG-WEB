const {Sequelize} = require ('sequelize');

const sequelize = new Sequelize('crud_db', 'root', 'fac2024', {
    host: 'localhost',
    dialect:'mysql',
});

module.exports = sequelize;