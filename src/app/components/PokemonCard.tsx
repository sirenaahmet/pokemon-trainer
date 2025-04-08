'use client';
import Image from 'next/image';
import Link from 'next/link';

import { Pokemon } from '@/app/components/PokemonList';
import { useTrainer } from '@/app/context/TrainerContext';

export function PokemonCard({ id, name, type, image }: Pokemon) {
  const { team, addPokemonToTeam, removePokemonFromTeam } = useTrainer();
  const inTeam = team.some((p) => p.name === name);

  return (
    <div className='relative bg-gradient-to-br from-[#A7C7E7] via-[#B0D9F3] to-[#C1E4F4] border-4 border-[#A7C7E7] hover:border-[#B0D9F3] hover:shadow-xl rounded-3xl px-6 py-5 text-center'>
      <button
        onClick={(e) => {
          e.preventDefault();
          inTeam
            ? removePokemonFromTeam({ id, name, type, image })
            : addPokemonToTeam({ id, name, type, image });
        }}
        className='absolute top-2 right-2 text-white bg-red-400 p-2 rounded shadow-md hover:bg-red-600'
      >
        {inTeam ? '-' : '+'}
      </button>

      <Link href={`/${name}`}>
        <h2 className='text-3xl font-extrabold capitalize text-[#4A90E2] drop-shadow-md mb-4'>
          {name}
        </h2>
        <div className='relative w-40 h-40 mx-auto mt-4 mb-4 transform hover:scale-125 transition-all duration-300 ease-in-out'>
          <Image
            src={image}
            width={200}
            height={200}
            alt={name}
            className='relative z-10 object-contain'
          />
        </div>

        <div className='flex gap-2 justify-center flex-wrap'>
          {type.map((typeObj) => (
            <div
              key={typeObj.slot}
              className='bg-[#E3F2FD] px-4 py-2 rounded-full text-sm font-semibold text-[#4A90E2] shadow-md border border-[#A7C7E7]'
            >
              {typeObj.type.name}
            </div>
          ))}
        </div>
      </Link>
    </div>
  );
}
