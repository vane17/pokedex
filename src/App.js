import { useEffect } from 'react';
import {useSelector, useDispatch} from 'react-redux';

import { PokemonList } from './components/PokemonList';
import {getPokemon} from './api/index.js';

import {getPokemonsWithDetails, setLoading} from './actions/index'; //as cambia el nombre 

import {Searcher} from './components/Searcher';
import { Col, Spin } from 'antd'; // para manejar el grid 

import logo from './statics/logo.svg';
import './App.css';



function App() {

  const pokemons = useSelector(state => state.pokemons);
  const loading = useSelector(state => state.loading)// retorna la propiedad del estado a la que se quiere acceder
  const dispatch = useDispatch();
 
  useEffect(() => {
    const fetchPokemons = async () => {
      dispatch(setLoading(true));

      setTimeout(async() => {
      
        const pokemonsRes = await getPokemon();
        dispatch(getPokemonsWithDetails(pokemonsRes));
        dispatch(setLoading(false))
        
      },2000)
      

     
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

      {loading ? <Col offset={12} >
        <Spin spinning size='large'/>
      </Col> : <PokemonList pokemons = {pokemons}/>}
      
      
      

      
      
    </div>
  );
}


export default (App);
