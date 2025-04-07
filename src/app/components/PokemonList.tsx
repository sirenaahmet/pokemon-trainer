'use client';
import { useState } from 'react';

import { PokeStats, PokeType } from '@/app/[pokemon]/page';
import { PokemonCard } from '@/app/components/PokemonCard';

export type Pokemon = {
  id: number;
  name: string;
  image: string;
  type: PokeType[];
};

export type PokemonExtraFeatures = Pokemon & {
  url: string;
  sprites: {
    front_default: string;
  };
  weight: number;
  stats: PokeStats[];
};

type PokemonListProps = {
  pokemonList: PokemonExtraFeatures[];
};

export function PokemonList({ pokemonList }: PokemonListProps) {
  const [searchText, setSearchText] = useState('');

  const searchFilter = (pokemonList: PokemonExtraFeatures[]) => {
    return pokemonList.filter((pokemon: PokemonExtraFeatures) => {
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
      <div className='flex flex-col items-center justify-start min-h-screen py-10 px-4 bg-gradient-to-b from-[#efd959] via-[#FF6347] to-[#FF4500]'>
        <div className='w-full max-w-2xl bg-opacity-80 rounded-xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300'>
          <h3 className='text-5xl font-extrabold text-center text-yellow-700 mb-6'>
            Gotta Catch 'Em All!
          </h3>
          <div className='flex flex-col sm:flex-row items-center justify-center gap-4'>
            <label
              htmlFor='pokemonName'
              className='text-lg font-semibold text-yellow-700'
            >
              Find Your Pokémon
            </label>
            <input
              type='text'
              value={searchText}
              id='pokemonName'
              placeholder='e.g. Pikachu or 25'
              onChange={(e) => setSearchText(e.target.value)}
              className='bg-[#FFF4E5] border-4 border-red-500 px-4 py-3 rounded-full text-lg w-full sm:w-80 shadow-lg focus:outline-none focus:ring-4 focus:ring-yellow-400 transition-all duration-200 transform hover:scale-105'
            />
          </div>
        </div>

        <h3 className='text-4xl font-extrabold text-white mt-16 mb-8 text-center'>
          Pokémon Collection
        </h3>
        <div className='grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-full max-w-6xl px-4'>
          {filteredPokeList.map((pokemon: Pokemon) => {
            return (
              <PokemonCard
                key={pokemon.id}
                name={pokemon.name}
                type={pokemon.type}
                image={pokemon.image}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}
