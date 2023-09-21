import React from 'react';
import { render, screen } from '@testing-library/react';
import PokemonList from './PokemonList';
import axios from 'axios';
import { MemoryRouter } from 'react-router-dom';

// Mock the axios call
jest.mock('axios');

describe('PokemonList', () => {
  it('renders the pokemon names', async () => {
    // Mock data for our test
    const mockData = {
      data: {
        results: [
          { name: 'bulbasaur' },
          { name: 'ivysaur' }
        ]
      }
    };

    // Mocking the axios call to return our mock data
    axios.get.mockResolvedValueOnce(mockData);

    // Rendering the component
    render(<MemoryRouter><PokemonList /></MemoryRouter>);

    // Checking if pokemon names are rendered
    const bulbasaurElement = await screen.findByText('bulbasaur');
    const ivysaurElement = await screen.findByText('ivysaur');

    expect(bulbasaurElement).toBeInTheDocument();
    expect(ivysaurElement).toBeInTheDocument();
  });

  it('calls the API correctly', async () => {
    // Mock data for our test
    const mockData = {
      data: {
        results: []
      }
    };

    // Mocking the axios call to return our mock data
    axios.get.mockResolvedValueOnce(mockData);

    // Rendering the component
    render(<MemoryRouter><PokemonList /></MemoryRouter>);

    // Wait for any element from the component to ensure it's fully loaded. 
    // Here, just waiting for the list to be present, even if empty.
    await screen.findByRole('list');

    // Checking if the axios GET request was called with the correct URL
    expect(axios.get).toHaveBeenCalledWith('https://pokeapi.co/api/v2/pokemon?limit=100');
  });
});
