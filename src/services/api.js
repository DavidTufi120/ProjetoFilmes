import axios from 'axios';



// Base da URL :  https://api.themoviedb.org/3/

//URL da Api: /movie/now_playing?api_key=e7106c79a96105a90f0789f2be00d9de

const api = axios.create({
  baseURL:  'https://api.themoviedb.org/3/'
});

export default api;