import Link from 'next/link';

import { getPokemonByName } from '@/lib/pokemonAPI';

import { PokemonCard } from '@/app/components/PokemonCard';

import { Pokemon } from '@/types/pokemonTypes';

export default async function PokemonDetailsPage({
  params,
}: {
  params: { pokemon: string };
}) {
  const { pokemon } = params;

  const pokemonObj: Pokemon = await getPokemonByName(pokemon);

  return (
    <div className='flex flex-col items-center justify-center min-h-screen py-10 px-4 bg-gradient-to-b from-blue-300 via-blue-400 to-blue-500'>
      <div className='text-center mb-8 max-w-xl'>
        <h2 className='text-6xl font-extrabold text-orange-700 mb-4 drop-shadow-md'>
          Meet{' '}
          {pokemonObj.name.charAt(0).toUpperCase() + pokemonObj.name.slice(1)}!
        </h2>
      </div>

      <PokemonCard
        id={pokemonObj.id}
        name={pokemonObj.name}
        image={
          pokemonObj.sprites?.other?.['official-artwork']?.front_default ?? ''
        }
        weight={pokemonObj.weight}
        stats={pokemonObj.stats}
      />

      <div className='mt-8 flex gap-6'>
        <Link
          href='/'
          className='inline-block text-center text-lg font-medium text-white bg-orange-500 py-3 px-6 rounded-full transition-all hover:bg-orange-600 focus:outline-none'
        >
          Go to Pokémon List
        </Link>

        <Link
          href='/trainer'
          className='inline-block text-center text-lg font-medium text-white bg-orange-500 py-3 px-6 rounded-full transition-all hover:bg-orange-600 focus:outline-none'
        >
          Go to Trainer Page
        </Link>
      </div>
    </div>
  );
}
