const express = require('express');
const sequelize = require('./config/database');
const pordutosRouter = require('./routes/produtosRoutes');
const UserRoutes = require('./routes/UserRoutes');
const Connection = require('./config/database');

const app = express();

const port = 3000;
const host = 'localhost';

app.use(express.json());
app.use(UserRoutes);
app.use(pordutosRouter);

Connection.authenticate()
  .then(() => console.log('Conectado ao banco de dados!'))
  .catch(err => console.error('Não foi possível conectar ao banco de dados:', err));

(async () => {
    await Connection.sync({ force: false }); 
    console.log("Tabelas sincronizadas!");
  })();

app.listen(port, () => {
    console.log(`servidor nodeJS executando http://${host}:${port}`)
});