//action creator funcion que retorna un action objeto: describe cambio que va a pasar

import { SET_POKEMONS } from "./types";

export const setPokemons = (payload) => ({
    type: SET_POKEMONS, 
    payload,
})