// Gera uma lista de filmes com o tamanho passado
export function getListMovies(size, movies) {
    let popularMovies = [];

    for(let i = 0, l = size; i < l; i++) {
        popularMovies.push(movies[i])
    }

    return popularMovies
}

// Gera um número aleatório com base no tamanho da lista de filmes passada
export function randomBanner(movies) {
    return Math.floor(Math.random() * movies.length)
}