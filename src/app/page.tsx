import Link from 'next/link';

import { getPokemonList } from '@/lib/pokemonAPI';

import { PokemonList } from '@/app/components/PokemonList';

export default async function HomePage() {
  const pokemonList = await getPokemonList();
  return (
    <main className='min-h-screen bg-gradient-to-r from-[#FFB800] to-[#FF5A00]'>
      <section className='text-center p-6'>
        <h1 className='mt-4 text-4xl font-bold text-white'>Pokémon Page</h1>
      </section>

      <PokemonList pokemonList={pokemonList} />

      <section className='text-center p-6'>
        <Link href='/trainer'>
          <button className='bg-[#FF5A00] text-white p-4 rounded-lg hover:bg-[#FF8A3D] transition duration-200'>
            Go to Trainer Page
          </button>
        </Link>
      </section>

      <footer className='text-center p-4 text-white bg-[#FF5A00]'>
        © {new Date().getFullYear()} Pokémon Trainer App
      </footer>
    </main>
  );
}
