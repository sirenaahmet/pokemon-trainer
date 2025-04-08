'use client';

import Link from 'next/link';

import { PokemonCard } from '@/app/components/PokemonCard';
import { useTrainer } from '@/app/context/TrainerContext';

export default function TrainerPage() {
  const { team } = useTrainer();

  return (
    <main className='min-h-screen bg-gradient-to-br from-yellow-100 via-orange-200 to-orange-300 py-10 px-6'>
      <section className='text-center mb-10'>
        <h1 className='text-5xl font-extrabold text-orange-700 drop-shadow-lg mb-4'>
          Your Pokémon Team
        </h1>
      </section>

      <section className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto'>
        {team.length > 0 ? (
          team.map((pokemon) => (
            <PokemonCard
              key={pokemon.id}
              id={pokemon.id}
              name={pokemon.name}
              type={pokemon.type}
              image={pokemon.image}
            />
          ))
        ) : (
          <div className='col-span-full text-center text-xl text-gray-800 font-semibold'>
            Oh no! You have no Pokémon on your team.
          </div>
        )}
      </section>

      <section className='text-center mt-12'>
        <Link
          href='/'
          className='inline-block bg-orange-500 hover:bg-orange-600 text-white text-lg font-semibold py-3 px-8 rounded-full shadow-md transition-all duration-300'
        >
          ← Back to Pokémon World
        </Link>
      </section>
    </main>
  );
}
