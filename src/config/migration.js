const Connection = require('config/batabase');


require('../models/tracacoes');
require('../models/user');
require('../models/tipoPagamento');
require('../models/tipoUsuario');
require('../models/produtos');
require('../models/pedidos');
require('../models/itensPedido');
require('../models/categoria');



Connection.sync({ force: true });