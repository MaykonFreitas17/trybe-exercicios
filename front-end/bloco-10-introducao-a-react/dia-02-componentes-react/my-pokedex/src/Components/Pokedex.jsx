import React from 'react';
import Pokemon from './Pokemon';

import Data from '../data';

class Pokedex extends React.Component {
  render() {
    return (
      <main className="pokedex">
        {
          Data.map((pokemon) => <Pokemon key={pokemon.id} pokemon={pokemon}/>)
        }
      </main>
    );
  }
}

export default Pokedex;