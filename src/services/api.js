import axios from 'axios';


//URL filmes em cartaz:
//https://api.themoviedb.org/3/

//movie/now_playing &language=pt-BR&page=1

export const key = 'f576e19bb4b5bedc67bfef39b0e93759'

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3'
})

export default api;