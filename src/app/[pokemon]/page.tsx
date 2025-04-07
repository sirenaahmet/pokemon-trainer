import Image from 'next/image';
import Link from 'next/link';

import { getPokemonByName } from '@/lib/pokemonAPI';

import { PokemonExtraFeatures } from '@/app/components/PokemonList';

export type PokeStats = {
  stat: {
    name: string;
    url: string;
  };
  base_stat: number;
  effort: number;
};

export type PokeType = {
  slot: number;
  type: {
    name: string;
    url: string;
  };
};

export default async function PokemonDetailsPage({
  params,
}: {
  params: { pokemon: string };
}) {
  const { pokemon } = params;

  const pokemonObj: PokemonExtraFeatures = await getPokemonByName(pokemon);

  return (
    <div className='flex flex-col items-center justify-center min-h-screen py-10 px-4 bg-gradient-to-b from-blue-50 to-blue-200'>
      <h1 className='text-5xl font-extrabold text-orange-600 mb-6'>
        {pokemon.charAt(0).toUpperCase() + pokemon.slice(1)}
      </h1>

      <div className='bg-white p-6 rounded-lg shadow-lg max-w-md w-full text-center'>
        <Image
          src={pokemonObj.sprites.front_default}
          alt='pokemon'
          width='200'
          height='200'
          className='mx-auto rounded-lg mb-4'
        />

        <h3 className='text-2xl text-gray-800 font-semibold mb-2'>
          Weight: {pokemonObj.weight} kg
        </h3>

        <div className='flex-col mb-4'>
          {pokemonObj.stats.map((statobj: PokeStats) => {
            const statName = statobj.stat.name;
            const statValue = statobj.base_stat;

            return (
              <div key={statName} className='flex flex-col items-center'>
                <p className='text-lg font-medium text-gray-700 capitalize'>
                  {statName}
                </p>
                <p className='text-xl font-semibold text-gray-900'>
                  {statValue}
                </p>
              </div>
            );
          })}
        </div>

        <div className='mt-6'>
          <Link
            href='/'
            className='inline-block text-center text-lg font-medium text-white bg-orange-500 py-2 px-6 rounded-full transition-all hover:bg-orange-600 focus:outline-none'
          >
            Back to Pokémon List
          </Link>
        </div>
      </div>
    </div>
  );
}
