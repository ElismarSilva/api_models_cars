import express from 'express';
import modelos from './modelos.js';

const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  // Adiciona a data e hora atuais junto com os modelos
  const responseData = {
    dataHora: modelos.dataHoraAtual(),
    modelos: modelos
  };
  
  res.json(responseData);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
