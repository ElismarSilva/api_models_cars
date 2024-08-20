const axios = require('axios');

axios.get('https://api-models-cars-6wyqb5q8f-elismars-projects.vercel.app/')
  .then(response => {
    console.log('Dados da API:', response.data);
  })
  .catch(error => {
    console.error('Erro ao buscar os dados da API:', error);
  });
