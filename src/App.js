import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import About from './pages/About';
import NotFound from './pages/NotFound';
import Pokedex from './Pokedex';
import './App.css';
import pokemons from './data';

function App() {
  return (
    <main>
    <nav className='navBar'>
<Link to='/'>Pokedéx</Link>
<Link to='/about'>About Pokedéx</Link>
    </nav>
    <Switch>
        <Route
          exact
          path="/"
          render={() => <Pokedex pokemons={pokemons} /> }
        />
        <Route
          path="/pokemons/:id"
        />
        <Route path="/about" component={About} />
        <Route component={NotFound} />
      </Switch>
      </main>
  );
}

export default App;