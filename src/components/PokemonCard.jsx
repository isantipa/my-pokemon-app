import React from 'react';
import PropTypes from 'prop-types';
import ReturnButton from './ReturnButton';

function PokemonCard({ pokemonDetails }) {
  return (
    <div className='pokemon-container'>
      <div className='card-container'>
        <h2>{pokemonDetails.name}</h2>
          <img src={pokemonDetails.sprites.front_default} alt={pokemonDetails.name} />
      </div>
      <ReturnButton />
    </div>
  );
}
/*We define the prop-types and their shape to indicate what we expect to receive as props.*/
PokemonCard.propTypes = {
  pokemonDetails: PropTypes.shape({
    name: PropTypes.string,
    sprites: PropTypes.shape({
      front_default: PropTypes.string,
    }),
  }).isRequired,
};

export default PokemonCard;