import Image from 'next/image';
import Link from 'next/link';

import { getPokemonList } from '@/lib/pokemonAPI';

import { PokemonList } from '@/app/components/PokemonList';

export default async function HomePage() {
  const pokemonList = await getPokemonList();

  return (
    <main className='min-h-screen bg-gradient-to-r from-[#efd959] via-[#FF6347] to-[#FF4500]'>
      <section className='flex flex-col sm:flex-row sm:flex-wrap items-center justify-center p-6 gap-4'>
        <div className='mb-4 sm:mb-0'>
          <Image
            src='/favicon/pikachu.png'
            alt='Pikachu'
            width={100}
            height={100}
            className='mx-auto sm:mr-4'
          />
        </div>
        <h1 className='text-4xl sm:text-6xl font-extrabold text-white text-shadow-xl animate-pulse text-center'>
          Welcome to the Pokémon World!
        </h1>
        <div>
          <Link
            href='/trainer'
            className='inline-block text-center text-lg font-medium text-white bg-blue-300 p-2 rounded-lg transition-all hover:bg-orange-600 focus:outline-none'
          >
            Go to Trainer Page
          </Link>
        </div>
      </section>

      <PokemonList pokemonList={pokemonList} />
    </main>
  );
}
