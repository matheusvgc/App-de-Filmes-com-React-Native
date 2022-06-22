import AsyncStorage from "@react-native-async-storage/async-storage";

//Buscando os filmes salvos
export async function getMoviesSave( key ) {
    const myMovies = await AsyncStorage.getItem(key)

    let moviesSave = JSON.parse(myMovies) || [];
    return moviesSave;
}

//Salvando um novo filme
export async function saveMovie( key, newMovie ) {
    let moviesStored = await getMoviesSave(key)

    const hasMovie = moviesStored.some( item => item.id === newMovie.id)

    if(hasMovie){
        console.log('Filme já está salvo')
        return;
    }

    moviesStored.push(newMovie);

    await AsyncStorage.setItem(key, JSON.stringify(moviesStored))
    console.log('Filme salvo com sucesso!')
}

//Deletando um filme específico
export async function deleteMovie(id) {
    let moviesStored = await getMoviesSave('@prime-react');

    let myMovies = moviesStored.filter( item => {
        return (item.id !== id)
    })

    await AsyncStorage.setItem('@prime-react', JSON.stringify(myMovies));
    console.log('Filme deletado');
    return myMovies;
}


//Filtrar se algum filme já estava salvo
export async function hasMovie(movie) {
    let moviesStored = await getMoviesSave('@prime-react');

    const hasMovie = moviesStored.find( item => item.id === movie.id )

    if(hasMovie) {
        return true;
    } else {
        return false;
    }

}