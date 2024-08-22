import axios from 'axios'

axios.get('https://api-models-cars-git-master-elismars-projects.vercel.app/') 

.then(response => {

    const dados = response.data.toyota;
  console.log(dados);
});
