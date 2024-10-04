const express = require('express');
const router = express.Router();
const User = require('../models/user');

router.post('/users', async (req, res) => {
    const { nome, email, idade } = req.body;
    try {
      const newUser = await User.sequelize.query(
        'INSERT INTO users (nome, email, idade) VALUES (?, ?, ?)',
        { replacements: [nome, email, idade], type: User.sequelize.QueryTypes.INSERT }
      );
      res.status(201).json({ message: 'Usuário criado com sucesso!' });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  });

  router.get('/users', async (req, res) => {
    try {
      const users = await User.sequelize.query(
        'SELECT * FROM users',
        { type: User.sequelize.QueryTypes.SELECT }
      );
      res.json(users);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  });

  router.get('/users/:id', async (req, res) => {
    const { id } = req.params;
    try {
      const user = await User.sequelize.query(
        'SELECT * FROM users WHERE id = ?',
        { replacements: [id], type: User.sequelize.QueryTypes.SELECT }
      );
      if (user.length === 0) return res.status(404).json({ error: 'Usuário não encontrado' });
      res.json(user[0]);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  });

  router.put('/users/:id', async (req, res) => {
    const { id } = req.params;
    const { nome, email, idade } = req.body;
    try {
      await User.sequelize.query(
        'UPDATE users SET nome = ?, email = ?, idade = ? WHERE id = ?',
        { replacements: [nome, email, idade, id], type: User.sequelize.QueryTypes.UPDATE }
      );
      res.json({ message: 'Usuário atualizado com sucesso!' });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }); 

  router.delete('/users/:id', async (req, res) => {
    const { id } = req.params;
    try {
      await User.sequelize.query(
        'DELETE FROM users WHERE id = ?',
        { replacements: [id], type: User.sequelize.QueryTypes.DELETE }
      );
      res.json({ message: 'Usuário excluído com sucesso!' });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  });

module.exports = router;