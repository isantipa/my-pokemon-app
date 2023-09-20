import React from 'react';
import { useEffect, useState, useContext } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';
import { ViewModeContext } from '../context/ViewModeContext';
import Pagination from '../components/Pagination'

function PokemonList() {
  const [pokemonList, setPokemonList] = useState([]);
  const { viewMode } = useContext(ViewModeContext);
  const navigate = useNavigate();
  const location = useLocation();
  
  // Setting the current page from the query parameters in the URL
  const [currentPage, setCurrentPage] = useState(() => {
    const queryParams = new URLSearchParams(location.search);
    return parseInt(queryParams.get('page')) || 1;
  });

  const itemsPerPage = 20;

  // Fetch the list of Pokémon from the API
  useEffect(() => {
    const fetchPokemons = async () => {
      try {
        const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=100');
        setPokemonList(response.data.results);
      } catch (error) {
        console.error('Error fetching the pokemon list', error);
      }
    };

    fetchPokemons();
  }, []);

  // Watch for changes in the query parameters to update the current page
  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const page = parseInt(queryParams.get('page'));
    if (page) {
      setCurrentPage(page);
    }
  }, [location]);

  // Update the URL with the current page when it changes
  useEffect(() => {
    navigate(`?page=${currentPage}`, { replace: true, state: { currentPage } });
  }, [currentPage, navigate]);

  const numberOfPages = Math.ceil(pokemonList.length / itemsPerPage);
  const pokemonsToShow = pokemonList.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  return (
    <div>
      <ul className={viewMode === 'list' ? 'list-view' : 'grid-view'}>
        {pokemonsToShow.map((pokemon, index) => {
          const pokemonId = (currentPage - 1) * itemsPerPage + index + 1;
          return (
            <li key={pokemonId}>
              <Link to={`/pokemon/${pokemonId}`}>
                {pokemon.name}
              </Link>
            </li>
          );
        })}
      </ul>
      <Pagination 
        currentPage={currentPage} 
        numberOfPages={numberOfPages} 
        onPageChange={setCurrentPage} 
      />
    </div>
  );
}

export default PokemonList;