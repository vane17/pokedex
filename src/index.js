import React from 'react';
import ReactDOM from 'react-dom/client';
import {pokemonsReducer} from './reducers/pokemons';
import { Provider } from 'react-redux';
import { applyMiddleware,
  compose,
  legacy_createStore as createStore } from 'redux';
import {featuring, logger} from './middlewares/index';
import App from './App';
import './index.css';



const root = ReactDOM.createRoot(document.getElementById('root'));

const composeEnharces = compose( window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
applyMiddleware(logger, featuring) ); //se pasa los enhancer 


const store = createStore(
  pokemonsReducer,
  composeEnharces,
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
   
  </React.StrictMode>
);


