import React from "react";
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import PokemonCard from '../components/PokemonCard';

function PokemonPage() {
  const { id } = useParams();
  const [pokemonDetails, setPokemonDetails] = useState(null);

  useEffect(() => {
    const fetchPokemonDetails = async () => {
      try {
        /*use Axios over Fetch because it automatically handles HTTP errors and is more readable.*/
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
        setPokemonDetails(response.data);
      } catch (error) {
        console.error('Error fetching the pokemon details', error);
      }
    };

    fetchPokemonDetails();
  }, [id]);

  if (!pokemonDetails) return <div>Loading...</div>;

  return (
    <div>
      <PokemonCard pokemonDetails={pokemonDetails} />
    </div>
  );
}

export default PokemonPage;