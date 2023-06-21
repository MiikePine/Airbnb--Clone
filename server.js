const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 4020;

// Servir arquivos estáticos do diretório de compilação do React
app.use(express.static(path.join(__dirname, 'build')));

// Rota padrão para renderizar o aplicativo React
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// Iniciar o servidor
app.listen(port, () => {
  console.log(`Servidor iniciado na porta ${port}`);
});