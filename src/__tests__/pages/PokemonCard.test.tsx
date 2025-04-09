import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import { PokemonCard } from '@/app/components/PokemonCard';
import { useTrainer } from '@/app/context/TrainerContext';

jest.mock('@/app/context/TrainerContext', () => ({
  useTrainer: jest.fn(),
}));

const mockAddPokemon = jest.fn();
const mockRemovePokemon = jest.fn();

const mockPokemon = {
  id: 1,
  name: 'bulbasaur',
  image:
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png',
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
};

describe('PokemonCard', () => {
  it('renders the Pokemon card with its basic data', () => {
    (useTrainer as jest.Mock).mockReturnValue({
      team: [],
      addPokemonToTeam: mockAddPokemon,
      removePokemonFromTeam: mockRemovePokemon,
    });

    render(<PokemonCard {...mockPokemon} />);

    expect(screen.getByText(/bulbasaur/i)).toBeInTheDocument();
    expect(screen.getByText(/grass/i)).toBeInTheDocument();
    expect(screen.getByText(/poison/i)).toBeInTheDocument();
  });

  it('adds the Pokemon to the team when not in team', () => {
    (useTrainer as jest.Mock).mockReturnValue({
      team: [],
      addPokemonToTeam: mockAddPokemon,
      removePokemonFromTeam: mockRemovePokemon,
    });

    render(<PokemonCard {...mockPokemon} />);
    const button = screen.getByRole('button');

    fireEvent.click(button);
    expect(mockAddPokemon).toHaveBeenCalledWith({
      id: 1,
      name: 'bulbasaur',
      type: mockPokemon.type,
      image: mockPokemon.image,
    });
  });

  it('removes the Pokemon from the team when in team', () => {
    (useTrainer as jest.Mock).mockReturnValue({
      team: [{ name: 'bulbasaur' }],
      addPokemonToTeam: mockAddPokemon,
      removePokemonFromTeam: mockRemovePokemon,
    });

    render(<PokemonCard {...mockPokemon} />);
    const button = screen.getByRole('button');

    fireEvent.click(button);
    expect(mockRemovePokemon).toHaveBeenCalledWith({
      id: 1,
      name: 'bulbasaur',
      type: mockPokemon.type,
      image: mockPokemon.image,
    });
  });
});
