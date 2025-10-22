const express = require('express');
const router = express.Router();
const authMiddleware = require('../middlewares/auth');

router.get('/profile', authMiddleware, (req, res) => {
  res.json({ user: "João da Silva", idade: 30 });
});
