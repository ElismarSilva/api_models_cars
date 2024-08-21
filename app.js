import axios from 'axios';

axios.get('https://api-models-cars-git-master-elismars-projects.vercel.app/')
  .then(response => {
    // Acesse o ano do modelo "Etios" dentro de "toyota"
    const dados = response.data.fiat;
    console.log(dados);
  })
  .catch(error => console.error('Erro ao buscar os dados da API:', error));
