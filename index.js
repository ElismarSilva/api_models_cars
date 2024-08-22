import express from 'express';
import modelos from './modelos.js';

const app = express();
const port = process.env.PORT || 3000;

// Função para gerar a data e hora atual formatada
function dataHoraAtual() {
  return new Date().toLocaleString();
}

app.get('/', (req, res) => {
  // Cria o objeto com a data/hora e os modelos
  const responseData = {
    dataHora: dataHoraAtual(),
  };
  
  res.json(responseData);  // Envia JSON sem HTML
  res.json(modelos);

});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
