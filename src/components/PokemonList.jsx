import React from 'react';
import {PokemonCard} from './PokemonCard';
import './PokemonList.css';

const PokemonList = ({pokemons}) => {
  console.log(pokemons)

  return (
    <div className='PokemonList'>
        {pokemons.map((pokemon) => {
            return (<PokemonCard name = {pokemon.name} key={pokemon.name}/>)
        })}
    </div>
  )
}

PokemonList.defaultProps = {
    pokemons: Array(10).fill(''), //['','',...] 10 posiciones
}

export  {PokemonList}