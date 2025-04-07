import Image from 'next/image';
import Link from 'next/link';

import { getPokemonList } from '@/lib/pokemonAPI';

import { PokemonList } from '@/app/components/PokemonList';

export default async function HomePage() {
  const pokemonList = await getPokemonList();

  return (
    <main className='min-h-screen bg-gradient-to-r from-[#efd959] via-[#FF6347] to-[#FF4500]'>
      <section className='flex flex-col sm:flex-row sm:flex-wrap items-center justify-center p-6'>
        <div className='mb-4 sm:mb-0'>
          <Image
            src='/favicon/pikachu.png'
            alt='Pikachu'
            width={100}
            height={100}
            className='mx-auto sm:mr-4'
          />
        </div>
        <h1 className='mt-4 text-4xl sm:text-6xl font-extrabold text-white text-shadow-xl animate-pulse text-center'>
          Welcome to the Pokémon World!
        </h1>
      </section>

      <PokemonList pokemonList={pokemonList} />

      <section className='text-center p-6'>
        <Link href='/trainer'>
          <button className='bg-[#FF6347] text-white p-6 rounded-full hover:bg-[#f39572] shadow-xl'>
            <span>Go to Trainer Page</span>
          </button>
        </Link>
      </section>

      <footer className='text-center p-4 text-white bg-[#FF6347]'>
        © {new Date().getFullYear()} Pokémon Trainer App
      </footer>
    </main>
  );
}
