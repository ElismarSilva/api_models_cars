import express from 'express';
import modelos from './modelos.js';

const app = express();
const port = process.env.PORT || 3000;

// Função para obter a data e hora atuais
const dataHoraAtual = () => {
  const agora = new Date();
  return agora.toLocaleString();
};

app.get('/', (req, res) => {
  const responseData = `
    <!DOCTYPE html>
    <html>
    <head>
      <title>Modelos de Carros</title>
      <style>
        /* Estilo omitido para brevidade */
      </style>
    </head>
    <body>
      <h1>Data e Hora Atuais: ${dataHoraAtual()}</h1>
      <h2>Modelos de Carros:</h2>
      <pre>${JSON.stringify(modelos, null, 2)}</pre>
      <footer>&copy; 2024 - Relatório de Carros</footer>
    </body>
    </html>
  `;
  res.send(responseData);
});

// Nova rota para buscar carro individual por marca e modelo
app.get('/carro/:marca/:modelo', (req, res) => {
  const { marca, modelo } = req.params;
  const marcaEscolhida = modelos[marca.toLowerCase()];

  if (marcaEscolhida && marcaEscolhida[modelo.toLowerCase()]) {
    const ano = marcaEscolhida[modelo.toLowerCase()];
    res.json({ marca, modelo, ano });
  } else {
    res.status(404).json({ error: 'Carro não encontrado' });
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
