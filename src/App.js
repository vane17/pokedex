import { useEffect } from 'react';
import {useSelector, useDispatch} from 'react-redux';

import { PokemonList } from './components/PokemonList';
import {getPokemon} from './api/index.js';
import {setPokemons} from './actions/index'; //as cambia el nombre 

import {Searcher} from './components/Searcher';
import { Col } from 'antd'; // para manejar el grid 

import logo from './statics/logo.svg';
import './App.css';



function App() {

  const pokemons = useSelector(state => state.pokemons);
  const dispatch = useDispatch();
 
  useEffect(() => {
    const fetchPokemons = async () => {
      const pokemonsRes = await getPokemon();
      dispatch(setPokemons(pokemonsRes));
    };
    fetchPokemons();
  },[]);

  return (
    <div className="App">
      <Col span={4} offset={10}>
        <img src={logo} alt="pokendux"/>
      </Col>
      <Col span={8} offset={8}> {/*Hasta donde se expande es 16 8 sea centrado y offset hasta donde se expande*/}
        <Searcher />
      </Col>
      <PokemonList pokemons = {pokemons}/>

      
      
    </div>
  );
}


export default (App);
