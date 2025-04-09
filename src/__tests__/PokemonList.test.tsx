import { fireEvent, render, screen } from '@testing-library/react';

import { PokemonList } from '@/app/components/PokemonList';

import { Pokemon } from '@/types/pokemonTypes';

jest.mock('@/app/context/TrainerContext', () => ({
  useTrainer: () => ({
    team: [],
    addPokemonToTeam: jest.fn(),
    removePokemonFromTeam: jest.fn(),
  }),
}));

const mockPokemonList: Pokemon[] = [
  {
    id: 25,
    name: 'pikachu',
    image: 'https://example.com/pikachu.png',
    type: [
      {
        type: { name: 'electric' },
        slot: 1,
      },
    ],
    url: 'https://pokeapi.co/api/v2/pokemon/25/',
  },
  {
    id: 1,
    name: 'bulbasaur',
    image: 'https://example.com/bulbasaur.png',
    type: [
      {
        type: { name: 'grass' },
        slot: 1,
      },
      {
        type: { name: 'poison' },
        slot: 2,
      },
    ],
    url: 'https://pokeapi.co/api/v2/pokemon/1/',
  },
];

describe('PokemonList', () => {
  it('renders the list of Pokemon', () => {
    render(<PokemonList pokemonList={mockPokemonList} />);
    expect(screen.getByText(/Gotta Catch 'Em All!/i)).toBeInTheDocument();
    expect(screen.getByText(/pikachu/i)).toBeInTheDocument();
    expect(screen.getByText(/bulbasaur/i)).toBeInTheDocument();
  });

  it('filters Pokemon by name', () => {
    render(<PokemonList pokemonList={mockPokemonList} />);
    const input = screen.getByPlaceholderText(/e\.g\. Pikachu or 25/i);
    fireEvent.change(input, { target: { value: 'bulba' } });

    expect(screen.getByText(/bulbasaur/i)).toBeInTheDocument();
    expect(screen.queryByText(/pikachu/i)).not.toBeInTheDocument();
  });

  it('filters Pokemon by ID', () => {
    render(<PokemonList pokemonList={mockPokemonList} />);
    const input = screen.getByPlaceholderText(/e\.g\. Pikachu or 25/i);
    fireEvent.change(input, { target: { value: '25' } });

    expect(screen.getByText(/pikachu/i)).toBeInTheDocument();
    expect(screen.queryByText(/bulbasaur/i)).not.toBeInTheDocument();
  });

  it('shows message when no Pokemon match', () => {
    render(<PokemonList pokemonList={mockPokemonList} />);
    const input = screen.getByPlaceholderText(/e\.g\. Pikachu or 25/i);
    fireEvent.change(input, { target: { value: 'doesntexist' } });

    expect(
      screen.getByText(
        /Oops! The Pokémon you looked up isn't part of the collection/i,
      ),
    ).toBeInTheDocument();
  });
});
