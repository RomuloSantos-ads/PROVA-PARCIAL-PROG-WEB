const Connection = require('../config/Connection')


require('../models/trasacoes')
require('../models/user')
require('../models/tipoPagamento')
require('../models/tipoUsuario')
require('../models/produtos')
require('../models/pedidos')
require('../models/itensPedido')
require('../models/categoria')



Connection.sync({ force: false })