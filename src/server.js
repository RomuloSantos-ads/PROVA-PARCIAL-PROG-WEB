const express = require('express');
const sequelize = require('./config/database');
const userRoutes = require('./routes/userRoutes');
const pordutosRouter = require('./routes/produtosRoutes')

const app = express();

const port = 3000;
const host = 'localhost';

app.use(express.json());
app.use(userRoutes);
app.use(pordutosRouter);

sequelize.authenticate()
  .then(() => console.log('Conectado ao banco de dados!'))
  .catch(err => console.error('Não foi possível conectar ao banco de dados:', err));

(async () => {
    await sequelize.sync({ force: false }); 
    console.log("Tabelas sincronizadas!");
  })();

app.listen(port, () => {
    console.log(`servidor nodeJS executando http://${host}:${port}`)
});