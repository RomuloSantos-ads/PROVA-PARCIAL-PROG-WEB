const express = require('express');
const router = express.Router();
const Produtos = require('../models/produtos');

router.post('/produtos/create', async (req, res)=>{
    const { nome, descricao, preco, estoque } = req.body;
    try {
        const newProdutos = await Produtos.sequelize.query('INSERT INTO produtos (nome, descricao, preco, estoque) VALUES (?, ?, ?, ?)', {replacements: [nome, descricao, preco, estoque], type: Produtos.sequelize.QueryTypes.INSERT});
        res.status(201).json({message: 'Produto foi criado com sucesso!'});
    } catch (error) {
        res.status(400).json({error: error.message});
    }
});

router.get('/produtos', async (req, res) => {
    try{
        const produtos = await Produtos.findAll();
        res.json(produtos);
    } catch (error){
        res.status(400).json({error: error.message});
    }
})

router.get('/produtos/:id', async (req, res) => {
    const {id} = req.params;
    try{
        const produtos = await Produtos.sequelize.query('SELECT * FROM produtos WHERE id = ?', {replacements: [id], type: Produtos.sequelize.QueryTypes.SELECT});
    if (produtos.length === 0) return res.status (404).json({error: 'Usuario não encontrado'})
            res.json(produtos[0]);
    } catch (error){
        res.status(400).json({error: error.message});
    }

});

router.put('/produtos/:id', async (req, res) => {
    const { id } = req.params;
    const { nome, descricao, preco, estoque } = req.body;
    try {
      await Produtos.sequelize.query(
        'UPDATE produtos SET nome = ?, descricao = ?, preco = ?, estoque = ?  WHERE id = ?',
        { replacements: [nome, descricao, preco, estoque, id], type: Produtos.sequelize.QueryTypes.UPDATE }
      );
      res.json({ message: 'Produto atualizado com sucesso!' });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  });

router.delete('/produtos/:id', async (req, res) => {
    const { id } = req.params;
    try {
      await Produtos.sequelize.query(
        'DELETE FROM produtos WHERE id = ?',
        { replacements: [id], type: Produtos.sequelize.QueryTypes.DELETE }
      );
      res.json({ message: 'Produto excluído com sucesso!' });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  });



module.exports = router;