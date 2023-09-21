import React from 'react';
import { render, screen } from '@testing-library/react';
import PokemonCard from './PokemonCard';

// Mock del componente ReturnButton
jest.mock('./ReturnButton', () => {
  return function MockedReturnButton() {
    return <div data-testid="mockedReturnButton"></div>;
  };
});

describe('<PokemonCard />', () => {
  const mockPokemonDetails = {
    name: 'Pikachu',
    sprites: {
      front_default: 'path-to-pikachu-image',
    },
  };

  // Prueba para verificar si el componente renderiza el nombre del Pokémon y su imagen
  it('renders the pokemon name and image', () => {
    render(<PokemonCard pokemonDetails={mockPokemonDetails} />);
    expect(screen.getByText('Pikachu')).toBeInTheDocument();
    expect(screen.getByAltText('Pikachu')).toHaveAttribute('src', 'path-to-pikachu-image');
  });

  // Prueba para verificar si el componente renderiza el botón de retorno
  it('renders the return button', () => {
    render(<PokemonCard pokemonDetails={mockPokemonDetails} />);
    expect(screen.getByTestId('mockedReturnButton')).toBeInTheDocument();
  });
});
