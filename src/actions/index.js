//action creator funcion que retorna un action objeto: describe cambio que va a pasar

import { SET_FAVORITE, SET_LOADING, SET_POKEMONS } from "./types";
import {getPokemonDetails} from '../api/index';


export const setPokemons = (payload) => ({
    type: SET_POKEMONS, 
    payload,
});

//funcion que retona otra funcion 
//action creators con thunk
export const getPokemonsWithDetails =
  (pokemons = []) =>
  async (dispatch) => {
    const pokemonsDetailed = await Promise.all(
      pokemons.map((pokemon) => getPokemonDetails(pokemon))
    );

    dispatch(setPokemons(pokemonsDetailed));
  };

  //para saber si esta en tru o false
export const setLoading = (payload) => ({
    type: SET_LOADING, 
    payload,
});

export const setFavorite = (payload) => ({
  type: SET_FAVORITE, 
  payload,
});