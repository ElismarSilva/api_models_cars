const express = require('express');
const modelos = require('./modelos');

const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.json(modelos);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
