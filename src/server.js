const express = require('express');
const sequelize = require('./config/database');
const pordutosRouter = require('./routes/produtosRoutes');
const UserRoutes = require('./routes/UserRoutes');
const Connection = require('./config/database');
const PedidosRouter = require('./routes/pedidosRouter');
const RotasPublicas = require('./routes/RotasPublicas');
const RoutesPrivates = require('./routes/RotasPrivadas');
const cors = require('cors')

const app = express();

app.use(cors())

const port = 3000;
const host = 'localhost';

app.use(express.json());

app.use(RotasPublicas)
app.use(RoutesPrivates)

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