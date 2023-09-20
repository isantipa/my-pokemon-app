import React from "react";
import PokemonList from '../components/PokemonList';
import GridViewToggle from '../components/GridViewToggle';
import Footer from '../components/Footer';

function Home() {
  return (
    <div className='home-container'>
      <div className='home-header'>
        <h1>Pokemon List:</h1>
        <GridViewToggle />
      </div>
      <PokemonList />
      <Footer />
    </div>
  );
}

export default Home;