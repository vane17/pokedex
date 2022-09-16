import axios from 'axios';

const API_URL = 'https://pokeapi.co/api/v2/pokemon?limit=151';
const getPokemon = () => {
    return axios.get(API_URL)
        //.then((response) => console.log(response.data.results))
        .then((response) => response.data.results)
        .catch((error) => console.error(error));
}



const getPokemonDetails = (pokemon) => {
    return axios.get(pokemon.url)
        //.then((response) => console.log(response.data.results))
        .then((response) => response.data)
        .catch((error) => console.error(error));
}


export {getPokemon, getPokemonDetails};