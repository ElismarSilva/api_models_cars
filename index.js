import express from 'express';
import modelos from './modelos.js';

const app = express();
const port = process.env.PORT || 3000;

// Função para obter a data e hora atuais em formato legível
const dataHoraAtual = () => {
  const agora = new Date();
  return agora.toLocaleString();
};

app.get('/', (req, res) => {
  // Cria a página HTML com a data/hora e o JSON estilizados
  const responseData = `
    <!DOCTYPE html>
    <html>
    <head>
      <title>Modelos de Carros</title>
      <style>
        body {
          font-family: Arial, sans-serif;
          margin: 20px;
          background-color: #f0f8ff;
          color: #333;
        }
        h1 {
          font-size: 28px;
          color: #2c3e50;
          text-align: center;
          margin-bottom: 30px;
        }
        h2 {
          font-size: 24px;
          color: #16a085;
          margin-bottom: 10px;
        }
        pre {
          background-color: #ecf0f1;
          color: #2c3e50;
          padding: 15px;
          border-radius: 8px;
          border: 2px solid #3498db;
          overflow-x: auto;
          box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);
        }
        footer {
          text-align: center;
          margin-top: 50px;
          font-size: 14px;
          color: #95a5a6;
        }
      </style>
    </head>
    <body>
      <h1>Data e Hora Atuais: ${dataHoraAtual()}</h1>
      <h2>Modelos de Carros:</h2>
      <pre>${JSON.stringify(modelos, null, 2)}</pre>
      <footer>&copy; 2024 - Elismar Silva</footer>
    </body>
    </html>
  `;
  
  res.send(responseData);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
