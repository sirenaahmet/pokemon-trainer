'use client';
import { useState } from 'react';

import { PokemonCard } from '@/app/components/PokemonCard';
type Pokemon = {
  id: number;
  name: string;
  url: string;
};

type PokemonListProps = {
  pokemonList: Pokemon[];
};

export function PokemonList({ pokemonList }: PokemonListProps) {
  const [searchText, setSearchText] = useState('');

  const searchFilter = (pokemonList: Pokemon[]) => {
    return pokemonList.filter((pokemon: Pokemon) => {
      const nameMatch = pokemon.name
        .toLowerCase()
        .includes(searchText.toLowerCase());
      const idMatch =
        pokemon.url.split('/').filter(Boolean).pop() === searchText;
      return nameMatch || idMatch;
    });
  };

  const filteredPokeList = searchFilter(pokemonList);

  return (
    <>
      <div className='flex flex-col items-center justify-start min-h-screen py-10 px-4'>
        <div className='w-full max-w-2xl bg-white bg-opacity-80 rounded-xl p-6 shadow-xl'>
          <h3 className='text-4xl font-bold text-center text-orange-600 mb-6'>
            Search and view your favorite Pokémon
          </h3>
          <div className='flex flex-col sm:flex-row items-center justify-center gap-4'>
            <label
              htmlFor='pokemonName'
              className='text-lg font-medium text-gray-800'
            >
              Pokémon Name / ID
            </label>
            <input
              type='text'
              value={searchText}
              id='pokemonName'
              placeholder='e.g. Squirtle or ID'
              onChange={(e) => setSearchText(e.target.value)}
              className='bg-[#FFF4E5] border-2 border-[#FF5A00] px-4 py-2 rounded-md text-lg w-full sm:w-80 shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-300'
            />
          </div>
        </div>

        <h3 className='text-3xl font-bold text-white mt-16 mb-8 text-center'>
          Pokémon Collection
        </h3>
        <div className='grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-full max-w-6xl px-4'>
          {filteredPokeList.map((pokemon: Pokemon) => {
            return <PokemonCard key={pokemon.id} name={pokemon.name} />;
          })}
        </div>
      </div>
    </>
  );
}
