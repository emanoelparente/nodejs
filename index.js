const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Rota de teste
app.get('/', (req, res) => {
  res.send('Olá, manel!');
});

// Inicia o servidor
app.listen(PORT, () => {
  console.log(`Servidor está rodando na porta ${PORT}`);
});
