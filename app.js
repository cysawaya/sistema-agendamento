const express = require('express');
const app = express();
const userRoutes = require('./routes/user');

app.use(express.json());

// Rota de usuário com middleware
app.use('/user', userRoutes);

app.listen(3000, () => {
  console.log('Servidor rodando em http://localhost:3000');
});
